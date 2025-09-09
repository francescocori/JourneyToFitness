"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Hero3() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const textParts = [
    // { text: "Welcome to your", color: "text-base-content" },
    // { text: "Journey to Fitness", color: "text-base-content" },
    { text: "Flexible workouts", color: "text-base-content" },
    { text: "tailored to your routine", color: "text-base-content" },
    // { text: "", color: "text-base-content" },
  ];
  // Flexible workouts and nutrition tailored to your routine
  const fullText = textParts.map((part) => part.text).join("");

  // Function to render typed text with colors
  const renderTypedText = () => {
    let currentLength = 0;
    const elements = [];

    for (let i = 0; i < textParts.length; i++) {
      const part = textParts[i];
      const partLength = part.text.length;
      const endLength = currentLength + partLength;

      if (currentIndex >= currentLength) {
        const visibleLength = Math.min(
          currentIndex - currentLength,
          partLength
        );
        if (visibleLength > 0) {
          elements.push(
            <span key={i} className={part.color}>
              {part.text.substring(0, visibleLength)}
            </span>
          );
        }

        // Add line break after each part (except the last one)
        if (i < textParts.length - 1 && currentIndex >= endLength) {
          elements.push(<br key={`br-${i}`} />);
        }
      }

      currentLength = endLength;
    }

    return elements;
  };

  // Typewriter effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 80); // Slower typing speed

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const element = imageRef.current;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate scroll progress (0 to 1)
        const scrollProgress = Math.max(
          0,
          Math.min(1, (windowHeight - rect.top) / windowHeight)
        );

        // Scale from 1.2 to 1.0 based on scroll progress
        const scale = 1.2 - scrollProgress * 0.2;

        // Apply transform
        element.style.transform = `scale(${scale})`;
        element.style.opacity = `${Math.max(0.3, scrollProgress)}`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-shopify-hero">
      {/* Fixed WhatsApp Button - Mobile Only */}
      <a
        href="https://wa.me/447778628831?text=Lo%20pompi?"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-4 right-4 z-50 flex items-center gap-3  md:hidden"
      >
        <div className="rounded-full flex items-center justify-center">
          <Image
            src="/Images/whatsapp.png"
            alt="WhatsApp"
            width={50}
            height={50}
            className="w-10 h-10"
          />
        </div>
      </a>

      {/* Hero Section */}
      <div className="hero h-[70vh] flex items-center justify-center relative z-10 container mx-auto px-4">
        <div className="hero-content text-center max-w-3xl">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl  leading-tight">
              {renderTypedText()}
              <span className="inline-block w-0.5 h-12 bg-primary animate-pulse ml-1"></span>
            </h1>

            <p className="text-lg text-base-content/70 max-w-xl mx-auto leading-relaxed">
              {/* Flexible workouts and nutrition guidance that fit seamlessly into
              your daily routine. */}
              Welcome to your
              <span className="font-semibold"> Journey to Fitness </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button className="btn btn-primary rounded-full px-6 py-3 text-base font-medium w-full sm:w-auto">
                <a
                  href="https://wa.me/447778628831?text=Lo%20pompi?"
                  target="_blank"
                  rel="noopener noreferrer"
                  //className="font-founders mt-4 btn  border-brand-goldDark font-medium shadow-none"
                >
                  BOOK A FREE CALL
                </a>
              </button>
            </div>

            {/* Scroll Down Indicator */}
            <div className="flex flex-col items-center pt-8">
              <span className="text-sm text-base-content/60 mb-2">
                Scroll down
              </span>
              <div className="animate-bounce">
                <svg
                  className="w-5 h-5 text-base-content/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Large Device Mockups Section */}
      <div
        className="min-h-screen relative overflow-hidden"
        style={{ perspective: "1000px" }}
      >
        <div className="absolute inset-0 flex items-center justify-center mx-[20px]">
          <Image
            ref={imageRef as React.RefObject<HTMLImageElement>}
            src="/Images/gymBg1.png"
            alt="Gym interior"
            width={800}
            height={600}
            className="w-full h-[80%] object-cover transition-all duration-300 ease-out rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
