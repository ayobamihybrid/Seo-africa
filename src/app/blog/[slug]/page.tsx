import React from "react";
import { getBlogPostBySlug, getBlogPosts } from "@/app/lib/strapi";
import { notFound } from "next/navigation";
import BlogDetailClient from "@/app/components/BlogDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

const BlogDetail = async ({ params }: Props) => {
  const { slug } = await params;

  try {
    const blogPost = await getBlogPostBySlug(slug);

    if (!blogPost) {
      notFound();
    }

    const relatedPostsResponse = await getBlogPosts(1, 10);

    const relatedPosts = relatedPostsResponse.data
      .filter((post: any) => post.slug !== slug)
      .slice(0, 3);

    return <BlogDetailClient blogPost={blogPost} relatedPosts={relatedPosts} />;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    notFound();
  }
};

export default BlogDetail;
