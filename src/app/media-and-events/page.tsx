import React, { Suspense } from "react";
import { getMediaPageData } from "../lib/strapi";
import MediaAndEventsClient from "../components/MediaAndEventsClient";

interface MediaPageData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  hero_section: {
    id: number;
    title: string;
    accent_text: string;
    cta_text: string;
    info_text: string;
    description: string;
  };
}

async function ServerContent() {
  try {
    const mediaPageResponse = await getMediaPageData();
    const mediaPageData = mediaPageResponse.data;

    return <MediaAndEventsClient mediaPageData={mediaPageData} />;
  } catch (error) {
    console.error("Error fetching Media and Events data:", error);
    return <ServerErrorFallback error={error} />;
  }
}

function ServerLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700">
          Loading Media & Events...
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
          Unable to Load Media & Events Page
        </h2>
        <p className="text-red-600 mb-4">
          We encountered an error while fetching the media and events content.
        </p>
        <p className="text-gray-600 text-sm">
          Please refresh the page to try again.
        </p>
      </div>
    </div>
  );
}

export default function MediaAndEvents() {
  return (
    <Suspense fallback={<ServerLoading />}>
      <ServerContent />
    </Suspense>
  );
}

export type { MediaPageData };
