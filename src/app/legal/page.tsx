import React, { Suspense } from "react";
import {
  getBlogPageData,
  getBlogPosts,
  getBlogPostCategories,
} from "../lib/strapi";
import { AlertTriangle } from "lucide-react";
import LegalClient from "../components/LegalClient";

interface BlogPageData {
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

interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  body: string;
  post_date: string;
  time_to_read: number;
  cover_image?: {
    url: string;
    alternativeText?: string;
  };
  categories?: Array<{
    id: number;
    name: string;
  }>;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface BlogCategory {
  id: number;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

async function ServerContent() {
  try {
    const blogPageResponse = await getBlogPageData();
    const blogPageData = blogPageResponse.data;

    const blogPostsResponse = await getBlogPosts(1, 25);
    const blogPosts = blogPostsResponse.data;

    const categoriesResponse = await getBlogPostCategories();
    const categories = categoriesResponse.data;

    return (
      <LegalClient
        blogPageData={blogPageData}
        blogPosts={blogPosts}
        categories={categories}
        totalPages={blogPostsResponse.meta.pagination.pageCount}
      />
    );
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return <ServerErrorFallback error={error} />;
  }
}

function ServerLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700">Loading Blog...</h2>
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
          Unable to Load Blog
        </h2>
        <p className="text-red-600 mb-4">
          We encountered an error while fetching the blog content.
        </p>
        <p className="text-gray-600 text-sm">
          Please refresh the page to try again.
        </p>
      </div>
    </div>
  );
}

export default function Blog() {
  return (
    <Suspense fallback={<ServerLoading />}>
      <ServerContent />
    </Suspense>
  );
}

export type { BlogPageData, BlogPost, BlogCategory };
