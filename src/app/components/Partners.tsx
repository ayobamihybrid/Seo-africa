"use client";

import React from "react";
import Image from "next/image";
import useScrollAnimation from "../hooks/useScrollAnimation";

interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
}

interface PartnersProps {
  partners?: Partner[];
  title?: string;
  subtitle?: string;
  description?: string;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  variant?: "default" | "ourTeam" | "custom";
  className?: string;
}

const defaultPartners: Partner[] = [
  {
    id: "1",
    name: "Adenia Partners",
    logo: "/parner_image1.png",
    website: "https://adeniapartners.com",
  },
  {
    id: "2",
    name: "Goldman Sachs",
    logo: "/parner_image2.png",
    website: "https://goldmansachs.com",
  },
  {
    id: "3",
    name: "Argentil",
    logo: "/parner_image3.png",
    website: "https://argentil.com",
  },
  {
    id: "4",
    name: "Genser Energy",
    logo: "/parner_image4.png",
    website: "https://genserenergy.com",
  },
  {
    id: "5",
    name: "Sterling Bank",
    logo: "/parner_image5.png",
    website: "https://sterling.ng",
  },
  {
    id: "6",
    name: "Obsidian Achenar",
    logo: "/parner_image6.png",
    website: "https://obsidian.com",
  },
  {
    id: "7",
    name: "FCMB",
    logo: "/parner_image7.png",
    website: "https://fcmb.com",
  },
  {
    id: "8",
    name: "Norfund",
    logo: "/parner_image8.png",
    website: "https://norfund.no",
  },
  {
    id: "9",
    name: "Sentinel Global",
    logo: "/parner_image9.png",
    website: "https://sentinel.com",
  },
  {
    id: "10",
    name: "British International Investment",
    logo: "/parner_image10.png",
    website: "https://bii.co.uk",
  },
  {
    id: "11",
    name: "Temple Investments",
    logo: "/parner_image11.png",
    website: "https://temple.com",
  },
  {
    id: "12",
    name: "Argentil",
    logo: "/parner_image12.png",
    website: "https://argentil.com",
  },
  {
    id: "13",
    name: "Injaro",
    logo: "/parner_image13.png",
    website: "https://injaro.com",
  },
  {
    id: "14",
    name: "Vodafone",
    logo: "/parner_image14.png",
    website: "https://vodafone.com",
  },
  {
    id: "15",
    name: "Genser Oil & Gas",
    logo: "/parner_image15.png",
    website: "https://genser.com",
  },
  {
    id: "16",
    name: "FreezeLink",
    logo: "/parner_image16.png",
    website: "https://freezelink.com",
  },
  {
    id: "17",
    name: "Verod",
    logo: "/parner_image17.png",
    website: "https://verod.com",
  },
  {
    id: "18",
    name: "Bank of America",
    logo: "/parner_image18.png",
    website: "https://bankofamerica.com",
  },
  {
    id: "19",
    name: "Constant Capital",
    logo: "/parner_image19.png",
    website: "https://constant.com",
  },
  {
    id: "20",
    name: "UDC",
    logo: "/parner_image20.png",
    website: "https://udc.com",
  },
  {
    id: "21",
    name: "Databank",
    logo: "/parner_image21.png",
    website: "https://databank.com",
  },
  {
    id: "22",
    name: "Kuramo Capital",
    logo: "/parner_image22.png",
    website: "https://kuramo.com",
  },
  {
    id: "23",
    name: "Linklaters",
    logo: "/parner_image23.png",
    website: "https://linklaters.com",
  },
  {
    id: "24",
    name: "TLG Capital",
    logo: "/parner_image24.png",
    website: "https://tlg.com",
  },
  {
    id: "25",
    name: "Halliburton",
    logo: "/parner_image25.png",
    website: "https://halliburton.com",
  },
  {
    id: "26",
    name: "Stanbic Bank",
    logo: "/parner_image26.png",
    website: "https://stanbic.com",
  },
  {
    id: "27",
    name: "UBA",
    logo: "/parner_image27.png",
    website: "https://ubagroup.com",
  },
  {
    id: "28",
    name: "RMB",
    logo: "/parner_image28.png",
    website: "https://rmb.co.za",
  },
  {
    id: "29",
    name: "Vanguard Assurance",
    logo: "/parner_image29.png",
    website: "https://vanguard.com",
  },
];

// Define variant configuration type
interface VariantConfig {
  title?: string;
  subtitle?: string;
  description?: string;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  background: string;
}

// Define variant configurations
const variantConfigs: Record<string, VariantConfig> = {
  default: {
    title: "Trusted by 20+ world leading organizations.",
    subtitle: "Our Partners",
    showButton: false,
    background: "bg-gray-50",
  },
  ourTeam: {
    title: "We've partnered with the best organizations and brands.",
    subtitle: "",
    description:
      "We've been lucky to stand on the shoulders of giants. We're recognized and backed by SEO communities and world leading organizations and partners worldwide, including SEO London, SEO Shanghai, SEO USA, Ho-Chih Mihn (SEO Vietnam) amongst others.",
    showButton: true,
    buttonText: "Become a partner",
    buttonLink: "#",
    background: "bg-white",
  },
  custom: {
    title: "",
    subtitle: "",
    showButton: false,
    background: "bg-gray-50",
  },
};

const Partners: React.FC<PartnersProps> = ({
  partners = defaultPartners,
  title,
  subtitle,
  description,
  showButton,
  buttonText,
  buttonLink,
  variant = "default",
  className = "",
}) => {
  // Get configuration based on variant
  const config = variantConfigs[variant];

  // Use props if provided, otherwise fall back to variant config
  const finalTitle = title !== undefined ? title : config.title;
  const finalSubtitle = subtitle !== undefined ? subtitle : config.subtitle;
  const finalDescription =
    description !== undefined ? description : config.description;
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
                variant === "ourTeam" ? "max-w-4xl" : "max-w-xl mx-auto"
              } text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 ${
                titleAnimation.animationClass
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {finalTitle}
            </h2>
          )}

          {finalDescription && (
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
                  finalDescription
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
          {partners.map((partner, index) => (
            <PartnerLogo key={partner.id} partner={partner} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface PartnerLogoProps {
  partner: Partner;
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
export type { Partner, PartnersProps };
