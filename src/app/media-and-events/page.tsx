"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Donate from "../components/Donate";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

type Props = {};

const MediaAndEvents = (props: Props) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [activeTab, setActiveTab] = useState("announcements");
  const [sortOption, setSortOption] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);

  const sectionAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });

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

  return (
    <div className="bg-[#131B3E]">
      <Navbar />

      <section className="bg-[#131B3E] px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24 pb-32 sm:pb-48 lg:pb-64">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16 lg:mb-24">
            <div className="mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] bg-clip-text text-transparent text-lg sm:text-xl font-bold">
                Media And Events
              </span>
            </div>

            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-4 sm:mb-5 lg:mb-7 max-w-5xl">
              Where new insights and greater impact intersect.
            </h1>

            <div className="max-w-xl space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed">
                Stay in the know, join our newsletter:
              </p>
            </div>

            <div className="max-w-xl">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 sm:flex-row sm:gap-4"
              >
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 sm:py-3 rounded-lg bg-white border text-black placeholder-black focus:outline-none focus:border-transparent transition-all duration-200 backdrop-blur-sm text-base"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 sm:px-8 py-3 bg-[#3051F3] disabled:bg-[#4F46E5]/50 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:transform-none min-w-[120px] touch-manipulation"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </form>

              <p className="text-white/60 text-xs sm:text-sm mt-3 sm:mt-4">
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

      <section className="bg-white px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div
            ref={sectionAnimation.ref}
            className={`grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 items-stretch gap-0 lg:gap-0 ${sectionAnimation.animationClass}`}
          >
            <Link
              href="/blog/seo-africa-lancaster-university"
              className="relative group h-full block touch-manipulation"
            >
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10">
                <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold">
                  FEATURED EVENT
                </span>
              </div>

              <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-full bg-gray-100">
                <Image
                  src="/ourblog_image1.png"
                  alt="SEO Africa at Lancaster University Ghana Career Fair"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 sm:p-6 lg:p-8">
                  <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 leading-tight group-hover:text-blue-200 transition-colors">
                    SEO Africa at Lancaster University Ghana Career Fair
                  </h2>
                  <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                    Join our 2-day career fair. Connect with fellow students and
                    recent graduates exploring career paths in finance, tech,
                    and social enterprise.
                  </p>
                </div>
              </div>
            </Link>

            <div className="bg-[#3051F30D] py-8 sm:py-12 lg:py-[4.9rem] px-4 sm:px-6 lg:px-4 space-y-4 sm:space-y-6 lg:h-full lg:flex lg:flex-col lg:justify-center">
              <h3 className="text-gray-900 text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-tight">
                Moving Toward Sustainable Academic Innovation—A guest post
                sharing ambitions for a new collaboration
              </h3>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Crafting engaging presentations involves a blend of storytelling
                and visual appeal. Start by outlining your key points and
                supporting them...
              </p>

              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-gray-500">
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

              <div className="pt-2 sm:pt-4">
                <Link
                  href={``}
                  className="inline-flex items-center gap-2 text-[#3051F3] font-semibold hover:text-[#2441d4] transition-colors duration-200 touch-manipulation"
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

      <section className="bg-gray-50 px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-0 mb-0">
              <nav
                className="flex space-x-4 sm:space-x-8 overflow-x-auto pb-2 sm:pb-0"
                aria-label="Tabs"
              >
                <button
                  onClick={() => setActiveTab("announcements")}
                  className={`border-b-2 py-2 px-1 text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 touch-manipulation ${
                    activeTab === "announcements"
                      ? "border-[#3051F3] text-[#3051F3]"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Announcements
                </button>
                <button
                  onClick={() => setActiveTab("events")}
                  className={`border-b-2 py-2 px-1 text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 touch-manipulation ${
                    activeTab === "events"
                      ? "border-[#3051F3] text-[#3051F3]"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Events
                </button>
                <button
                  onClick={() => setActiveTab("media")}
                  className={`border-b-2 py-2 px-1 text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 touch-manipulation ${
                    activeTab === "media"
                      ? "border-[#3051F3] text-[#3051F3]"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Media mentions
                </button>
              </nav>

              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#3051F3] focus:border-[#3051F3] w-full sm:w-auto"
              >
                <option value="recent">Most recent</option>
                <option value="oldest">Oldest first</option>
                <option value="popular">Most popular</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {[1, 2, 3].map((item) => (
              <article
                key={item}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3">
                    <div className="relative aspect-[16/9] sm:aspect-[4/3] lg:h-full">
                      <Image
                        src="/ourblog_image1.png"
                        alt="Moving Toward Sustainable Academic Innovation"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:w-2/3 p-4 sm:p-6 lg:p-8">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                      <span className="bg-[#E8913A] text-white px-2 sm:px-3 py-1 text-xs font-semibold rounded">
                        News
                      </span>
                      <span className="text-[#3051F3] text-xs sm:text-sm font-medium">
                        April 16 2025
                      </span>
                      <span className="text-gray-500 text-xs sm:text-sm">
                        1 min read
                      </span>
                    </div>
                    <h3 className="text-gray-900 text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 leading-tight hover:text-[#3051F3] transition-colors">
                      <Link
                        href={`/blog/sustainable-academic-innovation-${item}`}
                        className="touch-manipulation"
                      >
                        Moving Toward Sustainable Academic Innovation—A guest
                        post sharing ambitions for a new collaboration
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      Crafting engaging presentations involves a blend of
                      storytelling and visual appeal. Start by outlining your
                      key points and supporting them with relevant data.
                      Finally, use eye-catching visuals to enhance your message
                      and keep your audience captivated.
                    </p>
                    <Link
                      href={`/blog/sustainable-academic-innovation-${item}`}
                      className="inline-flex items-center gap-2 text-[#3051F3] font-semibold hover:text-[#2441d4] transition-colors duration-200 touch-manipulation"
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
              </article>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation order-2 sm:order-1"
            >
              <svg
                className="w-4 h-4 rotate-180"
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
              <span className="hidden sm:inline">Previous</span>
              <span className="sm:hidden">Prev</span>
            </button>

            <div className="flex items-center space-x-1 sm:space-x-2 order-1 sm:order-2">
              <div className="flex sm:hidden items-center space-x-1">
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 flex items-center justify-center text-sm font-medium rounded transition-colors touch-manipulation ${
                      currentPage === page
                        ? "text-white bg-[#3051F3]"
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <span className="text-gray-500 px-2">...</span>
                {[8, 9, 10].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 flex items-center justify-center text-sm font-medium rounded transition-colors touch-manipulation ${
                      currentPage === page
                        ? "text-white bg-[#3051F3]"
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Full pagination for desktop */}
              <div className="hidden sm:flex items-center space-x-2">
                {[1, 2, 3, "...", 8, 9, 10].map((page, index) =>
                  page === "..." ? (
                    <span key={index} className="text-gray-500 px-2">
                      ...
                    </span>
                  ) : (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page as number)}
                      className={`w-8 h-8 flex items-center justify-center text-sm font-medium rounded transition-colors touch-manipulation ${
                        currentPage === page
                          ? "text-white bg-[#3051F3]"
                          : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>
            </div>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 10))}
              disabled={currentPage === 10}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation order-3"
            >
              <span className="hidden sm:inline">Next</span>
              <span className="sm:hidden">Next</span>
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
        </div>
      </section>

      {/* <Donate /> */}

      <Footer />
    </div>
  );
};

export default MediaAndEvents;
