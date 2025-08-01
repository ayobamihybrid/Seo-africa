"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

interface SliderItem {
  name: string;
  title: string;
}

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderItems: SliderItem[] = [
    {
      name: "David Serlorm Atsu",
      title: "From SEO Africa to Goldman Sachs",
    },
    {
      name: "Kwame Asante",
      title: "From SEO Africa to Google Africa",
    },
    {
      name: "Fatima Al-Rashid",
      title: "From SEO Africa to World Bank",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [sliderItems.length]);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat font-system"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(30, 58, 138, 0.6)), url('/Hero_image1.png')`,
      }}
    >
      <Navbar />

      <div className="relative z-10 flex items-center min-h-[calc(100vh-100px)] px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl w-full">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight mb-6 lg:mb-8">
            Developing future
            <br />
            leaders across Africa
          </h1>

          <p className="text-white/60 text-base sm:text-lg lg:text-xl max-w-2xl mb-8 lg:mb-12 leading-relaxed">
            SEO Africa is a non-profit leadership organization with over a
            decade of experience in talent development across Africa.
          </p>

          <div className="flex items-center space-x-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white md:px-8 px-3 py-2 md:py-4 rounded-lg text-lg font-medium transition-colors w-fit sm:w-auto">
              Join our talent network
            </button>

            <div className="flex items-center space-x-2 text-white cursor-pointer hover:text-gray-300 group">
              <span className="text-xs sm:text-base underline">
                All Programmes
              </span>

              <svg
                className="hidden md:block md:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default Hero;
