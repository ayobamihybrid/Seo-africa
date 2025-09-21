"use client";

import React, { useState, useRef } from "react";
import Donate from "../components/Donate";
import Footer from "../components/Footer";
import Image from "next/image";
import Navbar from "../components/Navbar";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { getStrapiImageUrl } from "../lib/strapi";
import type { CareerPageData } from "../career-opportunities/page";
import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";

interface JobCompany {
  id: number;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Job {
  id: number;
  documentId: string;
  title: string;
  content: string;
  location: string;
  posted_date: string;
  apply_link: string;
  expire_date: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  job_company: JobCompany;
}

interface CareerOpportunitiesClientProps {
  careerPageData: CareerPageData | null;
  jobsList: Job[];
  companiesList: JobCompany[];
}

const CareerOpportunitiesClient: React.FC<CareerOpportunitiesClientProps> = ({
  careerPageData: strapiData,
  jobsList,
  companiesList,
}) => {
  const [email, setEmail] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("worldwide");

  const rolesRef = useRef<HTMLElement>(null);

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

  const scrollToRoles = () => {
    rolesRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const getJobStatus = (expireDate: string) => {
    const today = new Date();
    const expiry = new Date(expireDate);

    if (expiry < today) {
      return { text: "Closed", className: "bg-red-50 text-red-600" };
    } else if (expiry.getTime() - today.getTime() < 7 * 24 * 60 * 60 * 1000) {
      return {
        text: "Closing soon",
        className: "bg-orange-50 text-orange-600",
      };
    } else {
      return { text: "OPEN", className: "bg-blue-50 text-blue-600" };
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const jobsByCompany = jobsList.reduce((acc, job) => {
    const companyName = job.job_company.name;
    if (!acc[companyName]) {
      acc[companyName] = [];
    }
    acc[companyName].push(job);
    return acc;
  }, {} as Record<string, Job[]>);

  const filteredJobsByCompany = Object.entries(jobsByCompany).reduce(
    (acc, [company, jobs]) => {
      const filteredJobs =
        selectedLocation === "worldwide"
          ? jobs
          : jobs.filter((job) =>
              job.location
                .toLowerCase()
                .includes(selectedLocation.replace("-", " "))
            );

      if (filteredJobs.length > 0) {
        acc[company] = filteredJobs;
      }
      return acc;
    },
    {} as Record<string, Job[]>
  );

  // Fallback data
  const fallbackData = {
    hero_section: {
      accent_text: "Career opportunities",
      title:
        "From Career Readiness to Global Internships. Explore the Programmes Shaping Africa's Next Leaders",
      description:
        "Partnering with leading companies opens doors to internships, graduate programs, and full-time roles that can elevate your career globally. Explore available positions below to make a real-world impact.",
      primary_cta_text: "See open roles",
      secondary_cta_text: "See open roles",
      secondary_cta_link: null,
    },
    features_sections: {
      title: "Why apply through SEO Africa?",
      feature_cards: [
        {
          id: 1,
          content:
            "Exclusive access to roles with our vetted corporate partners across industries.",
        },
        {
          id: 2,
          content:
            "Mentorship and CV Support to help you stand out and succeed in applications.",
        },
        {
          id: 3,
          content:
            "Career trainings to prepare you for interviews, assessments, and on-the-job success.",
        },
        {
          id: 4,
          content:
            "Alumni Network of leaders across Africa ready to support your journey.",
        },
      ],
    },
    open_roles_section: {
      title: "Available roles",
      cover_image: null,
    },
    newsletter_cta_section: {
      title: "Get notified when new roles open up",
      alt_title: "Be the first to know when new jobs are posted!",
      cta_text: "Subscribe",
      info_text: "We care about your data in our privacy policy.",
    },
    donate_cta_section: {
      id: 1,
      title: "Make an uncommon impact. Support our work at SEO Africa",
      description:
        "SEO Africa has been the propelling wind behind thousands of successful careers and leadership stories in young Africans for more than 13 years now. You can help us be there for thousands more!",
      cta_text: "Donate Now",
    },
  };

  const heroData = strapiData?.hero_section || fallbackData.hero_section;
  const featuresData =
    strapiData?.features_sections || fallbackData.features_sections;
  const openRolesData =
    strapiData?.open_roles_section || fallbackData.open_roles_section;
  const newsletterData =
    strapiData?.newsletter_cta_section || fallbackData.newsletter_cta_section;
  const donateData =
    strapiData?.donate_cta_section || fallbackData.donate_cta_section;

  const openRolesImageSrc = openRolesData.cover_image
    ? getStrapiImageUrl(openRolesData.cover_image)
    : "/blog_image2.png";

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  const cardAnimations = [
    card1Animation,
    card2Animation,
    card3Animation,
    card4Animation,
  ];

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
                {heroData.accent_text}
              </span>
            </div>

            <h1
              ref={headerTitleAnimation.ref}
              className={`text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-5 lg:mb-7 max-w-5xl ${headerTitleAnimation.animationClass}`}
              style={{ transitionDelay: "200ms" }}
            >
              {heroData.title}
            </h1>

            <div
              ref={headerDescriptionAnimation.ref}
              className={`max-w-5xl space-y-6 ${headerDescriptionAnimation.animationClass}`}
              style={{ transitionDelay: "400ms" }}
            >
              <p className="text-white/90 text-lg md:text-2xl leading-relaxed">
                {heroData.description}
              </p>
            </div>

            <div className="w-fit mt-7 flex items-center gap-2 md:gap-6">
              <button
                onClick={scrollToRoles}
                className="bg-[#3051F3] text-white p-3 rounded-lg hover:bg-[#2441e0] transition-colors cursor-pointer"
              >
                <p>{heroData.primary_cta_text}</p>
              </button>
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
            {featuresData.feature_cards.map((card, index) => (
              <div
                key={card.id}
                ref={cardAnimations[index]?.ref}
                className={`bg-white border border-gray-200 p-6 lg:p-8 ${cardAnimations[index]?.animationClass}`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="mb-20">
                  {/* <span className="text-[#131B3E] text-lg font-bold">
                    /{String(index + 1).padStart(3, "0")}
                  </span> */}
                </div>
                <h3 className="text-[#131B3E] text-base md:text-xl font-medium mb-4 leading-tight">
                  {card.content}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  Roles  */}
      <section
        ref={rolesRef}
        className="bg-white px-4 sm:px-6 lg:px-12 py-16 lg:py-24"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-[#131B3E] text-2xl lg:text-5xl font-medium">
              {openRolesData.title}
            </h2>

            <div className="flex items-center gap-2 md:gap-3">
              {/* <span className="text-gray-500 text-xs md:text-sm">
                Location:
              </span> */}
              <div className="relative">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-2 md:px-4 py-1.5 md:py-2 pr-4 md:pr-10 text-xs md:text-sm text-gray-700 focus:outline-none"
                >
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

          {/* Jobs Listings */}
          <div className="space-y-20">
            {Object.entries(filteredJobsByCompany).length === 0 ? (
              <div className="text-center py-20">
                <div className="text-gray-500 text-lg mb-4">
                  No jobs found for the selected location
                </div>
                <p className="text-gray-400">
                  Try selecting "Worldwide" or a different location to see more
                  opportunities.
                </p>
              </div>
            ) : (
              Object.entries(filteredJobsByCompany).map(
                ([companyName, jobs]) => (
                  <div
                    key={companyName}
                    className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16"
                  >
                    <div className="lg:col-span-1">
                      <h3 className="text-[#131B3E] text-xl font-semibold mb-2">
                        {companyName}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {jobs.length > 1
                          ? `${jobs.length} open positions`
                          : `Posted ${formatDate(jobs[0].posted_date)}`}
                      </p>
                    </div>

                    <div className="lg:col-span-4 space-y-12">
                      {jobs.map((job) => {
                        const status = getJobStatus(job.expire_date);
                        return (
                          <div
                            key={job.id}
                            className="p-4 border border-gray-100"
                          >
                            <div className="pb-8">
                              <div className="flex items-start justify-between mb-4">
                                <h4 className="text-[#131B3E] text-xl lg:text-2xl font-medium pr-4">
                                  {job.title}
                                </h4>
                                <span
                                  className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${status.className}`}
                                >
                                  {status.text}
                                </span>
                              </div>

                              <p className="text-gray-500 mb-6">
                                {job.content}
                              </p>

                              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 text-sm text-gray-400 mb-6">
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-4 h-4 text-gray-500" />
                                  {job.location}
                                </div>

                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4 text-gray-500" />
                                  Posted {formatDate(job.posted_date)}
                                </div>

                                <div className="flex items-center gap-2">
                                  <Clock className="w-4 h-4 text-gray-500" />
                                  Expires {formatDate(job.expire_date)}
                                </div>
                              </div>

                              <div className="flex items-center gap-4">
                                {status.text === "Closed" ? (
                                  <button className="bg-gray-100 text-gray-500 px-6 py-2 rounded-lg text-sm font-medium cursor-not-allowed">
                                    Application Closed
                                  </button>
                                ) : (
                                  <a
                                    href={job.apply_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#3051F3] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#2441e0] transition-colors"
                                  >
                                    Apply now
                                  </a>
                                )}
                                <button className="text-[#3051F3] text-sm font-medium underline">
                                  Learn more
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )
              )
            )}
          </div>

          <div className="mt-20 relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px] w-full overflow-hidden">
            <Image
              src={openRolesImageSrc}
              alt="Career opportunities showcase"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            />

            <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-pink-500 to-purple-600"></div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#131B3E] text-xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            {newsletterData.title}
          </h2>

          <p className="text-gray-600 text-base md:text-xl mb-8">
            {newsletterData.alt_title}
          </p>

          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-6"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full sm:flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3051F3] focus:border-transparent"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#3051F3] text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-[#2441e0] transition-colors"
            >
              {newsletterData.cta_text}
            </button>
          </form>

          <p className="text-gray-500 text-sm">
            {newsletterData.info_text.includes("privacy policy") ? (
              <>
                We care about your data in our{" "}
                <a
                  href="/privacy-policy"
                  className="text-gray-600 underline hover:text-gray-800"
                >
                  privacy policy
                </a>
                .
              </>
            ) : (
              newsletterData.info_text
            )}
          </p>
        </div>
      </section>

      <Donate donateData={donateData} />

      <Footer />
    </div>
  );
};

export default CareerOpportunitiesClient;
