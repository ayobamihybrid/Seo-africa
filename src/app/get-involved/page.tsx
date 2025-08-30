import React, { Suspense } from "react";
import { getGetInvolvedPageData } from "../lib/strapi";
import GetInvolvedClient from "../components/GetInvolvedClient";

interface GetInvolvedPageData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  hero_section: {
    id: number;
    accent_text: string;
    title: string;
    description: string;
    cover_image: {
      id: number;
      documentId: string;
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats?: {
        large?: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: null;
          size: number;
          width: number;
          height: number;
          sizeInBytes: number;
        };
        small?: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: null;
          size: number;
          width: number;
          height: number;
          sizeInBytes: number;
        };
        medium?: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: null;
          size: number;
          width: number;
          height: number;
          sizeInBytes: number;
        };
        thumbnail?: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: null;
          size: number;
          width: number;
          height: number;
          sizeInBytes: number;
        };
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: null;
      provider: string;
      provider_metadata: null;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
  become_partner_section: {
    id: number;
    accent_text: string;
    title: string;
    primary_cta_text: string;
    secondary_cta_text: string;
    features: Array<{
      id: number;
      title: string;
      body: string;
      image: {
        id: number;
        documentId: string;
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
        formats?: any;
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: null;
        provider: string;
        provider_metadata: null;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
      } | null;
    }>;
  };
  become_volunteer_section: {
    id: number;
    accent_text: string;
    title: string;
    description: string;
    cta_text: string;
    cta_link: string | null;
    cover_image: {
      id: number;
      documentId: string;
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats?: any;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: null;
      provider: string;
      provider_metadata: null;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
    features: Array<{
      id: number;
      title: string;
      content: string;
    }>;
  };
  support_seo_section: {
    id: number;
    accent_text: string;
    title: string;
    cta_text: string;
    cards: Array<{
      id: number;
      content: string;
      image: {
        id: number;
        documentId: string;
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
        formats?: any;
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: null;
        provider: string;
        provider_metadata: null;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
      };
    }>;
  };
  talent_network: {
    id: number;
    accent_text: string;
    title: string;
    cta_text: string;
    features: Array<{
      id: number;
      title: string;
      content: string;
    }>;
    cover_image: {
      id: number;
      documentId: string;
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats?: any;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: null;
      provider: string;
      provider_metadata: null;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
  thank_you_section: {
    id: number;
    heading: string;
    cover_image: any;
  };
}

async function ServerContent() {
  try {
    const getInvolvedResponse = await getGetInvolvedPageData();
    const getInvolvedPageData = getInvolvedResponse.data;

    return <GetInvolvedClient getInvolvedData={getInvolvedPageData} />;
  } catch (error) {
    console.error("Error fetching Get Involved data:", error);
    return <ServerErrorFallback error={error} />;
  }
}

function ServerLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700">
          Loading Get Involved...
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
          Unable to Load Get Involved Page
        </h2>
        <p className="text-red-600 mb-4">
          We encountered an error while fetching the get involved content.
        </p>
        <p className="text-gray-600 text-sm">
          Please refresh the page to try again.
        </p>
      </div>
    </div>
  );
}

export default function GetInvolved() {
  return (
    <Suspense fallback={<ServerLoading />}>
      <ServerContent />
    </Suspense>
  );
}

export type { GetInvolvedPageData };
