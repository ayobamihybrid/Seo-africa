import Hero from "./components/Hero";
import AboutSeo from "./components/AboutSeo";
import ProofOfCommitment from "./components/ProofOfCommitment";
import PartnersShowcase from "./components/Partners";
import JoinTalentNetwork from "./components/JoinTalentNetwork";
import Testimonials from "./components/Testimonials";
import GetInvolved from "./components/GetInvolved";
import BlogStories from "./components/BlogStories";
import Donate from "./components/Donate";
import Footer from "./components/Footer";

import {
  getHomePageData,
  getHomePageRawData,
  getTestimonials,
  getPartners,
  getFeaturedBlogPost,
  getBlogPosts,
} from "./lib/strapi";
import { Suspense } from "react";
import { BlogPost } from "./types/strapi";
import { AlertTriangle } from "lucide-react";

function ServerLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700">Loading...</h2>
      </div>
    </div>
  );
}

function ServerErrorFallback({ error }: { error: Error | unknown }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="text-center max-w-md mx-auto p-6">
        <div className="text-red-600 mb-4">
          <AlertTriangle className="w-16 h-16 mx-auto" />
        </div>
        <h2 className="text-2xl font-bold text-red-800 mb-4">
          Unable to Load Content
        </h2>
        <p className="text-red-600 mb-4">
          We encountered an error while fetching the page content from our
          server.
        </p>
        <p className="text-gray-600 text-sm">
          Please refresh the page to try again.
        </p>
        {process.env.NODE_ENV === "development" && (
          <div className="mt-6 text-left">
            <p className="text-red-700 font-medium mb-2">
              Error Details (Development):
            </p>
            <div className="p-3 bg-red-100 rounded text-red-800 text-sm overflow-auto font-mono">
              {error instanceof Error
                ? error.message
                : "Unknown error occurred"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

async function ServerContent() {
  try {
    const homePageResponse = await getHomePageData();
    const homePageData = homePageResponse.data.attributes;

    const rawHomePageData = await getHomePageRawData();

    const aboutSectionData = {
      pill_text: rawHomePageData.about_section.pill_text,
      heading: rawHomePageData.about_section.heading,
      description: rawHomePageData.about_section.description,
      further_description: rawHomePageData.about_section.further_description,
      video_link: rawHomePageData.about_section.video_link,
      video: rawHomePageData.about_section.video,
      info_cards: rawHomePageData.about_section.info_cards,
    };

    const statisticsData = rawHomePageData.statistics_section;
    const partnersData = rawHomePageData.partners_section;
    const talentData = rawHomePageData.talent_section;
    const testimonialsData = rawHomePageData.testimonials_section;
    const cardBlockData = rawHomePageData.card_block_section;
    const blogData = rawHomePageData.blog_section;
    const donateData = rawHomePageData.donate_section;

    // For actual testimonials from Strapi
    let strapiTestimonials = null;
    try {
      const testimonialsResponse = await getTestimonials();
      strapiTestimonials = testimonialsResponse.data;
      console.log("✅ Testimonials fetched successfully", strapiTestimonials);
    } catch (error) {
      console.warn(
        "⚠️ Failed to fetch testimonials, using fallback data:",
        error
      );
    }

    // For actual partners from Strapi
    let strapiPartners = null;
    try {
      const partnersResponse = await getPartners();
      strapiPartners = partnersResponse.data;
      console.log("✅ Partners fetched successfully", strapiPartners);
    } catch (error) {
      console.warn("⚠️ Failed to fetch partners, using fallback data:", error);
    }

    //  blog posts from Strapi
    let featuredBlogPost = null;
    let blogPosts: BlogPost[] | undefined = [];
    try {
      const featuredResponse = await getFeaturedBlogPost();
      featuredBlogPost = featuredResponse?.attributes;

      const postsResponse = await getBlogPosts(1, 5);
      blogPosts = postsResponse.data.map((post: { attributes: any; }) => post.attributes);

      console.log("✅ Blog posts fetched successfully");
    } catch (error) {
      console.warn("⚠️ Failed to fetch blog posts:", error);
    }

    console.log("✅ Server-side fetch successful");

    return (
      <div>
        <Hero homePageData={homePageData} />
        <AboutSeo aboutData={aboutSectionData} />
        <ProofOfCommitment statisticsData={statisticsData} />
        <PartnersShowcase
          partnersData={partnersData}
          strapiPartners={strapiPartners}
        />
        <JoinTalentNetwork talentData={talentData} />
        <Testimonials
          testimonialsData={testimonialsData}
          strapiTestimonials={strapiTestimonials}
        />
        <GetInvolved cardBlockData={cardBlockData} />
        <BlogStories
          blogData={blogData}
          featuredPost={featuredBlogPost}
          posts={blogPosts}
        />
        <Donate donateData={donateData} />

        <Footer />
      </div>
    );
  } catch (error) {
    console.error("❌ Server-side fetch failed:", error);
    return <ServerErrorFallback error={error} />;
  }
}

export default function Home() {
  return (
    <Suspense fallback={<ServerLoading />}>
      <ServerContent />
    </Suspense>
  );
}
