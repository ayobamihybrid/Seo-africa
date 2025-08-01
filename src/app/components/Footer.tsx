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

const defaultSections: FooterSection[] = [
  {
    title: "Programmes",
    links: [
      {
        label: "Graduate Trainee Programme",
        href: "/programmes/graduate-trainee",
      },
      { label: "Global Pathways", href: "/programmes/global-pathways" },
      { label: "SEO Africa On-campus", href: "/programmes/on-campus" },
      { label: "Achievers Incubator", href: "/programmes/achievers-incubator" },
      { label: "InnovatHer Programme", href: "/programmes/innovather" },
      { label: "MBA Launchpad", href: "/programmes/mba-launchpad" },
    ],
  },
  {
    title: "About us",
    links: [
      { label: "Our story", href: "/about/story" },
      { label: "Our impact", href: "/about/impact" },
      { label: "Our partners", href: "/about/partners" },
      { label: "Meet the team", href: "/our-team" },
      { label: "Careers", href: "/about/careers" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQs", href: "/resources/faqs" },
      { label: "Events & updates", href: "/resources/events" },
      { label: "Our blog", href: "/blog" },
      { label: "SEO Cares projects", href: "/resources/seo-cares" },
      { label: "Alumni testimonials", href: "/resources/testimonials" },
      { label: "Donate", href: "/donate", external: true },
    ],
  },
  {
    title: "Contact us",
    links: [
      { label: "info@seo-africa.org", href: "mailto:info@seo-africa.org" },
      { label: "+233 549 919 321 (GH)", href: "tel:+233549919321" },
      { label: "+234 815 830 9580 (NG)", href: "tel:+2348158309580" },
      { label: "Contact us form", href: "/contact" },
    ],
  },
];

const defaultContactInfo = {
  email: "info@seo-africa.org",
  phoneGH: "+233 549 919 321 (GH)",
  phoneNG: "+234 815 830 9580 (NG)",
};

const defaultSocialLinks = {
  instagram: "https://instagram.com/seo-africa",
  facebook: "https://facebook.com/seo-africa",
  twitter: "https://twitter.com/seo-africa",
  linkedin: "https://linkedin.com/company/seo-africa",
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
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  className="rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  className="rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
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
                    <a
                      href={link.href}
                      className="text-white hover:text-gray-300 transition-colors duration-300 flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      {link.external && (
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                    </a>
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
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
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
