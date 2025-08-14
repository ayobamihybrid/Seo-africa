import { useState } from "react";

interface FAQSectionProps {
  faqPage?: boolean;
}

const FAQSection = ({ faqPage = false }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Absolutely! You can upgrade or downgrade your plan at any time. Changes to your plan will be reflected in your next billing cycle, and we'll prorate any differences.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your subscription at any time. Your account will remain active until the end of your current billing period. No cancellation fees or long-term contracts required.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can add custom information to your invoices including company details, tax information, purchase order numbers, and any other relevant billing information through your account settings.",
    },
    {
      question: "How does billing work?",
      answer:
        "We offer monthly and annual billing options. You'll be charged automatically based on your selected plan. Annual plans come with a discount, and you can view all billing history in your account dashboard.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "You can update your account email in your profile settings. For security purposes, you'll need to verify the new email address before the change takes effect. Contact support if you need assistance.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {!faqPage && (
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know about SEO Africa.{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 underline font-medium"
            >
              More FAQs here
            </a>
          </p>
        </div>
      )}

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
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
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
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
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
