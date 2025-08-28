import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
import Donate from "../components/Donate";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "../components/Faq";
import { ArrowRight } from "lucide-react";
import {
  getFAQPageData,
  getFAQItems,
  getStrapiImageUrl,
  getPressItems,
} from "../lib/strapi";
import FindOpportunities from "../components/FindOpportunities";

interface FAQPageData {
  hero_section: {
    title: string;
    description: string;
    accent_text: string;
  };
  talent_section: {
    title: string;
    cta_text: string;
    body: string;
    cover_image: any;
  };
  press_section: {
    title: string;
  };
  explore_section: {
    title: string;
    cards: Array<{
      id: number;
      title: string;
      content: string;
      cta_text: string;
    }>;
  };
  donate_section: {
    title: string;
    description: string;
    cta_text: string;
  };
}

interface PressItem {
  id: number;
  documentId: string;
  post_date: string;
  content: string;
  cta_link: string;
  cta_text: string;
  news_logo: {
    id: number;
    name: string;
    alternativeText?: string;
    width: number;
    height: number;
    url: string;
  };
}

interface FAQPageContentProps {
  faqPageData: FAQPageData | null;
  faqItems: any[];
  donateData: any;
  pressItems: PressItem[];
}

const FAQPageContent = ({
  faqPageData,
  faqItems,
  donateData,
  pressItems,
}: FAQPageContentProps) => {
  const fallbackHeroData = {
    accent_text: "FAQs",
    title: "SEO Africa's Questions Answered",
    description:
      "Have questions about SEO Africa? We've done our best to anticipate your questions below. Our team is happy to talk to you anytime if you have more enquiries. Just contact us",
  };

  const fallbackExploreData = {
    title: "Explore more insights and opportunities on SEO Africa.",
    cards: [
      {
        id: 1,
        title: "Programmes",
        content: "Explore our suite of high-impact, future-proof programmes.",
        cta_text: "Learn More",
      },
      {
        id: 2,
        title: "Careers",
        content: "Find opportunities to work within our partner companies.",
        cta_text: "Learn More",
      },
      {
        id: 3,
        title: "Blog",
        content:
          "Gain insights into the corporate world and the future of work.",
        cta_text: "Learn More",
      },
    ],
  };

  const fallbackPressData = [
    {
      id: 1,
      documentId: "fallback-1",
      post_date: "2023-03-24",
      content:
        "SEO Africa's impact is both measurable and deeply human. Behind every statistic is a young African leader whose life and community has been transformed",
      cta_link: "#",
      cta_text: "Read more",
      news_logo: {
        id: 1,
        name: "New York Times",
        alternativeText: "The New York Times",
        width: 200,
        height: 40,
        url: "/Newyorktimes.png",
      },
    },
    {
      id: 2,
      documentId: "fallback-2",
      post_date: "2023-03-24",
      content:
        "SEO Africa's impact is both measurable and deeply human. Behind every statistic is a young African leader whose life and community has been transformed",
      cta_link: "#",
      cta_text: "Read more",
      news_logo: {
        id: 2,
        name: "Techpoint",
        alternativeText: "Techpoint",
        width: 150,
        height: 40,
        url: "/Techpoint.png",
      },
    },
    {
      id: 3,
      documentId: "fallback-3",
      post_date: "2023-03-24",
      content:
        "SEO Africa's impact is both measurable and deeply human. Behind every statistic is a young African leader whose life and community has been transformed",
      cta_link: "#",
      cta_text: "Read more",
      news_logo: {
        id: 3,
        name: "New York Times",
        alternativeText: "The New York Times",
        width: 200,
        height: 40,
        url: "/Newyorktimes.png",
      },
    },
  ];

  const heroData = faqPageData?.hero_section || fallbackHeroData;
  const talentData = faqPageData?.talent_section;
  const pressData = faqPageData?.press_section;
  const exploreData = faqPageData?.explore_section || fallbackExploreData;

  const displayPressItems =
    pressItems.length > 0 ? pressItems : fallbackPressData;

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="bg-[#131B3E]">
      <Navbar />

      <section className="bg-[#131B3E] px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24 pb-32 sm:pb-48 lg:pb-64">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16 lg:mb-24">
            <div className="mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] bg-clip-text text-transparent text-lg sm:text-xl font-bold">
                {heroData.accent_text}
              </span>
            </div>

            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-4 sm:mb-5 lg:mb-7 max-w-5xl">
              {heroData.title}
            </h1>

            <div className="max-w-xl space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed">
                {heroData.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <FAQSection faqPage faqItems={faqItems} />
      </section>

      <section className="bg-white ">
        <FindOpportunities />
      </section>

      <section>
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="mb-16">
              <h2 className="text-gray-900 text-3xl lg:text-4xl xl:text-5xl font-light">
                {pressData?.title || "They talk about us"}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {displayPressItems.slice(0, 3).map((item) => (
                <div key={item.id} className="bg-gray-50 p-8 rounded-lg">
                  <div className="mb-6">
                    <Image
                      src={
                        item.news_logo.url.startsWith("http")
                          ? item.news_logo.url
                          : item.news_logo.url
                      }
                      alt={
                        item.news_logo.alternativeText || item.news_logo.name
                      }
                      width={item.news_logo.width}
                      height={item.news_logo.height}
                      className="object-contain"
                    />
                    <p className="text-gray-600 text-sm mt-2">
                      {formatDate(item.post_date)}
                    </p>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-6">
                    {item.content}
                  </p>

                  <a
                    href={item.cta_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-blue-600 font-medium inline-flex items-center gap-2 transition-colors duration-200 underline"
                  >
                    {item.cta_text}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>

            <div className="bg-[#8499FF14] py-16 px-8 lg:px-12 rounded-lg">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-2 items-center">
                <h3 className="text-gray-900 text-2xl lg:text-3xl xl:text-4xl font-light leading-tight mb-8">
                  {exploreData.title}
                </h3>

                <div className="grid md:grid-cols-3 gap-8">
                  {exploreData.cards.map((item, index) => {
                    const iconMap: { [key: string]: string } = {
                      Programmes: "/insight1.svg",
                      Careers: "/insight2.svg",
                      Blog: "/insight3.svg",
                    };

                    return (
                      <div key={item.id} className="px-2 border-l text-center">
                        <div className="relative w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <Image
                            src={iconMap[item.title] || "/insight1.svg"}
                            alt=""
                            fill
                          />
                        </div>
                        <h4 className="text-gray-900 text-lg font-semibold mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          {item.content}
                        </p>
                        <Link
                          href={`/${item.title.toLowerCase()}`}
                          className="text-gray-900 hover:text-blue-600 font-medium text-sm underline transition-colors duration-200"
                        >
                          {item.cta_text}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {donateData ? (
        <Donate donateData={donateData} />
      ) : (
        faqPageData?.donate_section && (
          <section className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {faqPageData.donate_section.title}
              </h2>
              <p className="text-white text-lg mb-8 max-w-3xl mx-auto opacity-90">
                {faqPageData.donate_section.description}
              </p>
              <Link
                href="/donate"
                className="inline-block bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                {faqPageData.donate_section.cta_text}
              </Link>
            </div>
          </section>
        )
      )}

      <Footer />
    </div>
  );
};

export default function FAQ() {
  return (
    <Suspense fallback={<ServerLoading />}>
      <ServerContent />
    </Suspense>
  );
}

async function ServerContent() {
  try {
    const [faqPageResponse, faqItemsResponse, pressItemsResponse] =
      await Promise.all([
        getFAQPageData(),
        getFAQItems(1, 50),
        getPressItems(1, 10).catch((error) => {
          console.warn(
            "⚠️ Failed to fetch press items, using fallback:",
            error
          );
          return { data: [] }; 
        }),
      ]);

    const faqPageData = faqPageResponse.data;
    const faqItems = faqItemsResponse.data;
    const pressItems = pressItemsResponse.data || [];

    const donateData = faqPageData.donate_section;

    return (
      <FAQPageContent
        faqPageData={faqPageData}
        faqItems={faqItems}
        donateData={donateData}
        pressItems={pressItems}
      />
    );
  } catch (error) {
    console.error("Error fetching FAQ data:", error);
    return <ServerErrorFallback error={error} />;
  }
}

function ServerLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700">Loading FAQ...</h2>
      </div>
    </div>
  );
}

function ServerErrorFallback({ error }: { error: Error | unknown }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="text-center max-w-md mx-auto p-6">
        <div className="text-red-600 mb-4">
          <svg
            className="w-16 h-16 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-red-800 mb-4">
          Unable to Load FAQ
        </h2>
        <p className="text-red-600 mb-4">
          We encountered an error while fetching the FAQ content.
        </p>
        <p className="text-gray-600 text-sm">
          Please refresh the page to try again.
        </p>
      </div>
    </div>
  );
}
