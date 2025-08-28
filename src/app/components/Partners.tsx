"use client";

import React from "react";
import Image from "next/image";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { getStrapiImageUrl } from "../lib/strapi";

interface StrapiPartner {
  id: number;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  logo: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats?: {
      thumbnail?: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: null;
        size: number;
        width: number;
        height: number;
        sizeInBytes: number;
      };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

interface LocalPartner {
  id: string;
  name: string;
  logo: string;
  website?: string;
}

interface PartnersSection {
  id: number;
  pill_text: string;
  title: string;
}

interface PartnersProps {
  partnersData: PartnersSection;
  strapiPartners?: StrapiPartner[];
  localPartners?: LocalPartner[];
  description?: string;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  variant?: "default" | "ourTeam" | "custom";
  className?: string;
  getInvolved?: boolean;
}

interface VariantConfig {
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  background: string;
}

const variantConfigs: Record<string, VariantConfig> = {
  default: {
    showButton: false,
    background: "bg-gray-50",
  },
  ourTeam: {
    showButton: true,
    buttonText: "Become a partner",
    buttonLink: "#",
    background: "bg-white",
  },
  custom: {
    showButton: false,
    background: "bg-gray-50",
  },
};

const Partners: React.FC<PartnersProps> = ({
  partnersData,
  strapiPartners,
  description,
  showButton,
  buttonText,
  buttonLink,
  variant = "default",
  className = "",
  getInvolved = false,
}) => {
  const config = variantConfigs[variant];

  const normalizedPartners =
    strapiPartners && strapiPartners.length > 0
      ? strapiPartners.map((partner) => ({
          id: `strapi-${partner.id}`,
          name: partner.name,
          logo: getStrapiImageUrl(partner.logo),
          website: undefined,
        }))
      : [];

  const getConditionalTitle = () => {
    if (getInvolved) {
      return "We've partnered with the best organizations and brands. Be a part of an elite movement.";
    }
    return partnersData.title;
  };

  const finalTitle = getConditionalTitle();
  const finalSubtitle = partnersData.pill_text;
  const finalShowButton =
    showButton !== undefined ? showButton : config.showButton;
  const finalButtonText =
    buttonText !== undefined ? buttonText : config.buttonText;
  const finalButtonLink =
    buttonLink !== undefined ? buttonLink : config.buttonLink;

  const subtitleAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });
  const titleAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });
  const descriptionAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });
  const buttonAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.3,
  });
  const gridAnimation = useScrollAnimation({
    animationType: "fade-in",
    threshold: 0.2,
  });

  return (
    <section className={`py-16 px-4 ${config.background} ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`${
            variant === "ourTeam" ? "text-left" : "text-center"
          } mb-12`}
        >
          {finalSubtitle && (
            <p
              ref={subtitleAnimation.ref}
              className={`p-2 text-blue-600 font-medium text-sm uppercase tracking-wide mb-4 ${subtitleAnimation.animationClass}`}
            >
              {finalSubtitle}
            </p>
          )}

          {finalTitle && (
            <h2
              ref={titleAnimation.ref}
              className={`${
                variant === "ourTeam"
                  ? "max-w-4xl"
                  : getInvolved
                  ? "max-w-5xl mx-auto"
                  : "max-w-xl mx-auto"
              } ${
                getInvolved
                  ? "text-xl md:text-2xl"
                  : "text-3xl md:text-5xl font-bold"
              } text-gray-900 leading-tight mb-6 ${
                titleAnimation.animationClass
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {finalTitle}
            </h2>
          )}

          {description && (
            <div
              ref={descriptionAnimation.ref}
              className={`${
                variant === "ourTeam" ? "max-w-4xl" : "max-w-3xl mx-auto"
              } text-gray-700 text-lg leading-relaxed mb-8 ${
                descriptionAnimation.animationClass
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <p>
                {variant === "ourTeam" ? (
                  <>
                    We've been lucky to stand on the shoulders of giants. We're
                    recognized and backed by SEO communities and world leading
                    organizations and partners worldwide, including{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      SEO London
                    </a>
                    ,{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      SEO Shanghai
                    </a>
                    ,{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      SEO USA
                    </a>
                    ,{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Ho-Chih Mihn (SEO Vietnam)
                    </a>{" "}
                    amongst others.
                  </>
                ) : (
                  description
                )}
              </p>
            </div>
          )}

          {finalShowButton && finalButtonText && (
            <div
              ref={buttonAnimation.ref}
              className={`${
                variant === "ourTeam" ? "text-left" : "text-center"
              } mb-12 ${buttonAnimation.animationClass}`}
              style={{ transitionDelay: "400ms" }}
            >
              <a
                href={finalButtonLink}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                {finalButtonText}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>

        <div
          ref={gridAnimation.ref}
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-9 md:gap-12 ${gridAnimation.animationClass}`}
          style={{ transitionDelay: "500ms" }}
        >
          {normalizedPartners.map((partner, index) => (
            <PartnerLogo key={partner.id} partner={partner} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface PartnerLogoProps {
  partner: {
    id: string;
    name: string;
    logo: string;
    website?: string;
  };
  index: number;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ partner, index }) => {
  const logoAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.1,
  });

  const LogoWrapper = ({ children }: { children: React.ReactNode }) => {
    if (partner.website) {
      return (
        <a
          href={partner.website}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full"
          aria-label={`Visit ${partner.name} website`}
        >
          {children}
        </a>
      );
    }
    return <div className="block w-full h-full">{children}</div>;
  };

  return (
    <div
      ref={logoAnimation.ref}
      className={`transition-all duration-300 hover:-translate-y-1 ${logoAnimation.animationClass}`}
      style={{
        transitionDelay: `${600 + index * 50}ms`,
      }}
    >
      <LogoWrapper>
        <div className="flex items-center justify-center h-6 md:h-16 w-full group">
          <div className="relative w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-300">
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              fill
              className="object-contain filter transition-all duration-300"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
            />
          </div>
        </div>
      </LogoWrapper>
    </div>
  );
};

export default Partners;
export type { StrapiPartner, LocalPartner, PartnersProps };
