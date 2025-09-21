"use client";

import React, { useState, useMemo, useEffect } from "react";

import { ExternalLink } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Donate from "@/app/components/Donate";
import Footer from "@/app/components/Footer";

const Privacy: React.FC = ({}) => {
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
              Our Privacy Policy
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
              SEO Africa ("we," "our," or "us") is committed to protecting the
              privacy and personal data of our community, including students,
              alumni, partners, sponsors, and website visitors. This Privacy
              Policy explains how we collect, use, and safeguard your
              information when you visit our website or engage with our
              programmes.
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                1. Information we collect
              </h2>
              <div className="space-y-6">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  We may collect the following types of information:
                </p>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Personal Information:
                      </h3>
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Name, email address, phone number, date of birth,
                        gender, educational background, employment details, or
                        other information provided through forms, applications,
                        or event registrations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Non-Personal Information:
                      </h3>
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Browser type, IP address, device information, and
                        website usage data collected through cookies or
                        analytics tools.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                2. How We Use Your Information
              </h2>
              <div className="space-y-6">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Your information may be used to:
                </p>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Process applications for our programmes, internships, and
                      opportunities.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Communicate updates, newsletters, and event invitations.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Build alumni networks and career development
                      opportunities.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Monitor and evaluate the impact of our programmes.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Improve the functionality and content of our website.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Comply with legal and regulatory requirements.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Share relevant information or opportunities (with consent)
                      that may benefit candidates.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Share data with trusted partners for joint initiatives or
                      research.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                3. Sharing of Information
              </h2>
              <div className="space-y-6">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  We do not sell or rent your personal data. We may share your
                  information only in the following cases:
                </p>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      With trusted partners and sponsors who provide
                      opportunities aligned with our mission.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      With service providers who support our operations (e.g.,
                      IT, analytics, communication tools).
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      When required by law, regulation, or legal process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                4. Data Security
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                We implement reasonable technical, administrative, and physical
                safeguards to protect your data against unauthorized access,
                alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                5. Your Rights
              </h2>
              <div className="space-y-6">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Depending on your location, you may have the right to:
                </p>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Access, correct, or update your personal data.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Request deletion of your data.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Opt-out of receiving communications.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#000] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Withdraw consent where processing is based on consent.
                    </p>
                  </div>
                </div>
                <div className="">
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    To exercise these rights, please contact us at:{" "}
                    <a
                      href="mailto:info@seo-africa.org"
                      className="text-[#3051F3] hover:text-[#ED60A4] transition-colors duration-200 font-medium"
                    >
                      info@seo-africa.org
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                6. Cookies and Tracking
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Our website may use cookies and similar technologies to enhance
                user experience and analyze traffic. You can adjust your browser
                settings to decline cookies, but this may affect site
                functionality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                7. Third-party Links
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or content of those
                sites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                8. Children's Privacy
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Our programmes and website are not directed at children under
                16. We do not knowingly collect personal data from children
                without parental consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                9. Changes to This Policy
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated effective date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                10. Contact us
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  If you have any questions or concerns about this Privacy
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

export default Privacy;
