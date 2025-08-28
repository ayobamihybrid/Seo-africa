import React, { Suspense } from "react";
import { getImpactPageData, getHomePageRawData, getCountriesOfOperations } from "../lib/strapi";
import ImpactClient from "../components/ImpactClient";

interface ImpactPageData {
  id: number;
  hero_section: {
    id: number;
    title: string;
    description: string;
    cta_text: string;
    accent_text: string;
    cover_image: any;
  };
  section_image: any;
  coverage_section: {
    id: number;
    accent_text: string;
    title: string;
    description: string;
  };
  testimonial_section: {
    id: number;
    accent_text: string;
    title: string;
    cta_text: string;
    featured_testimonial_video_link: string | null;
    featured_testimonial: {
      id: number;
      body: string;
      name: string;
      position: string;
      avatar: any;
    };
    video_links: Array<{
      id: number;
      url: string;
    }>;
  };
  talent_cta_section: {
    id: number;
    title: string;
    cta_text: string;
    body: string;
    cover_image: any;
  };
  donate_section: {
    id: number;
    title: string;
    description: string;
    cta_text: string;
  };
}

async function ServerContent() {
  try {
    const [impactPageResponse, homePageRawResponse, countriesResponse] = await Promise.all([
      getImpactPageData(),
      getHomePageRawData(),
      getCountriesOfOperations().catch((error) => {
        console.warn("⚠️ Failed to fetch countries of operations, using fallback:", error);
        return { data: [] };
      })
    ]);

    const impactData = impactPageResponse.data;
    const statisticsData = homePageRawResponse.statistics_section;
    const countriesData = countriesResponse.data || [];

    return (
      <ImpactClient 
        impactData={impactData} 
        statisticsData={statisticsData}
        countriesData={countriesData}
      />
    );
  } catch (error) {
    console.error("Error fetching Impact data:", error);
    return <ServerErrorFallback error={error} />;
  }
}

function ServerLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700">
          Loading Impact...
        </h2>
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
          Unable to Load Impact
        </h2>
        <p className="text-red-600 mb-4">
          We encountered an error while fetching the impact page content.
        </p>
        <p className="text-gray-600 text-sm">
          Please refresh the page to try again.
        </p>
      </div>
    </div>
  );
}

export default function Impact() {
  return (
    <Suspense fallback={<ServerLoading />}>
      <ServerContent />
    </Suspense>
  );
}

export type { ImpactPageData };