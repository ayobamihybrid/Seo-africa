import {
  BlogPost,
  HomePageRaw,
  HomePageTransformed,
  StrapiEntity,
  StrapiResponse,
} from "../types/strapi";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

function isServer() {
  return typeof window === "undefined";
}

export function transformHomePageData(
  apiData: HomePageRaw
): HomePageTransformed {
  return {
    heroTitle: apiData.hero.heading,
    heroDescription: apiData.hero.description,
    heroButtonText: apiData.hero.primary_cta_text,
    heroSecondaryButtonText: apiData.hero.secondary_cta_text,
    heroBackgroundImage: apiData.hero.cover_image
      ? {
          data: {
            attributes: {
              url: apiData.hero.cover_image.url,
              alternativeText: apiData.hero.cover_image.alternativeText || "",
            },
          },
        }
      : undefined,
    aboutTitle: apiData.about_section.heading,
    aboutDescription: apiData.about_section.description,
    featuredStats: {
      studentsCount: apiData.statistics_section.top_cards[0]?.stat || "0",
      countriesCount: apiData.statistics_section.top_cards[1]?.stat || "0",
      retentionRate: apiData.statistics_section.middle_cards[0]?.stat || "0",
      partnersCount: apiData.statistics_section.middle_cards[1]?.stat || "0",
      alumniCount: apiData.statistics_section.middle_cards[2]?.stat || "0",
      projectsCount: apiData.statistics_section.bottom_cards[0]?.stat || "0",
      completionRate: apiData.statistics_section.bottom_cards[1]?.stat || "0",
    },
  };
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }
  return "An unknown error occurred";
}

export async function fetchFromStrapi<T>(
  endpoint: string,
  options: {
    populate?: string[];
    pagination?: {
      page?: number;
      pageSize?: number;
      start?: number;
      limit?: number;
    };
    filters?: Record<string, any>;
  } = {}
): Promise<StrapiResponse<StrapiEntity<T>[]>> {
  const { populate, pagination, filters } = options;

  const params = new URLSearchParams();

  if (populate) {
    populate.forEach((field) => params.append("populate", field));
  }

  if (pagination) {
    if (pagination.page) {
      params.append("pagination[page]", pagination.page.toString());
      params.append(
        "pagination[pageSize]",
        (pagination.pageSize || 10).toString()
      );
    } else if (pagination.start !== undefined) {
      params.append("pagination[start]", pagination.start.toString());
      params.append("pagination[limit]", (pagination.limit || 10).toString());
    }
  }

  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      params.append(`filters[${key}]`, value);
    });
  }

  const url = `${STRAPI_URL}${endpoint}?${params.toString()}`;

  try {
    console.log(`Fetching from Strapi: ${url}`);

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(`Successfully fetchedd from ${endpoint}`, data);
    return data;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error(`❌ Strapi fetch error for ${endpoint}:`, errorMessage);
    throw new Error(`Failed to fetch from ${endpoint}: ${errorMessage}`);
  }
}

export async function fetchSingleFromStrapi<T>(
  endpoint: string,
  options: {
    populate?: string[];
    pLevel?: number;
  } = {}
): Promise<{ data: StrapiEntity<T> }> {
  const { populate = [], pLevel } = options;

  const params = new URLSearchParams();

  populate.forEach((field) => params.append("populate", field));

  if (pLevel) {
    params.append("pLevel", pLevel.toString());
  }

  const url = `${STRAPI_URL}${endpoint}?${params.toString()}`;

  try {
    console.log(`🔍 Fetching single from Strapi: ${url}`);
    console.log(`📍 Environment: ${isServer() ? "Server" : "Client"}`);

    const timeout = isServer() ? 15000 : 10000;

    const response = await fetch(url, {
      signal: AbortSignal.timeout(timeout),
      headers: {
        "Content-Type": "application/json",
        ...(isServer() && { "User-Agent": "NextJS-Server" }),
      },
      ...(isServer() && { cache: "no-store" }),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(`✅ Successfully fetched single from ${endpoint}`);
    return data;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error(
      `❌ Strapi single fetch error for ${endpoint}:`,
      errorMessage
    );

    if (isServer() && errorMessage.includes("timeout")) {
      throw new Error(
        `Server-side fetch timeout for ${endpoint}. This might be due to network constraints on the server. The Strapi server is accessible from the browser but not from the Next.js server.`
      );
    }

    throw new Error(`Failed to fetch single from ${endpoint}: ${errorMessage}`);
  }
}

export async function getFeaturedBlogPost() {
  try {
    const response = await fetchFromStrapi<BlogPost>("/articles", {
      populate: ["featuredImage"],
      filters: { featured: true },
      pagination: { limit: 1 },
    });

    return response.data[0] || null;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Failed to fetch featured blog post:", errorMessage);
    throw new Error(
      `Unable to fetch featured blog post from Strapi: ${errorMessage}`
    );
  }
}

export async function getTestimonials() {
  try {
    const url = `${STRAPI_URL}/testimonials?pLevel=4`;
    console.log("Fetching testimonials from:", url);

    const response = await fetchWithRetry(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "NextJS-Server",
        },
      },
      3,
      1000
    );

    const apiResponse = await response.json();
    console.log("✅ Testimonials API response received");

    if (!apiResponse.data) {
      throw new Error("No testimonials data received from Strapi");
    }

    return apiResponse;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Failed to fetch testimonials:", errorMessage);
    throw new Error(
      `Unable to fetch testimonials from Strapi: ${errorMessage}`
    );
  }
}

export async function getPartners() {
  try {
    const url = `${STRAPI_URL}/partners?pLevel=4&pagination[pageSize]=40`;
    console.log("Fetching partners from:", url);

    const response = await fetchWithRetry(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "NextJS-Server",
        },
      },
      3,
      1000
    );

    const apiResponse = await response.json();
    console.log("✅ Partners API response received");

    if (!apiResponse.data) {
      throw new Error("No partners data received from Strapi");
    }

    return apiResponse;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Failed to fetch partners:", errorMessage);
    throw new Error(`Unable to fetch partners from Strapi: ${errorMessage}`);
  }
}

async function fetchWithRetry(
  url: string,
  options: RequestInit = {},
  maxRetries: number = 3,
  retryDelay: number = 1000
): Promise<Response> {
  let lastError: Error;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`🔄 Attempt ${attempt}/${maxRetries} for ${url}`);

      const response = await fetch(url, {
        ...options,
        signal: AbortSignal.timeout(attempt * 5000),
      });

      if (response.ok) {
        console.log(`✅ Success on attempt ${attempt}`);
        return response;
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      console.warn(`❌ Attempt ${attempt} failed:`, lastError.message);

      if (
        lastError.message.includes("404") ||
        lastError.message.includes("403")
      ) {
        break;
      }

      if (attempt < maxRetries) {
        console.log(`⏳ Waiting ${retryDelay}ms before retry...`);
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
        retryDelay *= 1.5;
      }
    }
  }

  throw lastError!;
}

export async function getHomePageData() {
  try {
    const rawData = await getHomePageRawData();
    const transformedData = transformHomePageData(rawData);

    return {
      data: {
        attributes: transformedData,
      },
    };
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("❌ Failed to get transformed homepage data:", errorMessage);
    throw new Error(
      `Unable to fetch homepage data from Strapi: ${errorMessage}`
    );
  }
}

export async function getHomePageRawData() {
  try {
    const url = `${STRAPI_URL}/home-page?pLevel=4`;
    console.log("Fetching raw data from:", url);

    const response = await fetchWithRetry(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "NextJS-Server",
        },
      },
      3,
      1000
    );

    const apiResponse = await response.json();
    console.log("✅ Raw API response received");

    if (!apiResponse.data) {
      throw new Error("No data received from Strapi");
    }

    return apiResponse.data;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("❌ All retry attempts failed:", errorMessage);
    throw new Error(
      `Unable to fetch homepage data from Strapi after retries: ${errorMessage}`
    );
  }
}

export function getStrapiImageUrl(imageData: any): string {
  if (imageData?.data?.attributes?.url) {
    const url = imageData.data.attributes.url;
    if (url.startsWith("http")) return url;
    return `${STRAPI_URL}${url}`;
  }

  if (imageData?.url) {
    const url = imageData.url;
    if (url.startsWith("http")) return url;
    return `${STRAPI_URL}${url}`;
  }

  if (typeof imageData === "string") {
    if (imageData.startsWith("http")) return imageData;
    return `${STRAPI_URL}${imageData}`;
  }

  console.warn("⚠️ No image data provided or unrecognized format:", imageData);
  return "";
}

export async function getAboutPageData() {
  try {
    const url = `${STRAPI_URL}/about-us-page?pLevel=4`;
    console.log("Fetching about page data from:", url);

    const response = await fetchWithRetry(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "NextJS-Server",
        },
      },
      3,
      1000
    );

    const apiResponse = await response.json();
    console.log("✅ About page API response received");

    if (!apiResponse.data) {
      throw new Error("No about page data received from Strapi");
    }

    return apiResponse;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Failed to fetch about page data:", errorMessage);
    throw new Error(
      `Unable to fetch about page data from Strapi: ${errorMessage}`
    );
  }
}

export async function getTeamPageData() {
  try {
    const url = `${STRAPI_URL}/team-page?pLevel=4`;
    console.log("Fetching team page data from:", url);

    const response = await fetchWithRetry(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "NextJS-Server",
        },
      },
      3,
      1000
    );

    const apiResponse = await response.json();
    console.log("✅ Team page API response received");

    if (!apiResponse.data) {
      throw new Error("No team page data received from Strapi");
    }

    return apiResponse;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Failed to fetch team page data:", errorMessage);
    throw new Error(
      `Unable to fetch team page data from Strapi: ${errorMessage}`
    );
  }
}

export async function getFAQPageData() {
  try {
    const url = `${STRAPI_URL}/faq-page?pLevel=4`;
    console.log("Fetching FAQ page data from:", url);

    const response = await fetchWithRetry(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "NextJS-Server",
        },
      },
      3,
      1000
    );

    const apiResponse = await response.json();
    console.log("✅ FAQ page API response received");

    if (!apiResponse.data) {
      throw new Error("No FAQ page data received from Strapi");
    }

    return apiResponse;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Failed to fetch FAQ page data:", errorMessage);
    throw new Error(
      `Unable to fetch FAQ page data from Strapi: ${errorMessage}`
    );
  }
}

export async function getFAQItems(page = 1, pageSize = 25) {
  try {
    const url = `${STRAPI_URL}/faqs?pLevel=4&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
    console.log("Fetching FAQ items from:", url);

    const response = await fetchWithRetry(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "NextJS-Server",
        },
      },
      3,
      1000
    );

    const apiResponse = await response.json();
    console.log("✅ FAQ items API response received");

    if (!apiResponse.data) {
      throw new Error("No FAQ items data received from Strapi");
    }

    return apiResponse;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Failed to fetch FAQ items:", errorMessage);
    throw new Error(`Unable to fetch FAQ items from Strapi: ${errorMessage}`);
  }
}

export async function getPressItems(page = 1, pageSize = 25) {
  try {
    const url = `${STRAPI_URL}/presses?pLevel=4&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
    console.log("Fetching press items from:", url);

    const response = await fetchWithRetry(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "NextJS-Server",
        },
      },
      3,
      1000
    );

    const apiResponse = await response.json();
    console.log("✅ Press items API response received");

    if (!apiResponse.data) {
      throw new Error("No press items data received from Strapi");
    }

    return apiResponse;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Failed to fetch press items:", errorMessage);
    throw new Error(`Unable to fetch press items from Strapi: ${errorMessage}`);
  }
}

export async function getContactUsPageData() {
  try {
    const url = `${STRAPI_URL}/contact-us-page?pLevel=4`;
    console.log("Fetching contact us page data from:", url);

    const response = await fetchWithRetry(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "NextJS-Server",
        },
      },
      3,
      1000
    );

    const apiResponse = await response.json();
    console.log("✅ Contact us page API response received");

    if (!apiResponse.data) {
      throw new Error("No contact us page data received from Strapi");
    }

    return apiResponse;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Failed to fetch contact us page data:", errorMessage);
    throw new Error(
      `Unable to fetch contact us page data from Strapi: ${errorMessage}`
    );
  }
}

export async function getProgrammes(page = 1, pageSize = 25) {
  try {
    const url = `${STRAPI_URL}/programmes?pLevel=4&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
    console.log("Fetching programmes from:", url);

    const response = await fetchWithRetry(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "NextJS-Server",
        },
      },
      3,
      1000
    );

    const apiResponse = await response.json();
    console.log("✅ Programmes API response received");

    if (!apiResponse.data) {
      throw new Error("No programmes data received from Strapi");
    }

    return apiResponse;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Failed to fetch programmes:", errorMessage);
    throw new Error(`Unable to fetch programmes from Strapi: ${errorMessage}`);
  }
}

export async function getProgrammesPageData() {
  try {
    const url = `${STRAPI_URL}/programmes-page?pLevel=4`;
    console.log("Fetching programmes page data from:", url);

    const response = await fetchWithRetry(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "NextJS-Server",
        },
      },
      3,
      1000
    );

    const apiResponse = await response.json();
    console.log("✅ Programmes page API response received");

    if (!apiResponse.data) {
      throw new Error("No programmes page data received from Strapi");
    }

    return apiResponse;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Failed to fetch programmes page data:", errorMessage);
    throw new Error(
      `Unable to fetch programmes page data from Strapi: ${errorMessage}`
    );
  }
}

export async function getProgrammeBySlug(slug: string) {
  try {
    const url = `${STRAPI_URL}/programmes?pLevel=4&filters[slug]=${slug}`;
    console.log("Fetching programme by slug from:", url);

    const response = await fetchWithRetry(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "NextJS-Server",
        },
      },
      3,
      1000
    );

    const apiResponse = await response.json();
    console.log("✅ Programme by slug API response received", apiResponse);

    if (!apiResponse.data || apiResponse.data.length === 0) {
      throw new Error("No programme found with the provided slug");
    }

    return apiResponse.data[0];
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Failed to fetch programme by slug:", errorMessage);
    throw new Error(
      `Unable to fetch programme by slug from Strapi: ${errorMessage}`
    );
  }
}

export async function getImpactPageData() {
  try {
    const url = `${STRAPI_URL}/impact-page?pLevel=4`;
    console.log("Fetching impact page data from:", url);

    const response = await fetchWithRetry(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "NextJS-Server",
        },
      },
      3,
      1000
    );

    const apiResponse = await response.json();
    console.log("✅ Impact page API response received");

    if (!apiResponse.data) {
      throw new Error("No impact page data received from Strapi");
    }

    return apiResponse;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Failed to fetch impact page data:", errorMessage);
    throw new Error(
      `Unable to fetch impact page data from Strapi: ${errorMessage}`
    );
  }
}

export async function getCountriesOfOperations() {
  try {
    const url = `${STRAPI_URL}/country-of-operations?pLevel=4`;
    console.log("Fetching countries of operations from:", url);

    const response = await fetchWithRetry(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "NextJS-Server",
        },
      },
      3,
      1000
    );

    const apiResponse = await response.json();
    console.log("Countries of operations API response received");

    if (!apiResponse.data) {
      throw new Error("No countries of operations data received from Strapi");
    }

    return apiResponse;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Failed to fetch countries of operations:", errorMessage);
    throw new Error(
      `Unable to fetch countries of operations from Strapi: ${errorMessage}`
    );
  }
}

export async function getTeamMembers(page = 1, pageSize = 25) {
  try {
    const url = `${STRAPI_URL}/team-members?pLevel=4&sort=sortOrder&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
    console.log("Fetching team members from:", url);

    const response = await fetchWithRetry(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "NextJS-Server",
        },
      },
      3,
      1000
    );

    const apiResponse = await response.json();
    console.log("✅ Team members API response received");

    if (!apiResponse.data) {
      throw new Error("No team members data received from Strapi");
    }

    return apiResponse;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Failed to fetch team members:", errorMessage);
    throw new Error(
      `Unable to fetch team members from Strapi: ${errorMessage}`
    );
  }
}

export async function getGetInvolvedPageData() {
  try {
    const url = `${STRAPI_URL}/get-involved-page?pLevel=4`;
    console.log("Fetching get involved page data from:", url);

    const response = await fetchWithRetry(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "NextJS-Server",
        },
      },
      3,
      1000
    );

    const apiResponse = await response.json();
    console.log("✅ Get involved page API response received");

    if (!apiResponse.data) {
      throw new Error("No get involved page data received from Strapi");
    }

    return apiResponse;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Failed to fetch get involved page data:", errorMessage);
    throw new Error(
      `Unable to fetch get involved page data from Strapi: ${errorMessage}`
    );
  }
}

export async function getSeoCaresPageData() {
  try {
    const url = `${STRAPI_URL}/seo-cares-page?pLevel=4`;
    console.log("Fetching SEO Cares page data from:", url);

    const response = await fetchWithRetry(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "NextJS-Server",
        },
      },
      3,
      1000
    );

    const apiResponse = await response.json();
    console.log("SEO Cares page API response received");

    if (!apiResponse.data) {
      throw new Error("No SEO Cares page data received from Strapi");
    }

    return apiResponse;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Failed to fetch SEO Cares page data:", errorMessage);
    throw new Error(
      `Unable to fetch SEO Cares page data from Strapi: ${errorMessage}`
    );
  }
}

export async function getMediaPageData() {
  try {
    const url = `${STRAPI_URL}/media-page?pLevel=4`;
    console.log("Fetching Media page data from:", url);

    const response = await fetchWithRetry(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "NextJS-Server",
        },
      },
      3,
      1000
    );

    const apiResponse = await response.json();
    console.log("✅ Media page API response received");

    if (!apiResponse.data) {
      throw new Error("No Media page data received from Strapi");
    }

    return apiResponse;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Failed to fetch Media page data:", errorMessage);
    throw new Error(
      `Unable to fetch Media page data from Strapi: ${errorMessage}`
    );
  }
}

export async function getDonatePageData() {
  try {
    const url = `${STRAPI_URL}/donate-page?pLevel=4`;
    console.log("Fetching Donate page data from:", url);

    const response = await fetchWithRetry(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "NextJS-Server",
        },
      },
      3,
      1000
    );

    const apiResponse = await response.json();
    console.log("✅ Donate page API response received");

    if (!apiResponse.data) {
      throw new Error("No Donate page data received from Strapi");
    }

    return apiResponse;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Failed to fetch Donate page data:", errorMessage);
    throw new Error(
      `Unable to fetch Donate page data from Strapi: ${errorMessage}`
    );
  }
}

export async function getCareerPageData() {
  try {
    const url = `${STRAPI_URL}/career-page?pLevel=4`;
    console.log("Fetching Career page data from:", url);

    const response = await fetchWithRetry(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "NextJS-Server",
        },
      },
      3,
      1000
    );

    const apiResponse = await response.json();
    console.log("✅ Career page API response received");

    if (!apiResponse.data) {
      throw new Error("No Career page data received from Strapi");
    }

    return apiResponse;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Failed to fetch Career page data:", errorMessage);
    throw new Error(
      `Unable to fetch Career page data from Strapi: ${errorMessage}`
    );
  }
}

export async function getJobs(page = 1, pageSize = 25) {
  try {
    const url = `${STRAPI_URL}/jobs?pLevel=4&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
    console.log("Fetching jobs from:", url);

    const response = await fetchWithRetry(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "NextJS-Server",
        },
      },
      3,
      1000
    );

    const apiResponse = await response.json();
    console.log("✅ Jobs API response received");

    if (!apiResponse.data) {
      throw new Error("No jobs data received from Strapi");
    }

    return apiResponse;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Failed to fetch jobs:", errorMessage);
    throw new Error(`Unable to fetch jobs from Strapi: ${errorMessage}`);
  }
}

export async function getJobCompanies(page = 1, pageSize = 25) {
  try {
    const url = `${STRAPI_URL}/job-companies?pLevel=4&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
    console.log("Fetching job companies from:", url);

    const response = await fetchWithRetry(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "NextJS-Server",
        },
      },
      3,
      1000
    );

    const apiResponse = await response.json();
    console.log("✅ Job companies API response received");

    if (!apiResponse.data) {
      throw new Error("No job companies data received from Strapi");
    }

    return apiResponse;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Failed to fetch job companies:", errorMessage);
    throw new Error(
      `Unable to fetch job companies from Strapi: ${errorMessage}`
    );
  }
}

export async function getBlogPageData() {
  try {
    const url = `${STRAPI_URL}/blog-page?pLevel=3`;
    console.log("Fetching blog page data from:", url);

    const response = await fetchWithRetry(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "NextJS-Server",
        },
      },
      3,
      1000
    );

    const apiResponse = await response.json();
    console.log("✅ Blog page API response received");

    if (!apiResponse.data) {
      throw new Error("No blog page data received from Strapi");
    }

    return apiResponse;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Failed to fetch blog page data:", errorMessage);
    throw new Error(
      `Unable to fetch blog page data from Strapi: ${errorMessage}`
    );
  }
}

export async function getBlogPosts(page = 1, pageSize = 25) {
  try {
    const url = `${STRAPI_URL}/blog-posts?pLevel=3&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
    console.log("Fetching blog posts from:", url);

    const response = await fetchWithRetry(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "NextJS-Server",
        },
      },
      3,
      1000
    );

    const apiResponse = await response.json();
    console.log("✅ Blog posts API response received");

    if (!apiResponse.data) {
      throw new Error("No blog posts data received from Strapi");
    }

    return apiResponse;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Failed to fetch blog posts:", errorMessage);
    throw new Error(`Unable to fetch blog posts from Strapi: ${errorMessage}`);
  }
}

export async function getBlogPostCategories() {
  try {
    const url = `${STRAPI_URL}/blog-post-categories`;
    console.log("Fetching blog post categories from:", url);

    const response = await fetchWithRetry(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "NextJS-Server",
        },
      },
      3,
      1000
    );

    const apiResponse = await response.json();
    console.log("✅ Blog post categories API response received");

    if (!apiResponse.data) {
      throw new Error("No blog post categories data received from Strapi");
    }

    return apiResponse;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Failed to fetch blog post categories:", errorMessage);
    throw new Error(
      `Unable to fetch blog post categories from Strapi: ${errorMessage}`
    );
  }
}

export async function getBlogPostBySlug(slug: string) {
  try {
    const url = `${STRAPI_URL}/blog-posts?pLevel=3&filters[slug]=${slug}`;
    console.log("Fetching blog post by slug from:", url);

    const response = await fetchWithRetry(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "NextJS-Server",
        },
      },
      3,
      1000
    );

    const apiResponse = await response.json();
    console.log("✅ Blog post by slug API response received");

    if (!apiResponse.data || apiResponse.data.length === 0) {
      throw new Error("No blog post found with the provided slug");
    }

    return apiResponse.data[0];
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error("Failed to fetch blog post by slug:", errorMessage);
    throw new Error(
      `Unable to fetch blog post by slug from Strapi: ${errorMessage}`
    );
  }
}
