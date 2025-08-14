"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { Copy, Check } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

type Props = {};

const Donate = (props: Props) => {
  const [selectedCurrency, setSelectedCurrency] = useState<
    "NGN" | "USD" | "GBP" | "CED"
  >("NGN");
  const [copiedText, setCopiedText] = useState<string | null>(null);

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

  const CopyButton = ({ text }: { text: string }) => {
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(text);
        setCopiedText(text);
        setTimeout(() => setCopiedText(null), 2000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand("copy");
          setCopiedText(text);
          setTimeout(() => setCopiedText(null), 2000);
        } catch (fallbackErr) {
          console.error("Fallback copy failed: ", fallbackErr);
        }
        document.body.removeChild(textArea);
      }
    };

    return (
      <button
        onClick={handleCopy}
        className="p-2 text-blue-600 hover:text-blue-800 transition-colors flex items-center justify-center"
        title={copiedText === text ? "Copied!" : "Copy to clipboard"}
      >
        {copiedText === text ? (
          <Check className="w-4 h-4 text-green-600" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>
    );
  };

  return (
    <div className="bg-[#131B3E]">
      <Navbar />

      <section className="relative h-screen bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/seocares_bg.png"
            alt="African Leadership Collage"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <div className="bg-[#131B3E] p-2 text-center">
            <h1 className="text-2xl md:text-5xl lg:text-7xl font-serif text-white leading-tight">
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
            text="SEO Africa would not exist without the generosity and vision of its benefactors. Over the past 13 years, philanthropic gifts have supported our students, endowed our scholars and equipped us with the tools we need to create impact.  This tradition maintains SEO Africa as a world-class programme, and invests in our future and commitment to raising African leaders in the corporate environment. It is a tradition which continues today. "
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
              Hello, thank you for choosing to give to SEO Africa. Your donation
              means a lot to us, and helps empower talented young Africans with
              the training, mentorship, and opportunities they need to lead
              change in their communities, industries, and our continent.
            </p>
          </div>

          <div className="border rounded-lg p-3 grid lg:grid-cols-2 gap-8">
            <div className="bg-[#F5F6FA] rounded-lg shadow-sm p-8 text-black">
              <h3 className="text-2xl font-semibold mb-6 ">Donate now</h3>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select currency:
                </label>
                <div className="flex flex-wrap gap-4 pb-6 border-b border-gray-200 ">
                  {(["NGN", "USD", "GBP", "CED"] as const).map((currency) => (
                    <label
                      key={currency}
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="currency"
                        value={currency}
                        checked={selectedCurrency === currency}
                        onChange={() => setSelectedCurrency(currency)}
                        className="mr-2 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {currency}{" "}
                        {currency === "NGN"
                          ? "(₦)"
                          : currency === "USD"
                          ? "($)"
                          : currency === "GBP"
                          ? "(£)"
                          : "(₵)"}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-[#000D4D73] mb-4">
                  Every donation to SEO Africa is an investment that goes
                  towards:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 text-blue-600 mr-3 mt-0.5">✱</div>
                    <span className="text-sm text-gray-700">
                      Creating inclusive, high-quality trainings and mentorship
                      programmes for graduates and students across Africa.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 text-blue-600 mr-3 mt-0.5">✱</div>
                    <span className="text-sm text-gray-700">
                      Building a more equitable and prosperous future for
                      Africa.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 text-blue-600 mr-3 mt-0.5">✱</div>
                    <span className="text-sm text-gray-700">
                      Transforming the lives of young people in Africa by
                      removing barriers to opportunity.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6 text-black">
              <div className="bg-white p-6">
                <h4 className="text-sm font-medium mb-4">
                  Donate{" "}
                  {selectedCurrency === "NGN"
                    ? "Naira (NGN) (₦)"
                    : selectedCurrency === "USD"
                    ? "United States Dollars (USD) ($)"
                    : selectedCurrency === "GBP"
                    ? "Great Britain Pounds (GBP) (£)"
                    : "Ghanaian Cedi (CED) (₵)"}
                </h4>
                <h5 className="text-md font-bold mb-4">
                  {selectedCurrency === "NGN"
                    ? "Bank transfers"
                    : "Wire transfers"}
                </h5>

                <div className="grid md:grid-cols-2 gap-4">
                  {selectedCurrency === "NGN" && (
                    <>
                      <div className="bg-[#00158005] shadow-sm rounded-lg p-4">
                        <div className="mb-3">
                          <label className="text-sm text-gray-600">
                            Bank name
                          </label>
                          <p className="font-medium">Zenith bank</p>
                        </div>
                        <div className="mb-3">
                          <label className="text-sm text-gray-600">
                            Account number
                          </label>
                          <div className="flex items-center justify-between">
                            <p className="font-medium">6473822848</p>
                            <CopyButton text="6473822848" />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">
                            Account name
                          </label>
                          <p className="font-medium">SEO Africa Initiative</p>
                        </div>
                      </div>

                      <div className="bg-[#00158005] shadow-sm rounded-lg p-4">
                        <div className="mb-3">
                          <label className="text-sm text-gray-600">
                            Bank name
                          </label>
                          <p className="font-medium">UBA</p>
                        </div>
                        <div className="mb-3">
                          <label className="text-sm text-gray-600">
                            Account number
                          </label>
                          <div className="flex items-center justify-between">
                            <p className="font-medium">6473822848</p>
                            <CopyButton text="6473822848" />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">
                            Account name
                          </label>
                          <p className="font-medium">SEO Africa Initiative</p>
                        </div>
                      </div>
                    </>
                  )}

                  {selectedCurrency === "USD" && (
                    <>
                      <div className="border rounded-lg p-4">
                        <div className="mb-3">
                          <label className="text-sm text-gray-600">
                            Bank name
                          </label>
                          <p className="font-medium">Bank of America</p>
                        </div>
                        <div className="mb-3">
                          <label className="text-sm text-gray-600">
                            USD account number
                          </label>
                          <div className="flex items-center justify-between">
                            <p className="font-medium">6473822848</p>
                            <CopyButton text="6473822848" />
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="text-sm text-gray-600">
                            Swift code
                          </label>
                          <div className="flex items-center justify-between">
                            <p className="font-medium">SEOAF012</p>
                            <CopyButton text="SEOAF012" />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">
                            Sort code
                          </label>
                          <div className="flex items-center justify-between">
                            <p className="font-medium">012-345678</p>
                            <CopyButton text="012-345678" />
                          </div>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="mb-3">
                          <label className="text-sm text-gray-600">
                            Bank name
                          </label>
                          <p className="font-medium">Citi Bank</p>
                        </div>
                        <div className="mb-3">
                          <label className="text-sm text-gray-600">
                            USD account number
                          </label>
                          <div className="flex items-center justify-between">
                            <p className="font-medium">6473822848</p>
                            <CopyButton text="6473822848" />
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="text-sm text-gray-600">
                            Swift code
                          </label>
                          <div className="flex items-center justify-between">
                            <p className="font-medium">SEOAF012</p>
                            <CopyButton text="SEOAF012" />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">
                            Sort code
                          </label>
                          <div className="flex items-center justify-between">
                            <p className="font-medium">012-345678</p>
                            <CopyButton text="012-345678" />
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {selectedCurrency === "GBP" && (
                    <div className="border rounded-lg p-4">
                      <div className="mb-3">
                        <label className="text-sm text-gray-600">
                          Bank name
                        </label>
                        <p className="font-medium">Stanbic IBTC</p>
                      </div>
                      <div className="mb-3">
                        <label className="text-sm text-gray-600">
                          GBP account number
                        </label>
                        <div className="flex items-center justify-between">
                          <p className="font-medium">6473822848</p>
                          <CopyButton text="6473822848" />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="text-sm text-gray-600">
                          Swift code
                        </label>
                        <div className="flex items-center justify-between">
                          <p className="font-medium">SEOAF012</p>
                          <CopyButton text="SEOAF012" />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">
                          Sort code
                        </label>
                        <div className="flex items-center justify-between">
                          <p className="font-medium">012-345678</p>
                          <CopyButton text="012-345678" />
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedCurrency === "CED" && (
                    <div className="border rounded-lg p-4">
                      <div className="mb-3">
                        <label className="text-sm text-gray-600">
                          Bank name
                        </label>
                        <p className="font-medium">Stanbic IBTC</p>
                      </div>
                      <div className="mb-3">
                        <label className="text-sm text-gray-600">
                          GBP account number
                        </label>
                        <div className="flex items-center justify-between">
                          <p className="font-medium">6473822848</p>
                          <CopyButton text="6473822848" />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="text-sm text-gray-600">
                          Swift code
                        </label>
                        <div className="flex items-center justify-between">
                          <p className="font-medium">SEOAF012</p>
                          <CopyButton text="SEOAF012" />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">
                          Sort code
                        </label>
                        <div className="flex items-center justify-between">
                          <p className="font-medium">012-345678</p>
                          <CopyButton text="012-345678" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-lg font-semibold mb-4">
                  Donate using Debit/Credit cards
                </h4>

                <div className="p-4 bg-[#00158005] rounded-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="relative w-8 h-6 rounded">
                      <Image src={"/paystack.svg"} alt="" fill />
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                    Click the button below to donate with your card, powered by
                    Paystack.
                  </p>

                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                    <span>Supports:</span>
                    <span className="bg-gray-100 px-2 py-1 rounded">VISA</span>
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      Mastercard
                    </span>
                    <span className="bg-gray-100 px-2 py-1 rounded">Verve</span>
                  </div>

                  <button className="bg-white text-[#3051F3] border border-[#3051F3] px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    Donate with Card
                  </button>
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
                SEO Africa was established to select, train, mentor, and provide
                corporate access to the youths of Africa
              </p>
            </div>

            <div className="p-5 border text-center group">
              <div className="mb-20">
                <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text mb-4">
                  Launch community-focused projects through SEO Cares.
                </h3>
              </div>
              <p className="text-gray-600">
                SEO Africa was established to select, train, mentor, and provide
                corporate access to the youths of Africa, and ultimately
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
                To empower African youths by providing them with the skills,
                mentorship, and global access needed to succeed in today's
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
