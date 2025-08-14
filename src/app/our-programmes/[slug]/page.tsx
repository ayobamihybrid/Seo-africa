"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";
import Donate from "@/app/components/Donate";

const programmesData = {
  "graduate-trainee-nigeria": {
    title: "Graduate Trainee Programme: Nigeria In-Country",
    country: "Nigeria",
    countryCode: "NG",
    flagSrc: "/nigeria.svg",
    image: "/our_programmes.png",
    description: "Live coaching, Expert guidance, Real and updated curriculum.",
    startDate: "Starting August 2025",
    fullDescription:
      "The Nigeria Career Programme is designed for recent graduates (within the past two years) who have completed or will soon complete their NYSC in the year applications are open and are eager to build a career in Finance.",
    detailedDescription:
      "Selected candidates will undergo world-class training, equipping them with both technical and soft skills needed to excel in the corporate environment. Upon successful completion, participants will be placed as Graduate Trainees at leading firms in Nigeria.",
    applicationProcess:
      "As part of the application process, we conduct a rigorous recruitment and selection process, identifying top university graduates based on ability, motivation, and leadership potential.",
    partnerCompanies:
      "Some of our partner companies for the Nigeria Career Programme include: Argenti, RMB, Kuramo Capital, UAC, FCMB, Constant Capital etc.",
    benefits: [
      {
        icon: "/right_for1.svg",
        title: "You're a driven student or recent graduate",
        description:
          "looking to gain real-world skills, mentorship, and access to career opportunities.",
      },
      {
        icon: "/right_for2.svg",
        title: "You want to make a meaningful impact in",
        description: "your community and grow as a socially conscious leader.",
      },
      {
        icon: "/right_for3.svg",
        title: "You're seeking exposure to global companies",
        description:
          "and want to build a competitive edge in today's workforce.",
      },
      {
        icon: "/right_for4.svg",
        title: "You believe in the power of networking and",
        description:
          "want to connect with high-performing peers, mentors, and professionals.",
      },
      {
        icon: "/right_for5.svg",
        title: "You're ready to challenge yourself, step out of",
        description:
          "your comfort zone, and invest in your personal and professional growth.",
      },
      {
        icon: "/right_for6.svg",
        title: "You want to be part of something bigger—a",
        description:
          "pan-African movement shaping the future of leadership and innovation.",
      },
    ],
    eligibility: [
      "You are a recent Nigerian university graduate (2022-2024) with a minimum of 2nd Class Upper Certificate",
      "You have completed or will soon complete the NYSC programme in Nigeria.",
      "You will be physically available in Nigeria for the duration of the programme.",
      "Your course of study in school falls under our scope of coverage in the corporate finance industry.",
    ],
    ctaText: "This isn't just theory, it's realworld learning. no fluff",
  },
  "graduate-trainee-ghana": {
    title: "Graduate Trainee Programme: Ghana In-Country",
    country: "Ghana",
    countryCode: "GH",
    flagSrc: "/ghana.svg",
    image: "/donate_image2.png",
    description: "Live coaching, Expert guidance, Real and updated curriculum.",
    startDate: "Starting August 2025",
    fullDescription:
      "The Ghana Career Programme is designed for recent graduates who are passionate about developing leadership skills and building successful careers in Ghana's dynamic business environment.",
    detailedDescription:
      "Selected candidates will undergo comprehensive training that combines theoretical knowledge with practical application, preparing them for leadership roles in top Ghanaian companies.",
    applicationProcess:
      "We conduct a thorough selection process to identify candidates with exceptional potential, strong academic performance, and demonstrated leadership capabilities.",
    partnerCompanies:
      "Our partner companies in Ghana include leading financial institutions, consulting firms, and multinational corporations operating in West Africa.",
    benefits: [
      {
        icon: "/right_for1.svg",
        title: "You're a driven student or recent graduate",
        description:
          "looking to gain real-world skills, mentorship, and access to career opportunities.",
      },
      {
        icon: "/right_for2.svg",
        title: "You want to make a meaningful impact in",
        description: "your community and grow as a socially conscious leader.",
      },
      {
        icon: "/right_for3.svg",
        title: "You're seeking exposure to global companies",
        description:
          "and want to build a competitive edge in today's workforce.",
      },
      {
        icon: "/right_for4.svg",
        title: "You believe in the power of networking and",
        description:
          "want to connect with high-performing peers, mentors, and professionals.",
      },
      {
        icon: "/right_for5.svg",
        title: "You're ready to challenge yourself, step out of",
        description:
          "your comfort zone, and invest in your personal and professional growth.",
      },
      {
        icon: "/right_for6.svg",
        title: "You want to be part of something bigger—a",
        description:
          "pan-African movement shaping the future of leadership and innovation.",
      },
    ],
    eligibility: [
      "You are a recent Ghanaian university graduate (2022-2024) with strong academic performance",
      "You have completed your national service or equivalent",
      "You will be physically available in Ghana for the duration of the programme",
      "Your academic background aligns with our target industries and career paths",
    ],
    ctaText: "This isn't just theory, it's realworld learning. no fluff",
  },
};

export default function ProgrammeDetails() {
  const params = useParams();
  const slug = params.slug as string;

  const programme = programmesData[slug as keyof typeof programmesData];

  if (!programme) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Programme Not Found
          </h1>
          <Link
            href="/our-programmes"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Return to Our Programmes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar details/>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/our-programmes"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="underline font-bold">Go back</span>
          </Link>

          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
            <Image
              src={programme.image}
              alt={programme.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
              {programme.title}
            </h1>

            {(slug === "graduate-trainee-nigeria" ||
              slug === "graduate-trainee-ghana") && (
              <div
                className={`${
                  slug === "graduate-trainee-nigeria"
                    ? "bg-[#067A57]"
                    : "bg-[#E0BE70]"
                } w-fit p-2 rounded-full flex items-center gap-2 mb-6`}
              >
                <div className="flex items-center px-3 py-1">
                  <div className="w-5 h-5 rounded-full overflow-hidden mr-2">
                    <Image
                      src={programme.flagSrc}
                      alt={`${programme.country} flag`}
                      width={20}
                      height={20}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-white text-xl font-medium">
                    {programme.countryCode}
                  </span>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src="/team1.png"
                      alt="Program participant"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src="/team2.png"
                      alt="Program participant"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src="/team3.png"
                      alt="Program participant"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center">
                    <span className="text-gray-600 text-xs font-bold">
                      +16k+
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center text-gray-600 mb-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              <span>{programme.description}</span>
            </div>

            <div className="flex items-center text-gray-600">
              <Calendar className="w-4 h-4 mr-3" />
              <span>{programme.startDate}</span>
            </div>

            <div className="mt-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center">
                Apply now
                <ExternalLink className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="h-0.5 bg-gray-200 max-w-4xl mx-auto px-4 sm:px-6" />

      <section className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {programme.fullDescription}
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {programme.detailedDescription}
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {programme.applicationProcess}
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              {programme.partnerCompanies}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-center text-gray-900 mb-12">
            This is right for you if
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programme.benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <Image
                  src={benefit.icon}
                  alt="Program participant"
                  width={30}
                  height={30}
                  className="mx-auto mb-4"
                />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-center text-gray-900 mb-12">
            Do i qualify to apply?
          </h2>

          <div className="max-w-lg mx-auto bg-white p-1 rounded-full relative z-10">
            <div className="w-full bg-gradient-to-r from-orange-400 to-pink-400 rounded-full p-2 text-center">
              <span className=" text-white font-bold">
                You qualify to apply if you meet the following criteria:
              </span>
            </div>
          </div>

          <div className="mt-4 md:-mt-6 bg-gradient-to-b md:bg-gradient-to-r from-[#1E24CEED] via-[#1E24CEED] to-[#A533C4BA] rounded-4xl p-8 md:p-12 z-1">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-8">
                  {programme.ctaText}
                </h3>
                <button className="bg-white text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center">
                  Apply now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>

              <div className="space-y-4">
                {programme.eligibility.map((criterion, index) => (
                  <div key={index} className="flex items-start text-white">
                    <span className="text-white text-2xl mr-3 mt-1">✱</span>
                    <span className="text-base leading-relaxed">{criterion}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Donate/>

      <Footer />
    </div>
  );
}
