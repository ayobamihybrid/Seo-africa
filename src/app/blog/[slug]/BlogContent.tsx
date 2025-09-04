"use client";

import React, { useState } from "react";
import Image from "next/image";
import { getStrapiImageUrl } from "@/app/lib/strapi";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import { Copy, Check } from "lucide-react";
import { SiFacebook, SiLinkedin, SiX } from "react-icons/si";

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
}

const BlogContent = ({ blogPost }: Props) => {
  const [copied, setCopied] = useState(false);

  const contentAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      // Fallback for older browsers or when clipboard API fails
      const textArea = document.createElement("textarea");
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error("Fallback copy failed: ", fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  const extractQuoteFromContent = (htmlContent: string) => {
    // Remove HTML tags and get first meaningful sentence for quote
    const textContent = htmlContent.replace(/<[^>]*>/g, "");
    const sentences = textContent
      .split(".")
      .filter((s) => s.trim().length > 20);
    return sentences[0]
      ? `${sentences[0].trim()}.`
      : "Crafting engaging content involves a blend of storytelling and visual appeal that resonates with your audience.";
  };

  const splitContentIntoSections = (htmlContent: string) => {
    const paragraphs = htmlContent.split("</p>").filter((p) => p.trim());

    const introduction =
      paragraphs.slice(0, Math.ceil(paragraphs.length * 0.3)).join("</p>") +
      "</p>";
    const mainContent =
      paragraphs
        .slice(
          Math.ceil(paragraphs.length * 0.3),
          Math.ceil(paragraphs.length * 0.8)
        )
        .join("</p>") + "</p>";
    const conclusion =
      blogPost.conclusion ||
      paragraphs.slice(Math.ceil(paragraphs.length * 0.8)).join("</p>") +
        "</p>";

    return { introduction, mainContent, conclusion };
  };

  const { introduction, mainContent, conclusion } = splitContentIntoSections(
    blogPost.body
  );
  const quote = extractQuoteFromContent(blogPost.body);

  return (
    <div
      ref={contentAnimation.ref}
      className={`prose prose-lg max-w-none ${contentAnimation.animationClass}`}
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction</h2>
        <div
          className="space-y-6 text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: introduction }}
        />
      </section>

      <blockquote className="my-12 p-8 bg-gray-50 border-l-4 border-blue-600 rounded-r-lg">
        <p className="text-xl italic text-gray-900 mb-4">"{quote}"</p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <div>
            <p className="font-semibold text-gray-900">SEO Africa Team</p>
            <p className="text-sm text-gray-600">Content Team</p>
          </div>
        </div>
      </blockquote>

      {mainContent && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Key Insights
          </h2>
          <div
            className="space-y-6 text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: mainContent }}
          />
        </section>
      )}

      {blogPost.cover_image && (
        <div className="relative aspect-[16/9] my-12 rounded-2xl overflow-hidden">
          <Image
            src={getStrapiImageUrl(blogPost.cover_image)}
            alt={blogPost.cover_image.alternativeText || blogPost.title}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-6 left-6 text-xs text-white/80">
            Image courtesy of SEO Africa
          </div>
        </div>
      )}

      {conclusion && (
        <section className="mb-12 bg-[#F5F6FA] p-7 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Conclusion</h2>
          <div
            className="space-y-6 text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: conclusion }}
          />
        </section>
      )}

      <section className="border-t pt-8 mt-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-semibold text-gray-900">Share this post</span>
          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-black text-sm touch-manipulation"
              title={copied ? "Copied!" : "Copy link to clipboard"}
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copied ? "Copied!" : "Copy link"}
            </button>

            <button
              onClick={() => {
                const tweetText = encodeURIComponent(
                  `Check out this article: ${blogPost.title}`
                );
                const url = encodeURIComponent(window.location.href);
                window.open(
                  `https://twitter.com/intent/tweet?text=${tweetText}&url=${url}`,
                  "_blank"
                );
              }}
              className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors touch-manipulation"
              aria-label="Share on Twitter"
            >
              <SiX className="w-5 h-5" />
            </button>

            <button
              onClick={() => {
                const url = encodeURIComponent(window.location.href);
                const title = encodeURIComponent(blogPost.title);
                window.open(
                  `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`,
                  "_blank"
                );
              }}
              className="w-10 h-10 bg-blue-800 hover:bg-blue-900 text-white rounded-lg flex items-center justify-center transition-colors touch-manipulation"
              aria-label="Share on LinkedIn"
            >
              <SiLinkedin className="w-5 h-5" />
            </button>

            <button
              onClick={() => {
                const url = encodeURIComponent(window.location.href);
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${url}`,
                  "_blank"
                );
              }}
              className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors touch-manipulation"
              aria-label="Share on Facebook"
            >
              <SiFacebook className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogContent;
