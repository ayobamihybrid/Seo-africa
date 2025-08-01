"use client";

import React from "react";
import Image from "next/image";
import useScrollAnimation from "../hooks/useScrollAnimation";

interface JoinTalentNetworkProps {
  title?: string;
  description?: string;
  memberCount?: string;
  ctaText?: string;
  websiteUrl?: string;
  backgroundImage?: string;
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
  title = "Find opportunities in SEO Africa. Join our talent network.",
  description = "We curate a list of skilled individuals and professionals within our community that we like to connect to appropriate work opportunities from time to time. Join our talent network and receive first hand information about our activities and opportunities.",
  memberCount = "+32k others",
  ctaText = "Join our talent network",
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
                {title}{" "}
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
              {ctaText}
            </button>
          </div>

          <div
            ref={descriptionAnimation.ref}
            className={`text-white ${descriptionAnimation.animationClass}`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="border-t border-b border-white/20 py-8">
              <p className="text-base md:text-xl leading-relaxed text-gray-200">
                {description}
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
              src="/JoinTalentNetwork.png"
              alt="Join Talent Network"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTalentNetwork;
export type { JoinTalentNetworkProps };
