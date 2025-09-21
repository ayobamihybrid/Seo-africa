"use client";

import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";
import Donate from "./Donate";
import { getStrapiImageUrl } from "@/app/lib/strapi";

export interface Programme {
  id: number;
  slug: string;
  documentId: string;
  title: string;
  excerpt: string;
  cta_text: string;
  badge_info: string;
  start_date: string;
  apply_link?: string | null;
  content: string;
  cover_image: {
    id: number;
    url: string;
    alternativeText?: string;
    width: number;
    height: number;
    formats?: {
      large?: { url: string };
      medium?: { url: string };
      small?: { url: string };
      thumbnail?: { url: string };
    };
  };
  features: Array<{
    id: number;
    text: string;
  }>;
  requirements: Array<{
    id: number;
    point: string;
  }>;
}

interface Props {
  programme: Programme;
}

const defaultDonateData = {
  id: 1,
  title: "Make an uncommon impact. Support our work at SEO Africa",
  description:
    "SEO Africa has been the propelling wind behind thousands of successful careers and leadership stories in young Africans for more than 13 years now. You can help us be there for thousands more!",
  cta_text: "Donate now",
};

const ProgrammeDetailClient: React.FC<Props> = ({ programme }) => {
  const formatStartDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return `Starting ${date.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })}`;
    } catch {
      return dateString;
    }
  };

  const getProgrammeImageUrl = (programme: Programme) => {
    if (programme.cover_image?.url) {
      return programme.cover_image.url.startsWith("http")
        ? programme.cover_image.url
        : programme.cover_image.url;
    }
    return "/our_programmes.png";
  };

  const getBadgeColor = (title: string) => {
    if (title.toLowerCase().includes("nigeria")) {
      return "bg-[#067A57]";
    }
    if (title.toLowerCase().includes("ghana")) {
      return "bg-[#E0BE70]";
    }
    return "bg-blue-600";
  };

  const getCountryCode = (title: string) => {
    if (title.toLowerCase().includes("nigeria")) {
      return "NG";
    }
    if (title.toLowerCase().includes("ghana")) {
      return "GH";
    }
    return "AF";
  };

  const stripHtmlTags = (html: string) => {
    return html.replace(/<[^>]*>/g, "");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar details />

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
              src={getProgrammeImageUrl(programme)}
              alt={programme.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
              {programme.title}
            </h1>

            {(programme.title.toLowerCase().includes("nigeria") ||
              programme.title.toLowerCase().includes("ghana")) && (
              <div
                className={`${getBadgeColor(
                  programme.title
                )} w-fit p-2 rounded-full flex items-center gap-2 mb-6`}
              >
                <div className="flex items-center px-3 py-1">
                  <span className="text-white text-xl font-medium">
                    {getCountryCode(programme.title)}
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
              <span>{programme.badge_info}</span>
            </div>

            <div className="flex items-center text-gray-600">
              <Calendar className="w-4 h-4 mr-3" />
              <span>{formatStartDate(programme.start_date)}</span>
            </div>

            <div className="mt-6">
              {programme.apply_link ? (
                <a
                  href={programme.apply_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center"
                >
                  Apply now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              ) : (
                <Link
                  href={"https://seoafrica.corner.education"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center"
                >
                  Apply now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="h-0.5 bg-gray-200 max-w-4xl mx-auto px-4 sm:px-6" />

      <section className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {stripHtmlTags(programme.content)}
            </p>
          </div>
        </div>
      </section>

      {programme.features.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-light text-center text-gray-900 mb-12">
              what the program offers
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programme.features.map((feature, index) => (
                <div key={feature.id} className="text-center">
                  <Image
                    src={`/right_for${(index % 6) + 1}.svg`}
                    alt="Feature icon"
                    width={30}
                    height={30}
                    className="mx-auto mb-4"
                  />
                  <p className="text-gray-600">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <h2 className="text-3xl md:text-4xl font-light text-center text-gray-900 mb-12">
            Do i qualify to apply?
          </h2> */}

          {/* <div className="max-w-lg mx-auto bg-white p-1 rounded-full relative z-10">
            <div className="w-full bg-gradient-to-r from-orange-400 to-pink-400 rounded-full p-2 text-center">
              <span className=" text-white font-bold">
                You qualify to apply if you meet the following criteria:
              </span>
            </div>
          </div> */}

          <div className="mt-4 md:-mt-6 bg-gradient-to-b md:bg-gradient-to-r from-[#1E24CEED] via-[#1E24CEED] to-[#A533C4BA] rounded-4xl p-8 md:p-12 z-1">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-8">
                  Kickstart your journey now!
                </h3>
                {programme.apply_link ? (
                  <a
                    href={programme.apply_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
                  >
                    Apply now
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                ) : (
                  <Link
                    href={"https://seoafrica.corner.education"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit bg-white text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center"
                  >
                    Apply now
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                )}
              </div>

              <div className="space-y-4">
                {programme.requirements.map((requirement) => (
                  <div
                    key={requirement.id}
                    className="flex items-start text-white"
                  >
                    <span className="text-white text-2xl mr-3 mt-1">✱</span>
                    <span className="text-base leading-relaxed">
                      {requirement.point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Donate donateData={defaultDonateData} />

      <Footer />
    </div>
  );
};

export default ProgrammeDetailClient;
