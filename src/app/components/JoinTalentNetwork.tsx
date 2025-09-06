"use client";

import React from "react";
import Image from "next/image";
import useScrollAnimation from "../hooks/useScrollAnimation";
import Link from "next/link";
import { getStrapiImageUrl } from "../lib/strapi";

interface TalentSection {
  id: number;
  title: string;
  description: string;
  cta_text: string;
  cover_image: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    url: string;
    formats?: {
      large?: { url: string; width: number; height: number };
      medium?: { url: string; width: number; height: number };
      small?: { url: string; width: number; height: number };
      thumbnail?: { url: string; width: number; height: number };
    };
  };
}

interface JoinTalentNetworkProps {
  talentData: TalentSection;
  memberCount?: string;
  websiteUrl?: string;
  onJoinClick?: () => void;
  className?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
  };
}

const JoinTalentNetwork: React.FC<JoinTalentNetworkProps> = ({
  talentData,
  memberCount = "+32k others",
  onJoinClick,
  className = "",
}) => {
  const logoAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });
  const titleAnimation = useScrollAnimation({
    animationType: "fade-left",
    threshold: 0.3,
  });
  const avatarsAnimation = useScrollAnimation({
    animationType: "zoom-in",
    threshold: 0.3,
  });
  const buttonAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });
  const descriptionAnimation = useScrollAnimation({
    animationType: "fade-right",
    threshold: 0.3,
  });
  const imageAnimation = useScrollAnimation({
    animationType: "zoom-in",
    threshold: 0.2,
  });

  const handleJoinClick = () => {
    if (onJoinClick) {
      onJoinClick();
    } else {
      console.log("Join talent network clicked");
    }
  };

  const coverImageUrl = talentData.cover_image
    ? getStrapiImageUrl(talentData.cover_image)
    : "/JoinTalentNetwork.png";

  return (
    <section className={`bg-gray-900 relative overflow-hidden ${className}`}>
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <div
              ref={logoAnimation.ref}
              className={`mb-8 ${logoAnimation.animationClass}`}
            >
              <div className="w-10 h-10 md:w-14 md:h-14 relative">
                <Image
                  src="/diamond.svg"
                  alt="diamond logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="mb-8">
              <h2
                ref={titleAnimation.ref}
                className={`text-2xl md:text-5xl font-bold leading-tight mb-6 ${titleAnimation.animationClass}`}
                style={{ transitionDelay: "200ms" }}
              >
                {talentData.title}{" "}
                <span
                  ref={avatarsAnimation.ref}
                  className={`inline-flex items-center gap-0 mt-1 md:mt-0 -ml-2 ${avatarsAnimation.animationClass}`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <span className="flex -space-x-2">
                    <Image
                      src="/joinnetwork1.png"
                      alt="Team member"
                      width={32}
                      height={32}
                      className="inline-block w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white object-cover"
                    />
                    <Image
                      src="/joinnetwork2.png"
                      alt="Team member"
                      width={32}
                      height={32}
                      className="inline-block w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white object-cover"
                    />
                    <Image
                      src="/joinnetwork3.png"
                      alt="Team member"
                      width={32}
                      height={32}
                      className="inline-block w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white object-cover"
                    />
                  </span>
                  <span className="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-medium px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm whitespace-nowrap">
                    {memberCount}
                  </span>
                </span>
              </h2>
            </div>

            <button
              ref={buttonAnimation.ref}
              onClick={handleJoinClick}
              className={`inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-base md:text-lg text-white font-semibold px-3 py-2 md:px-7 md:py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group ${buttonAnimation.animationClass}`}
              style={{ transitionDelay: "600ms" }}
            >
              <Link href="/career-opportunities">{talentData.cta_text}</Link>
            </button>
          </div>

          <div
            ref={descriptionAnimation.ref}
            className={`text-white ${descriptionAnimation.animationClass}`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="border-t border-b border-white/20 py-8">
              <p className="text-base md:text-xl leading-relaxed text-gray-200">
                {talentData.description}
              </p>
            </div>
          </div>
        </div>

        <div
          ref={imageAnimation.ref}
          className={`w-full mt-8 md:mt-16 ${imageAnimation.animationClass}`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] xl:h-[40rem]">
            <Image
              src={coverImageUrl}
              alt={
                talentData.cover_image?.alternativeText || "Join Talent Network"
              }
              fill
              className="object-cover rounded-lg"
            />

            <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-b-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTalentNetwork;
export type { JoinTalentNetworkProps, TalentSection };
