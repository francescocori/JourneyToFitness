"use client";

import React, { useState, useRef, useEffect } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Question text goes here",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    question: "Question text goes here",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    question: "Question text goes here",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    question: "Question text goes here",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 5,
    question: "Question text goes here",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function Faq() {
  const [openItems, setOpenItems] = useState<number[]>([]); // All items start closed
  const faqRef = useRef<HTMLDivElement>(null);

  const toggleItem = (id: number) => {
    setOpenItems((prev) => {
      // If the clicked item is already open, close it
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      // If the clicked item is closed, open it and close all others
      return [id];
    });
  };

  const closeAllItems = () => {
    setOpenItems([]);
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Check if click is on a FAQ question (don't close if clicking on questions)
      const isFAQQuestion = target.closest("[data-faq-question]");

      if (!isFAQQuestion) {
        closeAllItems();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <section className="py-20 mt-10 bg-primary/10 mx-[20px] rounded-2xl">
      <div className="container mx-auto px-4">
        <div
          ref={faqRef}
          className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto"
        >
          {/* Left Column - Heading and Description */}
          <div className="lg:w-2/5">
            <h2 className="text-4xl lg:text-5xl leading-tight text-primary mb-6">
              Frequently
              <br />
              Asked
              <br />
              Questions
            </h2>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="lg:w-3/5">
            <div className="space-y-0">
              {faqData.map((item, index) => (
                <div key={item.id}>
                  <div
                    data-faq-question
                    className="py-6 cursor-pointer flex items-center justify-between transition-colors duration-200 hover:bg-base-200/50 rounded-lg px-2 -mx-2"
                    onClick={() => toggleItem(item.id)}
                  >
                    <h3 className="text-lg font-medium text-base-content">
                      {item.question}
                    </h3>
                    <div className="ml-4">
                      <svg
                        className={`w-5 h-5 text-base-content transition-transform duration-300 ease-in-out ${
                          openItems.includes(item.id) ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openItems.includes(item.id)
                        ? "max-h-96 opacity-100 pb-6"
                        : "max-h-0 opacity-0 pb-0"
                    }`}
                  >
                    <p className="text-base-content/70 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>

                  {index < faqData.length - 1 && (
                    <div className="border-t border-base-content/10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
