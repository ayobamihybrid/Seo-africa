"use client";

import React from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  className?: string;
  logo?: React.ReactNode;
  description?: string;
  sections?: FooterSection[];
  contactInfo?: {
    email: string;
    phoneGH: string;
    phoneNG: string;
  };
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
  legalLinks?: FooterLink[];
}

const generateProgrammeSlug = (title: string): string => {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();

  console.log(`Programme(Footer) "${title}" -> ID: "${slug}"`);
  return slug;
};

const defaultSections: FooterSection[] = [
  {
    title: "Programmes",
    links: [
      {
        label: "Graduate Trainee Programme",
        href: "/our-programmes#graduate-trainee-programme-nigeria-in-country",
      },
      {
        label: "Global Pathways",
        href: "/our-programmes#global-pathways-programme",
      },
      {
        label: "SEO Africa On-campus",
        href: "/our-programmes#seo-africa-on-campus-programme",
      },
      {
        label: "Achievers Incubator",
        href: "/our-programmes#seo-africa-achievers-incubator-programme",
      },
      {
        label: "InnovatHer Programme",
        href: "/our-programmes#seo-africa-innovather-programme",
      },
      {
        label: "MBA Launchpad",
        href: "/our-programmes#seo-africa-mba-launchpad",
      },
    ],
  },
  {
    title: "About us",
    links: [
      { label: "Our story", href: "/about-us" },
      { label: "Our impact", href: "/impact" },
      { label: "Our partners", href: "/our-team#partners" },
      { label: "Meet the team", href: "/our-team" },
      { label: "Careers", href: "/career-opportunities" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQs", href: "/faq" },
      { label: "News and updates", href: "/blog" },
      { label: "SEO Cares projects", href: "/seo-cares" },
      { label: "Alumni testimonials", href: "/impact#testimonials" },
      { label: "Donate", href: "/donate", external: true },
    ],
  },
  {
    title: "Contact us",
    links: [
      { label: "info@seo-africa.org", href: "mailto:info@seo-africa.org" },
      { label: "+233 549 919 321 (GH)", href: "tel:+233549919321" },
      { label: "+234 815 830 9580 (NG)", href: "tel:+2348158309580" },
      { label: "Contact us form", href: "/contact-us" },
    ],
  },
];

const defaultContactInfo = {
  email: "info@seo-africa.org",
  phoneGH: "+233 549 919 321 (GH)",
  phoneNG: "+234 815 830 9580 (NG)",
};

const defaultSocialLinks = {
  instagram: "https://www.instagram.com/seo_africa",
  facebook: "https://web.facebook.com/seoinafrica",
  twitter: "https://x.com/SEOinAfrica",
  linkedin: "https://www.linkedIn.com/company/seo-africa-org",
};

const defaultLegalLinks: FooterLink[] = [
  { label: "Terms", href: "/legal/terms" },
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Cookies", href: "/legal/cookies" },
];

const Footer: React.FC<FooterProps> = ({
  className = "",
  description = "Sponsors for Educational Opportunity (SEO) Africa.",
  sections = defaultSections,
  contactInfo = defaultContactInfo,
  socialLinks = defaultSocialLinks,
  legalLinks = defaultLegalLinks,
}) => {
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.includes("#")) return;

    const [pathname, hash] = href.split("#");
    const currentPath = window.location.pathname;

    if (currentPath === pathname) {
      e.preventDefault();
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  };

  return (
    <footer className={`bg-slate-900 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="w-16 h-16 md:w-25 md:h-20 relative">
                <Image
                  src="/seo_logo.png"
                  alt="seo logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              {description}
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  className="rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors duration-300"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  className="rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  className="rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="text-gray-400 font-medium text-sm uppercase tracking-wide mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-gray-300 transition-colors duration-300 flex items-center gap-1 group"
                      onClick={(e) => handleAnchorClick(e, link.href)}
                    >
                      <span>{link.label}</span>
                      {link.external && (
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 SEO Africa. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <div className="w-px h-4 bg-slate-700"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
export type { FooterLink, FooterSection, FooterProps };
