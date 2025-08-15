"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Donate from "../components/Donate";
import Footer from "../components/Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import FindOpportunities from "../components/FindOpportunities";
import Link from "next/link";

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

const AboutUs: React.FC = () => {
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
                About us
              </span>
            </div>

            <h1
              ref={headerTitleAnimation.ref}
              className={`text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-8 lg:mb-12 max-w-4xl ${headerTitleAnimation.animationClass}`}
              style={{ transitionDelay: "200ms" }}
            >
              Matching Opportunities With Talent For Over 50 Years!
            </h1>

            <div
              ref={headerDescriptionAnimation.ref}
              className={`max-w-4xl space-y-6 ${headerDescriptionAnimation.animationClass}`}
              style={{ transitionDelay: "400ms" }}
            >
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                Sponsors for Educational Opportunity (SEO) was founded as a
                non-profit in 1963 as one of New York City's first mentoring
                programmes for underprivileged high school students. It aimed to
                provide personal and educational development for students from
                minority ethnic groups by means of sustained support and
                coaching.
              </p>

              <div className="w-full border-t border-dotted border-white/30 my-6"></div>

              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                In 1980, SEO established a Career Programme in New York to
                provide summer internship opportunities to university students
                at investment banks on Wall Street. Subsequent internship
                programmes have been developed in management consulting,
                corporate law, marketing, human resources, accounting,
                technology, and non-profit.
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
                src="/about_image1.png"
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
                <div
                  ref={historyBadgeAnimation.ref}
                  className={`mb-12 ${historyBadgeAnimation.animationClass}`}
                >
                  <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] bg-clip-text text-transparent text-xl font-bold">
                    Our history
                  </span>
                </div>

                <div className="flex-1">
                  <TextReveal
                    text="SEO Africa was founded in 2012 as a chapter of SEO in Africa, operating as a non-profit leadership development organization dedicated to expanding its presence across the continent. It identifies high-potential university students, providing them with training, mentorship, and corporate access to cultivate a strong network of future leaders."
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
                src="/blog_image2.png"
                alt="SEO Africa team networking event"
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
                  Our Mission
                </span>
              </div>

              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                SEO Africa was established to select, train, mentor, and provide
                corporate access to the youths of Africa, and ultimately develop
                a network of future leaders for the world at large. We empower
                these young people by bridging the opportunity gap and creating
                pathways to meaningful employment globally. We are committed to
                equipping young people, regardless of gender or economic
                disadvantage, with the education, skills, resources, and network
                needed to thrive in the modern workforce.
              </p>
            </div>

            <div className="p-8 lg:p-12 border border-gray-200">
              <div className="mb-12">
                <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] bg-clip-text text-transparent text-3xl font-bold">
                  Our Vision
                </span>
              </div>

              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                To empower African youths by providing them with the skills,
                mentorship, and global access needed to succeed in today's
                workforce. We aim to create a future where young leaders from
                all backgrounds can drive change and positively impact
                industries and communities globally.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2
              ref={valuesHeaderAnimation.ref}
              className={`text-gray-900 text-3xl lg:text-4xl xl:text-5xl font-light mb-16 ${valuesHeaderAnimation.animationClass}`}
            >
              Our core values
            </h2>

            <div
              ref={valuesGridAnimation.ref}
              className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${valuesGridAnimation.animationClass}`}
              style={{ transitionDelay: "200ms" }}
            >
              {[
                {
                  icon: "/corevalues_logo1.svg",
                  title: "Empower through access",
                  description:
                    "Talent is universal, but opportunity is not. We open doors for African youths to thrive by connecting talent with opportunity.",
                },
                {
                  icon: "/corevalues_logo2.svg",
                  title: "Lead with integrity",
                  description:
                    "We cultivate future African leaders who are driven by values and lead with vision, not just ambition. Impact starts with character.",
                },
                {
                  icon: "/corevalues_logo3.svg",
                  title: "Champion excellence",
                  description:
                    "We push boundaries, set high standards, and inspire others to do the same. Excellence isn't a destination, it's a mindset.",
                },
                {
                  icon: "/corevalues_logo4.svg",
                  title: "Pro-Eco Protect Our Planet",
                  description:
                    "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
                },
                {
                  icon: "/corevalues_logo5.svg",
                  title: "Diversity is strength",
                  description:
                    "We celebrate the richness of African voices, cultures, and experiences. Our strength lies in difference, and our future is inclusive.",
                },
                {
                  icon: "/corevalues_logo6.svg",
                  title: "Impacts over optics",
                  description:
                    "We measure our success by lives changed, not just metrics and headlines. Substance, not show, drives our decisions.",
                },
              ].map((value, index) => (
                <div key={index} className="space-y-6 px-2 border-l border-r">
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <Image src={value.icon} alt="" fill />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
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
                      src="/blessing_omorogie.png"
                      alt="Blessing Omoregie, Chief Executive Officer of SEO Africa"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <h3 className="text-white text-2xl md:text-3xl font-light italic mb-2">
                    Blessing Omoregie
                  </h3>
                  <p className="text-white/70 text-base md:text-lg">
                    — Chief Executive Officer - SEO Africa
                  </p>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 lg:mb-12">
                  SEO Africa is a non-profit leadership organization with over a
                  decade of experience in talent development across Africa. Our
                  core values prioritize community upliftment and genuine
                  leadership, extending beyond personal success.
                </p>

                <div>
                  <Link
                    href={"/career-opportunities"}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    Join our talent network
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
                SEO Africa Gallery
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
                They talk about us
              </h2>
            </div>

            <div
              ref={mediaGridAnimation.ref}
              className={`grid md:grid-cols-3 gap-8 mb-16 ${mediaGridAnimation.animationClass}`}
              style={{ transitionDelay: "200ms" }}
            >
              {[
                {
                  logo: "/Newyorktimes.png",
                  name: "The New York Times",
                  width: 200,
                },
                { logo: "/Techpoint.png", name: "Techpoint", width: 150 },
                {
                  logo: "/Newyorktimes.png",
                  name: "The New York Times",
                  width: 200,
                },
              ].map((outlet, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg">
                  <div className="mb-6">
                    <Image
                      src={outlet.logo}
                      alt={outlet.name}
                      width={outlet.width}
                      height={40}
                      className="object-contain"
                    />
                    <p className="text-gray-600 text-sm mt-2">March 24, 2023</p>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-6">
                    SEO Africa's impact is both measurable and deeply human.
                    Behind every statistic is a young African leader whose life
                    and community has been transformed
                  </p>

                  <button className="text-gray-900 hover:text-blue-600 font-medium inline-flex items-center gap-2 transition-colors duration-200 underline">
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div
              ref={insightsAnimation.ref}
              className={`bg-[#8499FF14] py-16 px-8 lg:px-12 rounded-lg ${insightsAnimation.animationClass}`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-2 items-center">
                <h3 className="text-gray-900 text-2xl lg:text-3xl xl:text-4xl font-light leading-tight mb-8">
                  Explore more insights and opportunities on SEO Africa.
                </h3>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: "/insight1.svg",
                      title: "Programmes",
                      description:
                        "Explore our suite of high-impact, future proof programmes.",
                    },
                    {
                      icon: "/insight2.svg",
                      title: "Careers",
                      description:
                        "Find opportunities to work within our partner companies.",
                    },
                    {
                      icon: "/insight3.svg",
                      title: "Blog",
                      description:
                        "Gain insights into the corporate world and the future of work.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="px-2 border-l text-center">
                      <div className="relative w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Image src={item.icon} alt="" fill />
                      </div>
                      <h4 className="text-gray-900 text-lg font-semibold mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4">
                        {item.description}
                      </p>
                      <button className="text-gray-900 hover:text-blue-600 font-medium text-sm underline transition-colors duration-200">
                        Learn more
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <FindOpportunities />
      </section>
      <Donate />

      <Footer />
    </div>
  );
};

export default AboutUs;
