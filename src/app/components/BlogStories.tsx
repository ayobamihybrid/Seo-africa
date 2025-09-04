"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import Link from "next/link";
import { getStrapiImageUrl } from "../lib/strapi";

interface StrapiBlogPost {
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  slug: string;
  readTime: string;
  category?: string;
  featuredImage: {
    data: {
      attributes: {
        url: string;
        alternativeText: string;
      };
    };
  };
}

interface BlogSection {
  id: number;
  title: string;
  description: string;
  cta_text: string;
}

interface BlogStoriesProps {
  blogData: BlogSection;
  featuredPost?: StrapiBlogPost | null;
  posts?: StrapiBlogPost[];
  className?: string;
}

const BlogStories: React.FC<BlogStoriesProps> = ({
  blogData,
  featuredPost,
  posts = [],
  className = "",
}) => {
  const titleAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });
  const subtitleAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });
  const buttonAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });
  const dividerAnimation = useScrollAnimation({
    animationType: "fade-in",
    threshold: 0.3,
  });
  const featuredPostAnimation = useScrollAnimation({
    animationType: "fade-left",
    threshold: 0.2,
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getImageUrl = (featuredImage: any) => {
    if (featuredImage?.data?.attributes?.url) {
      return getStrapiImageUrl(featuredImage);
    }
    if (typeof featuredImage?.data?.attributes?.url === "string") {
      return featuredImage.data.attributes.url;
    }
    return "/ourblog_image1.png";
  };

  if (!featuredPost && posts.length === 0) {
    return (
      <section className={`py-16 px-4 bg-white ${className}`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 hidden">No Blogpost response.</p>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 px-4 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2
            ref={titleAnimation.ref}
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight ${titleAnimation.animationClass}`}
          >
            {blogData.title}
          </h2>
          <p
            ref={subtitleAnimation.ref}
            className={`text-gray-600 text-lg mb-8 max-w-2xl ${subtitleAnimation.animationClass}`}
            style={{ transitionDelay: "200ms" }}
          >
            {blogData.description}
          </p>

          <Link
            href="/blog"
            ref={buttonAnimation.ref}
            className={`bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 group inline-flex ${buttonAnimation.animationClass}`}
            style={{ transitionDelay: "400ms" }}
          >
            {blogData.cta_text}
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Link>
        </div>

        <div
          ref={dividerAnimation.ref}
          className={`w-full h-px bg-gray-200 mb-12 ${dividerAnimation.animationClass}`}
          style={{ transitionDelay: "600ms" }}
        ></div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {featuredPost && (
            <div
              ref={featuredPostAnimation.ref}
              className={`lg:col-span-2 group cursor-pointer ${featuredPostAnimation.animationClass}`}
              style={{ transitionDelay: "800ms" }}
            >
              <Link href={`/blog/${featuredPost.slug}`}>
                <div className="relative bg-white rounded-2xl overflow-hidden h-full">
                  <div className="relative h-96 lg:h-full min-h-[500px] overflow-hidden">
                    <Image
                      src={getImageUrl(featuredPost.featuredImage)}
                      alt={
                        featuredPost.featuredImage?.data?.attributes
                          ?.alternativeText || featuredPost.title
                      }
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />

                    {featuredPost.category && (
                      <div className="absolute bottom-6 left-6">
                        <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                          {featuredPost.category}
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                      <div className="absolute bottom-8 left-8 right-8">
                        <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight mb-4">
                          {featuredPost.title}
                        </h3>

                        <div className="flex items-center gap-4 text-sm text-gray-300">
                          <span>{formatDate(featuredPost.publishedAt)}</span>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{featuredPost.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          <div
            className={`${
              featuredPost ? "lg:col-span-3" : "lg:col-span-5"
            } space-y-6`}
          >
            {posts.map((post, index) => (
              <BlogPostCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface BlogPostCardProps {
  post: StrapiBlogPost;
  index: number;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, index }) => {
  const cardAnimation = useScrollAnimation({
    animationType: "fade-right",
    threshold: 0.2,
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getImageUrl = (featuredImage: any) => {
    if (featuredImage?.data?.attributes?.url) {
      return getStrapiImageUrl(featuredImage);
    }
    if (typeof featuredImage?.data?.attributes?.url === "string") {
      return featuredImage.data.attributes.url;
    }
    return "/ourblog_image1.png";
  };

  return (
    <article
      ref={cardAnimation.ref}
      className={`group cursor-pointer ${cardAnimation.animationClass}`}
      style={{
        transitionDelay: `${1000 + index * 150}ms`,
      }}
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="flex items-center gap-6 bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 h-40">
          <div className="flex-1 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
              {post.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-500">
              <span>{formatDate(post.publishedAt)}</span>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          <div className="relative w-32 h-full flex-shrink-0">
            <Image
              src={getImageUrl(post.featuredImage)}
              alt={
                post.featuredImage?.data?.attributes?.alternativeText ||
                post.title
              }
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="128px"
            />
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogStories;
export type { StrapiBlogPost, BlogStoriesProps, BlogSection };
