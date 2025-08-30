import React, { Suspense } from "react";
import { getDonatePageData } from "../lib/strapi";
import DonateClient from "../components/DonateClient";

interface DonatePageData {
  id: number;
  documentId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  hero: {
    id: number;
    heading: string;
    cover_image: any;
  };
  donate_section: {
    id: number;
    title: string;
    description: string;
    donate_cards: Array<{
      id: number;
      currency: string;
      curreny_name: string;
      transfer_section: Array<{
        id: number;
        bank_name: string;
        account_number: string;
        account_name: string | null;
        wire_transfrer: boolean;
        swift_code: string | null;
        sort_code: string | null;
      }>;
    }>;
    features: Array<{
      id: number;
      text: string;
    }>;
  };
}

async function ServerContent() {
  try {
    const donatePageResponse = await getDonatePageData();
    const donatePageData = donatePageResponse.data;

    return (
      <DonateClient
        donatePageData={donatePageData}
      />
    );
  } catch (error) {
    console.error("Error fetching Donate page data:", error);
    return <ServerErrorFallback error={error} />;
  }
}

function ServerLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700">
          Loading Donate Page...
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
          Unable to Load Donate Page
        </h2>
        <p className="text-red-600 mb-4">
          We encountered an error while fetching the donate page content.
        </p>
        <p className="text-gray-600 text-sm">
          Please refresh the page to try again.
        </p>
      </div>
    </div>
  );
}

export default function DonatePage() {
  return (
    <Suspense fallback={<ServerLoading />}>
      <ServerContent />
    </Suspense>
  );
}

export type { DonatePageData };