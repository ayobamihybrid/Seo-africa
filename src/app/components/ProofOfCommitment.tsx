"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const bgColor = backgroundColor || (impact ? "bg-white" : "bg-gray-50");
  const displayHeader = impact ? false : showHeader;
  const finalHeaderText = statisticsData.title;

  const handleCardClick = (cardId: string) => {
    if (cardId === "students") {
      router.push("/our-programmes");
    }
  };

  const cardMapping = [
    {
      id: "students",
      data: statisticsData.top_cards[0],
      defaultImage: "/defaul2.png",
      hoverImage: "/default-hover2.png",
      mobileDefaultImage: "/defaul2.png",
      mobileHoverImage: "/default-hover2.png",
      className: "",
      height: "h-[420px]",
    },
    {
      id: "center-team",
      data: null,
      defaultImage: "/third.jpg",
      hoverImage: "/third.jpg",
      mobileDefaultImage: "/third.jpg",
      mobileHoverImage: "/third.jpg",
      className: "",
      height: "h-[500px]",
    },
    {
      id: "countries",
      data: statisticsData.top_cards[1],
      defaultImage: "/default5.png",
      hoverImage: "/default-hover5.png",
      mobileDefaultImage: "/default5.png",
      mobileHoverImage: "/default-hover5.png",
      className: "",
      height: "h-[330px]",
    },
    {
      id: "retention",
      data: statisticsData.middle_cards[0],
      defaultImage: "/default3.png",
      hoverImage: "/default-hover3.png",
      mobileDefaultImage: "/default3.png",
      mobileHoverImage: "/default-hover3.png",
      className: "-mt-18",
      height: "h-[425px]",
    },
    {
      id: "partners",
      data: statisticsData.middle_cards[1],
      defaultImage: "/default4.png",
      hoverImage: "/default-hover4.png",
      mobileDefaultImage: "/default4.png",
      mobileHoverImage: "/default-hover4.png",
      className: "",
      height: "h-[355px]",
    },
    {
      id: "alumni",
      data: statisticsData.middle_cards[2],
      defaultImage: "/oneThousandTwo.jpg",
      hoverImage: "/oneThousandTwo_hover.jpg",
      mobileDefaultImage: "/oneThousandTwo.jpg",
      mobileHoverImage: "/oneThousandTwo_hover.jpg",
      className: "-mt-40",
      height: "h-[515px]",
    },
    {
      id: "projects",
      data: statisticsData.bottom_cards[0],
      defaultImage: "/default7.png",
      hoverImage: "/default-hover7.png",
      mobileDefaultImage: "/39k.png",
      mobileHoverImage: "/39k.png",
      className: "",
      height: "h-[260px]",
    },
    {
      id: "completion",
      data: statisticsData.bottom_cards[1],
      defaultImage: "/default8.png",
      hoverImage: "/default-hover8.png",
      mobileDefaultImage: "/12.png",
      mobileHoverImage: "/12.png",
      className: "",
      height: "h-[260px]",
    },
  ];

  const getAltText = (card: any) => {
    if (card.data) {
      return `${card.data.stat} ${card.data.titile}`;
    }
    return "Professional team image";
  };

  const getMdCardHeight = (cardId: string) => {
    switch (cardId) {
      case "students":
        return "h-[850px]";
      case "center-team":
        return "h-[900px]";
      case "countries":
        return "h-[800px]";
      case "retention":
        return "h-[900px]";
      case "partners":
        return "h-[800px]";
      case "alumni":
        return "h-[1200px]";
      case "projects":
        return "h-[320px]";
      case "completion":
        return "h-[320px]";
      default:
        return "h-[500px]";
    }
  };

  const getMobileCardHeight = (cardId: string) => {
    switch (cardId) {
      case "center-team":
        return "h-[400px]";
      case "retention":
      case "alumni":
        return "h-[480px]";
      case "students":
        return "h-[440px]";
      case "countries":
        return "h-[380px]";
      case "partners":
        return "h-[384px]";
      case "projects":
        return "h-[230px]";
      case "completion":
        return "h-[300px]";
      default:
        return "h-64";
    }
  };

  // Surface Duo specific heights (540px width)
  const getSurfaceDuoCardHeight = (cardId: string) => {
    switch (cardId) {
      case "center-team":
        return "min-[540px]:max-md:h-[600px]";
      case "retention":
      case "alumni":
        return "min-[540px]:max-md:h-[680px]";
      case "students":
        return "min-[540px]:max-md:h-[640px]";
      case "countries":
        return "min-[540px]:max-md:h-[580px]";
      case "partners":
        return "min-[540px]:max-md:h-[584px]";
      case "projects":
        return "min-[540px]:max-md:h-[295px]";
      case "completion":
        return "min-[540px]:max-md:h-[420px]";
      default:
        return "min-[540px]:max-md:h-[500px]";
    }
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

        {/* Custom grid layout for XL and above */}
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
              onClick={() => handleCardClick(card.id)}
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
              onClick={() => handleCardClick(card.id)}
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

        {/* XL and above: The bottom row with 2 columns */}
        <div className="hidden xl:grid grid-cols-2 gap-4 max-w-[1180px] mx-auto mt-4">
          {cardMapping.slice(6, 8).map((card) => (
            <div
              key={card.id}
              className={`cursor-pointer ${card.className}`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(card.id)}
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

        {/* LG to XL: 2-column grid for first 6 cards with uniform height */}
        <div className="hidden lg:grid xl:hidden grid-cols-2 gap-6">
          {cardMapping.slice(0, 6).map((card) => (
            <div
              key={card.id}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(card.id)}
            >
              <div className="relative w-full h-[550px] rounded-2xl overflow-hidden transition-all duration-500 ease-in-out transform hover:shadow-2xl">
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

        {/* LG to XL: Single column grid for last 2 cards with uniform height */}
        <div className="hidden lg:grid xl:hidden grid-cols-1 gap-6 mt-6 ">
          {cardMapping.slice(6, 8).map((card) => (
            <div
              key={card.id}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(card.id)}
            >
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden transition-all duration-500 ease-in-out transform hover:shadow-2xl">
                <Image
                  src={card.defaultImage}
                  alt={getAltText(card)}
                  fill
                  className={`object-cover transition-opacity duration-500 ease-in-out ${
                    hoveredCard === card.id ? "opacity-0" : "opacity-100"
                  }`}
                  sizes="100vw"
                />
                <Image
                  src={card.hoverImage}
                  alt={`${getAltText(card)} - hover state`}
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

        {/* MD to LG: Single column grid with individual heights */}
        <div className="hidden md:grid lg:hidden grid-cols-1 gap-6">
          {cardMapping.map((card) => (
            <div
              key={card.id}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(card.id)}
            >
              <div
                className={`relative w-full ${getMdCardHeight(
                  card.id
                )} rounded-2xl overflow-hidden transition-all duration-500 ease-in-out transform hover:shadow-2xl`}
              >
                <Image
                  src={card.defaultImage}
                  alt={getAltText(card)}
                  fill
                  className={`object-cover transition-opacity duration-500 ease-in-out ${
                    hoveredCard === card.id ? "opacity-0" : "opacity-100"
                  }`}
                  sizes="100vw"
                />
                <Image
                  src={card.hoverImage}
                  alt={`${getAltText(card)} - hover state`}
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

        {/* Mobile: Single column grid with Surface Duo support and different images for last two cards */}
        <div className="grid md:hidden grid-cols-1 gap-6">
          {cardMapping.map((card) => (
            <div
              key={card.id}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(card.id)}
            >
              <div
                className={`relative w-full ${getMobileCardHeight(
                  card.id
                )} ${getSurfaceDuoCardHeight(
                  card.id
                )} rounded-2xl overflow-hidden transition-all duration-500 ease-in-out transform hover:shadow-2xl`}
              >
                <Image
                  src={card.mobileDefaultImage}
                  alt={getAltText(card)}
                  fill
                  className={`object-cover object-center transition-opacity duration-500 ease-in-out ${
                    hoveredCard === card.id ? "opacity-0" : "opacity-100"
                  }`}
                  sizes="100vw"
                  priority={card.id === "students" || card.id === "center-team"}
                />
                <Image
                  src={card.mobileHoverImage}
                  alt={`${getAltText(card)} - hover state`}
                  fill
                  className={`object-cover object-center transition-opacity duration-500 ease-in-out ${
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
