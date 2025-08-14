"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Donate from "../components/Donate";
import Footer from "../components/Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Link from "next/link";
import { programmesData } from "../utils";

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

const OurProgrammes: React.FC = () => {
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
                Our programmes
              </span>
            </div>

            <h1
              ref={headerTitleAnimation.ref}
              className={`text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-8 lg:mb-12 max-w-4xl ${headerTitleAnimation.animationClass}`}
              style={{ transitionDelay: "200ms" }}
            >
              From Career Readiness to Global Internships. Explore the
              Programmes Shaping Africa&apos;s Next Leaders
            </h1>

            <div
              ref={headerDescriptionAnimation.ref}
              className={`max-w-4xl space-y-6 ${headerDescriptionAnimation.animationClass}`}
              style={{ transitionDelay: "400ms" }}
            >
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                We offer a range of high-impact programmes that cater to
                different interests and career paths, all tailored to provide
                practical knowledge and hands-on experience.
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
                src="/our_programmes.png"
                alt="SEO Africa team networking event"
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
                <div className="flex-1">
                  <TextReveal
                    text="SEO Africa was founded in 2012 as a chapter of SEO in Africa, operating as a non-profit leadership development organization dedicated to expanding its presence across the continent. It identifies high-potential university students, providing them with training, mentorship, and corporate access to cultivate a strong network of future leaders."
                    className="text-gray-900 font-medium text-2xl md:text-3xl lg:text-4xl leading-tight mb-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="space-y-16 lg:space-y-20">
            {programmesData.map((programme, index) => (
              <div key={programme.slug} className="mb-16 lg:mb-20">
                <div className="grid lg:grid-cols-2 lg:h-[560px]">
                  <div
                    className={`${
                      programme.bgColor
                    } p-8 flex flex-col justify-between ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="flex-1">
                      <div className="mb-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
                          {programme.title}
                        </h2>

                        {(programme.slug === "graduate-trainee-nigeria" ||
                          programme.slug === "graduate-trainee-ghana") && (
                          <div
                            className={`${programme.badgeColor} w-fit p-2 rounded-full flex items-center gap-2 mb-6`}
                          >
                            <div className="flex items-center px-3 py-1">
                              <div className="w-5 h-5 rounded-full overflow-hidden mr-2">
                                <Image
                                  src={programme.flagSrc}
                                  alt={`${programme.country} flag`}
                                  width={20}
                                  height={20}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <span className="text-white text-xl font-medium">
                                {programme.countryCode}
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
                        {programme.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {programme.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center text-gray-600"
                          >
                            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Link href={`/our-programmes/${programme.slug}`}>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                          View programme
                        </button>
                      </Link>
                    </div>
                  </div>

                  <div
                    className={`relative ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="relative h-full min-h-[400px] overflow-hidden shadow-lg">
                      <Image
                        src={programme.image}
                        alt={`${programme.title} - SEO Africa training session`}
                        fill
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Donate />

      <Footer />
    </div>
  );
};

export default OurProgrammes;
