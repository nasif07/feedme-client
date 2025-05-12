"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface faqI {
  question: string;
  answer: string;
}

const faqs: faqI[] = [
  {
    question: "How does the meal ordering process work?",
    answer:
      "After browsing through our menu, you can select your favorite meals, customize them if needed, and proceed to checkout. We'll deliver your meals right to your door.",
  },
  {
    question: "Are there vegetarian options available?",
    answer:
      'Yes, we offer a variety of vegetarian meals. You can find them in the "Vegetarian" category on our menu page.',
  },
  {
    question: "Can I cancel my order after placing it?",
    answer:
      "Once an order is confirmed, we begin preparing it immediately. Unfortunately, we can't cancel the order after it's been confirmed, but please reach out to us for any special requests.",
  },
  {
    question: "Do you offer discounts or promotions?",
    answer:
      "Yes, we offer discounts and special promotions regularly. Be sure to check our website or subscribe to our newsletter for the latest offers.",
  },
  {
    question: "What areas do you deliver to?",
    answer:
      "We currently deliver to several areas. You can check the availability of delivery for your location during checkout.",
  },
];

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Toggle FAQ item expansion
  const toggleFAQ = (index: number | null) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <div className="container my-10">
      <div className="mb-10 flex flex-col items-center gap-4">
        <h3 className="text-4xl font-medium">Frequently Asked Questions</h3>
        <div className="bg-feed-jungle h-1.5 w-30 rounded-full" />
      </div>

      <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
        {/* FAQ Section */}
        <div className="w-full flex-1 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = expandedIndex === index;
            return (
              <div
                key={index}
                className="rounded-lg border bg-white p-6 shadow-sm transition-all duration-300"
              >
                <div
                  onClick={() => toggleFAQ(index)}
                  className="flex cursor-pointer items-center justify-between"
                >
                  <h3 className="text-xl font-semibold text-gray-700">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "mt-2 max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner Image */}
        <div className="hidden flex-1 justify-end lg:flex">
          <Image
            src="/home/banner/faq-banner.webp"
            alt="banner"
            width={400}
            height={500}
            className="w-4/5 rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
