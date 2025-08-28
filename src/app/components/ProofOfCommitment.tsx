"use client";

import React, { useState } from "react";
import Image from "next/image";

interface StatCard {
  id: number;
  stat: string;
  titile: string; // Note: this matches the typo in the Strapi data
  description: string;
}

interface StatisticsSection {
  id: number;
  title: string;
  top_cards: StatCard[];
  middle_cards: StatCard[];
  bottom_cards: StatCard[];
}

interface ProofOfCommitmentProps {
  statisticsData: StatisticsSection;
  impact?: boolean;
  showHeader?: boolean;
  backgroundColor?: string;
}

const ProofOfCommitment: React.FC<ProofOfCommitmentProps> = ({
  statisticsData,
  impact = false,
  showHeader = true,
  backgroundColor,
}) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const bgColor = backgroundColor || (impact ? "bg-white" : "bg-gray-50");
  const displayHeader = impact ? false : showHeader;
  const finalHeaderText = statisticsData.title;

  const cardMapping = [
    {
      id: "students",
      data: statisticsData.top_cards[0],
      defaultImage: "/defaul2.png",
      hoverImage: "/default-hover2.png",
      gridArea: "students",
      className: "",
      height: "h-[320px]",
      mdHeight: "220px",
    },
    {
      id: "center-team",
      data: null,
      defaultImage: "/default1.png",
      hoverImage: "/default-hover1.png",
      gridArea: "center-team",
      className: "",
      height: "h-[420px]",
      mdHeight: "180px",
    },
    {
      id: "countries",
      data: statisticsData.top_cards[1],
      defaultImage: "/default5.png",
      hoverImage: "/default-hover5.png",
      gridArea: "countries",
      className: "",
      height: "h-[260px]",
      mdHeight: "220px",
    },
    {
      id: "retention",
      data: statisticsData.middle_cards[0],
      defaultImage: "/default3.png",
      hoverImage: "/default-hover3.png",
      gridArea: "retention",
      className: "-mt-24",
      height: "h-[450px]",
      mdHeight: "180px",
    },
    {
      id: "partners",
      data: statisticsData.middle_cards[1],
      defaultImage: "/default4.png",
      hoverImage: "/default-hover4.png",
      gridArea: "partners",
      className: "",
      height: "h-[355px]",
      mdHeight: "180px",
    },
    {
      id: "alumni",
      data: statisticsData.middle_cards[2],
      defaultImage: "/default6.png",
      hoverImage: "/default-hover6.png",
      gridArea: "alumni",
      className: "-mt-40",
      height: "h-[515px]",
      mdHeight: "200px",
    },
    {
      id: "projects",
      data: statisticsData.bottom_cards[0],
      defaultImage: "/default7.png",
      hoverImage: "/default-hover7.png",
      gridArea: "projects",
      className: "",
      height: "h-[280px]",
      mdHeight: "200px",
    },
    {
      id: "completion",
      data: statisticsData.bottom_cards[1],
      defaultImage: "/default8.png",
      hoverImage: "/default-hover8.png",
      gridArea: "completion",
      className: "",
      height: "h-[280px]",
      mdHeight: "200px",
    },
  ];

  const getAltText = (card: any) => {
    if (card.data) {
      return `${card.data.stat} ${card.data.titile}`;
    }
    return "Professional team image";
  };

  return (
    <section className={`${bgColor} py-16 lg:py-24`}>
      <div className={`max-w-7xl mx-auto ${!impact && "px-4 sm:px-6 lg:px-8"}`}>
        {displayHeader && (
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {finalHeaderText}
            </h2>
          </div>
        )}

        <div
          className="hidden xl:grid gap-4"
          style={{
            gridTemplateColumns: "380px 400px 380px",
            gridTemplateRows: "auto auto auto",
            justifyContent: "center",
          }}
        >
          {/* Row 1: Students, Center Team, Countries */}
          {cardMapping.slice(0, 3).map((card) => (
            <div
              key={card.id}
              className={`cursor-pointer ${card.className}`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`relative w-full ${card.height} rounded-2xl overflow-hidden transition-all duration-500 ease-in-out transform hover:shadow-2xl`}
              >
                <Image
                  src={card.defaultImage}
                  alt={getAltText(card)}
                  fill
                  className={`object-cover transition-opacity duration-500 ease-in-out ${
                    hoveredCard === card.id ? "opacity-0" : "opacity-100"
                  }`}
                  sizes="33vw"
                />
                <Image
                  src={card.hoverImage}
                  alt={`${getAltText(card)} - hover state`}
                  fill
                  className={`object-cover transition-opacity duration-500 ease-in-out ${
                    hoveredCard === card.id ? "opacity-100" : "opacity-0"
                  }`}
                  sizes="33vw"
                />
              </div>
            </div>
          ))}

          {/* Row 2: Retention, Partners, Alumni */}
          {cardMapping.slice(3, 6).map((card) => (
            <div
              key={card.id}
              className={`cursor-pointer ${card.className}`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`relative w-full ${card.height} rounded-2xl overflow-hidden transition-all duration-500 ease-in-out transform hover:shadow-2xl`}
              >
                <Image
                  src={card.defaultImage}
                  alt={getAltText(card)}
                  fill
                  className={`object-cover transition-opacity duration-500 ease-in-out ${
                    hoveredCard === card.id ? "opacity-0" : "opacity-100"
                  }`}
                  sizes="33vw"
                />
                <Image
                  src={card.hoverImage}
                  alt={`${getAltText(card)} - hover state`}
                  fill
                  className={`object-cover transition-opacity duration-500 ease-in-out ${
                    hoveredCard === card.id ? "opacity-100" : "opacity-0"
                  }`}
                  sizes="33vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row: Projects and Completion */}
        <div className="hidden xl:grid grid-cols-2 gap-4 max-w-[1180px] mx-auto mt-4">
          {cardMapping.slice(6, 8).map((card) => (
            <div
              key={card.id}
              className={`cursor-pointer ${card.className}`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`relative w-full ${card.height} rounded-2xl overflow-hidden transition-all duration-500 ease-in-out transform hover:shadow-2xl`}
              >
                <Image
                  src={card.defaultImage}
                  alt={getAltText(card)}
                  fill
                  className={`object-cover transition-opacity duration-500 ease-in-out ${
                    hoveredCard === card.id ? "opacity-0" : "opacity-100"
                  }`}
                  sizes="50vw"
                />
                <Image
                  src={card.hoverImage}
                  alt={`${getAltText(card)} - hover state`}
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

        <div
          className="hidden md:grid xl:hidden gap-4"
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
          {cardMapping.map((card) => (
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
                  alt={getAltText(card)}
                  fill
                  className={`object-cover transition-opacity duration-500 ease-in-out ${
                    hoveredCard === card.id ? "opacity-0" : "opacity-100"
                  }`}
                  sizes="50vw"
                />
                <Image
                  src={card.hoverImage}
                  alt={`${getAltText(card)} - hover state`}
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

        <div className="grid md:hidden grid-cols-1 gap-6">
          {cardMapping.map((card) => {
            const getCardHeight = (cardId: string) => {
              switch (cardId) {
                case "center-team":
                  return "h-96";
                case "retention":
                case "alumni":
                  return "h-96";
                case "students":
                case "countries":
                  return "h-96";
                case "partners":
                  return "h-96";
                case "projects":
                case "completion":
                  return "h-56";
                default:
                  return "h-64";
              }
            };

            return (
              <div
                key={card.id}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`relative w-full ${getCardHeight(
                    card.id
                  )} rounded-2xl overflow-hidden transition-all duration-500 ease-in-out transform hover:shadow-2xl`}
                >
                  <Image
                    src={card.defaultImage}
                    alt={getAltText(card)}
                    fill
                    className={`object-cover object-center transition-opacity duration-500 ease-in-out ${
                      hoveredCard === card.id ? "opacity-0" : "opacity-100"
                    }`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={
                      card.id === "students" || card.id === "center-team"
                    }
                  />
                  <Image
                    src={card.hoverImage}
                    alt={`${getAltText(card)} - hover state`}
                    fill
                    className={`object-cover object-center transition-opacity duration-500 ease-in-out ${
                      hoveredCard === card.id ? "opacity-100" : "opacity-0"
                    }`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProofOfCommitment;
