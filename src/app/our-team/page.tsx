"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Donate from "../components/Donate";
import Footer from "../components/Footer";
import Image from "next/image";
import Partners from "../components/Partners";
import { bottomRowImages, teamMembers, topRowImages } from "../utils";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import FindOpportunities from "../components/FindOpportunities";

type Props = {};

const OurTeam = (props: Props) => {
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
  const introTextAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });
  const teamHeaderAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });
  const teamGridAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.2,
  });
  const partnersAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.2,
  });
  const galleryHeaderAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });
  const galleryScrollAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.2,
  });
  const insightsAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.2,
  });

  return (
    <div className="bg-[#131B3E]">
      <style jsx global>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>

      <Navbar />

      <section className="bg-[#131B3E] px-4 sm:px-6 lg:px-12 py-16 lg:py-24 pb-48 lg:pb-64 ">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 lg:mb-24">
            <div
              ref={headerBadgeAnimation.ref}
              className={`mb-8 ${headerBadgeAnimation.animationClass}`}
            >
              <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] bg-clip-text text-transparent text-xl font-bold">
                Our team
              </span>
            </div>

            <h1
              ref={headerTitleAnimation.ref}
              className={`text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-5 lg:mb-7 max-w-4xl ${headerTitleAnimation.animationClass}`}
              style={{ transitionDelay: "200ms" }}
            >
              Meet the people behind SEO Africa{" "}
            </h1>

            <div
              ref={headerDescriptionAnimation.ref}
              className={`max-w-xl space-y-6 ${headerDescriptionAnimation.animationClass}`}
              style={{ transitionDelay: "400ms" }}
            >
              <p className="text-white/90 text-lg md:text-2xl leading-relaxed">
                Explore the data, stories, and milestones behind our mission to
                transform potential into leadership.
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
                src="/ourteam1.png"
                alt="SEO Africa team networking event"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          </div>
        </div>

        <div className="pt-60 md:pt-64 lg:pt-[25rem]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 ">
            <div
              ref={introTextAnimation.ref}
              className={`mt-8 md:mt-20 mb-8 text-base md:text-xl ${introTextAnimation.animationClass}`}
            >
              <div className="text-black space-y-4">
                <p>Hey there!</p>

                <p>We&apos;re the small but mighty team behind SEO Africa. </p>

                <p>
                  SEO Africa&apos;s executive advisory board is made up of some
                  of the top business people in Africa.Our board oversees the
                  sustainability and expansion of our programmes.
                </p>
              </div>
            </div>
          </div>

          <div
            ref={teamHeaderAnimation.ref}
            className={`mt-8 md:mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-black text-2xl md:text-4xl font-medium mb-4 md:mb-8 ${teamHeaderAnimation.animationClass}`}
            style={{ transitionDelay: "200ms" }}
          >
            <h2>Team & Advisory Board</h2>
          </div>

          <div
            className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 `}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group"
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="relative mb-6 overflow-hidden rounded-lg aspect-[4/5]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QFLQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/95 via-purple-500/80 to-transparent p-6 text-white flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="space-y-3">
                        <p className="text-sm leading-relaxed">
                          {member.description}
                        </p>
                        {member.additionalInfo && (
                          <p className="text-sm leading-relaxed">
                            {member.additionalInfo}
                          </p>
                        )}
                        {member.socialLinks && (
                          <div className="flex gap-3 mt-4">
                            <a
                              href={member.socialLinks.twitter}
                              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                              </svg>
                            </a>
                            <a
                              href={member.socialLinks.linkedin}
                              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-black text-xl font-semibold">
                      {member.name}
                    </h3>
                    <p className="text-gray-700 text-sm font-medium">
                      {member.title}
                    </p>
                    <p className="text-gray-500 text-sm">{member.education}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-dotted border-black/30 mt-20"></div>
      </section>

      <div
        ref={partnersAnimation.ref}
        className={`px-4 sm:px-6 lg:px-12 bg-white ${partnersAnimation.animationClass}`}
      >
        <Partners variant="ourTeam" />
      </div>

      <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-12 ">
        <div
          ref={galleryHeaderAnimation.ref}
          className={`max-w-7xl mx-auto mb-12 ${galleryHeaderAnimation.animationClass}`}
        >
          <div className="relative">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 md:mb-4">
              Team Gallery
            </h2>
            <div className="w-full h-1 bg-gradient-to-r from-[#E8913A] via-[#ED60A4] to-[#E8913A] rounded-full"></div>
          </div>
        </div>

        <div
          ref={galleryScrollAnimation.ref}
          className={`max-w-7xl mx-auto ${galleryScrollAnimation.animationClass}`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="space-y-8 overflow-hidden">
            <div className="relative w-full overflow-hidden">
              <div className="flex gap-6 animate-scroll-right">
                {[...topRowImages, ...topRowImages].map((image, index) => (
                  <div
                    key={`top-${image.id}-${index}`}
                    className="flex-shrink-0 relative group"
                  >
                    <div className="relative w-80 h-60 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full overflow-hidden">
              <div className="flex gap-6 animate-scroll-left">
                {[...bottomRowImages, ...bottomRowImages].map(
                  (image, index) => (
                    <div
                      key={`bottom-${image.id}-${index}`}
                      className="flex-shrink-0 relative group"
                    >
                      <div className="relative w-80 h-60 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGrYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        ref={insightsAnimation.ref}
        className={`bg-white w-full px-4 sm:px-6 lg:px-12 py-16 ${insightsAnimation.animationClass}`}
      >
        <div className="bg-[#8499FF14] max-w-7xl mx-auto py-16 px-8 lg:px-12 rounded-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-gray-900 text-2xl lg:text-3xl xl:text-4xl font-light leading-tight mb-8">
                Explore more insights and opportunities on SEO Africa.
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="px-2 border-l text-center">
                <div className="relative w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Image src={"/insight1.svg"} alt="" fill />
                </div>
                <h4 className="text-gray-900 text-lg font-semibold mb-2">
                  Programmes
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Explore our suite of high-impact, future proof programmes.
                </p>
                <button className="text-gray-900 hover:text-blue-600 font-medium text-sm underline transition-colors duration-200">
                  Learn more
                </button>
              </div>

              <div className=" px-2 border-l text-center">
                <div className="relative w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Image src={"/insight2.svg"} alt="" fill />
                </div>
                <h4 className="text-gray-900 text-lg font-semibold mb-2">
                  Careers
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Find opportunities to work within our partner companies.
                </p>
                <button className="text-gray-900 hover:text-blue-600 font-medium text-sm underline transition-colors duration-200">
                  Learn more
                </button>
              </div>

              <div className="px-2 border-l text-center">
                <div className="relative w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Image src={"/insight3.svg"} alt="" fill />
                </div>
                <h4 className="text-gray-900 text-lg font-semibold mb-2">
                  Blog
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Gain insights into the corporate world and the future of work.
                </p>
                <button className="text-gray-900 hover:text-blue-600 font-medium text-sm underline transition-colors duration-200">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>

        <FindOpportunities />
      </div>

      <Donate />

      <Footer />
    </div>
  );
};

export default OurTeam;
