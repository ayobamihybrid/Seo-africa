"use client";

import React, { useState } from "react";
import Image from "next/image";

const ProofOfCommitment: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const statsCards = [
    {
      id: "students",
      defaultImage: "/defaul2.png",
      hoverImage: "/default-hover2.png",
      alt: "39,000+ Students upskilled",
      gridArea: "students",
    },
    {
      id: "center-team",
      defaultImage: "/default1.png",
      hoverImage: "/default-hover1.png",
      alt: "Professional team image",
      gridArea: "center-team",
    },
    {
      id: "countries",
      defaultImage: "/default5.png",
      hoverImage: "/default-hover5.png",
      alt: "17+ African countries inspired",
      gridArea: "countries",
    },
    {
      id: "retention",
      defaultImage: "/default6.png",
      hoverImage: "/default-hover6.png",
      alt: "85% Average retention of trainees",
      gridArea: "retention",
    },
    {
      id: "partners",
      defaultImage: "/default3.png",
      hoverImage: "/default-hover3.png",
      alt: "30+ Corporate access partners",
      gridArea: "partners",
    },
    {
      id: "alumni",
      defaultImage: "/default4.png",
      hoverImage: "/default-hover4.png",
      alt: "11,000+ Robust Alumni network",
      gridArea: "alumni",
    },
    {
      id: "projects",
      defaultImage: "/default8.png",
      hoverImage: "/default-hover8.png",
      alt: "12+ Projects completed through SEO Cares",
      gridArea: "projects",
    },
    {
      id: "completion",
      defaultImage: "/default7.png",
      hoverImage: "/default-hover7.png",
      alt: "92% Programme Completion Rate",
      gridArea: "completion",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Proof of commitment in numbers
          </h2>
        </div>

        <div
          className="hidden lg:grid gap-4"
          style={{
            gridTemplateColumns: "340px 370px 340px",
            gridTemplateRows: "auto auto auto auto",
            justifyContent: "center",
          }}
        >
          {/* Row 1: Students, Center Team, Countries */}
          <div
            className="cursor-pointer"
            onMouseEnter={() => setHoveredCard("students")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative w-full h-[320px] rounded-2xl overflow-hidden transition-all duration-500 ease-in-out transform hover:shadow-2xl">
              <Image
                src="/defaul2.png"
                alt="39,000+ Students upskilled"
                fill
                className={`object-cover transition-opacity duration-500 ease-in-out ${
                  hoveredCard === "students" ? "opacity-0" : "opacity-100"
                }`}
                sizes="33vw"
              />
              <Image
                src="/default-hover2.png"
                alt="39,000+ Students upskilled - hover state"
                fill
                className={`object-cover transition-opacity duration-500 ease-in-out ${
                  hoveredCard === "students" ? "opacity-100" : "opacity-0"
                }`}
                sizes="33vw"
              />
            </div>
          </div>

          <div
            className="cursor-pointer"
            onMouseEnter={() => setHoveredCard("center-team")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden transition-all duration-500 ease-in-out transform hover:shadow-2xl">
              <Image
                src="/default1.png"
                alt="Professional team image"
                fill
                className={`object-cover transition-opacity duration-500 ease-in-out ${
                  hoveredCard === "center-team" ? "opacity-0" : "opacity-100"
                }`}
                sizes="33vw"
              />
              <Image
                src="/default-hover1.png"
                alt="Professional team image - hover state"
                fill
                className={`object-cover transition-opacity duration-500 ease-in-out ${
                  hoveredCard === "center-team" ? "opacity-100" : "opacity-0"
                }`}
                sizes="33vw"
              />
            </div>
          </div>

          <div
            className="cursor-pointer"
            onMouseEnter={() => setHoveredCard("countries")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative w-full h-[260px] rounded-2xl overflow-hidden transition-all duration-500 ease-in-out transform hover:shadow-2xl">
              <Image
                src="/default5.png"
                alt="17+ African countries inspired"
                fill
                className={`object-cover transition-opacity duration-500 ease-in-out ${
                  hoveredCard === "countries" ? "opacity-0" : "opacity-100"
                }`}
                sizes="33vw"
              />
              <Image
                src="/default-hover5.png"
                alt="17+ African countries inspired - hover state"
                fill
                className={`object-cover transition-opacity duration-500 ease-in-out ${
                  hoveredCard === "countries" ? "opacity-100" : "opacity-0"
                }`}
                sizes="33vw"
              />
            </div>
          </div>

          {/* Row 2: Retention, Partners, Alumni */}
          <div
            className="cursor-pointer -mt-24"
            onMouseEnter={() => setHoveredCard("retention")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative w-full h-[450px] rounded-2xl overflow-hidden transition-all duration-500 ease-in-out transform hover:shadow-2xl">
              <Image
                src="/default3.png"
                alt="85% Average retention of trainees"
                fill
                className={`object-cover transition-opacity duration-500 ease-in-out ${
                  hoveredCard === "retention" ? "opacity-0" : "opacity-100"
                }`}
                sizes="33vw"
              />
              <Image
                src="/default-hover3.png"
                alt="85% Average retention of trainees - hover state"
                fill
                className={`object-cover transition-opacity duration-500 ease-in-out ${
                  hoveredCard === "retention" ? "opacity-100" : "opacity-0"
                }`}
                sizes="33vw"
              />
            </div>
          </div>

          <div
            className="cursor-pointer "
            onMouseEnter={() => setHoveredCard("partners")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative w-full h-[355px] rounded-2xl overflow-hidden transition-all duration-500 ease-in-out transform hover:shadow-2xl">
              <Image
                src="/default4.png"
                alt="30+ Corporate access partners"
                fill
                className={`object-cover transition-opacity duration-500 ease-in-out ${
                  hoveredCard === "partners" ? "opacity-0" : "opacity-100"
                }`}
                sizes="33vw"
              />
              <Image
                src="/default-hover4.png"
                alt="30+ Corporate access partners - hover state"
                fill
                className={`object-cover transition-opacity duration-500 ease-in-out ${
                  hoveredCard === "partners" ? "opacity-100" : "opacity-0"
                }`}
                sizes="33vw"
              />
            </div>
          </div>

          <div
            className="cursor-pointer -mt-40"
            onMouseEnter={() => setHoveredCard("alumni")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative w-full h-[515px] rounded-2xl overflow-hidden transition-all duration-500 ease-in-out transform hover:shadow-2xl">
              <Image
                src="/default6.png"
                alt="11,000+ Robust Alumni network"
                fill
                className={`object-cover transition-opacity duration-500 ease-in-out ${
                  hoveredCard === "alumni" ? "opacity-0" : "opacity-100"
                }`}
                sizes="33vw"
              />
              <Image
                src="/default-hover6.png"
                alt="11,000+ Robust Alumni network - hover state"
                fill
                className={`object-cover transition-opacity duration-500 ease-in-out ${
                  hoveredCard === "alumni" ? "opacity-100" : "opacity-0"
                }`}
                sizes="33vw"
              />
            </div>
          </div>

          <div
            className="cursor-pointer "
            onMouseEnter={() => setHoveredCard("projects")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative w-full h-[280px] rounded-2xl overflow-hidden transition-all duration-500 ease-in-out transform hover:shadow-2xl">
              <Image
                src="/default7.png"
                alt="12+ Projects completed through SEO Cares"
                fill
                className={`object-cover transition-opacity duration-500 ease-in-out ${
                  hoveredCard === "projects" ? "opacity-0" : "opacity-100"
                }`}
                sizes="33vw"
              />
              <Image
                src="/default-hover7.png"
                alt="12+ Projects completed through SEO Cares - hover state"
                fill
                className={`object-cover transition-opacity duration-500 ease-in-out ${
                  hoveredCard === "projects" ? "opacity-100" : "opacity-0"
                }`}
                sizes="33vw"
              />
            </div>
          </div>

          <div
            className="cursor-pointer col-span-2"
            onMouseEnter={() => setHoveredCard("completion")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative w-full h-[280px] rounded-2xl overflow-hidden transition-all duration-500 ease-in-out transform hover:shadow-2xl">
              <Image
                src="/default8.png"
                alt="92% Programme Completion Rate"
                fill
                className={`object-cover transition-opacity duration-500 ease-in-out ${
                  hoveredCard === "completion" ? "opacity-0" : "opacity-100"
                }`}
                sizes="60vw"
              />
              <Image
                src="/default-hover8.png"
                alt="92% Programme Completion Rate - hover state"
                fill
                className={`object-cover transition-opacity duration-500 ease-in-out ${
                  hoveredCard === "completion" ? "opacity-100" : "opacity-0"
                }`}
                sizes="60vw"
              />
            </div>
          </div>
        </div>

        <div
          className="hidden md:grid lg:hidden gap-4"
          style={{
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "220px 180px 220px 180px 200px",
            gridTemplateAreas: `
            "students center-team"
            "retention center-team"
            "countries partners"
            "alumni partners"
            "projects completion"`,
          }}
        >
          {statsCards.map((card) => (
            <div
              key={card.id}
              className="cursor-pointer"
              style={{ gridArea: card.gridArea }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden transition-all duration-500 ease-in-out transform hover:shadow-2xl">
                <Image
                  src={card.defaultImage}
                  alt={card.alt}
                  fill
                  className={`object-cover transition-opacity duration-500 ease-in-out ${
                    hoveredCard === card.id ? "opacity-0" : "opacity-100"
                  }`}
                  sizes="50vw"
                />
                <Image
                  src={card.hoverImage}
                  alt={`${card.alt} - hover state`}
                  fill
                  className={`object-cover transition-opacity duration-500 ease-in-out ${
                    hoveredCard === card.id ? "opacity-100" : "opacity-0"
                  }`}
                  sizes="50vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Grid Layout */}
        <div className="grid md:hidden grid-cols-1 gap-4">
          {statsCards.map((card) => (
            <div
              key={card.id}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative w-full h-64 rounded-2xl overflow-hidden transition-all duration-500 ease-in-out transform hover:shadow-2xl">
                <Image
                  src={card.defaultImage}
                  alt={card.alt}
                  fill
                  className={`object-cover transition-opacity duration-500 ease-in-out ${
                    hoveredCard === card.id ? "opacity-0" : "opacity-100"
                  }`}
                  sizes="100vw"
                />
                <Image
                  src={card.hoverImage}
                  alt={`${card.alt} - hover state`}
                  fill
                  className={`object-cover transition-opacity duration-500 ease-in-out ${
                    hoveredCard === card.id ? "opacity-100" : "opacity-0"
                  }`}
                  sizes="100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofOfCommitment;
