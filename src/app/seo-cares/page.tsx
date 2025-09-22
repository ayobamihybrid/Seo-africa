import React, { Suspense } from "react";
import {
  getSeoCaresPageData,
  getProjects,
  getProjectCategories,
} from "../lib/strapi";
import SeoCaresClient from "../components/SeoCaresClient";

interface SeoCaresPageData {
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
  };
}

function transformProjectData(strapiProject: any) {
  const coverImageUrl = strapiProject.cover_image?.url
    ? strapiProject.cover_image.url.startsWith("http")
      ? strapiProject.cover_image.url
      : `${process.env.NEXT_PUBLIC_STRAPI_URL}${strapiProject.cover_image.url}`
    : "/placeholder-project.jpg"; 

  const categories =
    strapiProject.categories?.map((cat: any) => cat.name) || [];

  const formattedDate = new Date(
    strapiProject.date || strapiProject.createdAt
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return {
    id: strapiProject.id,
    title: strapiProject.title,
    date: formattedDate,
    organization: "SEO Africa", 
    location: strapiProject.location || "Ghana",
    image: coverImageUrl,
    categories: categories,
    featured: strapiProject.featured || false,
    description: strapiProject.content
      ? stripHtmlTags(strapiProject.content)
      : "",
    slug: strapiProject.slug || `project-${strapiProject.id}`,
  };
}

function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, "").substring(0, 200) + "...";
}

async function ServerContent() {
  try {
    const [seoCaresResponse, projectsResponse, categoriesResponse] =
      await Promise.all([
        getSeoCaresPageData(),
        getProjects(1, 50), 
        getProjectCategories(),
      ]);

    const seoCaresPageData = seoCaresResponse.data;
    const strapiProjects = projectsResponse.data;
    const strapiCategories = categoriesResponse.data;

    const transformedProjects = strapiProjects.map(transformProjectData);

    const transformedCategories = strapiCategories.map((cat: any) => cat.name);

    return (
      <SeoCaresClient
        seoCaresData={seoCaresPageData}
        projectsData={transformedProjects}
        categoriesData={transformedCategories}
      />
    );
  } catch (error) {
    console.error("Error fetching SEO Cares data:", error);
    return <ServerErrorFallback error={error} />;
  }
}

function ServerLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700">
          Loading SEO Cares...
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
          Unable to Load SEO Cares Page
        </h2>
        <p className="text-red-600 mb-4">
          We encountered an error while fetching the SEO Cares content.
        </p>
        <p className="text-gray-600 text-sm">
          Please refresh the page to try again.
        </p>
      </div>
    </div>
  );
}

export default function SeoCares() {
  return (
    <Suspense fallback={<ServerLoading />}>
      <ServerContent />
    </Suspense>
  );
}

export type { SeoCaresPageData };
