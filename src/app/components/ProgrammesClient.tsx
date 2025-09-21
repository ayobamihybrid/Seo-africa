"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Donate from "../components/Donate";
import Footer from "../components/Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Link from "next/link";
import { getStrapiImageUrl } from "../lib/strapi";
import { Programme } from "./ProgrammeDetailClient";

interface ProgrammesPageData {
  id: number;
  content: string;
  hero_section: {
    id: number;
    accent_text: string;
    title: string;
    description: string;
    cover_image: any;
  };
  donate_cta_section: {
    id: number;
    title: string;
    description: string;
    cta_text: string;
  };
}

interface ProgrammesClientProps {
  programmesData: ProgrammesPageData | null;
  programmesList: Programme[];
}

const useTextReveal = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};

const TextReveal: React.FC<{ text: string; className?: string }> = ({
  text,
  className = "",
}) => {
  const { ref, isVisible } = useTextReveal(0.1);
  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`inline-block mr-2 transition-all duration-700 ease-out ${
            isVisible ? "text-gray-900" : "text-gray-300"
          }`}
          style={{
            transitionDelay: `${index * 50}ms`,
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

const ProgrammesClient: React.FC<ProgrammesClientProps> = ({
  programmesData: strapiData,
  programmesList,
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

  // Fallback data
  const fallbackData = {
    hero_section: {
      accent_text: "Our programmes",
      title:
        "From Career Readiness to Global Internships. Explore the Programmes Shaping Africa's Next Leaders",
      description:
        "We offer a range of high-impact programmes that cater to different interests and career paths, all tailored to provide practical knowledge and hands-on experience.",
      cover_image: null,
    },
    content:
      "SEO Africa offers a range of high-impact programmes designed to equip Africa's brightest students with the tools, training, and opportunities they need to lead. Whether you're seeking global internships, career readiness, mentorship, or social impact experience, there's a pathway here for you.",
    donate_cta_section: {
      id: 1,
      title: "Make an uncommon impact. Support our work at SEO Africa",
      description:
        "SEO Africa has been the propelling wind behind thousands of successful careers and leadership stories in young Africans for more than 13 years now. You can help us be there for thousands more!",
      cta_text: "Donate Now",
    },
  };

  const heroData = strapiData?.hero_section || fallbackData.hero_section;
  const contentData = strapiData?.content || fallbackData.content;
  const donateData =
    strapiData?.donate_cta_section || fallbackData.donate_cta_section;

  const displayProgrammes = programmesList.length > 0 ? programmesList : [];

  const heroImageSrc = heroData.cover_image
    ? getStrapiImageUrl(heroData.cover_image)
    : "/our_programmes.png";

  const getProgrammeImageUrl = (programme: Programme) => {
    if (programme.cover_image?.url) {
      return programme.cover_image.url.startsWith("http")
        ? programme.cover_image.url
        : programme.cover_image.url;
    }
    return "/our_programmes.png";
  };

  const getBgColor = (index: number) => {
    const colors = [
      "bg-blue-50",
      "bg-green-50",
      "bg-yellow-50",
      "bg-purple-50",
    ];
    return colors[index % colors.length];
  };

  const getBadgeColor = (title: string) => {
    if (title.toLowerCase().includes("nigeria")) {
      return "bg-[#067A57]";
    }
    if (title.toLowerCase().includes("ghana")) {
      return "bg-[#E0BE70]";
    }
    return "bg-blue-600";
  };

  const formatStartDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return `Starting ${date.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })}`;
    } catch {
      return dateString;
    }
  };

  const generateProgrammeSlug = (title: string): string => {
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();

    console.log(`Programme "${title}" -> ID: "${slug}"`);
    return slug;
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100);
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="bg-[#131B3E]">
      <Navbar />

      <section className="bg-[#131B3E] px-4 sm:px-6 lg:px-12 py-16 lg:py-24 pb-48 lg:pb-64">
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
              className={`text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-8 lg:mb-12 max-w-4xl ${headerTitleAnimation.animationClass}`}
              style={{ transitionDelay: "200ms" }}
            >
              {heroData.title}
            </h1>

            <div
              ref={headerDescriptionAnimation.ref}
              className={`max-w-4xl space-y-6 ${headerDescriptionAnimation.animationClass}`}
              style={{ transitionDelay: "400ms" }}
            >
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                {heroData.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 lg:pb-24 relative">
        <div className="absolute top-0 left-0 right-0 px-4 sm:px-6 lg:px-12 -translate-y-1/2">
          <div className="max-w-7xl mx-auto">
            <div
              ref={heroImageAnimation.ref}
              className={`relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl ${heroImageAnimation.animationClass}`}
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

        <div className="pt-48 md:pt-80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="rounded-lg p-8 lg:p-12">
              <div className="mb-8">
                <div className="flex-1">
                  <TextReveal
                    text={contentData}
                    className="text-gray-900 font-medium text-2xl md:text-4xl lg:text-[52px] leading-tight mb-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="space-y-16 lg:space-y-20">
            {displayProgrammes.map((programme, index) => {
              const slug = programme.slug;
              const bgColor = getBgColor(index);
              const badgeColor = getBadgeColor(programme.title);
              const programmeId = generateProgrammeSlug(programme.title);

              return (
                <div
                  key={programme.id}
                  className="mb-16 lg:mb-20"
                  id={programmeId}
                >
                  <div className="grid lg:grid-cols-2">
                    <div
                      className={`relative ${
                        index % 2 === 1 ? "lg:order-1" : ""
                      }`}
                    >
                      <div className="relative h-full min-h-[400px] overflow-hidden shadow-lg">
                        <Image
                          src={getProgrammeImageUrl(programme)}
                          alt={`${programme.title} - SEO Africa training session`}
                          fill
                          className="object-cover"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        />
                      </div>
                    </div>

                    <div
                      className={`${bgColor} p-8 flex flex-col justify-between ${
                        index % 2 === 1 ? "lg:order-2" : ""
                      }`}
                    >
                      <div className="flex-1">
                        <div className="mb-6">
                          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
                            {programme.title}
                          </h2>

                          {/* badge for specific programmes */}
                          {(programme.title.toLowerCase().includes("nigeria") ||
                            programme.title
                              .toLowerCase()
                              .includes("ghana")) && (
                            <div
                              className={`${badgeColor} w-fit p-2 rounded-full flex items-center gap-2 mb-6`}
                            >
                              <div className="flex items-center px-3 py-1">
                                <span className="text-white text-xl font-medium">
                                  {programme.title
                                    .toLowerCase()
                                    .includes("nigeria")
                                    ? "NG"
                                    : "GH"}
                                </span>
                              </div>
                              <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                                  <Image
                                    src="/team1.png"
                                    alt="Program participant"
                                    width={32}
                                    height={32}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                                  <Image
                                    src="/team2.png"
                                    alt="Program participant"
                                    width={32}
                                    height={32}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                                  <Image
                                    src="/team3.png"
                                    alt="Program participant"
                                    width={32}
                                    height={32}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center">
                                  <span className="text-gray-600 text-xs font-bold">
                                    +
                                  </span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        <p className="text-gray-700 text-lg leading-relaxed mb-8">
                          {programme.excerpt}
                        </p>

                        <div className="space-y-3 mb-8">
                          {programme.features.slice(0, 3).map((feature) => (
                            <div
                              key={feature.id}
                              className="flex items-center text-gray-600"
                            >
                              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                              <span>{feature.text}</span>
                            </div>
                          ))}
                          {programme.badge_info && (
                            <div className="flex items-center text-gray-600">
                              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                              <span>{programme.badge_info}</span>
                            </div>
                          )}
                          <div className="flex items-center text-gray-600">
                            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                            <span>{formatStartDate(programme.start_date)}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Link href={`/our-programmes/${programme.slug}`}>
                          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                            {programme.cta_text}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Donate donateData={donateData} />

      <Footer />
    </div>
  );
};

export default ProgrammesClient;
