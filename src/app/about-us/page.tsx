import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
import Donate from "../components/Donate";
import Footer from "../components/Footer";
import FindOpportunities from "../components/FindOpportunities";
import AboutContent from "../components/AboutContent";
import { getAboutPageData, getPressItems } from "../lib/strapi";

export interface AboutPageHero {
  accent_text: string;
  title: string;
  description: string;
  further_description: string;
  cover_image: {
    url: string;
    alternativeText: string | null;
  };
}

export interface AboutPageHistory {
  title: string;
  accent_text: string | null;
  content: string;
  cover_image: {
    url: string;
    alternativeText: string | null;
  };
}

export interface AboutPageMission {
  title: string;
  content: string;
}

export interface AboutPageVision {
  title: string;
  content: string;
}

export interface ValueCard {
  title: string;
  content: string;
}

export interface AboutPageCoreValues {
  title: string;
  value_cards: ValueCard[];
}

export interface AboutPageQuote {
  content: string;
  cta_text: string;
  name: string;
  position: string;
  avatar: {
    url: string;
    alternativeText: string | null;
  };
}

export interface AboutPageGallery {
  title: string;
}

export interface AboutPagePress {
  title: string;
}

export interface ExploreCard {
  title: string;
  content: string;
  cta_text: string;
}

export interface AboutPageExplore {
  title: string;
  cards: ExploreCard[];
}

export interface AboutPageTalentCta {
  title: string;
  cta_text: string;
  body: string | null;
  cover_image: {
    url: string;
    alternativeText: string | null;
  };
}

export interface AboutPageDonate {
  id: number;
  title: string;
  description: string;
  cta_text: string;
}

export interface AboutPageData {
  hero_section: AboutPageHero;
  history_section: AboutPageHistory;
  mission_section: AboutPageMission;
  vision_section: AboutPageVision;
  core_values_section: AboutPageCoreValues;
  quote_section: AboutPageQuote;
  gallery_section: AboutPageGallery;
  press_section: AboutPagePress;
  explore_section: AboutPageExplore;
  talent_cta_section: AboutPageTalentCta;
  donate_section: AboutPageDonate;
}

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#131B3E]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-400 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-white">
          Loading About Page...
        </h2>
      </div>
    </div>
  );
}

function ErrorFallback({ error }: { error: Error | unknown }) {
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
          Unable to Load About Page
        </h2>
        <p className="text-red-600 mb-4">
          We encountered an error while fetching the about page content from our
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

async function AboutPageContent() {
  try {
    const [aboutPageResponse, pressItemsResponse] = await Promise.all([
      getAboutPageData(),
      getPressItems(1, 10),
    ]);
    const aboutPageData = aboutPageResponse.data;
    const pressItems = pressItemsResponse.data;

    console.log(
      "📊 About page data structure:",
      JSON.stringify(aboutPageData, null, 2)
    );

    if (!aboutPageData) {
      throw new Error("About page data is undefined");
    }

    return (
      <div className="bg-[#131B3E]">
        <Navbar />

        <AboutContent aboutData={aboutPageData} pressItems={pressItems} />

        <div className="bg-white">
          <FindOpportunities
            talentData={
              aboutPageData.talent_cta_section
                ? {
                    title: aboutPageData.talent_cta_section.title,
                    cta_text: aboutPageData.talent_cta_section.cta_text,
                    cover_image: aboutPageData.talent_cta_section.cover_image,
                  }
                : undefined
            }
          />
        </div>

        <Donate donateData={aboutPageData.donate_section || {}} />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("❌ Failed to fetch about page data:", error);
    return <ErrorFallback error={error} />;
  }
}

export default function AboutPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <AboutPageContent />
    </Suspense>
  );
}
