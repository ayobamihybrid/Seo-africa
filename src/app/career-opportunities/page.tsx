"use client";

import React from "react";
import Donate from "../components/Donate";
import Footer from "../components/Footer";
import Image from "next/image";
import Navbar from "../components/Navbar";
import useScrollAnimation from "../hooks/useScrollAnimation";
import Link from "next/link";

type Props = {};

const CareerOpportunities = (props: Props) => {
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

  const sectionTitleAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
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
  const card4Animation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });

  return (
    <div className="bg-[#131B3E]">
      <Navbar />

      <section className="bg-[#131B3E] px-4 sm:px-6 lg:px-12 py-16 lg:py-24 pb-48 lg:pb-64 ">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 lg:mb-24">
            <div
              ref={headerBadgeAnimation.ref}
              className={`mb-8 ${headerBadgeAnimation.animationClass}`}
            >
              <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] bg-clip-text text-transparent text-xl font-bold">
                Career opportunities
              </span>
            </div>

            <h1
              ref={headerTitleAnimation.ref}
              className={`text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-5 lg:mb-7 max-w-5xl ${headerTitleAnimation.animationClass}`}
              style={{ transitionDelay: "200ms" }}
            >
              From Career Readiness to Global Internships. Explore the
              Programmes Shaping Africa&apos;s Next Leaders
            </h1>

            <div
              ref={headerDescriptionAnimation.ref}
              className={`max-w-5xl space-y-6 ${headerDescriptionAnimation.animationClass}`}
              style={{ transitionDelay: "400ms" }}
            >
              <p className="text-white/90 text-lg md:text-2xl leading-relaxed">
                Partnering with leading companies opens doors to internships,
                graduate programs, and full-time roles that can elevate your
                career globally. Explore available positions below to make a
                real-world impact.
              </p>
            </div>

            <div className="mt-7 flex items-center gap-2 md:gap-6">
              <button className=" bg-[#3051F3] p-3 rounded-lg ">
                <p>See open roles</p>
              </button>

              {/* <Link href={""} className="text-white underline">
                Join our talent network
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 sm:px-6 lg:px-12 py-16 lg:py-24 relative">
        <div className="max-w-7xl mx-auto">
          <div
            ref={sectionTitleAnimation.ref}
            className={`text-center mb-12 lg:mb-16 ${sectionTitleAnimation.animationClass}`}
          >
            <h2 className="text-[#131B3E] text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
              Why apply through SEO Africa?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div
              ref={card1Animation.ref}
              className={`bg-white border border-gray-200 p-6 lg:p-8 ${card1Animation.animationClass}`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="mb-20">
                <span className="text-[#131B3E] text-lg font-bold">/001</span>
              </div>
              <h3 className="text-[#131B3E] text-base md:text-xl font-medium mb-4 leading-tight">
                Exclusive access to roles with our vetted corporate partners
                across industries.
              </h3>
            </div>

            <div
              ref={card2Animation.ref}
              className={`bg-white border border-gray-200 p-6 lg:p-8 ${card2Animation.animationClass}`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="mb-20">
                <span className="text-[#131B3E] text-lg font-bold">/002</span>
              </div>
              <h3 className="text-[#131B3E] text-base md:text-xl font-medium mb-4 leading-tight">
                Mentorship and CV Support to help you stand out and succeed in
                applications.
              </h3>
            </div>

            <div
              ref={card3Animation.ref}
              className={`bg-white border border-gray-200 p-6 lg:p-8 ${card3Animation.animationClass}`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="mb-20">
                <span className="text-[#131B3E] text-lg font-bold">/003</span>
              </div>
              <h3 className="text-[#131B3E] text-base md:text-xl font-medium mb-4 leading-tight">
                Career trainings to prepare you for interviews, assessments, and
                on-the-job success.
              </h3>
            </div>

            <div
              ref={card4Animation.ref}
              className={`bg-white border border-gray-200 p-6 lg:p-8 ${card4Animation.animationClass}`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="mb-20">
                <span className="text-[#131B3E] text-lg font-bold">/004</span>
              </div>
              <h3 className="text-[#131B3E] text-base md:text-xl font-medium mb-4 leading-tight">
                Alumni Network of leaders across Africa ready to support your
                journey.
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-[#131B3E] text-2xl lg:text-5xl font-medium">
              Available roles
            </h2>

            <div className="flex items-center gap-2 md:gap-3">
              <span className="text-gray-500 text-xs md:text-sm">
                Location:
              </span>
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-300 rounded-lg px-2 md:px-4 py-1.5 md:py-2 pr-4 md:pr-10 text-xs md:text-sm text-gray-700 focus:outline-none">
                  <option value="worldwide">🌍 Worldwide</option>
                  <option value="nigeria">🇳🇬 Nigeria</option>
                  <option value="kenya">🇰🇪 Kenya</option>
                  <option value="ghana">🇬🇭 Ghana</option>
                  <option value="south-africa">🇿🇦 South Africa</option>
                  <option value="ivory-coast">🇨🇮 Ivory Coast</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-0.5 bg-gray-100 mb-12" />

          <div className="space-y-20">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
              <div className="lg:col-span-1">
                <h3 className="text-[#131B3E] text-xl font-semibold mb-2">
                  Gensler Energy
                </h3>
                <p className="text-gray-400 text-sm">Posted Jan 29, 2025</p>
              </div>

              <div className="lg:col-span-4 p-4 border">
                <div className="pb-8 ">
                  <div className="flex items-start justify-between mb-4 ">
                    <h4 className="text-[#131B3E] text-xl lg:text-2xl font-medium pr-4">
                      Gensler Energy Graduate Programme - Ivory Coast
                    </h4>
                    <span className="bg-orange-50 text-orange-600 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                      Opening soon
                    </span>
                  </div>
                  <p className="text-gray-500 mb-4">
                    This programme is open to final year students expected to
                    graduate in 2025 and recent graduates (graduated within the
                    past two years) in Ivory Coast.
                  </p>
                  <p className="text-gray-500 mb-6">
                    The available roles include Engineering, Accounting,
                    Business Administration, Data Analysis, Computer
                    Engineering, and others.
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Ivory Coast
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Posted Jan 29, 2025
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="bg-gray-100 text-gray-500 px-6 py-2 rounded-lg text-sm font-medium">
                      Apply soon
                    </button>
                    <button className="text-[#3051F3] text-sm font-medium underline">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
              <div className="lg:col-span-1">
                <h3 className="text-[#131B3E] text-xl font-semibold mb-2">
                  SEO Africa
                </h3>
                <p className="text-gray-400 text-sm">
                  Open positions in SEO Africa
                </p>
              </div>
              <div className="lg:col-span-4 space-y-12 ">
                <div className="p-4 border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-[#131B3E] text-xl lg:text-2xl font-medium pr-4">
                      2025 BII Graduate Programme
                    </h4>
                    <span className="bg-red-50 text-red-600 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                      Closed
                    </span>
                  </div>
                  <p className="text-gray-500 mb-6">
                    Are you a passionate young graduate eager to launch your
                    career in Development Finance and Impact Investing? This is
                    your chance to join the British International Investment
                    team! Apply now if you meet the eligibility criteria.
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Nigeria, Kenya
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Posted Jan 29, 2025
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="bg-gray-100 text-gray-500 px-6 py-2 rounded-lg text-sm font-medium">
                      Apply soon
                    </button>
                    <button className="text-[#3051F3] text-sm font-medium underline">
                      Learn more
                    </button>
                  </div>
                </div>

                <div className="p-4 border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-[#131B3E] text-xl lg:text-2xl font-medium pr-4">
                      2025 SEO Africa Career Programme - Ghana
                    </h4>
                    <span className="bg-red-50 text-red-600 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                      Closed
                    </span>
                  </div>
                  <p className="text-gray-500 mb-4">
                    The programme is open to final year students in Ghana.
                  </p>
                  <p className="text-gray-500 mb-6">
                    Selected candidates would be provided with a world-class
                    training programme, and be placed as Graduate Trainees in
                    top firms in Ghana.
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Ghana
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Posted Jan 29, 2025
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="bg-gray-100 text-gray-500 px-6 py-2 rounded-lg text-sm font-medium">
                      Apply soon
                    </button>
                    <button className="text-[#3051F3] text-sm font-medium underline">
                      Learn more
                    </button>
                  </div>
                </div>

                <div className="p-4 border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-[#131B3E] text-xl lg:text-2xl font-medium pr-4">
                      2025 Global Pathways Programme
                    </h4>
                    <span className="bg-red-50 text-red-600 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                      Closed
                    </span>
                  </div>
                  <p className="text-gray-500 mb-4">
                    The programme is open to African undergraduates graduating
                    in 2027 interested in applying for the 2026 International
                    Summer Internships of Bank of America and Goldman Sachs.
                  </p>
                  <p className="text-gray-500 mb-6">
                    Available roles are: Engineering/Technology, Global Markets,
                    Global Operations, Global Payment Solutions, Global Risk,
                    and Investment Banking.
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Africa
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Posted Jan 29, 2025
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="bg-gray-100 text-gray-500 px-6 py-2 rounded-lg text-sm font-medium">
                      Apply soon
                    </button>
                    <button className="text-[#3051F3] text-sm font-medium underline">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
              <div className="lg:col-span-1">
                <h3 className="text-[#131B3E] text-xl font-semibold mb-2">
                  Argentil
                </h3>
                <p className="text-gray-400 text-sm">
                  Open positions in Argentil
                </p>
              </div>
              <div className="lg:col-span-4">
                <div className="p-4 border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-[#131B3E] text-xl lg:text-2xl font-medium pr-4">
                      Graduate Trainee Vacancies
                    </h4>
                    <span className="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                      OPEN
                    </span>
                  </div>
                  <p className="text-gray-500 mb-6">
                    You're an ambitious recent graduate in Nigeria passionate
                    about Private Equity or Investment Banking. You want to be
                    part of a dynamic industry that's shaping the future of
                    business and finance.
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Nigeria, Kenya
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Posted Jan 30, 2025
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="bg-[#3051F3] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#2441e0] transition-colors">
                      Apply now
                    </button>
                    <button className="text-[#3051F3] text-sm font-medium underline">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px] w-full rounded-lg overflow-hidden">
            <Image
              src={"/blog_image2.png"}
              alt="Blog image showcasing our impact"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#131B3E] text-xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
            Get notified when new roles open up
          </h2>

          <p className="text-gray-600 text-base md:text-xl mb-8">
            Be the first to know when new jobs are posted!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3051F3] focus:border-transparent"
            />
            <button className="w-full sm:w-auto bg-[#3051F3] text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-[#2441e0] transition-colors">
              Subscribe
            </button>
          </div>

          <p className="text-gray-500 text-sm">
            We care about your data in our{" "}
            <a href="#" className="text-gray-600 underline hover:text-gray-800">
              privacy policy
            </a>
            .
          </p>
        </div>
      </section>

      <Donate />

      <Footer />
    </div>
  );
};

export default CareerOpportunities;
