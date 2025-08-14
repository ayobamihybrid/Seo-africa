"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Donate from "../components/Donate";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

type Props = {};

const Blog = (props: Props) => {
  const sectionAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Most recent");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Subscribing email:", email);
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const blogPosts = [
    {
      id: 1,
      title:
        "Moving Toward Sustainable Academic Innovation—A guest post sharing ambitions for a new collaboration",
      category: "Business",
      date: "April 16 2025",
      readTime: "1 min read",
      image: "/ourblog_image1.png",
      hasProfile: true,
      slug: "sustainable-academic-innovation", 
    },
    {
      id: 2,
      title:
        "Advancing Economic Mobility at Community Colleges: 2024 Convening Highlights",
      category: "Education",
      date: "April 16 2025",
      readTime: "1 min read",
      image: "/blog_image2.png",
      slug: "economic-mobility-community-colleges",
    },
    {
      id: 3,
      title:
        "Moving Toward Sustainable Academic Innovation—A guest post sharing ambitions for a new collaboration",
      category: "Education",
      date: "April 16 2025",
      readTime: "1 min read",
      image: "/blog_image1.png",
      slug: "sustainable-innovation-collaboration",
    },
    {
      id: 4,
      title:
        "Advancing Economic Mobility at Community Colleges: 2024 Convening Highlights",
      category: "Business",
      date: "April 16 2025",
      readTime: "1 min read",
      image: "/blog_image3.png",
      slug: "community-colleges-convening",
    },
    {
      id: 5,
      title: "Empowering Future Engineers at Kumasi Technical University",
      category: "Education",
      date: "April 16 2025",
      readTime: "1 min read",
      image: "/ourblog_image1.png",
      slug: "empowering-engineers-kumasi",
    },
  ];

  const categories = [
    { name: "Business", count: 15 },
    { name: "Leadership", count: 6 },
    { name: "Education", count: 2 },
    { name: "Career", count: 5 },
    { name: "Internship", count: 12 },
    { name: "Others", count: 16 },
  ];

  const NewsletterCard = () => (
    <div className="bg-gray-900 text-white p-8 rounded-2xl">
      <h3 className="text-2xl font-bold mb-4">
        Stay in the know, join our newsletter.
      </h3>
      <p className="text-gray-300 mb-6 leading-relaxed">
        We publish a periodic collection of stories, announcements and
        activities that are helping students, graduates and leaders grow and
        learn with SEO Africa.
      </p>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-[#3051F3] hover:bg-[#2441d4] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          Subscribe
        </button>
      </form>
      <p className="text-sm text-gray-400 mt-4">
        We care about your data in our{" "}
        <a
          href="/privacy-policy"
          className="text-gray-300 hover:text-white underline"
        >
          privacy policy
        </a>
        .
      </p>
    </div>
  );

  return (
    <div className="bg-[#131B3E]">
      <Navbar />

      <section className="bg-[#131B3E] px-4 sm:px-6 lg:px-12 py-16 lg:py-24 pb-48 lg:pb-64">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 lg:mb-24">
            <div className="mb-8">
              <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] bg-clip-text text-transparent text-xl font-bold">
                Our Blog
              </span>
            </div>

            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-5 lg:mb-7 max-w-5xl">
              Where new insights and greater impact intersect.
            </h1>

            <div className="max-w-xl space-y-6 mb-8">
              <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                Stay in the know, join our newsletter:
              </p>
            </div>

            <div className="max-w-xl">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4"
              >
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border text-black placeholder-black focus:outline-none focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-[#3051F3] disabled:bg-[#4F46E5]/50 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:transform-none min-w-[120px]"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </form>

              <p className="text-white/60 text-sm mt-4">
                We care about your data in our{" "}
                <a
                  href="/privacy-policy"
                  className="text-white/80 hover:text-white underline underline-offset-2 transition-colors duration-200"
                >
                  privacy policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div
            ref={sectionAnimation.ref}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${sectionAnimation.animationClass}`}
          >
            <Link
              href="/blog/seo-africa-lancaster-university"
              className="relative group"
            >
              <div className="absolute top-6 left-6 z-10">
                <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] text-white px-4 py-2 text-sm font-semibold">
                  FEATURED STORY
                </span>
              </div>

              <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                <Image
                  src="/ourblog_image1.png"
                  alt="SEO Africa at Lancaster University Ghana Career Fair"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
                  <h2 className="text-white text-2xl lg:text-3xl font-bold mb-4 leading-tight group-hover:text-blue-200 transition-colors">
                    SEO Africa at Lancaster University Ghana Career Fair
                  </h2>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Join our 2-day career fair. Connect with fellow students and
                    recent graduates exploring career paths in finance, tech,
                    and social enterprise.
                  </p>
                </div>
              </div>
            </Link>

            <div className="space-y-6">
              <div className="flex gap-3">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  Business
                </span>
                <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                  Education
                </span>
              </div>

              <h3 className="text-gray-900 text-2xl lg:text-3xl xl:text-4xl leading-tight">
                Moving Toward Sustainable Academic Innovation—A guest post
                sharing ambitions for a new collaboration
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                Crafting engaging presentations involves a blend of storytelling
                and visual appeal. Start by outlining your key points and
                supporting them...
              </p>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="text-blue-600 font-medium">April 16 2025</span>
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
                  1 min read
                </span>
              </div>

              <div className="pt-4">
                <Link
                  href={`/blog/${blogPosts[0].slug}`}
                  className="inline-flex items-center gap-2 text-[#3051F3] font-semibold hover:text-[#2441d4] transition-colors duration-200"
                >
                  Read More
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
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Blog categories
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`block text-left w-full ${
                      selectedCategory === null
                        ? "text-blue-600 font-medium"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    View all
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`flex gap-2 items-center w-full text-left ${
                        selectedCategory === category.name
                          ? "text-blue-600 font-medium"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-sm">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 placeholder:text-gray-600 border border-gray-200 rounded-lg focus:outline-none"
                  />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border text-gray-600 border-gray-200 rounded-lg bg-white min-w-[150px] focus:outline-none"
                >
                  <option>Most recent</option>
                  <option>Oldest first</option>
                  <option>Most popular</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {blogPosts.map((post, index) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group"
                  >
                    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="mb-3">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                              post.category === "Business"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-orange-100 text-orange-700"
                            }`}
                          >
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 cursor-pointer transition-colors">
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
                  </Link>
                ))}

                <div className="md:col-span-2 lg:col-span-1">
                  <NewsletterCard />
                </div>
              </div>

              <hr />

              <div className="mt-9 space-y-4">
                <div className="flex sm:hidden items-center justify-between">
                  <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors disabled:opacity-50">
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
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Prev
                  </button>

                  <div className="flex items-center gap-1">
                    <span className="text-sm text-gray-600">Page</span>
                    <select className="mx-2 px-2 py-1 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
                        <option key={page} value={page}>
                          {page}
                        </option>
                      ))}
                    </select>
                    <span className="text-sm text-gray-600">of 10</span>
                  </div>

                  <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Next
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
                  </button>
                </div>

                <div className="hidden sm:flex md:hidden items-center justify-between">
                  <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Previous
                  </button>

                  <div className="flex items-center gap-1">
                    {[1, 2, 3, "...", 10].map((page, index) => (
                      <button
                        key={index}
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium transition-colors ${
                          page === 1
                            ? "bg-blue-600 text-white"
                            : page === "..."
                            ? "text-gray-400 cursor-default"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                        disabled={page === "..."}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
                    Next
                    <svg
                      className="w-5 h-5"
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
                  </button>
                </div>

                <div className="hidden md:flex items-center justify-between">
                  <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Previous
                  </button>

                  <div className="flex items-center gap-2">
                    {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
                      <button
                        key={index}
                        className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-colors ${
                          page === 1
                            ? "bg-blue-600 text-white"
                            : page === "..."
                            ? "text-gray-400 cursor-default"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                        disabled={page === "..."}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
                    Next
                    <svg
                      className="w-5 h-5"
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
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      <Donate />

      <Footer />
    </div>
  );
};

export default Blog;
