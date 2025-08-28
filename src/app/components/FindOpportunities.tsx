"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import Link from "next/link";
import { getStrapiImageUrl } from "../lib/strapi";

interface TalentData {
  title: string;
  cta_text: string;
  cover_image?: {
    url: string;
    alternativeText: string | null;
  };
}

interface FindOpportunitiesProps {
  talentData?: TalentData;
  description?: string;
}

const FindOpportunities: React.FC<FindOpportunitiesProps> = ({
  talentData,
  description = "Join over 32,000 students and graduates in our community. Join our talent network.",
}) => {
  const finalCtaAnimation = useScrollAnimation({
    animationType: "zoom-in",
    threshold: 0.2,
  });

  const defaultTitle =
    "Find opportunities in SEO Africa. Join our talent network.";
  const defaultCtaText = "Join our talent network";
  const defaultImage = "/content.png";

  const title = talentData?.title || defaultTitle;
  const ctaText = talentData?.cta_text || defaultCtaText;
  const imageUrl = talentData?.cover_image
    ? getStrapiImageUrl(talentData.cover_image) || defaultImage
    : defaultImage;
  const imageAlt =
    talentData?.cover_image?.alternativeText ||
    "Professional African business people collaborating with tablet";

  return (
    <div
      ref={finalCtaAnimation.ref}
      className={`relative py-16 lg:py-24 px-4 sm:px-6 lg:px-12 ${finalCtaAnimation.animationClass}`}
      style={{ transitionDelay: "600ms" }}
    >
      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden bg-blue-600">
        <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-[500px]">
          <div className="px-4 sm:px-6 lg:px-12 py-16 lg:py-24 flex flex-col justify-center relative z-10 order-2 lg:order-1">
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
                <defs>
                  <pattern
                    id="grid-pattern"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="white"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                <path
                  d="M0,0 L400,300"
                  stroke="white"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
                <path
                  d="M100,0 L500,300"
                  stroke="white"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
                <path
                  d="M-100,0 L300,300"
                  stroke="white"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </svg>
            </div>

            <div className="relative z-20">
              <h2 className="text-white text-3xl lg:text-4xl xl:text-5xl font-light leading-tight mb-6">
                {title}
              </h2>

              <p className="text-white/90 text-lg mb-8">{description}</p>

              <Link
                href="/career-opportunities"
                className="bg-white text-black hover:bg-gray-50 px-5 md:px-8 py-2 md:py-4 rounded-lg text-lg font-medium transition-colors duration-200 inline-flex items-center gap-2"
              >
                {ctaText}
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto order-1 lg:order-2">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover object-center"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindOpportunities;
