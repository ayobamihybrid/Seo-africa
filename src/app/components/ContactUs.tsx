"use client";

import React, { useState, useRef, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import FAQSection from "../components/Faq";
import Donate from "../components/Donate";
import Footer from "../components/Footer";

interface ContactUsPageData {
  hero_section: {
    title: string;
    description: string;
    accent_text: string;
    contacts: {
      id: number;
      email: string;
      phone_ghana: string;
      phone_nigerian: string;
    };
  };
  faq_section: {
    title: string;
    body: string;
    link_text: string;
  };
  dontate_cta_section: {
    id: number;
    title: string;
    description: string;
    cta_text: string;
  };
}

interface FormData {
  fullName: string;
  email: string;
  location: string;
  reason: string;
  description: string;
}

interface CustomDropdownProps {
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (e: { target: { name: string; value: string } }) => void;
  placeholder?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  label,
  name,
  value,
  options,
  onChange,
  placeholder = "Select an option",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    onChange({
      target: {
        name,
        value: option,
      },
    });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>

      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={toggleDropdown}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-left transition duration-200 flex items-center justify-between hover:bg-gray-50"
        >
          <span className={value ? "text-gray-900" : "text-gray-500"}>
            {value || placeholder}
          </span>
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => selectOption(option)}
                className={`px-4 py-3 cursor-pointer transition duration-150 hover:bg-blue-50 hover:text-blue-700 ${
                  value === option
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "text-gray-900"
                } ${index === 0 ? "rounded-t-lg" : ""} ${
                  index === options.length - 1 ? "rounded-b-lg" : ""
                }`}
              >
                {option}
                {value === option && (
                  <svg
                    className="inline w-4 h-4 ml-2 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

interface ContactUsClientProps {
  contactUsData: ContactUsPageData | null;
  faqItems: any[];
}

const ContactUsClient: React.FC<ContactUsClientProps> = ({
  contactUsData,
  faqItems,
}) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    location: "United States",
    reason: "Partnership inquiry",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e:
      | React.ChangeEvent<
          HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
      | { target: { name: string; value: string } }
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const toastId = toast.loading("Sending your message...");

      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.dismiss(toastId);
      toast.success("Thank you for your message! We'll get back to you soon.", {
        duration: 4000,
        icon: "✉️",
      });

      console.log("Form submitted:", formData);

      setFormData({
        fullName: "",
        email: "",
        location: "United States",
        reason: "Partnership inquiry",
        description: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        duration: 4000,
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const locationOptions = [
    "United States",
    "Canada",
    "United Kingdom",
    "Ghana",
    "Nigeria",
    "South Africa",
    "Kenya",
    "Other",
  ];

  const reasonOptions = [
    "Partnership inquiry",
    "General inquiry",
    "Press inquiry",
    "Technical support",
    "Business collaboration",
    "Other",
  ];

  // Fallback data 
  const fallbackHeroData = {
    accent_text: "Get in touch",
    title: "We'd be delighted to hear from you.",
    description:
      "Our team is always available to chat. For general enquiries, press or partnership inquiries, please contact us by filling the form.",
    contacts: {
      id: 1,
      email: "info@seo-africa.org",
      phone_ghana: "+233 549 919 321",
      phone_nigerian: "+234 815 830 9580",
    },
  };

  const fallbackFaqSection = {
    title: "Frequently asked questions",
    body: "Everything you need to know about SEO Africa.",
    link_text: "More FAQs here",
  };

  const heroData = contactUsData?.hero_section || fallbackHeroData;
  const faqSectionData = contactUsData?.faq_section || fallbackFaqSection;

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 4000,
            style: {
              background: "#10B981",
              color: "#fff",
            },
          },
          error: {
            duration: 4000,
            style: {
              background: "#EF4444",
              color: "#fff",
            },
          },
          loading: {
            style: {
              background: "#3B82F6",
              color: "#fff",
            },
          },
        }}
      />

      <Navbar details />

      <div className="py-20 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-orange-500 text-lg font-medium mb-2">
                {heroData.accent_text}
              </h2>
              <h1 className="text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
                {heroData.title}
              </h1>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              {heroData.description}
            </p>

            <div className="space-y-6">
              <h3 className="text-gray-700 font-medium text-lg">Contacts:</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-gray-500">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    {heroData.contacts.email}
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-gray-500">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-gray-700">
                      {heroData.contacts.phone_ghana}{" "}
                      <span className="text-gray-500">(Ghana)</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-gray-500">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-gray-700">
                      {heroData.contacts.phone_nigerian}{" "}
                      <span className="text-gray-500">(Nigeria)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition duration-200 placeholder:text-gray-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="herrgroot@gmail.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition duration-200 placeholder:text-gray-500"
                    required
                  />
                </div>
              </div>

              <CustomDropdown
                label="Where are you located?"
                name="location"
                value={formData.location}
                options={locationOptions}
                onChange={handleInputChange}
                placeholder="Select your location"
              />

              <CustomDropdown
                label="Reason for contacting SEO Africa"
                name="reason"
                value={formData.reason}
                options={reasonOptions}
                onChange={handleInputChange}
                placeholder="Select a reason"
              />

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter a description..."
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg transition duration-200 resize-vertical focus:outline-none placeholder:text-black"
                  required
                />
              </div>

              <p className="text-sm text-gray-600">
                By contacting us, you are agreeing to our{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  privacy policy
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  terms of service
                </a>
                , and consent to receiving communication from SEO Africa.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 px-6 rounded-lg text-white font-medium text-lg transition duration-200 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <FAQSection
        faqPage={false}
        faqItems={faqItems}
        title={faqSectionData.title}
        description={faqSectionData.body}
        maxItems={6}
      />

      {contactUsData?.dontate_cta_section && (
        <Donate donateData={contactUsData.dontate_cta_section} />
      )}

      <Footer />
    </div>
  );
};

export default ContactUsClient;
