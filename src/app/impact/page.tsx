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

type Props = {};

const Impact = (props: Props) => {
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
                Our impact
              </span>
            </div>

            <h1
              ref={headerTitleAnimation.ref}
              className={`text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-5 lg:mb-7 max-w-5xl ${headerTitleAnimation.animationClass}`}
              style={{ transitionDelay: "200ms" }}
            >
              From classroom to career: The ripple effect of visionary
              leadership.
            </h1>

            <div
              ref={headerDescriptionAnimation.ref}
              className={`max-w-xl space-y-6 ${headerDescriptionAnimation.animationClass}`}
              style={{ transitionDelay: "400ms" }}
            >
              <p className="text-white/90 text-lg md:text-2xl leading-relaxed">
                Explore the data, stories, and milestones behind our mission to
                transform potential into leadership.
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
              className={`relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-lg overflow-hidden shadow-2xl ${heroImageAnimation.animationClass}`}
              style={{ transitionDelay: "600ms" }}
            >
              <Image
                src="/ourteam1.png"
                alt="SEO Africa team networking event"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
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
                  At SEO Africa, impact isn&apos;t just a metric—it&apos;s a
                  movement. From empowering over 39,000 students to launching
                  social initiatives and shaping future-ready professionals, our
                  programmes are driving real change across the continent. This
                  page showcases the numbers, stories, and partnerships that
                  reflect our commitment to transforming potential into purpose.
                </p>
              </div>
            </div>

            <ProofOfCommitment impact={true} />

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
                Our Coverage
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#131B3E] leading-tight mb-8 max-w-4xl mx-auto">
              Nurturing Africa's future across 17 Sub-Saharan countries and
              counting.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Our goal to break systemic barriers to opportunities and
              leadership in the corporate world across the sub-Sahara has led us
              to develop a presence in these countries:
            </p>
          </div>

          <div className="relative overflow-hidden mb-16">
            <div className="flex animate-scroll-right mb-4 sm:mb-8">
              <div className="flex space-x-3 sm:space-x-6 whitespace-nowrap">
                <div className="flex items-center space-x-2 sm:space-x-3 bg-gray-100 px-3 sm:px-6 py-2 sm:py-3 rounded-full border">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden flex items-center justify-center">
                    <span className="text-xs">🇧🇫</span>
                  </div>
                  <span className="text-[#131B3E] font-medium text-sm sm:text-base">
                    Burkina Faso
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-sm">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden flex items-center justify-center">
                    <span className="text-xs">🇨🇲</span>
                  </div>
                  <span className="text-[#131B3E] font-medium text-sm sm:text-base">
                    Cameroon
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-sm">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden">
                    <Image src={"/ethiopia.svg"} alt="Ethiopia flag" fill />
                  </div>
                  <span className="text-[#131B3E] font-medium text-sm sm:text-base">
                    Ethiopia
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-sm">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden">
                    <Image src={"/ghana.svg"} alt="Ghana flag" fill />
                  </div>
                  <span className="text-[#131B3E] font-medium text-sm sm:text-base">
                    Ghana
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-sm">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden">
                    <Image src={"/nigeria.svg"} alt="Nigeria flag" fill />
                  </div>
                  <span className="text-[#131B3E] font-medium text-sm sm:text-base">
                    Nigeria
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-sm">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden flex items-center justify-center">
                    <span className="text-xs">🇨🇮</span>
                  </div>
                  <span className="text-[#131B3E] font-medium text-sm sm:text-base">
                    Ivory Coast
                  </span>
                </div>

                <div className="flex items-center space-x-2 sm:space-x-3 bg-gray-100 px-3 sm:px-6 py-2 sm:py-3 rounded-full border">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden flex items-center justify-center">
                    <span className="text-xs">🇧🇫</span>
                  </div>
                  <span className="text-[#131B3E] font-medium text-sm sm:text-base">
                    Burkina Faso
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-sm">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden flex items-center justify-center">
                    <span className="text-xs">🇨🇲</span>
                  </div>
                  <span className="text-[#131B3E] font-medium text-sm sm:text-base">
                    Cameroon
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-sm">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden">
                    <Image src={"/ethiopia.svg"} alt="Ethiopia flag" fill />
                  </div>
                  <span className="text-[#131B3E] font-medium text-sm sm:text-base">
                    Ethiopia
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-sm">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden">
                    <Image src={"/ghana.svg"} alt="Ghana flag" fill />
                  </div>
                  <span className="text-[#131B3E] font-medium text-sm sm:text-base">
                    Ghana
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-sm">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden">
                    <Image src={"/nigeria.svg"} alt="Nigeria flag" fill />
                  </div>
                  <span className="text-[#131B3E] font-medium text-sm sm:text-base">
                    Nigeria
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-sm">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden flex items-center justify-center">
                    <span className="text-xs">🇨🇮</span>
                  </div>
                  <span className="text-[#131B3E] font-medium text-sm sm:text-base">
                    Ivory Coast
                  </span>
                </div>
              </div>
            </div>

            <div className="flex animate-scroll-left mb-4 sm:mb-8">
              <div className="flex space-x-3 sm:space-x-6 whitespace-nowrap">
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-sm">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden flex items-center justify-center">
                    <span className="text-xs">🇰🇪</span>
                  </div>
                  <span className="text-[#131B3E] font-medium text-sm sm:text-base">
                    Kenya
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-sm">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden">
                    <Image src={"/malawi.svg"} alt="Malawi flag" fill />
                  </div>
                  <span className="text-[#131B3E] font-medium text-sm sm:text-base">
                    Malawi
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-sm">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden">
                    <Image src={"/Mauritius.svg"} alt="Mauritius flag" fill />
                  </div>
                  <span className="text-[#131B3E] font-medium text-sm sm:text-base">
                    Mauritius
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-sm">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden">
                    <Image src={"/Rwanda.svg"} alt="Rwanda flag" fill />
                  </div>
                  <span className="text-[#131B3E] font-medium text-sm sm:text-base">
                    Rwanda
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-sm">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden">
                    <Image src={"/Senegal.svg"} alt="Senegal flag" fill />
                  </div>
                  <span className="text-[#131B3E] font-medium text-sm sm:text-base">
                    Senegal
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-sm">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden flex items-center justify-center">
                    <span className="text-xs">🇿🇦</span>
                  </div>
                  <span className="text-[#131B3E] font-medium text-sm sm:text-base">
                    South Africa
                  </span>
                </div>

                <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-sm">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden flex items-center justify-center">
                    <span className="text-xs">🇰🇪</span>
                  </div>
                  <span className="text-[#131B3E] font-medium text-sm sm:text-base">
                    Kenya
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-sm">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden">
                    <Image src={"/Malawi.svg"} alt="Malawi flag" fill />
                  </div>
                  <span className="text-[#131B3E] font-medium text-sm sm:text-base">
                    Malawi
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-sm">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden">
                    <Image src={"/Mauritius.svg"} alt="Mauritius flag" fill />
                  </div>
                  <span className="text-[#131B3E] font-medium text-sm sm:text-base">
                    Mauritius
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-sm">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden">
                    <Image src={"/Rwanda.svg"} alt="Rwanda flag" fill />
                  </div>
                  <span className="text-[#131B3E] font-medium text-sm sm:text-base">
                    Rwanda
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-sm">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden">
                    <Image src={"/Senegal.svg"} alt="Senegal flag" fill />
                  </div>
                  <span className="text-[#131B3E] font-medium text-sm sm:text-base">
                    Senegal
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-sm">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden flex items-center justify-center">
                    <span className="text-xs">🇿🇦</span>
                  </div>
                  <span className="text-[#131B3E] font-medium text-sm sm:text-base">
                    South Africa
                  </span>
                </div>
              </div>
            </div>

            <div className="flex animate-scroll-right">
              <div className="flex space-x-3 sm:space-x-6 whitespace-nowrap">
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-sm">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden flex items-center justify-center">
                    <span className="text-xs">🇸🇸</span>
                  </div>
                  <span className="text-[#131B3E] font-medium text-sm sm:text-base">
                    South Sudan
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-sm">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden">
                    <Image src={"/togo.svg"} alt="Togo flag" fill />
                  </div>
                  <span className="text-[#131B3E] font-medium text-sm sm:text-base">
                    Togo
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-sm">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden">
                    <Image src={"/uganda.svg"} alt="Uganda flag" fill />
                  </div>
                  <span className="text-[#131B3E] font-medium text-sm sm:text-base">
                    Uganda
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-sm">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden">
                    <Image src={"/Zimbabwe.svg"} alt="Zimbabwe flag" fill />
                  </div>
                  <span className="text-[#131B3E] font-medium text-sm sm:text-base">
                    Zimbabwe
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-gray-100 px-3 sm:px-6 py-2 sm:py-3 rounded-full border">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full relative overflow-hidden">
                    <Image src={"/Zambia.svg"} alt="Zambia flag" fill />
                  </div>
                  <span className="text-gray-500 font-medium text-sm sm:text-base">
                    Zambia
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-0.5 bg-gray-200 my-8 sm:my-16" />

          <div className="mt-8 sm:mt-20 text-center">
            <div className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                <span>Burkina Faso</span>
                <span className="hidden sm:inline">•</span>
                <span>Cameroon</span>
                <span className="hidden sm:inline">•</span>
                <span>Ethiopia</span>
                <span className="hidden sm:inline">•</span>
                <span>Ghana</span>
                <span className="hidden sm:inline">•</span>
                <span>Ivory Coast</span>
                <span className="hidden sm:inline">•</span>
                <span>Kenya</span>
                <span className="hidden sm:inline">•</span>
                <span>Malawi</span>
                <span className="hidden sm:inline">•</span>
                <span>Mauritius</span>
                <span className="hidden sm:inline">•</span>
                <span>Nigeria</span>
                <span className="hidden sm:inline">•</span>
                <span>Rwanda</span>
                <span className="hidden sm:inline">•</span>
                <span>Senegal</span>
                <span className="hidden sm:inline">•</span>
                <span>South Africa</span>
                <span className="hidden sm:inline">•</span>
                <span>South Sudan</span>
                <span className="hidden sm:inline">•</span>
                <span>Togo</span>
                <span className="hidden sm:inline">•</span>
                <span>Uganda</span>
                <span className="hidden sm:inline">•</span>
                <span>Zimbabwe</span>
                <span className="hidden sm:inline">•</span>
                <span>Zambia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <TestimonialsSlider />
      </section>

      <div className="bg-white">
        <FindOpportunities />
      </div>

      <Donate />

      <Footer />
    </div>
  );
};

export default Impact;
