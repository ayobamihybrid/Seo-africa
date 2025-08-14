"use client";

import React from "react";
import Image from "next/image";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";

interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  content: {
    introduction: string;
    quote: string;
    subheadingInfo: string;
    conclusion: string;
  };
}

interface Props {
  blogPost: BlogPost;
}

const BlogContent = ({ blogPost }: Props) => {
  const contentAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });

  return (
    <div
      ref={contentAnimation.ref}
      className={`prose prose-lg max-w-none ${contentAnimation.animationClass}`}
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction</h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          {blogPost.content.introduction
            .split("\n\n")
            .map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
        </div>
      </section>

      <blockquote className="my-12 p-8 bg-gray-50 border-l-4 border-blue-600 rounded-r-lg">
        <p className="text-xl italic text-gray-900 mb-4">
          "{blogPost.content.quote}"
        </p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <div>
            <p className="font-semibold text-gray-900">
              {blogPost.author.name}
            </p>
            <p className="text-sm text-gray-600">{blogPost.author.title}</p>
          </div>
        </div>
      </blockquote>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Subheading Information
        </h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          {blogPost.content.subheadingInfo
            .split("\n\n")
            .map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
        </div>
      </section>

      <div className="relative aspect-[16/9] my-12 rounded-2xl overflow-hidden">
        <Image
          src={blogPost.image}
          alt={blogPost.title}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-6 left-6 text-xs text-white/80">
          Image courtesy of Uzoeze Ugochi of Nigeria
        </div>
      </div>

      <section className="mb-12 bg-[#F5F6FA] p-7 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Conclusion</h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          {blogPost.content.conclusion.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="border-t pt-8 mt-12">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-900">Share this post</span>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-black text-sm">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy link
            </button>
            <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </button>
            <button className="w-10 h-10 bg-blue-800 hover:bg-blue-900 text-white rounded-lg flex items-center justify-center transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
              </svg>
            </button>
            <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogContent;
