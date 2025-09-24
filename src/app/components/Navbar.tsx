"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  ChevronRight,
  Heart,
  Menu,
  X,
  Zap,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CustomGoogleTranslate from "./CustomGoogleTranslate";
import { getBlogPosts } from "../lib/strapi";

interface NavbarProps {
  details?: boolean;
}

interface BlogPost {
  title: string;
  slug: string;
  time_to_read: number;
  cover_image?: {
    url: string;
    alternativeText?: string;
  };
}

const Navbar: React.FC<NavbarProps> = ({ details = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoadingBlogs, setIsLoadingBlogs] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const textColor = details ? "text-black" : "text-white";
  const hoverColor = details ? "hover:text-gray-600" : "hover:text-gray-300";
  const donateButtonClasses = details
    ? "flex items-center space-x-2 bg-transparent border border-black text-black px-4 lg:px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors text-sm"
    : "flex items-center space-x-2 bg-transparent border border-white text-white px-4 lg:px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors text-sm";
  const mobileMenuButtonColor = details ? "text-black" : "text-white";

  useEffect(() => {
    const fetchBlogPosts = async () => {
      setIsLoadingBlogs(true);
      try {
        const response = await getBlogPosts(1, 2); 
        if (response.data && response.data.length > 0) {
          setBlogPosts(response.data);
        }
      } catch (error) {
        console.warn("Failed to fetch blog posts for navbar:", error);
      } finally {
        setIsLoadingBlogs(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const handleDropdownClick = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleMobileDropdownClick = (dropdown: string) => {
    setActiveMobileDropdown(
      activeMobileDropdown === dropdown ? null : dropdown
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleAlumniTestimonialsClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if (window.location.pathname === "/impact") {
      const element = document.getElementById("testimonials");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      window.location.href = "/impact#testimonials";
    }
  };

  const handleVolunteerClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if (window.location.pathname === "/get-involved") {
      const element = document.getElementById("volunteer-section");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      window.location.href = "/get-involved#volunteer-section";
    }
  };

  const handlePartnerClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if (window.location.pathname === "/get-involved") {
      const element = document.getElementById("become-partner");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      window.location.href = "/get-involved#become-partner";
    }
  };

  const fallbackBlogPosts = [
    {
      title: "Why should I join SEO Africa?",
      slug: "why-join-seo-africa",
      time_to_read: 1,
      cover_image: {
        url: "/blog_image1.png",
        alternativeText: "Why should I join SEO Africa?",
      },
    },
    {
      title: "SEO Africa Application tips",
      slug: "seo-africa-application-tips",
      time_to_read: 1,
      cover_image: {
        url: "/blog_image2.png",
        alternativeText: "SEO Africa Application tips",
      },
    },
  ];

  const displayBlogPosts = blogPosts.length > 0 ? blogPosts : fallbackBlogPosts;

  return (
    <>
      <nav
        className="max-w-[90rem] mx-auto relative z-[10000] flex items-center justify-between px-4 sm:px-6 py-4 lg:px-12"
        ref={dropdownRef}
      >
        <Link href={"/"} className="w-12 h-12 md:w-20 md:h-20 relative">
          <Image
            src={details ? "/seo_logo_black.png" : "/seo_logo.png"}
            alt="SEO Africa Logo"
            fill
            className="object-contain"
          />
        </Link>

        <div
          className={`hidden xl:flex items-center space-x-6 xl:space-x-8 ${textColor}`}
        >
          <div className="relative">
            <button
              onClick={() => handleDropdownClick("about")}
              className={`flex items-center space-x-1 cursor-pointer ${hoverColor} transition-colors py-6`}
            >
              <span className="text-sm xl:text-base">About us</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  activeDropdown === "about" ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeDropdown === "about" && (
              <div className="absolute top-full left-0 w-[900px] z-[9999]">
                <div className="bg-white rounded-lg shadow-xl border border-gray-100 mt-2">
                  <div className="grid grid-cols-12 min-h-[500px]">
                    <div className="col-span-5 p-8 ">
                      <div className="space-y-4 mb-8">
                        <div className="relative h-8 w-8 flex-shrink-0">
                          <Image src={"/telescope.svg"} alt="" fill />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            About us
                          </h3>
                          <p className="text-gray-600 text-base leading-relaxed">
                            Learn more about SEO Africa, how we instill
                            excellence, and our vision for the future.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <Link
                          href="/about-us"
                          className=" text-gray-900 hover:text-blue-600 hover:underline transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className="text-base">About SEO Africa</span>
                        </Link>

                        <div className="mt-4 flex items-center gap-2 ">
                          <Link
                            href="/our-team"
                            className="text-gray-900 hover:text-blue-600 hover:underline transition-colors text-base"
                            onClick={() => setActiveDropdown(null)}
                          >
                            Our team & partners
                          </Link>
                          <div className="flex items-center space-x-2">
                            <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] text-white text-xs px-2 py-1 rounded-full font-medium">
                              New
                            </span>
                          </div>
                        </div>

                        <Link
                          href="/impact"
                          className="block text-gray-900 hover:text-blue-600 hover:underline transition-colors text-base"
                          onClick={() => setActiveDropdown(null)}
                        >
                          Our impact & coverage
                        </Link>

                        <Link
                          href="/faq"
                          className="block text-gray-900 hover:text-blue-600 hover:underline transition-colors  text-base"
                          onClick={() => setActiveDropdown(null)}
                        >
                          FAQs
                        </Link>

                        <Link
                          href="/donate"
                          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors text-base font-medium"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span>Donate</span>
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </div>

                      <div className="flex items-center space-x-4 mt-12">
                        <Link
                          href="https://www.instagram.com/seo_africa"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative h-8 w-8 flex-shrink-0"
                        >
                          <Image src={"/instagram.svg"} alt="Instagram" fill />
                        </Link>

                        <Link
                          href="https://web.facebook.com/seoinafrica"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative h-8 w-8 flex-shrink-0"
                        >
                          <Image src={"/facebook.svg"} alt="Facebook" fill />
                        </Link>

                        <Link
                          href="https://x.com/SEOinAfrica"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative h-8 w-8 flex-shrink-0"
                        >
                          <Image src={"/twitter.svg"} alt="Twitter" fill />
                        </Link>

                        <Link
                          href="https://www.linkedIn.com/company/seo-africa-org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative h-8 w-8 flex-shrink-0"
                        >
                          <Image src={"/linkedin.svg"} alt="LinkedIn" fill />
                        </Link>
                      </div>
                    </div>

                    <div className="col-span-7 p-9 flex flex-col rounded-lg overflow-hidden">
                      {isLoadingBlogs ? (
                        <>
                          <div className="relative flex-1 min-h-[350px] bg-gray-200 animate-pulse"></div>
                          <div className="bg-white p-6">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className="h-6 bg-gray-200 rounded-full w-16 animate-pulse"></div>
                              <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                            </div>
                            <div className="h-6 bg-gray-200 rounded mb-3 animate-pulse"></div>
                            <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="relative flex-1 min-h-[350px]">
                            <Image
                              src={
                                displayBlogPosts[0]?.cover_image?.url ||
                                "/blog_image1.png"
                              }
                              alt={
                                displayBlogPosts[0]?.cover_image
                                  ?.alternativeText ||
                                displayBlogPosts[0]?.title ||
                                ""
                              }
                              fill
                              className="object-cover"
                            />
                          </div>

                          <div className="bg-white p-6">
                            <div className="flex items-center space-x-3 mb-3">
                              <span className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full font-medium">
                                Featured
                              </span>
                              <div className="flex items-center space-x-1">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-blue-600 text-sm font-medium">
                                  {displayBlogPosts[0]?.time_to_read || 1} min
                                  read
                                </span>
                              </div>
                            </div>

                            <h4 className="text-gray-900 font-semibold text-lg mb-3 leading-tight">
                              {displayBlogPosts[0]?.title ||
                                "Alumni Stories: How SEO Africa is empowering the next wave of future leaders"}
                            </h4>

                            <Link
                              href={
                                displayBlogPosts[0]?.slug
                                  ? `/blog/${displayBlogPosts[0].slug}`
                                  : "/blog"
                              }
                              className="inline-flex items-center text-gray-900 hover:text-blue-600 hover:underline text-sm font-bold tracking-wider border-b-2 border-gray-900 hover:border-blue-600 transition-colors pb-1"
                              onClick={() => setActiveDropdown(null)}
                            >
                              READ MORE
                            </Link>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => handleDropdownClick("programmes")}
              className={`flex items-center space-x-1 cursor-pointer ${hoverColor} transition-colors py-6`}
            >
              <span className="text-sm xl:text-base">Our Programmes</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  activeDropdown === "programmes" ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeDropdown === "programmes" && (
              <div className="absolute top-full left-0 w-[800px] z-50">
                <div className="bg-white rounded-lg shadow-xl border border-gray-100 p-6 mt-2">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="space-y-4 mb-6">
                        <div className="relative h-8 w-8 flex-shrink-0">
                          <Image src={"/telescope.svg"} alt="" fill />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Programmes
                          </h3>
                          <p className="text-gray-600 text-sm mb-4">
                            Prepare for the next level in your career journey.
                            Explore SEO Africa's programmes and career
                            opportunities.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Link
                          href="/our-programmes"
                          className="block text-gray-900 hover:text-blue-600 hover:underline transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          All Programmes
                        </Link>
                        <div className="flex items-center space-x-2">
                          <Link
                            href="/career-opportunities"
                            className="text-gray-900 hover:text-blue-600 hover:underline transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            Career opportunities/ Job site
                          </Link>
                          <div className="flex items-center space-x-2">
                            <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] text-white text-xs px-2 py-1 rounded-full font-medium">
                              New
                            </span>
                          </div>
                        </div>
                        <Link
                          href="/our-programmes"
                          className="block text-gray-900 hover:text-blue-600 hover:underline transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          SEO Africa On-campus
                        </Link>
                        <Link
                          href="/our-programmes"
                          className="block text-gray-900 hover:text-blue-600 hover:underline transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          MBA Launchpad
                        </Link>
                      </div>

                      <div className="flex items-center space-x-4 mt-12">
                        <Link
                          href="https://www.instagram.com/seo_africa"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative h-8 w-8 flex-shrink-0"
                        >
                          <Image src={"/instagram.svg"} alt="Instagram" fill />
                        </Link>

                        <Link
                          href="https://web.facebook.com/seoinafrica"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative h-8 w-8 flex-shrink-0"
                        >
                          <Image src={"/facebook.svg"} alt="Facebook" fill />
                        </Link>

                        <Link
                          href="https://x.com/SEOinAfrica"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative h-8 w-8 flex-shrink-0"
                        >
                          <Image src={"/twitter.svg"} alt="Twitter" fill />
                        </Link>

                        <Link
                          href="https://www.linkedIn.com/company/seo-africa-org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative h-8 w-8 flex-shrink-0"
                        >
                          <Image src={"/linkedin.svg"} alt="LinkedIn" fill />
                        </Link>
                      </div>
                    </div>

                    <div className="bg-blue-600 text-white rounded-lg p-6 md:p-10">
                      <h3 className="text-xl md:text-3xl font-bold mb-2">
                        Find opportunities in SEO Africa. Join our talent
                        network.
                      </h3>
                      <p className="text-blue-100 mb-20 text-sm">
                        Join over 32,000 students and graduates in our
                        community. Join our talent network.
                      </p>

                      <button
                        className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <Link
                          href="https://forms.gle/gEtqD5A7X3UmVxz66"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Join our talent network
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => handleDropdownClick("resources")}
              className={`flex items-center space-x-1 cursor-pointer ${hoverColor} transition-colors py-6`}
            >
              <span className="text-sm xl:text-base">Resources</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  activeDropdown === "resources" ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeDropdown === "resources" && (
              <div
                className="absolute top-full w-[90vw] max-w-[75rem] z-50"
                style={{ left: "-450px" }}
              >
                <div className="bg-white rounded-lg shadow-xl border border-gray-100 p-8 mt-2">
                  <div className="grid grid-cols-2 gap-12 lg:gap-16">
                    <div className="grid grid-cols-3 gap-8">
                      <div>
                        <div className="space-y-3 mb-4">
                          <div className="relative h-6 w-6 flex-shrink-0">
                            <Image src={"/telescope.svg"} alt="" fill />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            Learn
                          </h3>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">
                          Learn more about SEO Africa, how we instill
                          excellence, and our vision for the future.
                        </p>
                        <div className="space-y-3">
                          <Link
                            href="/faq"
                            className="block text-gray-900 hover:text-blue-600 hover:underline transition-colors text-sm"
                            onClick={() => setActiveDropdown(null)}
                          >
                            FAQs
                          </Link>

                          <Link
                            href="/our-team"
                            className="block text-gray-900 hover:text-blue-600 hover:underline transition-colors text-sm"
                            onClick={() => setActiveDropdown(null)}
                          >
                            Our team & partners
                          </Link>

                          <Link
                            href="/impact"
                            className="block text-gray-900 hover:text-blue-600 hover:underline transition-colors text-sm"
                            onClick={() => setActiveDropdown(null)}
                          >
                            Our impacts/Coverage
                          </Link>

                          <Link
                            href="/blog"
                            className="block text-gray-900 hover:text-blue-600 hover:underline transition-colors text-sm"
                            onClick={() => setActiveDropdown(null)}
                          >
                            Our blog
                          </Link>
                        </div>
                      </div>

                      <div>
                        <div className="space-y-3 mb-4">
                          <Heart className="w-5 h-5 text-blue-600" />
                          <h3 className="text-lg font-semibold text-gray-900">
                            Community
                          </h3>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">
                          Find out how SEO Africa, our people and alumni are
                          driving growth around the world.
                        </p>
                        <div className="space-y-3">
                          <Link
                            href="/impact#testimonials"
                            className="block text-gray-900 hover:text-blue-600 hover:underline transition-colors text-sm"
                            onClick={handleAlumniTestimonialsClick}
                          >
                            Alumni testimonials
                          </Link>

                          <Link
                            href="/seo-cares"
                            className="block text-gray-900 hover:text-blue-600 hover:underline transition-colors text-sm"
                            onClick={() => setActiveDropdown(null)}
                          >
                            SEOCares projects
                          </Link>
                          <Link
                            href="/career-opportunities"
                            className="block text-gray-900 hover:text-blue-600 hover:underline transition-colors text-sm"
                            onClick={() => setActiveDropdown(null)}
                          >
                            SEO career opportunities
                          </Link>
                        </div>
                      </div>

                      <div>
                        <div className="space-y-3 mb-4">
                          <Zap className="w-5 h-5 text-blue-600" />
                          <h3 className="text-lg font-semibold text-gray-900">
                            Get involved
                          </h3>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">
                          Discover new opportunities for collaboration and
                          mutual growth with SEO Africa.
                        </p>
                        <div className="space-y-3">
                          <Link
                            href="https://forms.gle/gEtqD5A7X3UmVxz66"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-gray-900 hover:text-blue-600 hover:underline transition-colors text-sm"
                            onClick={() => setActiveDropdown(null)}
                          >
                            Join our talent network
                          </Link>

                          <div className="flex items-center space-x-2">
                            <Link
                              href="/our-programmes"
                              className="text-gray-900 hover:text-blue-600 hover:underline transition-colors text-sm"
                              onClick={() => setActiveDropdown(null)}
                            >
                              Our programmes
                            </Link>
                            <div className="flex items-center space-x-2">
                              <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] text-white text-xs px-2 py-1 rounded-full font-medium">
                                New
                              </span>
                            </div>
                          </div>

                          <Link
                            href="/donate"
                            className="block text-gray-900 hover:text-blue-600 hover:underline transition-colors text-sm"
                            onClick={() => setActiveDropdown(null)}
                          >
                            Donate to SEO Africa
                          </Link>
                          <Link
                            href="/contact-us"
                            className="block text-gray-900 hover:text-blue-600 hover:underline transition-colors text-sm"
                            onClick={() => setActiveDropdown(null)}
                          >
                            Contact us
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      {isLoadingBlogs ? (
                        <>
                          <div className="flex flex-col animate-pulse">
                            <div className="w-full h-48 bg-gray-200 rounded mb-4"></div>
                            <div className="h-4 bg-gray-200 rounded mb-2"></div>
                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                          </div>
                          <div className="flex flex-col animate-pulse">
                            <div className="w-full h-48 bg-gray-200 rounded mb-4"></div>
                            <div className="h-4 bg-gray-200 rounded mb-2"></div>
                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                          </div>
                        </>
                      ) : (
                        displayBlogPosts.slice(0, 2).map((post, index) => (
                          <div
                            key={post.slug || index}
                            className="flex flex-col"
                          >
                            <div className="w-full h-48 overflow-hidden mb-4">
                              <Image
                                src={
                                  post.cover_image?.url ||
                                  `/blog_image${index + 1}.png`
                                }
                                alt={
                                  post.cover_image?.alternativeText ||
                                  post.title
                                }
                                width={200}
                                height={128}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <div className="flex items-center space-x-2 mb-2">
                                <span className="text-orange-600 text-xs px-2 py-1 rounded-full">
                                  Featured
                                </span>
                                <span className="text-blue-600 text-sm">
                                  {post.time_to_read} min read
                                </span>
                              </div>
                              <h4 className="text-gray-900 font-medium text-sm mb-2">
                                {post.title}
                              </h4>
                              <Link
                                href={
                                  post.slug ? `/blog/${post.slug}` : "/blog"
                                }
                                className="text-gray-900 hover:text-blue-600 hover:underline text-sm font-bold underline"
                                onClick={() => setActiveDropdown(null)}
                              >
                                READ MORE
                              </Link>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => handleDropdownClick("getinvolved")}
              className={`flex items-center space-x-1 cursor-pointer ${hoverColor} transition-colors py-6`}
            >
              <span className="text-sm xl:text-base">Get involved</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  activeDropdown === "getinvolved" ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeDropdown === "getinvolved" && (
              <div className="absolute top-full left-0 w-[45rem] z-50">
                <div className="bg-white rounded-lg shadow-xl border border-gray-100 p-6 mt-2">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="space-y-4 mb-6">
                        <div className="flex-shrink-0">
                          <Zap className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Get involved
                          </h3>
                          <p className="text-gray-600 text-sm mb-4">
                            Discover new opportunities for collaboration and
                            mutual growth with SEO Africa.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Link
                          href="/get-involved#become-partner"
                          className="block text-gray-900 hover:text-blue-600 hover:underline transition-colors"
                          onClick={handlePartnerClick}
                        >
                          Become a partner
                        </Link>

                        <div className="flex items-center space-x-2">
                          <Link
                            href="/get-involved#volunteer-section"
                            className="text-gray-900 hover:text-blue-600 hover:underline transition-colors"
                            onClick={handleVolunteerClick}
                          >
                            Volunteer with us
                          </Link>

                          <div className="flex items-center space-x-2">
                            <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] text-white text-xs px-2 py-1 rounded-full font-medium">
                              New
                            </span>
                          </div>
                        </div>

                        <Link
                          href="https://forms.gle/gEtqD5A7X3UmVxz66"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-gray-900 hover:text-blue-600 hover:underline transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          Join our talent network
                        </Link>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-400 to-pink-500 text-white p-4">
                      <h3 className="text-xl md:text-3xl font-bold mb-2">
                        Support the future of Africa's corporate leadership.
                        Donate to SEO Africa.
                      </h3>
                      <button
                        className="bg-white text-gray-900 px-4 py-2 hover:bg-gray-100 transition-colors font-bold flex items-center space-x-2 mt-4"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <Link href={"/donate"}>Donate now</Link>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/contact-us"
            className={`cursor-pointer ${hoverColor} transition-colors`}
          >
            <span className="text-sm xl:text-base">Contact us</span>
          </Link>
        </div>

        <div className="hidden xl:flex items-center space-x-3 lg:space-x-4">
          <CustomGoogleTranslate />

          <Link href="/donate" className={donateButtonClasses}>
            <span className="text-sm xl:text-base">Donate</span>
            <Heart className="w-3 h-3 lg:w-4 lg:h-4" />
          </Link>

          <Link
            href={"/get-involved"}
            className="bg-white text-black px-4 lg:px-6 py-2 rounded-full hover:bg-gray-100 transition-colors text-sm"
          >
            Join us
          </Link>
        </div>

        <button
          className={`xl:hidden ${mobileMenuButtonColor} p-2`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-20 md:top-28 bg-black/70 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="px-4 py-6">
            <div className="border-b border-gray-200 pb-4 mb-4">
              <button
                onClick={() => handleMobileDropdownClick("about")}
                className="flex items-center justify-between w-full text-left py-3 text-lg font-medium text-white"
              >
                <span>About us</span>
                <ChevronRight
                  className={`w-5 h-5 transition-transform ${
                    activeMobileDropdown === "about" ? "rotate-90" : ""
                  }`}
                />
              </button>

              {activeMobileDropdown === "about" && (
                <div className="pl-4 space-y-3 mt-3 text-white">
                  <Link
                    href="/about-us"
                    className="block text-white hover:text-blue-600 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About SEO Africa
                  </Link>
                  <div className="flex items-center space-x-2">
                    <Link
                      href="/our-team"
                      className="text-white hover:text-blue-600 py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Our team & partners
                    </Link>
                    <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] text-white text-xs px-2 py-1 rounded-full font-medium">
                      New
                    </span>
                  </div>
                  <Link
                    href="/impact"
                    className="block text-white hover:text-blue-600 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our impact & coverage
                  </Link>
                  <Link
                    href="/faq"
                    className="block text-white hover:text-blue-600 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    FAQs
                  </Link>
                  <Link
                    href="/donate"
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Donate</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>

            <div className="border-b border-gray-200 pb-4 mb-4">
              <button
                onClick={() => handleMobileDropdownClick("programmes")}
                className="flex items-center justify-between w-full text-left py-3 text-lg font-medium text-white"
              >
                <span>Our Programmes</span>
                <ChevronRight
                  className={`w-5 h-5 transition-transform ${
                    activeMobileDropdown === "programmes" ? "rotate-90" : ""
                  }`}
                />
              </button>

              {activeMobileDropdown === "programmes" && (
                <div className="pl-4 space-y-3 mt-3">
                  <Link
                    href="/our-programmes"
                    className="block text-white hover:text-blue-600 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    All Programmes
                  </Link>
                  <div className="flex items-center space-x-2">
                    <Link
                      href="/career-opportunities"
                      className="text-white hover:text-blue-600 py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Career opportunities
                    </Link>
                    <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] text-white text-xs px-2 py-1 rounded-full font-medium">
                      New
                    </span>
                  </div>
                  <Link
                    href="/our-programmes"
                    className="block text-white hover:text-blue-600 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    SEO Africa On-campus
                  </Link>
                  <Link
                    href="/our-programmes"
                    className="block text-white hover:text-blue-600 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    MBA Launchpad
                  </Link>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Join our talent network
                    </h4>
                    <p className="text-sm text-black mb-3">
                      Join over 32,000 students and graduates in our community.
                    </p>
                    <Link
                      href="https://forms.gle/gEtqD5A7X3UmVxz66"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Join now
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="border-b border-gray-200 pb-4 mb-4">
              <button
                onClick={() => handleMobileDropdownClick("resources")}
                className="flex items-center justify-between w-full text-left py-3 text-lg font-medium text-white"
              >
                <span>Resources</span>
                <ChevronRight
                  className={`w-5 h-5 transition-transform ${
                    activeMobileDropdown === "resources" ? "rotate-90" : ""
                  }`}
                />
              </button>

              {activeMobileDropdown === "resources" && (
                <div className="pl-4 space-y-4 mt-3">
                  <div>
                    <h4 className="font-semibold text-white mb-2 flex items-center space-x-2">
                      <div className="relative h-4 w-4 flex-shrink-0">
                        <Image src={"/telescope.svg"} alt="" fill />
                      </div>
                      <span>Learn</span>
                    </h4>
                    <div className="space-y-2 ml-6">
                      <Link
                        href="/faq"
                        className="block text-white hover:text-blue-600 py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        FAQs
                      </Link>
                      <Link
                        href="/our-team"
                        className="block text-white hover:text-blue-600 py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Our team & partners
                      </Link>
                      <Link
                        href="/impact"
                        className="block text-white hover:text-blue-600 py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Our impacts/Coverage
                      </Link>
                      <Link
                        href="/blog"
                        className="block text-white hover:text-blue-600 py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Our blog
                      </Link>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2 flex items-center space-x-2">
                      <Heart className="w-4 h-4 text-blue-600" />
                      <span>Community</span>
                    </h4>
                    <div className="space-y-2 ml-6">
                      <Link
                        href="/impact#testimonials"
                        className="block text-white hover:text-blue-600 py-1"
                        onClick={handleAlumniTestimonialsClick}
                      >
                        Alumni testimonials
                      </Link>
                      <Link
                        href="/seo-cares"
                        className="block text-white hover:text-blue-600 py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        SEOCares projects
                      </Link>
                      <Link
                        href="/career-opportunities"
                        className="block text-white hover:text-blue-600 py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        SEO career opportunities
                      </Link>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2 flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-blue-600" />
                      <span>Get involved</span>
                    </h4>
                    <div className="space-y-2 ml-6">
                      <Link
                        href="https://forms.gle/gEtqD5A7X3UmVxz66"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-white hover:text-blue-600 py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Join our talent network
                      </Link>
                      <div className="flex items-center space-x-2">
                        <Link
                          href="/our-programmes"
                          className="text-white hover:text-blue-600 py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Our programmes
                        </Link>
                        <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] text-white text-xs px-2 py-1 rounded-full font-medium">
                          New
                        </span>
                      </div>
                      <Link
                        href="/donate"
                        className="block text-white hover:text-blue-600 py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Donate to SEO Africa
                      </Link>
                      <Link
                        href="/contact-us"
                        className="block text-white hover:text-blue-600 py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Contact us
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="border-b border-gray-200 pb-4 mb-4">
              <button
                onClick={() => handleMobileDropdownClick("getinvolved")}
                className="flex items-center justify-between w-full text-left py-3 text-lg font-medium text-white"
              >
                <span>Get involved</span>
                <ChevronRight
                  className={`w-5 h-5 transition-transform ${
                    activeMobileDropdown === "getinvolved" ? "rotate-90" : ""
                  }`}
                />
              </button>

              {activeMobileDropdown === "getinvolved" && (
                <div className="pl-4 space-y-3 mt-3">
                  <Link
                    href="/get-involved#become-partner"
                    className="block text-white hover:text-blue-600 py-2"
                    onClick={handlePartnerClick}
                  >
                    Become a partner
                  </Link>
                  <div className="flex items-center space-x-2">
                    <Link
                      href="/get-involved#volunteer-section"
                      className="text-white hover:text-blue-600 py-2"
                      onClick={handleVolunteerClick}
                    >
                      Volunteer with us
                    </Link>
                    <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] text-white text-xs px-2 py-1 rounded-full font-medium">
                      New
                    </span>
                  </div>
                  <Link
                    href="https://forms.gle/gEtqD5A7X3UmVxz66"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white hover:text-blue-600 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Join our talent network
                  </Link>

                  <div className="mt-4 p-4 bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Support SEO Africa
                    </h4>
                    <p className="text-sm text-black mb-3">
                      Support the future of Africa's corporate leadership.
                    </p>
                    <Link
                      href="/donate"
                      className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>Donate now</span>
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="pb-4 mb-4">
              <Link
                href="/contact-us"
                className="block py-3 text-lg font-medium text-white hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact us
              </Link>
            </div>

            <div className="space-y-4 pt-6 border-t border-gray-200">
              <CustomGoogleTranslate />

              <div className="space-y-3">
                <Link
                  href="/donate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center bg-transparent border-2 border-gray-400 text-white px-6 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-colors font-medium"
                >
                  Donate ❤️
                </Link>

                <Link
                  href="/get-involved"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center bg-gray-600 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium"
                >
                  Join us
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
