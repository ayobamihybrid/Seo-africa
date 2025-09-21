"use client";

import React from "react";
import Image from "next/image";
import { Heart, Rocket, Users } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import Link from "next/link";
import { getStrapiImageUrl } from "../lib/strapi";

interface CardBlock {
  id: number;
  title: string | null;
  description: string;
  cta_text: string;
  cover_image: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    url: string;
    formats?: {
      large?: { url: string; width: number; height: number };
      medium?: { url: string; width: number; height: number };
      small?: { url: string; width: number; height: number };
      thumbnail?: { url: string; width: number; height: number };
    };
  } | null;
}

interface CardBlockSection {
  id: number;
  main_card: CardBlock;
  green_card: CardBlock;
  blue_card: CardBlock;
}

interface GetInvolvedProps {
  cardBlockData: CardBlockSection;
  className?: string;
}

const GetInvolved: React.FC<GetInvolvedProps> = ({
  cardBlockData,
  className = "",
}) => {
  const donateCardAnimation = useScrollAnimation({
    animationType: "fade-left",
    threshold: 0.2,
  });
  const programmeCardAnimation = useScrollAnimation({
    animationType: "fade-right",
    threshold: 0.2,
  });
  const partnerCardAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.2,
  });

  const donateHeadingAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });
  const donateDescriptionAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });
  const donateButtonAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });

  const programmeIconAnimation = useScrollAnimation({
    animationType: "zoom-in",
    threshold: 0.3,
  });
  const programmeContentAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });

  const partnerContentAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });

  const mainCardImageUrl = cardBlockData.main_card.cover_image
    ? getStrapiImageUrl(cardBlockData.main_card.cover_image)
    : "";

  const partnerCardImageUrl = "/donate_image.png";

  return (
    <section className={`py-16 px-4 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
          <div
            ref={donateCardAnimation.ref}
            className={`relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden min-h-[600px] flex flex-col justify-between ${donateCardAnimation.animationClass}`}
          >
            <div className="absolute inset-0 z-0">
              <Image
                src={mainCardImageUrl}
                alt={
                  cardBlockData.main_card.cover_image?.alternativeText ||
                  "SEO Africa event background"
                }
                fill
                className="object-cover opacity-30"
                sizes="50vw"
              />
            </div>

            <div className="md:mt-[15rem] relative z-10 p-8 md:p-12 flex flex-col gap-3 h-full">
              <div
                ref={donateHeadingAnimation.ref}
                className={donateHeadingAnimation.animationClass}
                style={{ transitionDelay: "200ms" }}
              >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">
                  Get involved with us.
                </h2>
                <div className="mb-3">
                  <span className="text-3xl md:text-5xl font-bold text-[#4DE5A0]">
                    Donate
                  </span>
                  <span className="text-3xl md:text-5xl font-bold text-white">
                    {" "}
                    to a greater
                  </span>
                </div>
                <div className="flex items-center mb-8">
                  <span className="text-3xl md:text-5xl font-bold text-white mr-3">
                    good{" "}
                  </span>
                  <span className="text-3xl md:text-5xl font-bold text-[#4DE5A0]">
                    today.
                  </span>
                  <span className="text-4xl ml-3">💛</span>
                </div>
              </div>

              <div
                ref={donateDescriptionAnimation.ref}
                className={`mb-8 ${donateDescriptionAnimation.animationClass}`}
                style={{ transitionDelay: "400ms" }}
              >
                <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                  {cardBlockData.main_card.description}
                </p>
              </div>

              <div
                ref={donateButtonAnimation.ref}
                className={donateButtonAnimation.animationClass}
                style={{ transitionDelay: "600ms" }}
              >
                <button className="bg-white text-slate-800 px-6 py-2 rounded-sm font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 group cursor-pointer">
                  <Link href={"/donate"}>
                    {cardBlockData.main_card.cta_text}
                  </Link>
                  <Heart className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div
              ref={programmeCardAnimation.ref}
              className={`bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 md:p-10 text-white min-h-[280px] flex flex-col justify-between relative overflow-hidden ${programmeCardAnimation.animationClass}`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="relative z-10">
                <div
                  ref={programmeIconAnimation.ref}
                  className={programmeIconAnimation.animationClass}
                  style={{ transitionDelay: "400ms" }}
                >
                  <Rocket className="w-10 h-10" />
                </div>

                <div
                  ref={programmeContentAnimation.ref}
                  className={programmeContentAnimation.animationClass}
                  style={{ transitionDelay: "600ms" }}
                >
                  <h3 className="mt-9 text-2xl md:text-3xl font-bold mb-4 leading-tight">
                    {cardBlockData.blue_card.title}
                  </h3>

                  <p className="text-blue-100 mb-6 leading-relaxed">
                    {cardBlockData.blue_card.description}
                  </p>

                  <button className="w-full md:w-fit bg-transparent bg-opacity-20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-all duration-300 backdrop-blur-sm border border-white border-opacity-20 cursor-pointer hover:opacity-80">
                    <Link href={"/our-programmes"}>
                      {cardBlockData.blue_card.cta_text}
                    </Link>
                  </button>
                </div>
              </div>
            </div>

            <div
              ref={partnerCardAnimation.ref}
              className={`bg-gradient-to-br from-green-700 to-green-800 rounded-3xl p-8 md:p-10 text-white min-h-[370px] flex flex-col justify-between relative overflow-hidden bg-cover bg-center bg-no-repeat ${partnerCardAnimation.animationClass}`}
              style={{
                backgroundImage: `url('${partnerCardImageUrl}')`,
                transitionDelay: "400ms",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-700/80 to-green-800/80 rounded-3xl"></div>

              <div className="absolute bottom-0 right-0 w-40 h-40 opacity-10">
                <div className="w-full h-full bg-green-400 rounded-full transform translate-x-10 translate-y-10"></div>
              </div>

              <div
                ref={partnerContentAnimation.ref}
                className={`relative z-10 ${partnerContentAnimation.animationClass}`}
                style={{ transitionDelay: "600ms" }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                  {cardBlockData.green_card.title}
                </h3>

                <p className="text-green-100 mb-6 leading-relaxed text-sm">
                  {cardBlockData.green_card.description}
                </p>

                <Link href={'/get-involved'} className="w-full md:w-fit bg-opacity-20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-all duration-300 backdrop-blur-sm border border-white border-opacity-20 cursor-pointer hover:opacity-80">
                  {cardBlockData.green_card.cta_text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
export type { GetInvolvedProps, CardBlockSection, CardBlock };
