"use client";

import React, { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const AboutSeo: React.FC = () => {
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
              About SEOAfrica
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div
              ref={titleAnimation.ref}
              className={titleAnimation.animationClass}
            >
              <h2 className="text-3xl md:text-5xl text-gray-900 leading-tight font-bold">
                Established to create the next generation of champions!
              </h2>
            </div>
            <div
              ref={descriptionAnimation.ref}
              className={`space-y-6 ${descriptionAnimation.animationClass}`}
            >
              <p className="text-base md:text-xl text-gray-900 leading-relaxed">
                SEO Africa is a non-profit leadership organization with over a
                decade of experience in talent development across Africa. Our
                core values prioritize community upliftment and genuine
                leadership, extending beyond personal success.
              </p>

              <hr />

              <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                SEO Africa select, train, mentor and provide corporate access to
                university students with the highest potential, and in the
                process develop a network of future leaders across Africa.
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
          <div
            ref={card1Animation.ref}
            className={`space-y-6 border border-gray-200 p-6 lg:p-8 ${card1Animation.animationClass}`}
            style={{ transitionDelay: "0ms" }}
          >
            <div>
              <span className="text-gray-400 text-sm font-mono">/001</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-4">
                Sharpen skills and boost confidence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                SEO Africa empowers students by enhancing their skills and
                boosting their confidence through updated, hands-on trainings,
                programmes and workshops.
              </p>
            </div>
          </div>

          <div
            ref={card2Animation.ref}
            className={`space-y-6 border border-gray-200 p-6 lg:p-8 ${card2Animation.animationClass}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div>
              <span className="text-gray-400 text-sm font-mono">/002</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-4">
                Cultivate Leadership Skills.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Joining SEO Africa helps students cultivate vital leadership
                skills that are crucial for navigating the challenges of
                tomorrow's workforce in their chosen fields.
              </p>
            </div>
          </div>

          <div
            ref={card3Animation.ref}
            className={`space-y-6 border border-gray-200 p-6 lg:p-8 ${card3Animation.animationClass}`}
            style={{ transitionDelay: "400ms" }}
          >
            <div>
              <span className="text-gray-400 text-sm font-mono">/003</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-4">
                Grow Meaningful Networks
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We provide a platform for students to grow and expand their
                professional network, connecting them with like-minded
                individuals and industry leaders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSeo;
