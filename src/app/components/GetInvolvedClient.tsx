"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Donate from "../components/Donate";
import Footer from "../components/Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Partners from "../components/Partners";
import Link from "next/link";
import { Heart, Phone } from "lucide-react";
import { getStrapiImageUrl } from "../lib/strapi";
import type { GetInvolvedPageData } from "../get-involved/page";

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

interface GetInvolvedClientProps {
  getInvolvedData: GetInvolvedPageData | null;
  strapiPartners: any;
}

const GetInvolvedClient: React.FC<GetInvolvedClientProps> = ({
  getInvolvedData: strapiData,
  strapiPartners,
}) => {
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

  // Fallback data
  const fallbackData = {
    hero_section: {
      accent_text: "Get involved",
      title: "Shape Africa's future with us",
      description:
        "We believe leadership development is a shared responsibility. Regardless of who you are, there's a meaningful way you can help unlock Africa's next generation of leaders.",
      cover_image: null,
    },
    become_partner_section: {
      accent_text:
        "We believe leadership development is a shared responsibility. Regardless of who you are, there's a meaningful way you can help unlock Africa's next generation of leaders.",
      title:
        "Our impact is driven by strategic collaborations with organizations that share our vision. Join us as a sponsor firm.",
      primary_cta_text: "Request a call",
      secondary_cta_text: "Request a call",
      features: [
        {
          id: 1,
          title: "Access top emerging talents",
          body: "Connect directly with Africa's most promising students and graduates, carefully trained and career-ready.",
          image: null,
        },
        {
          id: 2,
          title: "Connect with our successful alumni.",
          body: "Engage and connect with thousands of our successful alumni who are now leading important roles across the world.",
          image: null,
        },
      ],
    },
    become_volunteer_section: {
      accent_text: "become a volunteer",
      title: "Be a part of lasting positive impact. Volunteer with SEO Africa.",
      description:
        "As a volunteer with SEO Africa, you'll have the chance to make a meaningful impact, develop new skills, connect with like-minded individuals, and help empower African students and professionals to achieve their career goals.",
      cta_text: "Volunteer now",
      cta_link: null,
      cover_image: null,
      features: [
        {
          id: 1,
          title: "Mentorship",
          content:
            "Guide our mentees throughout their career journey, supporting them in improving their decision-making, problem-solving and communication skills.",
        },
        {
          id: 2,
          title: "Application reviews",
          content:
            "Increase a programme participant's chances in securing an internship or a grad role through providing them with application guidance.",
        },
        {
          id: 3,
          title: "SEOCares outreaches",
          content:
            "Sign up and volunteer your time and expertise to support our community outreach projects focused on education, sustainability, and social impact.",
        },
        {
          id: 4,
          title: "Hosting events",
          content:
            "Suggest and run career or social events that connect students, alumni, and partners. Lead and create spaces where opportunities and relationships can flourish.",
        },
      ],
    },
    support_seo_section: {
      accent_text: "SUPPORT SEO AFRICA",
      title:
        "Be the Reason Africa's Brightest Talents Rise. Your Gift Sparks Ideas, Ambition, and the Leadership Africa Needs.",
      cta_text: "Make a donation",
      cards: [
        {
          id: 1,
          content:
            "Join us as a sponsor firm to help nurture diverse talent, strengthen your brand's purpose, and make a measurable difference across the continent.",
          image: null,
        },
      ],
    },
    talent_network: {
      accent_text: "OUR TALENT NETWORK",
      title: "Find opportunities in SEO Africa. Join our talent network",
      cta_text: "Join our talent network",
      features: [
        {
          id: 1,
          title: "Early access to partner job openings",
          content:
            "SEO Africa empowers students by enhancing their skills and boosting their confidence through updated, hands-on trainings, programmes and workshops.",
        },
        {
          id: 2,
          title: "Trainings and Preps",
          content:
            "Joining SEO Africa helps you cultivate vital leadership skills that are crucial for navigating the challenges of tomorrow's workforce in your chosen fields.",
        },
      ],
      cover_image: null,
    },
    thank_you_section: {
      heading:
        "13+ years of outstanding leadership and active support. Thank you!",
      cover_image: null,
    },
  };

  const heroData = strapiData?.hero_section || fallbackData.hero_section;
  const partnerData =
    strapiData?.become_partner_section || fallbackData.become_partner_section;
  const volunteerData =
    strapiData?.become_volunteer_section ||
    fallbackData.become_volunteer_section;
  const supportData =
    strapiData?.support_seo_section || fallbackData.support_seo_section;
  const talentData = strapiData?.talent_network || fallbackData.talent_network;
  const thankYouData =
    strapiData?.thank_you_section || fallbackData.thank_you_section;

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

  const benefits = partnerData.features.map((feature, index) => ({
    title: feature.title,
    description: feature.body,
    image: feature.image
      ? getStrapiImageUrl(feature.image)
      : [
          "/blog_image2.png",
          "/seo_gallery1.png",
          "/donate_image2.png",
          "/our_programmes.png",
        ][index] || "/blog_image2.png",
    alt: `${feature.title} - SEO Africa`,
  }));

  const volunteerTextReveal = useTextReveal(0.1);
  const volunteerImageAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.2,
  });

  const heroImageSrc = heroData.cover_image
    ? getStrapiImageUrl(heroData.cover_image)
    : "/our_programmes.png";

  const volunteerImageSrc = volunteerData.cover_image
    ? getStrapiImageUrl(volunteerData.cover_image)
    : "/seo_gallery1.png";

  const talentImageSrc = talentData.cover_image
    ? getStrapiImageUrl(talentData.cover_image)
    : "/blog_image2.png";

  const donateDataForComponent = {
    id: strapiData?.support_seo_section?.id || 1,
    title: supportData.title,
    description:
      supportData.cards[0]?.content ||
      "Your donation directly supports training, mentorship, and career opportunities for talented African students.",
    cta_text: supportData.cta_text,
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
                {heroData.accent_text}
              </span>
            </div>

            <h1
              ref={headerTitleAnimation.ref}
              className={`text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-8 lg:mb-12 max-w-4xl ${headerTitleAnimation.animationClass}`}
              style={{ transitionDelay: "200ms" }}
            >
              {heroData.title}
            </h1>

            <div
              ref={headerDescriptionAnimation.ref}
              className={`max-w-4xl space-y-6 ${headerDescriptionAnimation.animationClass}`}
              style={{ transitionDelay: "400ms" }}
            >
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                {heroData.description}
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
                src={heroImageSrc}
                alt="SEO Africa team networking event"
                fill
                className="object-cover "
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />

              <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-b-lg"></div>
            </div>
          </div>
        </div>

        {/* Partners Logos */}
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

      {/* Become Partner  */}
      <section id="become-partner" className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-16 lg:mb-20">
            <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] bg-clip-text text-transparent text-sm font-bold uppercase tracking-wider">
              BECOME A PARTNER
            </span>

            <h2 className="text-[#1F2937] text-3xl lg:text-4xl xl:text-5xl font-light leading-tight mt-6 mb-8">
              {partnerData.title}
            </h2>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* <button className="bg-[#3051F3] hover:bg-[#3051f3eb] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                {partnerData.primary_cta_text}
              </button> */}

              <Link
                href={"/contact-us"}
                className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 text-center px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Contact us
              </Link>
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
                  src={benefits[activeTab]?.image || "/blog_image2.png"}
                  alt={benefits[activeTab]?.alt || "SEO Africa partnership"}
                  fill
                  className="object-cover transition-all duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Partners
        getInvolved={true}
        partnersData={{
          id: 1,
          pill_text: "OUR PARTNERS",
          title:
            "We've partnered with the best organizations and brands. Be a part of an elite movement.",
        }}
        strapiPartners={strapiPartners}
      />

      {/* Volunteer Section */}
      <section className="bg-white py-16 lg:py-24 " id="volunteer-section">
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
                  {volunteerData.accent_text}
                </span>

                <h2 className="text-[#1F2937] text-3xl lg:text-4xl xl:text-5xl font-light leading-tight mt-6 mb-6">
                  {volunteerData.title}
                </h2>

                <button
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSdEKc0pbDcwkoGVVjSc6Y4Y60Hwx96223snIdRtq4kSxE6JnA/viewform?usp=dialog",
                      "_blank"
                    )
                  }
                  className="bg-[#3051F3] hover:bg-[#3051f3ef] text-white px-8 py-3 rounded-lg font-bold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  {volunteerData.cta_text}
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
                {volunteerData.description}
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
                src={volunteerImageSrc}
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

      {/* Volunteer Roles Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-[#1F2937] text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight">
              Our volunteering roles include:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {volunteerData.features.slice(0, 6).map((feature, index) => (
              <div
                key={feature.id}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative w-8 h-8 lg:w-12 lg:h-12">
                    <Image src={`/volunteering${index + 1}.svg`} alt="" fill />
                  </div>

                  <h3 className="text-xl lg:text-2xl font-semibold text-[#1F2937]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {feature.content}
                  </p>
                </div>
              </div>
            ))}

            {/* Add extra volunteer roles for better looking UI if we have fewer than 6 from Strapi */}
            {/* {volunteerData.features.length < 5 && (
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
                    provide the most relevant trainings and keep our
                    participants up-to-date with the most recent practices.
                  </p>
                </div>
              </div>
            )} */}

            {/* {volunteerData.features.length < 6 && (
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
            )} */}
          </div>
        </div>
      </section>

      {/* Support SEO Section */}
      <section className="bg-[#131B3E] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-8">
            <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] bg-clip-text text-transparent text-sm font-bold uppercase tracking-wider">
              {supportData.accent_text}
            </span>
          </div>

          <h2 className="text-white text-3xl lg:text-4xl xl:text-5xl font-light leading-tight mb-8 lg:mb-12">
            {supportData.title}
          </h2>

          <Link
            href={"/donate"}
            className="w-fit bg-gradient-to-r from-[#E8913A] to-[#ED60A4] hover:from-[#d1821f] hover:to-[#e54d9b] text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 flex items-center gap-2 mb-12 lg:mb-16"
          >
            {supportData.cta_text}
            <Heart className="w-5 h-5" />
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="flex flex-col h-full">
              <p className="text-white/90 text-lg leading-relaxed mb-6 flex-shrink-0">
                {supportData.cards[0]?.content ||
                  "Join us as a sponsor firm to help nurture diverse talent, strengthen your brand's purpose, and make a measurable difference across the continent."}
              </p>
              <div className="relative flex-1 min-h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={
                    supportData.cards[0]?.image
                      ? getStrapiImageUrl(supportData.cards[0].image)
                      : "/seo_gallery1.png"
                  }
                  alt="SEO Africa support partnership"
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
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QFLQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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

      {/* Talent Network Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-16 lg:mb-20">
            <span className="bg-gradient-to-r from-[#E8913A] to-[#ED60A4] bg-clip-text text-transparent text-sm font-bold uppercase tracking-wider mb-6 block">
              {talentData.accent_text}
            </span>

            <h2 className="text-[#1F2937] text-3xl lg:text-4xl xl:text-5xl font-light leading-tight mb-8 max-w-4xl">
              {talentData.title}
            </h2>

            <Link
              href="https://forms.gle/gEtqD5A7X3UmVxz66"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3051F3] hover:bg-[#3051f3e7] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              {talentData.cta_text}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-20">
            {talentData.features.map((feature, index) => (
              <div key={feature.id} className="space-y-6">
                <div className="text-gray-500 text-lg font-mono">
                  /{String(index + 1).padStart(3, "0")}
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-[#1F2937]">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {feature.content}
                </p>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={talentImageSrc}
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

      {/* Thank You Section */}
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

        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="text-center">
            <h2 className="max-w-4xl mx-auto text-white text-3xl lg:text-4xl xl:text-5xl font-light leading-tight mb-4">
              {thankYouData.heading}
            </h2>
          </div>
        </div> */}

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

      <Donate donateData={donateDataForComponent} />

      <Footer />
    </div>
  );
};

export default GetInvolvedClient;
