import React, { useState, useEffect } from "react";
import { testimonials } from "../utils";

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleThumbnailClick = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-gradient-to-b from-[#3051F3] to-[#131B3E] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-12">
          <div className="mb-6">
            <span className="text-white/80 text-xl font-medium">
              Alumni testimonies
            </span>
          </div>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8 max-w-4xl">
            Don't just take our word for it. See and hear real testimonials and
            stories from our Alumni community.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-white text-[#5E68FF] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              Join our talent network
              <svg
                className="w-5 h-5"
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
            </button>

            <button className="text-white hover:text-white/80 transition-colors inline-flex items-center gap-2 underline">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Watch testimonial video
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-xl mb-8">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative">
              <div className="w-full h-[30rem] overflow-hidden">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-2xl font-bold mb-1 drop-shadow-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-white/90 text-sm drop-shadow-lg">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <blockquote className="text-gray-800 text-lg lg:text-xl leading-relaxed mb-8">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div className="flex ">
                <div className="flex space-x-2">
                  {testimonials.map((testimonial, index) => (
                    <button
                      key={index}
                      onClick={() => handleThumbnailClick(index)}
                      className={`w-12 h-12 rounded-full overflow-hidden transition-all duration-300 ${
                        index === currentIndex
                          ? "ring-4 ring-[#5E68FF]/50 scale-110"
                          : "opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative">
            <div className="bg-black rounded-xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.youtube.com/embed/5pTOXqoqvi0?si=vArLLYKNmnPck_Bx"
                title="Bridging the leadership gap - What it means to us at SEOAfrica"
                className="w-full h-64 lg:h-80"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="relative">
            <div className="bg-black rounded-xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.youtube.com/embed/5pTOXqoqvi0?si=vArLLYKNmnPck_Bx"
                title="SEO Africa - our continuing growth"
                className="w-full h-64 lg:h-80"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
