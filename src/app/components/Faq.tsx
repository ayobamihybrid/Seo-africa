"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { FAQItem } from "../types/strapi";
import useScrollAnimation from "../hooks/useScrollAnimation";

interface FAQSectionProps {
  faqPage?: boolean;
  faqItems?: FAQItem[];
  title?: string;
  description?: string;
  maxItems?: number;
  className?: string;
}

const FAQSection = ({
  faqPage = false,
  faqItems,
  title,
  description,
  maxItems,
  className = "",
}: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const sectionAnimation = useScrollAnimation({
    animationType: "fade-up",
    threshold: 0.2,
  });

  const defaultFaqs = [
    {
      id: 1,
      documentId: "default-1",
      question: "What is SEO Africa?",
      answer:
        "SEO Africa is a non-profit organization that develops young African leaders through intensive programming and mentorship opportunities.",
      createdAt: "",
      updatedAt: "",
      publishedAt: "",
    },
    {
      id: 2,
      documentId: "default-2",
      question: "How can I apply for programs?",
      answer:
        "Applications are typically opened on our website during specific periods. Follow our social media channels and newsletter for updates on application deadlines.",
      createdAt: "",
      updatedAt: "",
      publishedAt: "",
    },
    {
      id: 3,
      documentId: "default-3",
      question: "What programs do you offer?",
      answer:
        "We offer various leadership development programs including entrepreneurship bootcamps, corporate readiness training, and mentorship opportunities.",
      createdAt: "",
      updatedAt: "",
      publishedAt: "",
    },
    {
      id: 4,
      documentId: "default-4",
      question: "Who is eligible to apply?",
      answer:
        "Our programs are primarily designed for young African professionals and students who demonstrate leadership potential and commitment to community development.",
      createdAt: "",
      updatedAt: "",
      publishedAt: "",
    },
    {
      id: 5,
      documentId: "default-5",
      question: "Is there a cost to participate?",
      answer:
        "Most of our programs are offered at no cost to participants, thanks to our generous partners and donors who believe in investing in African youth.",
      createdAt: "",
      updatedAt: "",
      publishedAt: "",
    },
    {
      id: 6,
      documentId: "default-6",
      question: "How long are the programs?",
      answer:
        "Program duration varies depending on the specific offering, ranging from intensive weekend workshops to year-long mentorship programs.",
      createdAt: "",
      updatedAt: "",
      publishedAt: "",
    },
  ];

  const displayFaqs = faqItems && faqItems.length > 0 ? faqItems : defaultFaqs;
  const finalFaqs = maxItems ? displayFaqs.slice(0, maxItems) : displayFaqs;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const createMarkup = (html: string) => {
    return { __html: html };
  };

  const defaultTitle = "Frequently asked questions";
  const defaultDescription = "Everything you need to know about SEO Africa.";

  return (
    <div
      className={`max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {!faqPage && (
        <div
          ref={sectionAnimation.ref}
          className={`text-center mb-12 ${sectionAnimation.animationClass}`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            {title || defaultTitle}
          </h2>
          <p className="text-gray-600 text-lg">
            {description || defaultDescription}{" "}
            {!faqPage && (
              <a
                href="/faq"
                className="text-blue-600 hover:text-blue-700 underline font-medium"
              >
                More FAQs here
              </a>
            )}
          </p>
        </div>
      )}

      <div
        className={`space-y-4 ${
          faqPage ? sectionAnimation.animationClass : ""
        }`}
        ref={faqPage ? sectionAnimation.ref : undefined}
      >
        {finalFaqs.map((faq, index) => (
          <div
            key={faq.id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
            >
              <span className="text-lg font-medium text-gray-900 pr-4">
                {faq.question}
              </span>

              <div className="flex-shrink-0">
                {openIndex === index ? (
                  <Minus className="w-6 h-6 text-gray-500" />
                ) : (
                  <Plus className="w-6 h-6 text-gray-500" />
                )}
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-5 pt-2">
                {faq.answer.includes("<") ? (
                  <div
                    className="text-gray-600 leading-relaxed prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={createMarkup(faq.answer)}
                  />
                ) : (
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
