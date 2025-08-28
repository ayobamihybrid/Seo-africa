import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
import Donate from "../components/Donate";
import Footer from "../components/Footer";
import { getTeamPageData, getTeamMembers } from "../lib/strapi";
import TeamContent from "../components/TeamContent";

export interface TeamPageHero {
  title: string;
  description: string;
  cta_text: string;
  accent_text: string;
  cover_image: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    url: string;
    formats?: any;
  };
}

export interface TeamPageMember {
  content: string;
  title: string;
}

export interface TeamPagePartner {
  title: string;
  content: string;
  cta_text: string;
}

export interface TeamPageGallery {
  title: string;
}

export interface TeamPageExploreCard {
  id: number;
  title: string;
  content: string | null;
  cta_text: string | null;
}

export interface TeamPageExplore {
  title: string;
  cards: TeamPageExploreCard[];
}

export interface TeamPageTalentCta {
  id: number;
  title: string;
  cta_text: string;
  body: string | null;
  cover_image: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    url: string;
    formats?: any;
  };
}

export interface TeamPageDonate {
  id: number;
  title: string;
  description: string;
  cta_text: string;
}

export interface TeamPageData {
  hero_section: TeamPageHero;
  member_section: TeamPageMember;
  partner_section: TeamPagePartner;
  team_gallery_section: TeamPageGallery;
  explore_section: TeamPageExplore;
  talent_cta_section: TeamPageTalentCta;
  donate_section: TeamPageDonate;
}

export interface TeamMember {
  id: number;
  documentId: string;
  twitter_link: string;
  linkedin_link: string;
  body: string | null;
  name: string;
  position: string;
  alumni_info_text: string;
  avatar: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    url: string;
    width: number;
    height: number;
    formats?: {
      thumbnail?: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
}

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#131B3E]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-400 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-white">
          Loading Team Page...
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
          Unable to Load Team Page
        </h2>
        <p className="text-red-600 mb-4">
          We encountered an error while fetching the team page content from our
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

async function TeamPageContent() {
  try {
    const [teamPageResponse, teamMembersResponse] = await Promise.all([
      getTeamPageData(),
      getTeamMembers().catch((error) => {
        console.warn("⚠️ Failed to fetch team members, using fallback:", error);
        return { data: [] }; // Return empty array as fallback
      }),
    ]);

    const teamPageData = teamPageResponse.data;
    const teamMembers = teamMembersResponse.data || [];

    console.log("Team page data fetched successfully");
    console.log(
      "Team page data structure:",
      JSON.stringify(teamPageData, null, 2)
    );

    if (!teamPageData) {
      throw new Error("Team page data is undefined");
    }

    return (
      <div className="bg-[#131B3E]">
        <Navbar />

        <TeamContent teamData={teamPageData} teamMembers={teamMembers} />

        <Donate
          donateData={
            teamPageData.donate_section || {
              id: 1,
              title: "Make an uncommon impact. Support our work at SEO Africa",
              description:
                "SEO Africa has been the propelling wind behind thousands of successful careers and leadership stories in young Africans for more than 13 years now. You can help us be there for thousands more!",
              cta_text: "Donate Now",
            }
          }
        />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch team page data:", error);
    return <ErrorFallback error={error} />;
  }
}

export default function TeamPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <TeamPageContent />
    </Suspense>
  );
}
