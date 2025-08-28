import React, { Suspense } from "react";
import { getContactUsPageData, getFAQItems } from "../lib/strapi";
import ContactUsClient from "../components/ContactUs";

interface ContactUsPageData {
  hero_section: {
    title: string;
    description: string;
    accent_text: string;
    contacts: {
      id: number;
      email: string;
      phone_ghana: string;
      phone_nigerian: string;
    };
  };
  faq_section: {
    title: string;
    body: string;
    link_text: string;
  };
  dontate_cta_section: {
    id: number;
    title: string;
    description: string;
    cta_text: string;
  };
}

async function ServerContent() {
  try {
    const [contactUsResponse, faqItemsResponse] = await Promise.all([
      getContactUsPageData(),
      getFAQItems(1, 6),
    ]);

    const contactUsData = contactUsResponse.data;
    const faqItems = faqItemsResponse.data;

    return (
      <ContactUsClient contactUsData={contactUsData} faqItems={faqItems} />
    );
  } catch (error) {
    console.error("Error fetching Contact Us data:", error);
    return <ServerErrorFallback error={error} />;
  }
}

function ServerLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700">
          Loading Contact Us...
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
          Unable to Load Contact Us
        </h2>
        <p className="text-red-600 mb-4">
          We encountered an error while fetching the contact page content.
        </p>
        <p className="text-gray-600 text-sm">
          Please refresh the page to try again.
        </p>
      </div>
    </div>
  );
}

export default function ContactUs() {
  return (
    <Suspense fallback={<ServerLoading />}>
      <ServerContent />
    </Suspense>
  );
}

export type { ContactUsPageData };
