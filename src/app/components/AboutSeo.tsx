"use client";

import React, { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

interface InfoCard {
  id: number;
  title: string;
  description: string;
}

interface AboutSeoProps {
  aboutData: {
    pill_text: string;
    heading: string;
    description: string;
    further_description: string;
    video_link: string | null;
    video: any | null;
    info_cards: InfoCard[];
  };
}

const AboutSeo: React.FC<AboutSeoProps> = ({ aboutData }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const headerAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.2,
  });
  const titleAnimation = useScrollAnimation({
    animationType: "fade-left",
    threshold: 0.3,
  });
  const descriptionAnimation = useScrollAnimation({
    animationType: "fade-right",
    threshold: 0.3,
  });
  const videoAnimation = useScrollAnimation({
    animationType: "zoom-in",
    threshold: 0.2,
  });
  const card1Animation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });
  const card2Animation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });
  const card3Animation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div
            ref={headerAnimation.ref}
            className={`w-fit px-3 bg-[#067a572c] rounded-full ${headerAnimation.animationClass}`}
          >
            <p className="text-xs md:text-base text-[#067a57] font-medium mb-4">
              {aboutData.pill_text}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div
              ref={titleAnimation.ref}
              className={titleAnimation.animationClass}
            >
              <h2 className="text-3xl md:text-5xl text-gray-900 leading-tight font-bold">
                {aboutData.heading}
              </h2>
            </div>

            <div
              ref={descriptionAnimation.ref}
              className={`space-y-6 ${descriptionAnimation.animationClass}`}
            >
              <p className="text-base md:text-xl text-gray-900 leading-relaxed">
                {aboutData.description}
              </p>

              <div className="w-full h-0.5 bg-gray-200" />

              <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                {aboutData.further_description}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div
            ref={videoAnimation.ref}
            className={`relative rounded-2xl overflow-hidden shadow-2xl ${videoAnimation.animationClass}`}
          >
            <div className="relative aspect-video bg-gray-900">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/5pTOXqoqvi0?si=vArLLYKNmnPck_Bx"
                title="SEO Africa Leadership Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3">
          {aboutData.info_cards.map((card, index) => {
            const cardAnimations = [
              card1Animation,
              card2Animation,
              card3Animation,
            ];
            const currentAnimation = cardAnimations[index] || card1Animation;

            return (
              <div
                key={card.id}
                ref={currentAnimation.ref}
                className={`space-y-6 border border-gray-200 p-6 lg:p-8 ${currentAnimation.animationClass}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div>
                  <span className="text-gray-400 text-sm font-mono">
                    /{String(index + 1).padStart(3, "0")}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSeo;
