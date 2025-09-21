"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Donate from "../components/Donate";
import Footer from "../components/Footer";
import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import ProofOfCommitment from "../components/ProofOfCommitment";
import TestimonialsSlider from "../components/TestimonialSlider";
import FindOpportunities from "../components/FindOpportunities";
import { getStrapiImageUrl } from "../lib/strapi";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ImpactPageData {
  id: number;
  hero_section: {
    id: number;
    title: string;
    description: string;
    cta_text: string;
    accent_text: string;
    cover_image: any;
  };
  section_image: any;
  coverage_section: {
    id: number;
    accent_text: string;
    title: string;
    description: string;
  };
  testimonial_section: {
    id: number;
    accent_text: string;
    title: string;
    cta_text: string;
    featured_testimonial_video_link: string | null;
    featured_testimonial: {
      id: number;
      body: string;
      name: string;
      position: string;
      avatar: any;
    };
    video_links: Array<{
      id: number;
      url: string;
    }>;
  };
  talent_cta_section: {
    id: number;
    title: string;
    cta_text: string;
    body: string;
    cover_image: any;
  };
  donate_section: {
    id: number;
    title: string;
    description: string;
    cta_text: string;
  };
}

interface StatisticsSection {
  id: number;
  title: string;
  top_cards: any[];
  middle_cards: any[];
  bottom_cards: any[];
}

interface CountryOfOperation {
  id: number;
  documentId: string;
  name: string;
  flag?: {
    id: number;
    name: string;
    alternativeText?: string;
    width: number;
    height: number;
    url: string;
    formats?: {
      thumbnail?: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
}

interface ImpactClientProps {
  impactData: ImpactPageData | null;
  statisticsData: StatisticsSection | null;
  countriesData: CountryOfOperation[];
}

const ImpactClient: React.FC<ImpactClientProps> = ({
  impactData,
  statisticsData,
  countriesData,
}) => {
  const headerBadgeAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });
  const headerTitleAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });
  const headerDescriptionAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });
  const heroImageAnimation = useScrollAnimation({
    animationType: "zoom-in",
    threshold: 0.2,
  });
  const introTextAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });

  const fallbackData = {
    hero_section: {
      accent_text: "Our impact",
      title:
        "From classroom to career: The ripple effect of visionary leadership.",
      description:
        "Explore the data, stories, and milestones behind our mission to transform potential into leadership.",
      cta_text: "Join our talent network",
      cover_image: null,
    },
    coverage_section: {
      accent_text: "Our Coverage",
      title:
        "Nurturing Africa's future across 17 Sub-Saharan countries and counting.",
      description:
        "Our goal to break systemic barriers to opportunities and leadership in the corporate world across the sub-Sahara has led us to develop a presence in these countries:",
    },
    talent_cta_section: {
      title: "Find opportunities in SEO Africa. Join our talent network.",
      cta_text: "Join our talent network",
      body: "Join over 32,000 students and graduates in our community. Join our talent network.",
      cover_image: undefined,
    },
    donate_section: {
      id: 1,
      title: "Make an uncommon impact. Support our work at SEO Africa",
      description:
        "SEO Africa has been the propelling wind behind thousands of successful careers and leadership stories in young Africans for more than 13 years now. You can help us be there for thousands more!",
      cta_text: "Donate Now",
    },
  };

  const fallbackCountries: CountryOfOperation[] = [
    {
      id: 1,
      documentId: "fallback-1",
      name: "Uganda",
      flag: {
        id: 1,
        name: "Uganda flag",
        alternativeText: "Uganda flag",
        width: 24,
        height: 24,
        url: "/Uganda.svg",
      },
    },
    {
      id: 2,
      documentId: "fallback-2",
      name: "Zimbabwe",
      flag: {
        id: 2,
        name: "Zimbabwe flag",
        alternativeText: "Zimbabwe flag",
        width: 24,
        height: 24,
        url: "/Zimbabwe.svg",
      },
    },
    {
      id: 3,
      documentId: "fallback-3",
      name: "Zambia",
      flag: {
        id: 3,
        name: "Zambia flag",
        alternativeText: "Zambia flag",
        width: 24,
        height: 24,
        url: "/Zambia.svg",
      },
    },
  ];

  const heroData = impactData?.hero_section || fallbackData.hero_section;
  const coverageData =
    impactData?.coverage_section || fallbackData.coverage_section;
  const talentData =
    impactData?.talent_cta_section || fallbackData.talent_cta_section;
  const donateData = impactData?.donate_section || fallbackData.donate_section;

  const displayCountries =
    countriesData.length > 0 ? countriesData : fallbackCountries;

  const heroImageSrc = heroData.cover_image
    ? getStrapiImageUrl(heroData.cover_image)
    : "/ourteam1.png";

  const getFlagImageUrl = (country: CountryOfOperation) => {
    if (!country.flag || !country.flag.url) {
      return "/default-flag.svg";
    }

    if (country.flag.url.startsWith("http")) {
      return country.flag.url;
    }
    return country.flag.url;
  };

  // multiple sets for continuous scrolling
  const createScrollingCountries = (
    countries: CountryOfOperation[],
    sets: number = 19
  ) => {
    const result = [];
    for (let i = 0; i < sets; i++) {
      result.push(...countries);
    }
    return result;
  };

  const scrollingCountries = createScrollingCountries(displayCountries);

  return (
    <div className="bg-[#131B3E]">
      <Navbar />

      <section className="bg-[#131B3E] px-4 sm:px-6 lg:px-12 py-16 lg:py-24 pb-48 lg:pb-64 ">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 lg:mb-24">
            <div
              ref={headerBadgeAnimation.ref}
              className={`mb-8 ${headerBadgeAnimation.animationClass}`}
            >
              <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] bg-clip-text text-transparent text-xl font-bold">
                {heroData.accent_text}
              </span>
            </div>

            <h1
              ref={headerTitleAnimation.ref}
              className={`text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-5 lg:mb-7 max-w-5xl ${headerTitleAnimation.animationClass}`}
              style={{ transitionDelay: "200ms" }}
            >
              {heroData.title}
            </h1>

            <div
              ref={headerDescriptionAnimation.ref}
              className={`max-w-xl space-y-6 ${headerDescriptionAnimation.animationClass}`}
              style={{ transitionDelay: "400ms" }}
            >
              <p className="text-white/90 text-lg md:text-2xl leading-relaxed">
                {heroData.description}
              </p>
            </div>

            <Link
              href={"/career-opportunities"}
              className="mt-7 bg-white w-fit p-3 rounded-lg text-black font-bold flex items-center gap-2"
            >
              <p>Join our talent network</p>

              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 lg:pb-24 relative">
        <div className="absolute top-0 left-0 right-0 px-4 sm:px-6 lg:px-12 -translate-y-1/2">
          <div className="max-w-7xl mx-auto">
            <div
              ref={heroImageAnimation.ref}
              className={`relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-lg overflow-hidden shadow-2xl ${heroImageAnimation.animationClass}`}
              style={{ transitionDelay: "600ms" }}
            >
              <Image
                src={heroImageSrc}
                alt="SEO Africa team networking event"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />

              <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-b-lg"></div>
            </div>
          </div>
        </div>

        <div className="pt-40 sm:pt-44 md:pt-60 lg:pt-64 xl:pt-[25rem]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 ">
            <div
              ref={introTextAnimation.ref}
              className={`mt-8 md:mt-20 mb-8 text-base md:text-xl ${introTextAnimation.animationClass}`}
            >
              <div className="text-black space-y-4 ">
                <h2 className="text-2xl font-bold">
                  Our impact: Measuring Change That Matters
                </h2>

                <p>
                  At SEO Africa, impact isn't just a metric—it's a movement.
                  From empowering over 39,000 students to launching social
                  initiatives and shaping future-ready professionals, our
                  programmes are driving real change across the continent. This
                  page showcases the numbers, stories, and partnerships that
                  reflect our commitment to transforming potential into purpose.
                </p>
              </div>
            </div>

            {statisticsData && (
              <ProofOfCommitment
                statisticsData={statisticsData}
                impact={true}
              />
            )}

            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px] w-full rounded-lg overflow-hidden">
              <Image
                src={"/blog_image2.png"}
                alt="Blog image showcasing our impact"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <style jsx>{`
          @keyframes scroll-right {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(0%);
            }
          }

          @keyframes scroll-left {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-scroll-right {
            animation: scroll-right 30s linear infinite;
          }

          .animate-scroll-left {
            animation: scroll-left 30s linear infinite;
          }

          .animate-scroll-right:hover,
          .animate-scroll-left:hover {
            animation-play-state: paused;
          }

          @media (max-width: 640px) {
            .animate-scroll-right {
              animation: scroll-right 20s linear infinite;
            }
            .animate-scroll-left {
              animation: scroll-left 20s linear infinite;
            }
          }
        `}</style>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] bg-clip-text text-transparent text-lg sm:text-xl font-bold">
                {coverageData.accent_text}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#131B3E] leading-tight mb-8 max-w-4xl mx-auto">
              {coverageData.title}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              {coverageData.description}
            </p>
          </div>

          <div className="relative overflow-hidden mb-16">
            <div className="flex animate-scroll-right mb-4 sm:mb-8">
              <div className="flex space-x-3 sm:space-x-6 whitespace-nowrap">
                {scrollingCountries.map((country, index) => {
                  if (!country || !country.flag || !country.flag.url) {
                    return null;
                  }

                  return (
                    <div
                      key={`${country.documentId}-${index}`}
                      className={`flex items-center space-x-2 sm:space-x-3 px-3 sm:px-6 py-2 sm:py-3 rounded-full border ${
                        index % 3 === 0
                          ? "bg-gray-100"
                          : index % 3 === 1
                          ? "bg-white border-gray-200 shadow-sm"
                          : "bg-gray-100"
                      }`}
                    >
                      <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden">
                        <Image
                          src={getFlagImageUrl(country)}
                          alt={`${country.name} flag`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span
                        className={`font-medium text-sm sm:text-base ${
                          index % 3 === 2 ? "text-gray-500" : "text-[#131B3E]"
                        }`}
                      >
                        {country.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-full h-0.5 bg-gray-200 my-8 sm:my-16" />

          <div className="mt-8 sm:mt-20 text-center">
            <div className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                {displayCountries.map((country, index) => (
                  <React.Fragment key={country.documentId}>
                    <span>{country.name}</span>
                    {index < displayCountries.length - 1 && (
                      <span className="hidden sm:inline">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <TestimonialsSlider />
      </section>

      <div className="bg-white">
        <FindOpportunities
          talentData={talentData}
          description={talentData.body}
        />
      </div>

      <Donate donateData={donateData} />

      <Footer />
    </div>
  );
};

export default ImpactClient;
