"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Donate from "../components/Donate";
import Footer from "../components/Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Partners from "../components/Partners";
import Link from "next/link";
import { Heart } from "lucide-react";

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

const GetInvolved: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

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

  const logos = [
    { name: "Genser", logo: "/genser.png" },
    { name: "Obsidian Chennar", logo: "/obsidian.png" },
    { name: "FCMB", logo: "/fcmb.png" },
    { name: "Genesis", logo: "/genesis.png" },
    { name: "Norfund", logo: "/norfund.png" },
    { name: "Sterling", logo: "/sterling.png" },
    { name: "Sentinel Global", logo: "/sentinel.png" },
    { name: "British Investment", logo: "/british.png" },
  ];

  const benefits = [
    {
      title: "Access top emerging talents",
      description:
        "Connect directly with Africa's most promising students and graduates, carefully trained and career-ready.",
      image: "/blog_image2.png",
      alt: "SEO Africa talented graduates in professional setting",
    },
    {
      title: "Connect with our successful alumni.",
      description:
        "Engage and connect with thousands of our successful alumni who are now leading important roles across the world.",
      image: "/seo_gallery1.png",
      alt: "SEO Africa alumni networking event",
    },
    {
      title: "Strengthen your brand's impact",
      description:
        "Position your company as a champion of African development and social impact, appealing to values-driven employees and customers alike.",
      image: "/donate_image2.png",
      alt: "SEO Africa brand partnership showcase",
    },
    {
      title: "Deliver Measurable, Lasting Change",
      description:
        "Demonstrate your commitment to sustainable development with partnerships that deliver quantifiable results for communities and economies.",
      image: "/our_programmes.png",
      alt: "SEO Africa impact measurement and community development",
    },
  ];

  const volunteerTextReveal = useTextReveal(0.1);
  const volunteerImageAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.2,
  });

  const volunteerOpportunities = [
    {
      title: "Mentorship",
      description:
        "Guide students through career development, interview preparation, and professional growth.",
      icon: "👥",
    },
    {
      title: "Workshop Facilitation",
      description:
        "Share your expertise by leading workshops on leadership, entrepreneurship, or industry-specific skills.",
      icon: "🎯",
    },
    {
      title: "Career Services",
      description:
        "Help with resume reviews, mock interviews, and connecting students with opportunities.",
      icon: "💼",
    },
    {
      title: "Community Outreach",
      description:
        "Support our outreach programs in rural communities and underserved areas across Africa.",
      icon: "🌍",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

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
                Get involved
              </span>
            </div>

            <h1
              ref={headerTitleAnimation.ref}
              className={`text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-8 lg:mb-12 max-w-4xl ${headerTitleAnimation.animationClass}`}
              style={{ transitionDelay: "200ms" }}
            >
              Shape Africa&apos;s future with us
            </h1>

            <div
              ref={headerDescriptionAnimation.ref}
              className={`max-w-4xl space-y-6 ${headerDescriptionAnimation.animationClass}`}
              style={{ transitionDelay: "400ms" }}
            >
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                We believe leadership development is a shared responsibility.
                Regardless of who you are, there&apos;s a meaningful way you can
                help unlock Africa&apos;s next generation of leaders.
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

        <div className="pt-48 md:pt-56 lg:pt-80 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="w-full py-12 overflow-hidden">
              <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-12">
                <div className="flex-shrink-0 xl:w-1/4">
                  <p className="text-gray-600 text-lg lg:text-xl xl:text-2xl font-medium text-center lg:text-left">
                    We are trusted by 30+ world leading organizations.
                  </p>
                </div>

                <div className="flex-1 relative">
                  <div className="overflow-hidden">
                    <div className="flex animate-scroll">
                      {logos.map((logo, index) => (
                        <div
                          key={`first-${index}`}
                          className="flex-shrink-0 mx-4 lg:mx-6 flex items-center justify-center"
                        >
                          <div className="bg-white transition-all duration-300 hover:scale-105">
                            <div className="flex items-center space-x-3">
                              <div className="relative w-20 h-12">
                                <Image src={logo.logo} alt="" fill />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      {logos.map((logo, index) => (
                        <div
                          key={`second-${index}`}
                          className="flex-shrink-0 mx-4 lg:mx-6 flex items-center justify-center"
                        >
                          <div className="bg-white transition-all duration-300 hover:scale-105">
                            <div className="flex items-center space-x-3">
                              <div className="relative w-20 h-12">
                                <Image src={logo.logo} alt="" fill />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
                  <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
                </div>
              </div>

              <style jsx>{`
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }

                .animate-scroll {
                  animation: scroll 30s linear infinite;
                  width: calc(200%);
                }

                .animate-scroll:hover {
                  animation-play-state: paused;
                }

                @media (max-width: 1024px) {
                  .animate-scroll {
                    animation: scroll 20s linear infinite;
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-16 lg:mb-20">
            <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] bg-clip-text text-transparent text-sm font-bold uppercase tracking-wider">
              BECOME A PARTNER
            </span>

            <h2 className="text-[#1F2937] text-3xl lg:text-4xl xl:text-5xl font-light leading-tight mt-6 mb-8">
              Our impact is driven by strategic collaborations with
              organizations that share our vision. Join us as a sponsor firm.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#3051F3] hover:bg-[#3051f3eb] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Request a call
              </button>

              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                <Link href={"/contact-us"}>Contact us</Link>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`cursor-pointer transition-all duration-300 p-4 ${
                    activeTab === index
                      ? "border-l-4 border-[#3051F3] bg-white"
                      : "border-l-4 border-transparent hover:border-gray-300 hover:bg-white/50"
                  }`}
                >
                  <div className="space-y-3">
                    <h3
                      className={`text-xl font-semibold transition-colors duration-300 ${
                        activeTab === index
                          ? "text-[#3051F3]"
                          : "text-[#1F2937]"
                      }`}
                    >
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:sticky lg:top-8">
              <div className="relative h-[500px] lg:h-[600px] bg-gray-300 rounded-lg overflow-hidden">
                <Image
                  src={benefits[activeTab].image}
                  alt={benefits[activeTab].alt}
                  fill
                  className="object-cover transition-all duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Partners getInvolved={true} /> */}

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start mb-16 lg:mb-20">
            <div
              ref={volunteerTextReveal.ref}
              className={`space-y-8 ${
                volunteerTextReveal.isVisible
                  ? "opacity-100 transform translate-y-0 transition-all duration-1000 ease-out"
                  : "opacity-0 transform translate-y-8"
              }`}
            >
              <div>
                <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] bg-clip-text text-transparent text-sm font-bold uppercase tracking-wider">
                  BECOME A VOLUNTEER
                </span>

                <h2 className="text-[#1F2937] text-3xl lg:text-4xl xl:text-5xl font-light leading-tight mt-6 mb-6">
                  Be a part of lasting positive impact. Volunteer with SEO
                  Africa.
                </h2>

                <button className="bg-[#3051F3] hover:bg-[#3051f3ef]  text-white px-8 py-3 rounded-lg font-bold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Volunteer now
                </button>
              </div>
            </div>

            <div
              className={`space-y-6 ${
                volunteerTextReveal.isVisible
                  ? "opacity-100 transform translate-y-0 transition-all duration-1000 ease-out"
                  : "opacity-0 transform translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <hr />
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                As a volunteer with SEO Africa, you'll have the chance to make a
                meaningful impact, develop new skills, connect with like-minded
                individuals, and help empower African students and professionals
                to achieve their career goals.
              </p>
              <hr />
              <div className="space-y-2">
                <p className="text-gray-600 text-base">
                  To express your interest, please send your CV to{" "}
                  <a
                    href="mailto:info@seo-africa.org"
                    className="text-[#3051F3] hover:text-[#4338CA] font-medium transition-colors duration-200"
                  >
                    info@seo-africa.org
                  </a>
                  . Additionally, recommendations from SEO Africa alumni, past
                  volunteers, or partners are welcome!
                </p>
              </div>
            </div>
          </div>

          <div
            ref={volunteerImageAnimation.ref}
            className={`${volunteerImageAnimation.animationClass}`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/seo_gallery1.png"
                alt="SEO Africa volunteers and participants at community outreach event"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-lg font-medium">
                  SEO Cares Outreach
                </p>
                <p className="text-white/90 text-sm">Class of 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-[#1F2937] text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight">
              Our volunteering roles include:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative w-8 h-8 lg:w-12 lg:h-12">
                  <Image src={"/volunteering1.svg"} alt="" fill />
                </div>

                <h3 className="text-xl lg:text-2xl font-semibold text-[#1F2937]">
                  Mentorship
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Guide our mentees throughout their career journey, supporting
                  them in improving their decision-making, problem-solving and
                  communication skills.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative w-8 h-8 lg:w-12 lg:h-12">
                  <Image src={"/volunteering2.svg"} alt="" fill />
                </div>

                <h3 className="text-xl lg:text-2xl font-semibold text-[#1F2937]">
                  Application reviews
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Increase a programme participant's chances in securing an
                  internship or a grad role through providing them with
                  application guidance.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative w-8 h-8 lg:w-12 lg:h-12">
                  <Image src={"/volunteering3.svg"} alt="" fill />
                </div>

                <h3 className="text-xl lg:text-2xl font-semibold text-[#1F2937]">
                  SEOCares outreaches
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Sign up and volunteer your time and expertise to support our
                  community outreach projects focused on education,
                  sustainability, and social impact.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative w-8 h-8 lg:w-12 lg:h-12">
                  <Image src={"/volunteering4.svg"} alt="" fill />
                </div>

                <h3 className="text-xl lg:text-2xl font-semibold text-[#1F2937]">
                  Hosting events
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Suggest and run career or social events that connect students,
                  alumni, and partners. Lead and create spaces where
                  opportunities and relationships can flourish.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative w-8 h-8 lg:w-12 lg:h-12">
                  <Image src={"/volunteering5.svg"} alt="" fill />
                </div>

                <h3 className="text-xl lg:text-2xl font-semibold text-[#1F2937]">
                  Trainings/Workshop facilitator
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  We collaborate with our alumni, volunteers and partners to
                  provide the most relevant trainings and keep our participants
                  up-to-date with the most recent practices.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative w-8 h-8 lg:w-12 lg:h-12">
                  <Image src={"/volunteering6.svg"} alt="" fill />
                </div>

                <h3 className="text-xl lg:text-2xl font-semibold text-[#1F2937]">
                  Guest speaking
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Inspire and educate by sharing your career journey, industry
                  insights, and lessons learned. Participate in webinars or
                  in-person events to demystify professional paths.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#131B3E] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-8">
            <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] bg-clip-text text-transparent text-sm font-bold uppercase tracking-wider">
              SUPPORT SEO AFRICA
            </span>
          </div>

          <h2 className="text-white text-3xl lg:text-4xl xl:text-5xl font-light leading-tight mb-8 lg:mb-12">
            Be the Reason Africa's Brightest Talents Rise. Your Gift Sparks
            Ideas, Ambition, and the Leadership Africa Needs.
          </h2>

          <Link
            href={"/donate"}
            className="w-fit bg-gradient-to-r from-[#E8913A] to-[#ED60A4] hover:from-[#d1821f] hover:to-[#e54d9b] text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 flex items-center gap-2 mb-12 lg:mb-16"
          >
            Make a donation
            <Heart className="w-5 h-5" />
          </Link>

          <p className="text-white/90 text-lg leading-relaxed mb-12 lg:mb-16 max-w-3xl"></p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="flex flex-col h-full">
              <p className="text-white/90 text-lg leading-relaxed mb-6 flex-shrink-0">
                Join us as a sponsor firm to help nurture diverse talent,
                strengthen your brand's purpose, and make a measurable
                difference across the continent.
              </p>
              <div className="relative flex-1 min-h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/seo_gallery1.png"
                  alt="SEO Africa 10th Anniversary celebration with Instagram frame"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </div>

            <div className="flex flex-col h-full">
              <div className="relative flex-1 min-h-[400px] rounded-lg overflow-hidden mb-6">
                <Image
                  src="/donate_image2.png"
                  alt="SEO Africa panel discussion event with multiple speakers"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <p className="text-white/90 text-lg leading-relaxed flex-shrink-0">
                Your donation directly supports training, mentorship, and career
                opportunities for talented African students. Help remove
                barriers to success and invest in the leaders who will shape
                Africa's future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-16 lg:mb-20">
            <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] bg-clip-text text-transparent text-sm font-bold uppercase tracking-wider mb-6 block">
              OUR TALENT NETWORK
            </span>

            <h2 className="text-[#1F2937] text-3xl lg:text-4xl xl:text-5xl font-light leading-tight mb-8 max-w-4xl">
              Find opportunities in SEO Africa. Join our talent network
            </h2>

            <Link href={'/career-opportunities'} className="bg-[#3051F3] hover:bg-[#3051f3e7] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Join our talent network
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-20">
            <div className="space-y-6">
              <div className="text-gray-500 text-lg font-mono">/001</div>
              <h3 className="text-xl lg:text-2xl font-semibold text-[#1F2937]">
                Early access to partner job openings
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                SEO Africa empowers students by enhancing their skills and
                boosting their confidence through updated, hands-on trainings,
                programmes and workshops.
              </p>
            </div>

            <div className="space-y-6">
              <div className="text-gray-500 text-lg font-mono">/002</div>
              <h3 className="text-xl lg:text-2xl font-semibold text-[#1F2937]">
                Trainings and Preps
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Joining SEO Africa helps you cultivate vital leadership skills
                that are crucial for navigating the challenges of tomorrow's
                workforce in your chosen fields.
              </p>
            </div>

            <div className="space-y-6">
              <div className="text-gray-500 text-lg font-mono">/003</div>
              <h3 className="text-xl lg:text-2xl font-semibold text-[#1F2937]">
                Connect with Alumni
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                We provide a platform for students to grow and expand their
                professional network, connecting them with like-minded
                individuals and industry leaders.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/blog_image2.png"
                alt="SEO Africa Partner Company Visit - Professional networking event with smiling businessman"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />

              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <p className="text-white text-lg lg:text-xl font-medium mb-1">
                  SEO Africa Partner Company Visit, 2025
                </p>
                <p className="text-white/90 text-sm lg:text-base">
                  Sentinel Asset Management
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#131B3E] py-48 lg:py-72 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="text-center">
            <h2 className="max-w-4xl mx-auto text-white text-3xl lg:text-4xl xl:text-5xl font-light leading-tight mb-4">
              <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] bg-clip-text text-transparent font-medium italic">
                13+ years
              </span>{" "}
              <span className="text-white italic">
                of outstanding leadership
              </span>{" "}
              <span className="text-white italic">and active support.</span>{" "}
              <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] bg-clip-text text-transparent font-medium italic">
                Thank you!
              </span>
            </h2>
          </div>
        </div>

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('seocares_bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#131B3E]/80 via-[#131B3E]/40 to-[#131B3E]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#131B3E]/90 via-transparent to-[#131B3E]/90"></div>
      </section>

      {/* <Donate /> */}

      <Footer />
    </div>
  );
};

export default GetInvolved;
