"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import { getStrapiImageUrl } from "../lib/strapi";

interface SliderItem {
  name: string;
  title: string;
  image?: {
    data: {
      attributes: {
        url: string;
        alternativeText: string;
      };
    };
  };
}

interface HeroProps {
  homePageData: {
    heroTitle?: string;
    heroDescription?: string;
    heroBackgroundImage?: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        };
      };
    };
    heroSliderItems?: SliderItem[];
    heroButtonText?: string;
    heroSecondaryButtonText?: string;
  };
}

const Hero: React.FC<HeroProps> = ({ homePageData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroTitle =
    homePageData?.heroTitle || "";
  const heroDescription =
    homePageData?.heroDescription ||
    "";
  const sliderItems = homePageData?.heroSliderItems || [];
  const primaryButtonText =
    homePageData?.heroButtonText || "";
  const secondaryButtonText =
    homePageData?.heroSecondaryButtonText || "";

  const backgroundImage = homePageData?.heroBackgroundImage
    ? getStrapiImageUrl(homePageData.heroBackgroundImage)
    : ""; 

  useEffect(() => {
    if (sliderItems.length > 0) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
      }, 4000);

      return () => clearInterval(timer);
    }
  }, [sliderItems.length]);

  const titleLines = heroTitle.includes("\n")
    ? heroTitle.split("\n")
    : [heroTitle];

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat font-system"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(30, 58, 138, 0.6)), url('${backgroundImage}')`,
      }}
    >
      <Navbar />

      <div className="max-w-7xl mx-auto relative flex items-center min-h-[calc(100vh-100px)] px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl w-full">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight mb-6 lg:mb-8">
            {titleLines.map((line, index) => (
              <React.Fragment key={index}>
                {line.trim()}
                {index < titleLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>

          <p className="text-white/60 text-base sm:text-lg lg:text-xl max-w-2xl mb-8 lg:mb-12 leading-relaxed">
            {heroDescription}
          </p>

          <div className="flex items-center space-x-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white md:px-8 px-3 py-2 md:py-4 rounded-lg text-lg font-medium transition-colors w-fit sm:w-auto">
              <Link href="/career-opportunities">{primaryButtonText}</Link>
            </button>

            <div className="flex items-center space-x-2 text-white cursor-pointer hover:text-gray-300 group">
              <Link
                href="/our-programmes"
                className="text-xs sm:text-base underline"
              >
                {secondaryButtonText}
              </Link>

              <div className="relative h-4 w-4">
                <Image src={"/arrowUp.svg"} alt="" fill />
              </div>
            </div>
          </div>
        </div>

        {sliderItems.length > 0 && (
          <div className="absolute md:right-12 bottom-4 sm:bottom-12 lg:bottom-20 w-[21rem] sm:w-[22rem] md:w-[20rem]">
            <div className="mb-4 bg-gray-400 backdrop-blur-sm rounded-sm p-5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-12 bg-[#DF6CDF]"></div>

                <div className="text-gray-800">
                  <p className="text-sm sm:text-base text-gray-700">
                    {sliderItems[currentSlide].name}:{" "}
                    {sliderItems[currentSlide].title}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-end space-x-2">
              {sliderItems.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white w-7 h-2"
                      : "bg-gray-400 w-7 h-2"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
