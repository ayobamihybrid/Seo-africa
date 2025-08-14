"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Donate from "@/app/components/Donate";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import Footer from "@/app/components/Footer";
import FindOpportunities from "@/app/components/FindOpportunities";
import { ArrowLeft } from "lucide-react";

type Props = {
  blogId?: string;
};

const BlogDetail = (props: Props) => {
  const contentAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });

  const blogPost = {
    id: 1,
    title:
      "Moving Toward Sustainable Academic Innovation—A guest post sharing ambitions for a new collaboration.",
    category: "Business",
    date: "April 16 2025",
    readTime: "1 min read",
    image: "/ourblog_image1.png",
    author: {
      name: "Adunola Adeshola",
      title: "Programme Manager",
      avatar: "/author-avatar.png",
    },
    content: {
      introduction:
        "The Nigeria Career Programme is designed for recent graduates (within the past two years) who have completed or will soon complete their NYSC in the year applications are open and whose passions lie geared towards to build a career in Finance.\n\nSelected candidates will undergo world-class training, equipping them with both the technical and soft skills needed to excel in the corporate environment. Upon successful completion, participants will be placed as Graduate Trainees at leading firms in Nigeria.\n\nAs part of the application process, we conduct a rigorous recruitment and selection process, identifying top university graduates based on ability, motivation, and leadership potential.",

      quote:
        "In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.",

      subheadingInfo:
        "At volutpat elit, et lorem dui tincidunt. urna condimentum, massa eget volutpat lacus mollis ornare. Sed diam lorem, bibendum et tellus dapibus fermentum enim. Mauris posuere ullamcorper orci amet, tristique neque ut neque lacus mauris.\n\nLorem odio tempor cras vel placerat consectetur netus, ultrices. Blandit duis ultrices volutpat mauris feugiat orci blandit et. Aenean neque lorem vel velit ac. Viverra, arcu mauris pellentesque suscipit accumsan. Cursus mauris auctor magna mauris consequat faucibus molestie pellentesque. Odio curae eu faucibus vestibulum.\n\nLectus leo blandit mauris mauris. Morbi odio mauris mauris bibendum pellentesque. Libero et et tristique bibendum ut posuere tellus. Morbi rutrum ut risus bibendum bibendum. Nunc mauris ac molestie consequat nullam mauris gravida lacus mauris et. Sed tortor feugiat mauris mauris mauris mauris venenatis et. Mauris pellentesque sapien arcu magna ullamcorper elementum mauris.\n\nNamque quis mauris mauris accumsan mauris ac lorem mauris. Netus sed mauris mauris mauris mauris mauris sapien. Sed mauris hendrerit mauris mauris volutpat mauris mauris amet mauris sed lorem mauris mauris pellentesque mauris.\n\nCursus vivamus lobortis mauris mauris mauris. Mauris mauris pellentesque mauris mauris mauris mauris mauris eget mauris mauris mauris mauris mauris mauris mauris mauris mauris mauris mauris mauris mauris mauris mauris mauris mauris mauris mauris mauris mauris mauris.",

      conclusion:
        "Mauris sed consectetur in turpis adipiscing elit ut mauris. Tellus et scelerisque est ultrices ultrices. Duis est uis sed leo nisl, rhoncus elit sagittis. Quisque tristique cursus est quis vel. Nisl ut scelerisque mauris risus justo mauris bibendum.\n\nNunc sed faucibus bibendum feugiat sed tristique. Ipsum dignass consequuntur mauris mauris. In bibendum pharetra consectetur mauris mauris mauris mauris. Etiam sagittis in mauris sed ut. Quis bibendum et est dictum mauris mauris mauris bibendum mauris.",
    },
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Empowering Future Engineers at Kumasi Technical University",
      category: "Business",
      date: "April 16 2025",
      readTime: "1 min read",
      image: "/blog_image1.png",
    },
    {
      id: 3,
      title: "Empowering Future Engineers at Kumasi Technical University",
      category: "Leadership",
      date: "April 16 2025",
      readTime: "1 min read",
      image: "/blog_image2.png",
    },
    {
      id: 4,
      title: "Empowering Future Engineers at Kumasi Technical University",
      category: "Education",
      date: "April 16 2025",
      readTime: "1 min read",
      image: "/blog_image3.png",
    },
  ];

  return (
    <div className="bg-white">
      <Navbar details />

      <div className="mt-9 max-w-4xl mx-auto px-4 lg:px-0">
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go back
        </Link>
      </div>

      <article className="px-4 sm:px-6 lg:px-12 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-[16/9] mb-8 rounded-2xl overflow-hidden">
            <Image
              src={blogPost.image}
              alt={blogPost.title}
              fill
              className="object-cover"
            />
          </div>

          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  blogPost.category === "Business"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                {blogPost.category}
              </span>
              <span className="text-blue-600 font-medium text-sm">
                {blogPost.date}
              </span>
              <span className="flex items-center gap-1 text-gray-500 text-sm">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                {blogPost.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
              {blogPost.title}
            </h1>
          </header>

          <div
            ref={contentAnimation.ref}
            className={`prose prose-lg max-w-none ${contentAnimation.animationClass}`}
          >
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Introduction
              </h2>
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
                  <p className="text-sm text-gray-600">
                    {blogPost.author.title}
                  </p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Conclusion
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                {blogPost.content.conclusion
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
            </section>

            <section className="border-t pt-8 mt-12">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">
                  Share this post
                </span>
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
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-blue-800 hover:bg-blue-900 text-white rounded-lg flex items-center justify-center transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>

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
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1"
            >
              View all Blog
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        post.category === "Business"
                          ? "bg-blue-100 text-blue-700"
                          : post.category === "Leadership"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="text-blue-600 font-medium">
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-white">
        <FindOpportunities />
      </div>

      <Donate />
      <Footer />
    </div>
  );
};

export default BlogDetail;
