"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Donate from "../components/Donate";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import FAQSection from "../components/Faq";
import FindOpportunities from "../components/FindOpportunities";
import { ArrowRight } from "lucide-react";

type Props = {};

const FAQ = (props: Props) => {
  const [email, setEmail] = useState("");

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

  return (
    <div className="bg-[#131B3E]">
      <Navbar />

      <section className="bg-[#131B3E] px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24 pb-32 sm:pb-48 lg:pb-64">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16 lg:mb-24">
            <div className="mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] bg-clip-text text-transparent text-lg sm:text-xl font-bold">
                FAQs
              </span>
            </div>

            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-4 sm:mb-5 lg:mb-7 max-w-5xl">
              SEO Africa&apos;s Questions Answered
            </h1>

            <div className="max-w-xl space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed">
                Have questions about SEO Africa? We&apos;ve done out best to
                anticipate your questions below. Our team is happy to talk to
                you anytime if you have more enquiries. Just contact us
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white ">
        <FAQSection faqPage />
      </section>

      <section className="bg-white ">
        <FindOpportunities />
      </section>

      <section>
        <div className="bg-white py-16 ">
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

                  <div className="bg-blue-600 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 400 300"
                        fill="none"
                      >
                        <defs>
                          <pattern
                            id="grid"
                            width="40"
                            height="40"
                            patternUnits="userSpaceOnUse"
                          >
                            <path
                              d="M 40 0 L 0 0 0 40"
                              fill="none"
                              stroke="white"
                              strokeWidth="1"
                            />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Donate />

      <Footer />
    </div>
  );
};

export default FAQ;
