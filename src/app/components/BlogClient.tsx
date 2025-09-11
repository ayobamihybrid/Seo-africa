"use client";

import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Donate from "../components/Donate";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ChevronDown, ChevronLeft, ChevronRight, Clock, Search } from "lucide-react";
import { getStrapiImageUrl } from "../lib/strapi";
import type { BlogPageData, BlogPost, BlogCategory } from "../blog/page";

interface BlogClientProps {
  blogPageData: BlogPageData | null;
  blogPosts: BlogPost[];
  categories: BlogCategory[];
  totalPages: number;
}

const BlogClient: React.FC<BlogClientProps> = ({
  blogPageData,
  blogPosts,
  categories,
  totalPages,
}) => {
  const sectionAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Most recent");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Fallback data
  const fallbackHeroData = {
    title: "Where new insights and greater impact intersect.",
    accent_text: "Our Blog",
    cta_text: "Subscribe",
    info_text: "We care about your data in our privacy policy.",
    description: "Stay in the know, join our newsletter:",
  };

  const heroData = blogPageData?.hero_section || fallbackHeroData;

  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    if (searchTerm) {
      filtered = filtered.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((post) =>
        post.categories?.some((cat) => cat.name === selectedCategory)
      );
    }

    switch (sortBy) {
      case "Oldest first":
        filtered = [...filtered].sort(
          (a, b) =>
            new Date(a.post_date).getTime() - new Date(b.post_date).getTime()
        );
        break;
      case "Most popular":
        filtered = [...filtered].sort(
          (a, b) =>
            new Date(b.post_date).getTime() - new Date(a.post_date).getTime()
        );
        break;
      default:
        filtered = [...filtered].sort(
          (a, b) =>
            new Date(b.post_date).getTime() - new Date(a.post_date).getTime()
        );
        break;
    }

    return filtered;
  }, [blogPosts, searchTerm, selectedCategory, sortBy]);

  const featuredPost = filteredPosts[0];

  const gridPosts = filteredPosts.slice(1);

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

  const categoriesWithCounts = useMemo(() => {
    return categories.map((category) => ({
      ...category,
      count: blogPosts.filter((post) =>
        post.categories?.some((cat) => cat.name === category.name)
      ).length,
    }));
  }, [categories, blogPosts]);

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
          <div className="mb-1 lg:mb-24">
            <div className="mb-8">
              <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] bg-clip-text text-transparent text-xl font-bold">
                {heroData.accent_text}
              </span>
            </div>

            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-5 lg:mb-7 max-w-5xl">
              {heroData.title}
            </h1>

            <div className="max-w-xl space-y-6 mb-8">
              <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                {heroData.description}
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
                  {isSubmitting ? "Subscribing..." : heroData.cta_text}
                </button>
              </form>

              <p className="text-white/60 text-sm mt-4">
                {heroData.info_text.includes("privacy policy") ? (
                  <>
                    We care about your data in our{" "}
                    <a
                      href="#"
                      className="text-white/80 hover:text-white underline underline-offset-2 transition-colors duration-200"
                    >
                      privacy policy
                    </a>
                    .
                  </>
                ) : (
                  heroData.info_text
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {featuredPost && (
        <section className="bg-white px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div
              ref={sectionAnimation.ref}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${sectionAnimation.animationClass}`}
            >
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="relative group"
              >
                <div className="absolute top-6 left-6 z-10">
                  <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] text-white px-4 py-2 text-sm font-semibold">
                    FEATURED STORY
                  </span>
                </div>

                <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                  <Image
                    src={
                      featuredPost.cover_image
                        ? getStrapiImageUrl(featuredPost.cover_image)
                        : "/ourblog_image1.png"
                    }
                    alt={
                      featuredPost.cover_image?.alternativeText ||
                      featuredPost.title
                    }
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
                    <h2 className="text-white text-2xl lg:text-3xl font-bold mb-4 leading-tight group-hover:text-blue-200 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: featuredPost.body.substring(0, 200) + "...",
                      }}
                      className="text-white/90 text-lg leading-relaxed"
                    />
                  </div>
                </div>
              </Link>

              <div className="space-y-6">
                <div className="flex gap-3 flex-wrap">
                  {featuredPost.categories?.slice(0, 2).map((category) => (
                    <span
                      key={category.id}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${getCategoryColor(
                        category.name
                      )}`}
                    >
                      {category.name}
                    </span>
                  ))}
                </div>

                <h3 className="text-gray-900 text-2xl lg:text-3xl xl:text-4xl leading-tight">
                  {featuredPost.title}
                </h3>

                <div
                  dangerouslySetInnerHTML={{
                    __html: featuredPost.body.substring(0, 100) + "...",
                  }}
                  className="text-gray-600 text-lg leading-relaxed"
                />

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="text-blue-600 font-medium">
                    {formatDate(featuredPost.post_date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.time_to_read} min read
                  </span>
                </div>

                <div className="pt-4">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-[#3051F3] font-semibold hover:text-[#2441d4] transition-colors duration-200"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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
                  {categoriesWithCounts.map((category) => (
                    <button
                      key={category.id}
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
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 text-gray-600 placeholder:text-gray-600 border border-gray-200 rounded-lg focus:outline-none"
                  />
                </div>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full appearance-none px-4 py-3 pr-10 border text-gray-600 border-gray-200 rounded-lg bg-white min-w-[150px] focus:outline-none cursor-pointer"
                  >
                    <option>Most recent</option>
                    <option>Oldest first</option>
                    <option>Most popular</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {gridPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group"
                  >
                    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                      <div className="relative aspect-[16/10] overflow-hidden">
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
                        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 cursor-pointer transition-colors">
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

                {gridPosts.length > 0 && (
                  <div className="md:col-span-2 lg:col-span-1">
                    <NewsletterCard />
                  </div>
                )}
              </div>

              {totalPages > 1 && (
                <React.Fragment>
                  <hr />
                  <div className="mt-9 space-y-4">
                    <div className="flex sm:hidden items-center justify-between">
                      <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors disabled:opacity-50">
                        <ChevronLeft className="w-4 h-4" />
                        Prev
                      </button>

                      <div className="flex items-center gap-1">
                        <span className="text-sm text-gray-600">Page</span>
                        <select className="mx-2 px-2 py-1 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                          {Array.from(
                            { length: totalPages },
                            (_, i) => i + 1
                          ).map((page) => (
                            <option key={page} value={page}>
                              {page}
                            </option>
                          ))}
                        </select>
                        <span className="text-sm text-gray-600">
                          of {totalPages}
                        </span>
                      </div>

                      <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                        Next
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="hidden sm:flex items-center justify-between">
                      <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <ChevronLeft className="w-4 h-4" />
                        Previous
                      </button>

                      <div className="flex items-center gap-2">
                        {Array.from(
                          { length: Math.min(totalPages, 7) },
                          (_, i) => i + 1
                        ).map((page) => (
                          <button
                            key={page}
                            className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-colors ${
                              page === currentPage
                                ? "bg-blue-600 text-white"
                                : "text-gray-600 hover:bg-gray-100"
                            }`}
                          >
                            {page}
                          </button>
                        ))}
                      </div>

                      <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
                        Next
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </section>

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

export default BlogClient;
