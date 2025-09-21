"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { Copy, Check } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { getStrapiImageUrl } from "../lib/strapi";
import type { DonatePageData } from "../donate/page";

interface DonateClientProps {
  donatePageData: DonatePageData | null;
}

const DonateClient: React.FC<DonateClientProps> = ({
  donatePageData: strapiData,
}) => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>("₦");
  const [copiedItems, setCopiedItems] = useState<{ [key: string]: boolean }>(
    {}
  );

  const [amount, setAmount] = useState<number>(5000);
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const useTextReveal = (threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        {
          threshold,
          rootMargin: "0px 0px -100px 0px",
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [threshold]);

    return { ref, isVisible };
  };

  const TextReveal: React.FC<{ text: string; className?: string }> = ({
    text,
    className = "",
  }) => {
    const { ref, isVisible } = useTextReveal(0.1);
    const words = text.split(" ");

    return (
      <div ref={ref} className={className}>
        {words.map((word, index) => (
          <span
            key={index}
            className={`inline-block mr-2 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: `${index * 50}ms`,
            }}
          >
            {word}
          </span>
        ))}
      </div>
    );
  };

  const CopyButton: React.FC<{ text: string; id: string }> = ({ text, id }) => {
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(text);
        setCopiedItems((prev) => ({ ...prev, [id]: true }));
        setTimeout(
          () => setCopiedItems((prev) => ({ ...prev, [id]: false })),
          2000
        );
      } catch (err) {
        console.error("Failed to copy text: ", err);
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand("copy");
          setCopiedItems((prev) => ({ ...prev, [id]: true }));
          setTimeout(
            () => setCopiedItems((prev) => ({ ...prev, [id]: false })),
            2000
          );
        } catch (fallbackErr) {
          console.error("Fallback copy failed: ", fallbackErr);
        }
        document.body.removeChild(textArea);
      }
    };

    const isCopied = copiedItems[id] || false;

    return (
      <button
        onClick={handleCopy}
        className="p-2 text-blue-600 hover:text-blue-800 transition-colors flex items-center justify-center"
        title={isCopied ? "Copied!" : "Copy to clipboard"}
      >
        {isCopied ? (
          <Check className="w-4 h-4 text-green-600" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>
    );
  };

  const handleFormSubmission = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !firstName || !lastName || !phoneNumber) {
      toast.error("Please fill in all required fields");
      return;
    }

    const minimumAmount = selectedCurrency === "₦" ? 1000 : 1;
    if (amount < minimumAmount) {
      toast.error(
        `Minimum donation amount is ${selectedCurrency}${
          selectedCurrency === "₦" ? "1,000" : "1"
        }`
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

      const response = await fetch(`${STRAPI_URL}/donation-requests`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            first_name: firstName,
            last_name: lastName,
            email_address: email,
            phone_number: phoneNumber,
            amount: amount.toString(),
            currency: selectedCurrency,
            message: message || null,
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error?.message || `HTTP error! status: ${response.status}`
        );
      }

      const result = await response.json();

      toast.success(
        `Thank you ${firstName}! We have received your donation request of ${selectedCurrency}${amount.toLocaleString()}. Our team will contact you shortly to complete the donation process.`,
        {
          duration: 8000,
          icon: "🎉",
        }
      );

      setAmount(selectedCurrency === "₦" ? 1000 : 1);
      setEmail("");
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting donation request:", error);
      toast.error(
        "Something went wrong. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const fallbackData = {
    hero: {
      heading: "Donate to Africa's Next Generation of Leadership.",
      cover_image: null,
    },
    content:
      "SEO Africa would not exist without the generosity and vision of its benefactors. Over the past 13 years, philanthropic gifts have supported our students, endowed our scholars and equipped us with the tools we need to create impact. This tradition maintains SEO Africa as a world-class programme, and invests in our future and commitment to raising African leaders in the corporate environment. It is a tradition which continues today.",
    donate_section: {
      title: "How to donate.",
      description:
        "Hello, thank you for choosing to give to SEO Africa. Your donation means a lot to us, and helps empower talented young Africans with the training, mentorship, and opportunities they need to lead change in their communities, industries, and our continent.",
      donate_cards: [
        {
          id: 1,
          currency: "₦",
          curreny_name: "Naira",
          transfer_section: [
            {
              id: 1,
              bank_name: "Zenith bank",
              account_number: "6473822848",
              account_name: "SEO Africa Initiative",
              wire_transfrer: false,
              swift_code: null,
              sort_code: null,
            },
            {
              id: 2,
              bank_name: "UBA",
              account_number: "6473822848",
              account_name: "SEO Africa Initiative",
              wire_transfrer: false,
              swift_code: null,
              sort_code: null,
            },
          ],
        },
        {
          id: 2,
          currency: "$",
          curreny_name: "USD",
          transfer_section: [
            {
              id: 3,
              bank_name: "Stanbic IBTC",
              account_number: "6473822848",
              account_name: null,
              wire_transfrer: true,
              swift_code: "6473822848",
              sort_code: "012-345678",
            },
          ],
        },
      ],
      features: [
        {
          id: 1,
          text: "Creating inclusive, high-quality trainings and mentorship programmes for graduates and students across Africa.",
        },
        {
          id: 2,
          text: "Building a more equitable and prosperous future for Africa.",
        },
        {
          id: 3,
          text: "Transforming the lives of young people in Africa by removing barriers to opportunity.",
        },
      ],
    },
  };

  const heroData = strapiData?.hero || fallbackData.hero;
  const contentData = strapiData?.content || fallbackData.content;
  const donateData = strapiData?.donate_section || fallbackData.donate_section;

  const availableCurrencies = donateData.donate_cards.map(
    (card) => card.currency
  );

  useEffect(() => {
    if (availableCurrencies.length > 0) {
      setSelectedCurrency(availableCurrencies[0]);
    }
  }, [availableCurrencies.join(",")]);

  const selectedCurrencyData = donateData.donate_cards.find(
    (card) => card.currency === selectedCurrency
  );

  const heroImageSrc = heroData.cover_image
    ? getStrapiImageUrl(heroData.cover_image)
    : "/seocares_bg.png";

  return (
    <div className="bg-[#131B3E]">
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 8000,
            style: {
              background: "#10B981",
              color: "#fff",
            },
          },
          error: {
            duration: 5000,
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

      <Navbar />

      <section className="relative h-[91vh] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImageSrc}
            alt="African Leadership Collage"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative flex items-center justify-center h-full px-6 lg:px-8">
          <div className="bg-[#131B3E] p-2 text-center">
            <h1 className="text-[1.6rem] md:text-5xl lg:text-7xl font-serif text-white leading-tight">
              <span className="text-orange-500 italic font-serif">Donate</span>
              <span className="text-white"> to Africa's Next</span>
              <br />
              <span className="text-white italic font-serif">
                Generation of Leadership.
              </span>
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <TextReveal
            text={contentData}
            className="text-gray-900 font-medium text-2xl md:text-3xl lg:text-4xl leading-tight mb-6"
          />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="text-[#3051F3]">How</span> to donate.
            </h2>

            <p className="text-gray-600 text-lg max-w-6xl">
              {donateData.description}
            </p>
          </div>

          <div className="border rounded-lg p-3 grid lg:grid-cols-2 gap-8">
            <div className="bg-[#F5F6FA] rounded-lg shadow-sm p-6 text-black h-fit">
              <h3 className="text-2xl font-semibold mb-6">
                Donation Information
              </h3>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select currency:
                </label>
                <div className="flex flex-wrap gap-4 pb-4 border-b border-gray-200">
                  {donateData.donate_cards.map((card) => (
                    <label
                      key={card.id}
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="currency"
                        value={card.currency}
                        checked={selectedCurrency === card.currency}
                        onChange={() => setSelectedCurrency(card.currency)}
                        className="mr-2 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {card.curreny_name} ({card.currency})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm text-[#000D4D73] mb-4">
                  Every donation to SEO Africa is an investment that goes
                  towards:
                </p>
                <ul className="space-y-2">
                  {donateData.features.map((feature) => (
                    <li key={feature.id} className="flex items-start">
                      <div className="w-4 h-4 text-blue-600 mr-3 mt-1 flex-shrink-0">
                        ✱
                      </div>
                      <span className="text-sm text-gray-700">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6 text-black">
              <div className="bg-white p-6">
                <h4 className="text-sm font-medium mb-4">
                  Donate {selectedCurrencyData?.curreny_name} (
                  {selectedCurrency})
                </h4>
                <h5 className="text-md font-bold mb-4">
                  {selectedCurrencyData?.transfer_section[0]?.wire_transfrer
                    ? "Wire transfers"
                    : "Bank transfers"}
                </h5>

                <div className="grid md:grid-cols-2 gap-4">
                  {selectedCurrencyData?.transfer_section.map((transfer) => (
                    <div
                      key={transfer.id}
                      className="bg-[#00158005] shadow-sm rounded-lg p-4"
                    >
                      <div className="mb-3">
                        <label className="text-sm text-gray-600">
                          Bank name
                        </label>
                        <p className="font-medium">{transfer.bank_name}</p>
                      </div>
                      <div className="mb-3">
                        <label className="text-sm text-gray-600">
                          {transfer.wire_transfrer
                            ? `${selectedCurrencyData.curreny_name} account number`
                            : "Account number"}
                        </label>
                        <div className="flex items-center justify-between">
                          <p className="font-medium">
                            {transfer.account_number}
                          </p>
                          <CopyButton
                            text={transfer.account_number}
                            id={`account-${transfer.id}`}
                          />
                        </div>
                      </div>
                      {transfer.account_name && (
                        <div className="mb-3">
                          <label className="text-sm text-gray-600">
                            Account name
                          </label>
                          <p className="font-medium">{transfer.account_name}</p>
                        </div>
                      )}
                      {transfer.swift_code && (
                        <div className="mb-3">
                          <label className="text-sm text-gray-600">
                            Swift code
                          </label>
                          <div className="flex items-center justify-between">
                            <p className="font-medium">{transfer.swift_code}</p>
                            <CopyButton
                              text={transfer.swift_code}
                              id={`swift-${transfer.id}`}
                            />
                          </div>
                        </div>
                      )}
                      {transfer.sort_code && (
                        <div>
                          <label className="text-sm text-gray-600">
                            Sort code
                          </label>
                          <div className="flex items-center justify-between">
                            <p className="font-medium">{transfer.sort_code}</p>
                            <CopyButton
                              text={transfer.sort_code}
                              id={`sort-${transfer.id}`}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-lg font-semibold mb-4">
                  Submit Donation Request
                </h4>

                <div className="p-4 bg-[#00158005] rounded-lg">
                  <p className="text-sm text-gray-600 mb-6">
                    Fill out the form below and our team will contact you to
                    facilitate your donation process.
                  </p>

                  <form onSubmit={handleFormSubmission} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter first name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter last name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter email address"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter phone number"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Intended Donation Amount ({selectedCurrency}) *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-2 text-gray-500">
                          {selectedCurrency}
                        </span>
                        <input
                          type="number"
                          value={amount}
                          onChange={(e) => setAmount(Number(e.target.value))}
                          className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="5000"
                          min="100"
                          required
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Minimum amount: {selectedCurrency}
                        {selectedCurrency === "₦" ? "1,000" : "1"}
                      </p>
                    </div>

                    {/* <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-gray-600">
                        Quick amounts:
                      </span>
                      {[1000, 5000, 10000, 25000, 50000].map((quickAmount) => (
                        <button
                          type="button"
                          key={quickAmount}
                          onClick={() => setAmount(quickAmount)}
                          className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                            amount === quickAmount
                              ? "bg-blue-500 text-white border-blue-500"
                              : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                          }`}
                        >
                          {selectedCurrency}
                          {quickAmount.toLocaleString()}
                        </button>
                      ))}
                    </div> */}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message (Optional)
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Any additional message or specific purpose for your donation..."
                        rows={4}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#3051F3] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={
                        !email ||
                        !firstName ||
                        !lastName ||
                        !phoneNumber ||
                        amount < 100 ||
                        isSubmitting
                      }
                    >
                      {isSubmitting
                        ? "Submitting..."
                        : `Submit Donation Request for ${selectedCurrency}${amount.toLocaleString()}`}
                    </button>
                  </form>

                  <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Next Steps:</strong> After submitting this form,
                      our team will contact you within 24-48 hours to guide you
                      through the donation process and provide any additional
                      information you may need.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why donate to us
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl">
              Every donation directly funds programs and resources that help
              talented young Africans thrive. Your support helps us:
            </p>
          </div>

          <div className="grid md:grid-cols-3 mb-16">
            <div className="p-5 border text-center group">
              <div className="mb-20">
                <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text mb-4">
                  Deliver world-class training and employability workshops.
                </h3>
              </div>
              <p className="text-gray-600">
                We equip young Africans with the technical skills, professional
                training, and mentorship they need to compete and excel in
                today&apos;s job market.
              </p>
            </div>

            <div className="p-5 border text-center group">
              <div className="mb-20">
                <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text mb-4">
                  Launch community-focused projects through SEO Cares.
                </h3>
              </div>
              <p className="text-gray-600">
                Through SEO Cares, we drive initiatives that give back to local
                communities, foster leadership, and create opportunities beyond
                the workplace.
              </p>
            </div>

            <div className="p-5 border text-center group">
              <div className="mb-20">
                <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text mb-4">
                  Connect students to internships and roles with global
                  companies.
                </h3>
              </div>
              <p className="text-gray-600">
                We open doors to internships and career opportunities at leading
                global firms, giving African youths the exposure and experience
                to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DonateClient;
