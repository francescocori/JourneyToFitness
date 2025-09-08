"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const heroText = "WELCOME TO YOUR FITNESS JOURNEY";
  const subText =
    "Transform your body, strengthen your mind, and discover your potential through personalized training programs designed to help you achieve your goals.";

  const [displayedHeroText, setDisplayedHeroText] = useState("");
  const [displayedSubText, setDisplayedSubText] = useState("");
  const [heroIndex, setHeroIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [showHeroCursor, setShowHeroCursor] = useState(true);
  const [showSubCursor, setShowSubCursor] = useState(false);
  const [heroComplete, setHeroComplete] = useState(false);

  // Hero text typing effect
  useEffect(() => {
    if (heroIndex < heroText.length) {
      const timeout = setTimeout(() => {
        setDisplayedHeroText((prev) => prev + heroText[heroIndex]);
        setHeroIndex((prev) => prev + 1);
      }, 100); // 100ms between characters for dramatic effect

      return () => clearTimeout(timeout);
    } else if (!heroComplete) {
      setHeroComplete(true);
      setShowHeroCursor(false);
      setShowSubCursor(true);
      // Start sub text after a brief pause
      setTimeout(() => {
        setSubIndex(0);
      }, 500);
    }
  }, [heroIndex, heroText, heroComplete]);

  // Sub text typing effect
  useEffect(() => {
    if (heroComplete && subIndex < subText.length) {
      const timeout = setTimeout(() => {
        setDisplayedSubText((prev) => prev + subText[subIndex]);
        setSubIndex((prev) => prev + 1);
      }, 30); // 30ms between characters for faster sub text

      return () => clearTimeout(timeout);
    } else if (subIndex >= subText.length) {
      // Hide cursor after typing is complete
      setTimeout(() => setShowSubCursor(false), 1000);
    }
  }, [subIndex, subText, heroComplete]);

  // Blinking cursor effects
  useEffect(() => {
    const heroCursorInterval = setInterval(() => {
      if (!heroComplete) {
        setShowHeroCursor((prev) => !prev);
      }
    }, 500);

    return () => clearInterval(heroCursorInterval);
  }, [heroComplete]);

  useEffect(() => {
    const subCursorInterval = setInterval(() => {
      if (heroComplete && subIndex < subText.length) {
        setShowSubCursor((prev) => !prev);
      }
    }, 500);

    return () => clearInterval(subCursorInterval);
  }, [heroComplete, subIndex, subText.length]);

  return (
    <section className="w-full min-h-screen flex items-center justify-center text-base-content relative">
      {/* Background image with grayscale filter */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/Images/gymBg1.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "grayscale(100%) contrast(1.1) brightness(0.8)",
          zIndex: 1,
        }}
      ></div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-base-300/50 z-10"></div>

      {/* Text content with highest z-index */}
      <div className="text-center px-6 max-w-7xl mx-auto relative z-20">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[120px] font-black leading-[0.8] tracking-tight mb-8 md:mb-12 drop-shadow-2xl text-base-content min-h-[120px] md:min-h-[200px]">
          {displayedHeroText}
          {!heroComplete && showHeroCursor && (
            <span className="text-primary animate-pulse">|</span>
          )}
        </h1>

        {heroComplete && (
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-base-content/70 max-w-4xl mx-auto drop-shadow-lg">
            {displayedSubText}
            {subIndex < subText.length && showSubCursor && (
              <span className="text-primary animate-pulse">|</span>
            )}
          </p>
        )}

        {subIndex >= subText.length && (
          <div className="mt-8 md:mt-12">
            <button className="btn btn-primary px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl drop-shadow-lg">
              START YOUR JOURNEY
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
