"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";

interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  quote: string;
  avatar: string;
  year?: string;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
  autoScrollInterval?: number;
  className?: string;
  title?: string;
  subtitle?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Josef Andreeson",
    title: "CEO, Brex inc.",
    company: "SEOAfrica Alumni 2013",
    quote:
      "My experience with SEO Africa has been life-changing. It's more than just a networking community; it's a beacon of hope that I turn to every day. The recent initiatives are inspiring and significantly boost my confidence in navigating my career path.",
    avatar: "/testimonial_image1.png",
    year: "2013",
  },
  {
    id: "2",
    name: "Grace Okonkwo",
    title: "Senior Product Manager",
    company: "SEOAfrica Alumni 2015",
    quote:
      "The mentorship and connections I've gained through SEO Africa have been invaluable. The community continues to support my professional growth even years after graduation.",
    avatar: "/testimonial_image2.png",
    year: "2015",
  },
  {
    id: "3",
    name: "Michael Adebayo",
    title: "Startup Founder",
    company: "SEOAfrica Alumni 2018",
    quote:
      "SEO Africa didn't just provide education, it provided a platform for transformation. The network has opened doors I never knew existed.",
    avatar: "/testimonial_image1.png",
    year: "2018",
  },
];

const TestimonialsCarousel: React.FC<TestimonialsProps> = ({
  testimonials = defaultTestimonials,
  autoScrollInterval = 3000,
  className = "",
  title = "What the community is saying about us.",
  subtitle = "TESTIMONIALS",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const subtitleAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });
  const titleAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });
  const controlsAnimation = useScrollAnimation({
    animationType: "fade-left",
    threshold: 0.3,
  });
  const carouselAnimation = useScrollAnimation({
    animationType: "zoom-in",
    threshold: 0.2,
  });
  const dotsAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isHovered && autoScrollInterval > 0) {
      const interval = setInterval(nextSlide, autoScrollInterval);
      return () => clearInterval(interval);
    }
  }, [nextSlide, autoScrollInterval, isHovered]);

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className={`py-16 px-4 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p
              ref={subtitleAnimation.ref}
              className={`w-fit px-3 py-1 rounded-full bg-[#3051f31c] text-[#3051f3] font-medium text-sm uppercase tracking-wide mb-4 ${subtitleAnimation.animationClass}`}
            >
              {subtitle}
            </p>
            <h2
              ref={titleAnimation.ref}
              className={`text-4xl md:text-5xl font-bold text-gray-900 leading-tight ${titleAnimation.animationClass}`}
              style={{ transitionDelay: "200ms" }}
            >
              {title}
            </h2>
          </div>

          <div
            ref={controlsAnimation.ref}
            className={`flex items-center gap-3 ${controlsAnimation.animationClass}`}
            style={{ transitionDelay: "400ms" }}
          >
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-all duration-300 cursor-pointer hover:scale-105"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-8 h-8 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <ChevronRight className="w-8 h-8 text-gray-600" />
            </button>
          </div>
        </div>

        <div
          ref={carouselAnimation.ref}
          className={`relative overflow-hidden ${carouselAnimation.animationClass}`}
          style={{ transitionDelay: "600ms" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="w-full flex-shrink-0">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        <div
          ref={dotsAnimation.ref}
          className={`flex justify-center mt-8 gap-2 ${dotsAnimation.animationClass}`}
          style={{ transitionDelay: "800ms" }}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gray-900"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  // Individual animations for card components
  const imageAnimation = useScrollAnimation({
    animationType: "fade-left",
    threshold: 0.2,
  });
  const contentAnimation = useScrollAnimation({
    animationType: "fade-right",
    threshold: 0.2,
  });

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      <div className="flex flex-col md:flex-row h-full min-h-[500px]">
        <div
          ref={imageAnimation.ref}
          className={`relative md:w-1/2 w-full h-64 md:h-full min-h-[500px] ${imageAnimation.animationClass}`}
          style={{ transitionDelay: "200ms" }}
        >
          <Image
            src={testimonial.avatar}
            alt={`${testimonial.name} - ${testimonial.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div
          ref={contentAnimation.ref}
          className={`md:w-1/2 w-full p-8 md:p-12 flex flex-col justify-center bg-white ${contentAnimation.animationClass}`}
          style={{ transitionDelay: "400ms" }}
        >
          <blockquote className="text-lg md:text-xl leading-relaxed text-gray-700 mb-8 relative">
            <span className="relative z-10">{testimonial.quote}</span>
          </blockquote>

          <div className="mt-auto">
            <h4 className="text-xl font-bold text-gray-900 mb-1">
              {testimonial.name}
            </h4>
            <p className="text-gray-600 font-medium mb-1">
              {testimonial.title}
            </p>
            <p className="text-gray-500 text-sm">{testimonial.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
export type { Testimonial, TestimonialsProps };
