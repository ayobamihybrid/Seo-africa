"use client";

import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Donate from "../components/Donate";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Search,
} from "lucide-react";
import { getStrapiImageUrl } from "../lib/strapi";
import type { BlogPageData, BlogPost, BlogCategory } from "../blog/page";

interface LegalClientProps {
  blogPageData: BlogPageData | null;
  blogPosts: BlogPost[];
  categories: BlogCategory[];
  totalPages: number;
}

const LegalClient: React.FC<LegalClientProps> = ({
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

export default LegalClient;
