"use client";

import React, { useState, useMemo, useEffect } from "react";

import { ExternalLink } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Donate from "@/app/components/Donate";
import Footer from "@/app/components/Footer";

const Cookies: React.FC = ({}) => {
  const fallbackData = {
    donate_cta_section: {
      id: 1,
      title: "Make an uncommon impact. Support our work at SEO Africa",
      description:
        "SEO Africa has been the propelling wind behind thousands of successful careers and leadership stories in young Africans for more than 13 years now. You can help us be there for thousands more!",
      cta_text: "Donate Now",
    },
  };

  const donateData = fallbackData.donate_cta_section;

  return (
    <div className="bg-[#131B3E]">
      <Navbar />

      <section className="bg-[#131B3E] px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16 pb-16 sm:pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <div className="mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] bg-clip-text text-transparent text-base sm:text-lg lg:text-xl font-bold">
                SEO Africa
              </span>
            </div>

            <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light leading-tight mb-4 sm:mb-5 lg:mb-7 max-w-5xl">
              Cookies Policy
            </h1>

            <div className="max-w-4xl space-y-3 sm:space-y-4 lg:space-y-6 mb-4 sm:mb-6 lg:mb-8">
              <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                Effective date: 15th September, 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              SEO Africa ("we," "our," or "us") uses cookies and similar
              technologies to improve your experience on our website. This
              Cookies Policy explains what cookies are, how we use them, and how
              you can manage your preferences.
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                1. What Are Cookies?
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Cookies are small text files stored on your device (computer,
                tablet, or mobile) when you visit a website. They help websites
                recognize your device and remember information about your visit,
                such as preferences and browsing activity.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                2. Types of Cookies We Use
              </h2>
              <div className="space-y-8">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  We use the following categories of cookies on the SEO Africa
                  website:
                </p>

                <div className="">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                    Strictly Necessary Cookies
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Essential for the operation of the website.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Enable functions like page navigation, secure login, and
                        form submissions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                    Performance & Analytics Cookies
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Collect anonymous data about how visitors use the site.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Help us understand which pages are most visited and how
                        users interact with content.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Example: Google Analytics.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                    Functionality Cookies
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Remember your preferences (e.g., language, region, or
                        login details).
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Enhance your browsing experience.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                    Targeting/Advertising Cookies (if applicable)
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Track browsing activity across websites.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        May be used to deliver tailored content or measure the
                        effectiveness of campaigns. (Note: include only if SEO
                        Africa uses remarketing or ads.)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                3. How We Use Cookies
              </h2>
              <div className="space-y-6">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  We use cookies to:
                </p>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Ensure the website functions properly.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Improve user experience and website performance.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Track and analyze website traffic and engagement.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Support programme applications, event registrations, and
                      alumni engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                4. Managing Cookies
              </h2>
              <div className="space-y-6">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      You can accept or decline cookies when you first visit our
                      website via the cookie banner.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Most browsers allow you to control cookies through
                      settings:
                    </p>
                  </div>
                </div>

                <div className="ml-6 space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#000] rounded-full mt-4 flex-shrink-0"></div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Block all cookies
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#000] rounded-full mt-4 flex-shrink-0"></div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Delete existing cookies
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#000] rounded-full mt-4 flex-shrink-0"></div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Set preferences for certain sites
                    </p>
                  </div>
                </div>

                <div className="">
                  <p className="text-black text-base sm:text-lg leading-relaxed">
                    <strong>Please note:</strong> disabling some cookies may
                    affect the functionality of the website.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                5. Third-Party Cookies
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                We may use third-party services (e.g., Google Analytics, social
                media plugins) that place cookies on your device. These
                providers have their own privacy and cookies policies, which we
                encourage you to review.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                6. Changes to This Policy
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                We may update this Cookies Policy to reflect changes in
                technology, law, or our practices. Updates will be posted on
                this page with an updated effective date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                7. Contact us
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  If you have any questions or concerns about this Cookies
                  Policy, please contact us at:
                </p>

                <div className="">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                    SEO Africa:
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-gray-600 font-medium">Email:</span>
                      <a
                        href="mailto:info@seo-africa.org"
                        className="text-[#3051F3] hover:text-[#ED60A4] transition-colors duration-200 flex items-center space-x-1"
                      >
                        <span>info@seo-africa.org</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-gray-600 font-medium">Phone:</span>
                      <div className="space-y-1">
                        <p className="text-gray-700">
                          Ghana: +233 549 919 321, Nigeria: +234 815 830 9580
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-gray-600 font-medium">
                        Address:
                      </span>
                      <p className="text-gray-700">
                        The Pelican, 8 Blohum Street, Dzorwulu, Accra, Ghana
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Donate donateData={donateData} />

      <Footer />
    </div>
  );
};

export default Cookies;
