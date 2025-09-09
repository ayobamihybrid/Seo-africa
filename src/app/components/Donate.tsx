"use client";

import React from "react";
import { Heart } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import Link from "next/link";

interface DonateSection {
  id: number;
  title: string;
  description: string;
  cta_text: string;
}

interface DonateProps {
  donateData: DonateSection;
  className?: string;
}

const Donate: React.FC<DonateProps> = ({ donateData, className = "" }) => {
  const backgroundAnimation = useScrollAnimation({
    animationType: "fade-in",
    threshold: 0.2,
  });
  const titleAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });
  const descriptionAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });
  const buttonAnimation = useScrollAnimation({
    animationType: "zoom-in",
    threshold: 0.3,
  });

  const circleTopAnimation = useScrollAnimation({
    animationType: "fade-right",
    threshold: 0.2,
  });
  const circleBottomAnimation = useScrollAnimation({
    animationType: "fade-left",
    threshold: 0.2,
  });
  const linesAnimation = useScrollAnimation({
    animationType: "fade-in",
    threshold: 0.2,
  });

  return (
    <section className={`relative py-16 px-4 overflow-hidden ${className}`}>
      <div
        ref={backgroundAnimation.ref}
        className={`absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 ${backgroundAnimation.animationClass}`}
      >
        {/* <div className="absolute inset-0 opacity-10">
          <div
            ref={circleTopAnimation.ref}
            className={`absolute top-0 right-0 w-96 h-96 bg-white rounded-full transform translate-x-32 -translate-y-32 ${circleTopAnimation.animationClass}`}
            style={{ transitionDelay: "400ms" }}
          ></div>
          <div
            ref={circleBottomAnimation.ref}
            className={`absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full transform -translate-x-16 translate-y-16 ${circleBottomAnimation.animationClass}`}
            style={{ transitionDelay: "600ms" }}
          ></div>
        </div> */}

        {/* <div
          ref={linesAnimation.ref}
          className={`absolute inset-0 opacity-20 ${linesAnimation.animationClass}`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="absolute top-1/4 right-1/4 w-px h-32 bg-white transform rotate-45"></div>
          <div className="absolute top-1/3 right-1/3 w-px h-24 bg-white transform rotate-45"></div>
          <div className="absolute bottom-1/4 right-1/5 w-px h-40 bg-white transform rotate-45"></div>
          <div className="absolute bottom-1/3 right-1/6 w-px h-20 bg-white transform rotate-45"></div>
        </div> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row md:items-center justify-between gap-8">
          <div className="lg:max-w-2xl">
            <h2
              ref={titleAnimation.ref}
              className={`text-2xl md:text-4xl lg:text-5xl font-medium text-white mb-4 leading-tight ${titleAnimation.animationClass}`}
              style={{ transitionDelay: "200ms" }}
            >
              {donateData.title}
            </h2>

            <p
              ref={descriptionAnimation.ref}
              className={`text-white text-base leading-relaxed max-w-xl opacity-90 ${descriptionAnimation.animationClass}`}
              style={{ transitionDelay: "400ms" }}
            >
              {donateData.description}
            </p>
          </div>

          <div
            ref={buttonAnimation.ref}
            className={`flex-shrink-0 ${buttonAnimation.animationClass}`}
            style={{ transitionDelay: "600ms" }}
          >
            <Link
              href="/donate"
              className="bg-white w-fit text-gray-800 px-5 md:px-6 py-2 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>{donateData.cta_text}</span>
              <Heart className="w-5 h-5 text-gray-500 group-hover:scale-110 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
export type { DonateProps, DonateSection };
