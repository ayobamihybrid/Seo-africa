"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Heart,
  Menu,
  MessageSquare,
  BookOpen,
  Zap,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  details?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ details = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const textColor = details ? "text-black" : "text-white";
  const hoverColor = details ? "hover:text-gray-600" : "hover:text-gray-300";
  const donateButtonClasses = details
    ? "flex items-center space-x-2 bg-transparent border border-black text-black px-4 lg:px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors text-sm"
    : "flex items-center space-x-2 bg-transparent border border-white text-white px-4 lg:px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors text-sm";
  const mobileMenuButtonColor = details ? "text-black" : "text-white";

  const handleDropdownClick = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
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

  return (
    <>
      <nav
        className="max-w-[90rem] mx-auto relative z-10 flex items-center justify-between px-4 sm:px-6 py-4 lg:px-12"
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
              <div className="absolute top-full left-0 w-[900px] z-50">
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
                          className="py-2 text-gray-900 hover:text-blue-600 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className="text-base">About SEO Africa</span>
                        </Link>

                        <div className="mt-5 flex items-center gap-2 py-2">
                          <Link
                            href="/our-team"
                            className="text-gray-900 hover:text-blue-600 transition-colors text-base"
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
                          className="block text-gray-900 hover:text-blue-600 transition-colors py-2 text-base"
                          onClick={() => setActiveDropdown(null)}
                        >
                          Our impact & coverage
                        </Link>

                        <Link
                          href="/faq"
                          className="block text-gray-900 hover:text-blue-600 transition-colors py-2 text-base"
                          onClick={() => setActiveDropdown(null)}
                        >
                          FAQs
                        </Link>

                        <Link
                          href="/donate"
                          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors py-2 text-base font-medium"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span>Donate</span>
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </div>

                      <div className="flex items-center space-x-4 mt-12">
                        <div className="relative h-8 w-8 flex-shrink-0">
                          <Image src={"/instagram.svg"} alt="" fill />
                        </div>

                        <div className="relative h-8 w-8 flex-shrink-0">
                          <Image src={"/facebook.svg"} alt="" fill />
                        </div>

                        <div className="relative h-8 w-8 flex-shrink-0">
                          <Image src={"/twitter.svg"} alt="" fill />
                        </div>

                        <div className="relative h-8 w-8 flex-shrink-0">
                          <Image src={"/linkedin.svg"} alt="" fill />
                        </div>
                      </div>
                    </div>

                    <div className="col-span-7 p-9 flex flex-col rounded-lg overflow-hidden">
                      <div className="relative flex-1 min-h-[350px]">
                        <Image
                          src={"/blog_image1.png"}
                          alt=""
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
                              1 min read
                            </span>
                          </div>
                        </div>

                        <h4 className="text-gray-900 font-semibold text-lg mb-3 leading-tight">
                          Alumni Stories: How SEO Africa is empowering the next
                          wave of future leaders
                        </h4>

                        <Link
                          href="#"
                          className="inline-flex items-center text-gray-900 hover:text-blue-600 text-sm font-bold tracking-wider border-b-2 border-gray-900 hover:border-blue-600 transition-colors pb-1"
                          onClick={() => setActiveDropdown(null)}
                        >
                          READ MORE
                        </Link>
                      </div>
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
                          className="block text-gray-900 hover:text-blue-600 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          All Programmes
                        </Link>
                        <div className="flex items-center space-x-2">
                          <Link
                            href="/career-opportunities"
                            className="text-gray-900 hover:text-blue-600 transition-colors"
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
                          href="/"
                          className="block text-gray-900 hover:text-blue-600 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          SEO Africa On-campus
                        </Link>
                        <Link
                          href="/"
                          className="block text-gray-900 hover:text-blue-600 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          MBA Launchpad
                        </Link>
                      </div>

                      <div className="flex items-center space-x-4 mt-12">
                        <div className="relative h-8 w-8 flex-shrink-0">
                          <Image src={"/instagram.svg"} alt="" fill />
                        </div>

                        <div className="relative h-8 w-8 flex-shrink-0">
                          <Image src={"/facebook.svg"} alt="" fill />
                        </div>

                        <div className="relative h-8 w-8 flex-shrink-0">
                          <Image src={"/twitter.svg"} alt="" fill />
                        </div>

                        <div className="relative h-8 w-8 flex-shrink-0">
                          <Image src={"/linkedin.svg"} alt="" fill />
                        </div>
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
                        Join our talent network
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
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[90vw] max-w-[75rem] z-50">
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
                            href="/faqs"
                            className="block text-gray-900 hover:text-blue-600 transition-colors text-sm"
                            onClick={() => setActiveDropdown(null)}
                          >
                            FAQs
                          </Link>
                          <Link
                            href="/about-us"
                            className="block text-gray-900 hover:text-blue-600 transition-colors text-sm"
                            onClick={() => setActiveDropdown(null)}
                          >
                            About us
                          </Link>
                          <Link
                            href="/team-partners"
                            className="block text-gray-900 hover:text-blue-600 transition-colors text-sm"
                            onClick={() => setActiveDropdown(null)}
                          >
                            Our team & partners
                          </Link>
                          <Link
                            href="/impact-coverage"
                            className="block text-gray-900 hover:text-blue-600 transition-colors text-sm"
                            onClick={() => setActiveDropdown(null)}
                          >
                            Our impacts/Coverage
                          </Link>
                          <Link
                            href="/blog"
                            className="block text-gray-900 hover:text-blue-600 transition-colors text-sm"
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
                            href="/alumni-testimonials"
                            className="block text-gray-900 hover:text-blue-600 transition-colors text-sm"
                            onClick={() => setActiveDropdown(null)}
                          >
                            Alumni testimonials
                          </Link>
                          <Link
                            href="/seocares-projects"
                            className="block text-gray-900 hover:text-blue-600 transition-colors text-sm"
                            onClick={() => setActiveDropdown(null)}
                          >
                            SEOCares projects
                          </Link>
                          <Link
                            href="/events-updates"
                            className="block text-gray-900 hover:text-blue-600 transition-colors text-sm"
                            onClick={() => setActiveDropdown(null)}
                          >
                            Events & updates
                          </Link>
                          <Link
                            href="/guides-tips"
                            className="block text-gray-900 hover:text-blue-600 transition-colors text-sm"
                            onClick={() => setActiveDropdown(null)}
                          >
                            SEO Africa guides & tips
                          </Link>
                          <Link
                            href="/career-opportunities"
                            className="block text-gray-900 hover:text-blue-600 transition-colors text-sm"
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
                            href="/become-partner"
                            className="block text-gray-900 hover:text-blue-600 transition-colors text-sm"
                            onClick={() => setActiveDropdown(null)}
                          >
                            Become a partner
                          </Link>
                          <Link
                            href="/join-talent-network"
                            className="block text-gray-900 hover:text-blue-600 transition-colors text-sm"
                            onClick={() => setActiveDropdown(null)}
                          >
                            Join our talent network
                          </Link>
                          <div className="flex items-center space-x-2">
                            <Link
                              href="/our-programmes"
                              className="text-gray-900 hover:text-blue-600 transition-colors text-sm"
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
                            className="block text-gray-900 hover:text-blue-600 transition-colors text-sm"
                            onClick={() => setActiveDropdown(null)}
                          >
                            Donate to SEO Africa
                          </Link>
                          <Link
                            href="/contact-us"
                            className="block text-gray-900 hover:text-blue-600 transition-colors text-sm"
                            onClick={() => setActiveDropdown(null)}
                          >
                            Contact us
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <div className="w-full h-48 overflow-hidden mb-4">
                          <Image
                            src="/blog_image1.png"
                            alt="Article thumbnail"
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
                              1 min read
                            </span>
                          </div>
                          <h4 className="text-gray-900 font-medium text-sm mb-2">
                            Why should I join SEO Africa?
                          </h4>
                          <Link
                            href="#"
                            className="text-gray-900 hover:text-blue-600 text-sm font-bold underline"
                            onClick={() => setActiveDropdown(null)}
                          >
                            READ MORE
                          </Link>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <div className="w-full h-48 overflow-hidden mb-4">
                          <Image
                            src="/blog_image1.png"
                            alt="Article thumbnail"
                            width={200}
                            height={128}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <span className=" text-orange-600 text-xs px-2 py-1 rounded-full">
                              Featured
                            </span>
                            <span className="text-blue-600 text-sm">
                              1 min read
                            </span>
                          </div>
                          <h4 className="text-gray-900 font-medium text-sm mb-2">
                            SEO Africa Application tips
                          </h4>
                          <Link
                            href="#"
                            className="text-gray-900 hover:text-blue-600 text-sm font-bold underline"
                            onClick={() => setActiveDropdown(null)}
                          >
                            READ MORE
                          </Link>
                        </div>
                      </div>
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
                          href="/become-partner"
                          className="block text-gray-900 hover:text-blue-600 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          Become a partner
                        </Link>
                        <div className="flex items-center space-x-2">
                          <Link
                            href="/volunteer"
                            className="text-gray-900 hover:text-blue-600 transition-colors"
                            onClick={() => setActiveDropdown(null)}
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
                          href="/join-talent-network"
                          className="block text-gray-900 hover:text-blue-600 transition-colors"
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
                        <span>Donate now</span>
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

        <div className="hidden sm:flex items-center space-x-3 lg:space-x-4">
          <div
            className={`flex items-center space-x-1 ${textColor} cursor-pointer ${hoverColor} transition-colors`}
          >
            <span className="text-sm">EN</span>
            <ChevronDown className="w-3 h-3" />
          </div>

          <Link href="/donate" className={donateButtonClasses}>
            <span className="text-sm xl:text-base">Donate</span>
            <Heart className="w-3 h-3 lg:w-4 lg:h-4" />
          </Link>

          <button className="bg-white text-black px-4 lg:px-6 py-2 rounded-full hover:bg-gray-100 transition-colors text-sm">
            Join us
          </button>
        </div>

        <button
          className={`sm:hidden ${mobileMenuButtonColor} p-2`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-sm z-20 px-4 py-6">
          <div className="flex flex-col space-y-4 text-white">
            <Link href="/about-us" className="py-2">
              About us
            </Link>

            <span className="py-2">Our Programmes</span>
            <span className="py-2">Resources</span>
            <span className="py-2">Get involved</span>
            <span className="py-2">Contact us</span>
            <div className="flex items-center justify-between pt-4 border-t border-white/20">
              <span>EN</span>
              <div className="flex space-x-3">
                <button className="bg-transparent border border-white text-white px-4 py-2 rounded-full text-sm">
                  Donate
                </button>
                <button className="bg-white text-black px-4 py-2 rounded-full text-sm">
                  Join us
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
