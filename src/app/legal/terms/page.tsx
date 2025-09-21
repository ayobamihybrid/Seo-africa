"use client";

import React, { useState, useMemo, useEffect } from "react";

import { ExternalLink } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Donate from "@/app/components/Donate";
import Footer from "@/app/components/Footer";

const Terms: React.FC = ({}) => {
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
              Terms and Conditions
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
              Welcome to the SEO Africa website ("Site"). By accessing or using
              this Site, you agree to comply with and be bound by the following
              Terms and Conditions ("Terms"). If you do not agree with these
              Terms, please do not use the Site.
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                1. Use of the Website
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    This Site is provided for informational, educational, and
                    programme-related purposes only.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    You agree to use the Site only for lawful purposes and in a
                    manner that does not infringe the rights of, or restrict or
                    inhibit, anyone else's use and enjoyment of the Site.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Unauthorized use of this Site may give rise to a claim for
                    damages and/or be a criminal offence.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                2. Intellectual Property Rights
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    All content on this Site, including text, graphics, logos,
                    images, videos, and resources, is the property of SEO Africa
                    or its partners unless otherwise stated.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    You may view, download, and print materials for personal,
                    non-commercial use only.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    You may not reproduce, distribute, or use content for
                    commercial purposes without prior written consent from SEO
                    Africa.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                3. Programme Applications and Opportunities
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    By submitting an application to any SEO Africa programme or
                    opportunity, you confirm that the information provided is
                    accurate and truthful.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    SEO Africa reserves the right to verify details provided in
                    applications and to accept or reject applications at its
                    discretion.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Participation in programmes is subject to additional
                    eligibility requirements, which will be communicated during
                    the application process.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                4. Third-Party Links
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    This Site may contain links to third-party websites. These
                    links are provided for convenience only.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    SEO Africa does not endorse, control, or take responsibility
                    for the content, policies, or practices of third-party
                    websites.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                5. Privacy
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Your use of the Site is also governed by our Privacy Policy,
                which explains how we collect and protect your personal data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                6. Limitation of Liability
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    SEO Africa strives to ensure the accuracy of information
                    provided on the Site but does not guarantee that content
                    will always be complete, accurate, or up to date.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    To the fullest extent permitted by law, SEO Africa will not
                    be liable for any loss, damage, or inconvenience arising
                    from the use of the Site or reliance on its content.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                7. Indemnity
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                You agree to indemnify and hold harmless SEO Africa, its staff,
                volunteers, and partners from any claims, damages, liabilities,
                or expenses arising out of your use of the Site or violation of
                these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                8. Changes to the Terms
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                SEO Africa reserves the right to modify or update these Terms at
                any time. Updates will be posted on this page with a revised
                effective date. Continued use of the Site after changes means
                you accept the updated Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                9. Governing Law
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                These Terms are governed by and construed in accordance with the
                laws of [Insert Country, e.g., Federal Republic of Nigeria], and
                any disputes will be subject to the exclusive jurisdiction of
                the courts of that country.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                10. Contact us
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  If you have any questions or concerns about these terms,
                  please contact us at:
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
                        className="text-[#E8913A] hover:text-[#ED60A4] transition-colors duration-200 flex items-center space-x-1"
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

export default Terms;
