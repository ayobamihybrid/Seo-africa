"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { getStrapiImageUrl } from "../lib/strapi";
import Link from "next/link";
import { AboutPageData, PressItem } from "../types/strapi";
import Press from "./Press";

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
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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

interface AboutContentProps {
  aboutData: AboutPageData;
  pressItems: PressItem[];
}

const AboutContent: React.FC<AboutContentProps> = ({
  aboutData,
  pressItems,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
  const historyBadgeAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });
  const historyImageAnimation = useScrollAnimation({
    animationType: "zoom-in",
    threshold: 0.2,
  });
  const missionVisionAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.2,
  });
  const valuesHeaderAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });
  const valuesGridAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.2,
  });
  const ceoSectionAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.2,
  });
  const galleryHeaderAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });
  const galleryCarouselAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.2,
  });
  const mediaHeaderAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });
  const mediaGridAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.2,
  });
  const insightsAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.2,
  });

  const slides = [
    {
      id: 1,
      leftImage: "/seo_gallery1.png",
      rightImage: "/donate_image2.png",
      leftAlt: "SEO Africa 10th Anniversary celebration with Instagram frame",
      rightAlt: "SEO Africa panel discussion event with multiple speakers",
    },
    {
      id: 2,
      leftImage: "/donate_image2.png",
      rightImage: "/seo_gallery1.png",
      leftAlt: "SEO Africa networking event",
      rightAlt: "SEO Africa workshop session",
    },
    {
      id: 3,
      leftImage: "/donate_image.png",
      rightImage: "/seo_gallery1.png",
      leftAlt: "SEO Africa graduation ceremony",
      rightAlt: "SEO Africa mentorship program",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: React.SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <>
      <section className="bg-[#131B3E] px-4 sm:px-6 lg:px-12 py-16 lg:py-24 pb-48 lg:pb-64">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 lg:mb-24">
            <div
              ref={headerBadgeAnimation.ref}
              className={`mb-8 ${headerBadgeAnimation.animationClass}`}
            >
              <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] bg-clip-text text-transparent text-xl font-bold">
                {aboutData.hero_section.accent_text}
              </span>
            </div>

            <h1
              ref={headerTitleAnimation.ref}
              className={`text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-8 lg:mb-12 max-w-4xl ${headerTitleAnimation.animationClass}`}
              style={{ transitionDelay: "200ms" }}
            >
              {aboutData.hero_section.title}
            </h1>

            <div
              ref={headerDescriptionAnimation.ref}
              className={`max-w-4xl space-y-6 ${headerDescriptionAnimation.animationClass}`}
              style={{ transitionDelay: "400ms" }}
            >
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                {aboutData.hero_section.description}
              </p>

              <div className="w-full border-t border-dotted border-white/30 my-6"></div>

              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                {aboutData.hero_section.further_description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 lg:pb-24 relative">
        <div className="absolute top-0 left-0 right-0 z-20 px-4 sm:px-6 lg:px-12 -translate-y-1/2">
          <div className="max-w-7xl mx-auto">
            <div
              ref={heroImageAnimation.ref}
              className={`relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl ${heroImageAnimation.animationClass}`}
              style={{ transitionDelay: "600ms" }}
            >
              <Image
                src={
                  getStrapiImageUrl(aboutData.hero_section.cover_image) ||
                  "/about_image1.png"
                }
                alt={
                  aboutData.hero_section.cover_image.alternativeText ||
                  "SEO Africa team networking event"
                }
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          </div>
        </div>

        <div className="pt-48 md:pt-56 lg:pt-80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="rounded-lg p-8 lg:p-12">
              <div className="mb-8">
                <div
                  ref={historyBadgeAnimation.ref}
                  className={`mb-12 ${historyBadgeAnimation.animationClass}`}
                >
                  <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] bg-clip-text text-transparent text-xl font-bold">
                    {aboutData.history_section.title}
                  </span>
                </div>

                <div className="flex-1">
                  <TextReveal
                    text={aboutData.history_section.content}
                    className="text-gray-900 font-medium text-2xl md:text-3xl lg:text-4xl leading-tight mb-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div
              ref={historyImageAnimation.ref}
              className={`relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden ${historyImageAnimation.animationClass}`}
              style={{ transitionDelay: "400ms" }}
            >
              <Image
                src={
                  getStrapiImageUrl(aboutData.history_section.cover_image) ||
                  "/blog_image2.png"
                }
                alt={
                  aboutData.history_section.cover_image.alternativeText ||
                  "SEO Africa history"
                }
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-dotted border-black/30 mt-20"></div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div
            ref={missionVisionAnimation.ref}
            className={`grid md:grid-cols-2 mb-20 ${missionVisionAnimation.animationClass}`}
          >
            <div className="p-8 lg:p-12 border-b border-l border-t border-gray-200">
              <div className="mb-12">
                <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] bg-clip-text text-transparent text-3xl font-bold">
                  {aboutData.mission_section.title}
                </span>
              </div>

              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                {aboutData.mission_section.content}
              </p>
            </div>

            <div className="p-8 lg:p-12 border border-gray-200">
              <div className="mb-12">
                <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] bg-clip-text text-transparent text-3xl font-bold">
                  {aboutData.vision_section.title}
                </span>
              </div>

              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                {aboutData.vision_section.content}
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2
              ref={valuesHeaderAnimation.ref}
              className={`text-gray-900 text-3xl lg:text-4xl xl:text-5xl font-light mb-16 ${valuesHeaderAnimation.animationClass}`}
            >
              {aboutData.core_values_section.title}
            </h2>

            <div
              ref={valuesGridAnimation.ref}
              className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${valuesGridAnimation.animationClass}`}
              style={{ transitionDelay: "200ms" }}
            >
              {aboutData.core_values_section.value_cards.map((value, index) => (
                <div key={index} className="space-y-6 px-2 border-l border-r">
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <Image
                      src={`/corevalues_logo${index + 1}.svg`}
                      alt=""
                      fill
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={ceoSectionAnimation.ref}
          className={`bg-[#131B3E] py-16 lg:py-24 ${ceoSectionAnimation.animationClass}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="flex flex-col items-center lg:items-start">
                <div className="relative mb-6">
                  <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={
                        getStrapiImageUrl(aboutData.quote_section.avatar) ||
                        "/blessing_omorogie.png"
                      }
                      alt={
                        aboutData.quote_section.avatar.alternativeText ||
                        aboutData.quote_section.name
                      }
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <h3 className="text-white text-2xl md:text-3xl font-light italic mb-2">
                    {aboutData.quote_section.name}
                  </h3>
                  <p className="text-white/70 text-base md:text-lg">
                    — {aboutData.quote_section.position}
                  </p>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 lg:mb-12">
                  {aboutData.quote_section.content}
                </p>

                <div>
                  <Link
                    href="/career-opportunities"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    {aboutData.quote_section.cta_text}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div
              ref={galleryHeaderAnimation.ref}
              className={`mb-12 ${galleryHeaderAnimation.animationClass}`}
            >
              <h2 className="text-gray-900 text-3xl lg:text-4xl xl:text-5xl font-light mb-4">
                {aboutData.gallery_section.title}
              </h2>
              <div className="w-full h-1 bg-gradient-to-r from-[#E8913A] via-purple-500 to-[#ED60A4] rounded-full"></div>
            </div>

            <div
              ref={galleryCarouselAnimation.ref}
              className={`${galleryCarouselAnimation.animationClass}`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="relative overflow-hidden mb-8">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div key={slide.id} className="w-full flex-shrink-0">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden group">
                          <Image
                            src={slide.leftImage}
                            alt={slide.leftAlt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                        </div>

                        <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden group">
                          <Image
                            src={slide.rightImage}
                            alt={slide.rightAlt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-8 h-1 rounded-full transition-colors duration-200 ${
                          index === currentSlide ? "bg-gray-900" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={goToPrevious}
                    className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div
              ref={mediaHeaderAnimation.ref}
              className={`mb-16 ${mediaHeaderAnimation.animationClass}`}
            >
              <h2 className="text-gray-900 text-3xl lg:text-4xl xl:text-5xl font-light">
                {aboutData.press_section.title}
              </h2>
            </div>

            <div
              ref={mediaGridAnimation.ref}
              className={`mb-16 ${mediaGridAnimation.animationClass}`}
              style={{ transitionDelay: "200ms" }}
            >
              <Press pressItems={pressItems} maxItems={3} />
            </div>

            <div
              ref={insightsAnimation.ref}
              className={`bg-[#8499FF14] py-16 px-8 lg:px-12 rounded-lg ${insightsAnimation.animationClass}`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-2 items-center">
                <h3 className="text-gray-900 text-2xl lg:text-3xl xl:text-4xl font-light leading-tight mb-8">
                  {aboutData.explore_section.title}
                </h3>

                <div className="grid md:grid-cols-3 gap-8">
                  {aboutData.explore_section.cards.map((item, index) => (
                    <div key={index} className="px-2 border-l text-center">
                      <div className="relative w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Image src={`/insight${index + 1}.svg`} alt="" fill />
                      </div>
                      <h4 className="text-gray-900 text-lg font-semibold mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4">
                        {item.content}
                      </p>
                      <button className="text-gray-900 hover:text-blue-600 font-medium text-sm underline transition-colors duration-200">
                        {item.cta_text}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutContent;
