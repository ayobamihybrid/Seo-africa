"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FindOpportunities from "@/app/components/FindOpportunities";
import { ArrowLeft, ChevronRight, Clock } from "lucide-react";
import { getStrapiImageUrl } from "@/app/lib/strapi";
import BlogContent from "../blog/[slug]/BlogContent";
import Donate from "./Donate";

interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  body: string;
  post_date: string;
  time_to_read: number;
  conclusion?: string;
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

interface Props {
  blogPost: BlogPost;
  relatedPosts: BlogPost[];
}

const BlogDetailClient: React.FC<Props> = ({ blogPost, relatedPosts }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getCategoryColor = (categoryName: string) => {
    const colors = {
      Business: "bg-blue-100 text-blue-700",
      Leadership: "bg-green-100 text-green-700",
      Education: "bg-orange-100 text-orange-700",
      Career: "bg-purple-100 text-purple-700",
      Internship: "bg-pink-100 text-pink-700",
      Africa: "bg-yellow-100 text-yellow-700",
      Brands: "bg-red-100 text-red-700",
    };
    return (
      colors[categoryName as keyof typeof colors] || "bg-gray-100 text-gray-700"
    );
  };

  return (
    <div className="bg-white">
      <Navbar details />

      <div className="mt-9 max-w-4xl mx-auto px-4 lg:px-0">
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors touch-manipulation"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go back
        </Link>
      </div>

      <article className="px-4 sm:px-6 lg:px-12 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-[16/9] mb-8 rounded-2xl overflow-hidden">
            <Image
              src={
                blogPost.cover_image
                  ? getStrapiImageUrl(blogPost.cover_image)
                  : "/ourblog_image1.png"
              }
              alt={blogPost.cover_image?.alternativeText || blogPost.title}
              fill
              className="object-cover"
            />
          </div>

          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {blogPost.categories?.map((category) => (
                <span
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${getCategoryColor(
                    category.name
                  )}`}
                >
                  {category.name}
                </span>
              ))}
              <span className="text-blue-600 font-medium text-sm">
                {formatDate(blogPost.post_date)}
              </span>
              <span className="flex items-center gap-1 text-gray-500 text-sm">
                <Clock className="w-4 h-4" />
                {blogPost.time_to_read} min read
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
              {blogPost.title}
            </h1>
          </header>

          <BlogContent blogPost={blogPost} />
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-end md:items-center justify-between mb-12">
              <div>
                <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">
                  OUR BLOG
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">
                  More stories from our blog.
                </h2>
              </div>

              <Link
                href="/blog"
                className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 touch-manipulation"
              >
                View all Blog
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group touch-manipulation"
                >
                  <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={
                          post.cover_image
                            ? getStrapiImageUrl(post.cover_image)
                            : "/ourblog_image1.png"
                        }
                        alt={post.cover_image?.alternativeText || post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-3">
                        {post.categories?.[0] && (
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                              post.categories[0].name
                            )}`}
                          >
                            {post.categories[0].name}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="text-blue-600 font-medium">
                          {formatDate(post.post_date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.time_to_read} min read
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="bg-white">
        <FindOpportunities />
      </div>

      <Donate
        donateData={{
          id: 1,
          title: "Make an uncommon impact. Support our work at SEO Africa",
          description:
            "SEO Africa has been the propelling wind behind thousands of successful careers and leadership stories in young Africans for more than 13 years now. You can help us be there for thousands more!",
          cta_text: "Donate Now",
        }}
      />

      <Footer />
    </div>
  );
};

export default BlogDetailClient;
