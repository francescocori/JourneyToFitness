"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  description2: string;
  description3?: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Private Lessons",
    subtitle: "BUILD POWER",
    description: "Experience one-on-one training tailored to your goals.",
    description2:
      "Every session is customized to push your limits, improve technique, and ensure steady progress while keeping you motivated and confident in your journey toward your dream body.",
    image: "/Images/training.webp",
  },
  {
    id: 2,
    title: "Online Lessons",
    subtitle: "PUSH LIMITS",
    description:
      "Train from anywhere with live, interactive sessions designed to fit your schedule.",
    description2:
      "Receive expert guidance, real-time feedback, and structured workouts that keep you accountable, energized, and consistently progressing toward your fitness goals.",
    image: "/Images/online2.webp",
  },
  {
    id: 3,
    title: "Saturday Bootcamp",
    subtitle: "FIND HARMONY",
    description:
      "Join our high-energy outdoor sessions to challenge your body and mind.",
    description2:
      "Build strength, endurance, and agility in a fun, motivating group environment while enjoying fresh air and camaraderie, making fitness social, dynamic, and exciting every weekend.",
    image: "/Images/bootcamp.webp",
  },
  {
    id: 4,
    title: "Nutritional Plans",
    subtitle: "MASTER TRAINER",
    description:
      "Receive personalized meal guidance and practical nutrition tips to fuel your workouts, enhance recovery, and optimize performance.",
    description2:
      "Learn how to eat for your goals, maintain energy, and make sustainable changes that complement your fitness journey effectively.",
    image: "/Images/diet.webp",
  },
];

export default function SplitScreen() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate how much of the component has been scrolled through
      const scrolled = Math.max(0, -rect.top);
      const totalScrollDistance = containerHeight - windowHeight;
      const progress = Math.min(1, scrolled / totalScrollDistance);

      setScrollProgress(progress);

      // Calculate current slide based on scroll progress
      const slideIndex = Math.floor(progress * slides.length);
      const clampedIndex = Math.min(slides.length - 1, Math.max(0, slideIndex));
      setCurrentSlide(clampedIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-base"
      style={{ height: `${slides.length * 100}vh` }}
    >
      {/* Fixed viewport that shows current slide */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto items-start h-full">
            {/* Text Content - 2/5 width on desktop */}
            <div className="lg:w-2/5 bg-base flex items-start justify-start mt-10   relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-base-content max-w-lg text-left mt-[3rem] mr-[3rem]"
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-4xl lg:text-5xl leading-tight text-primary mb-10"
                  >
                    {slides[currentSlide].title}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    //className="text-sm sm:text-base lg:text-lg text-base-content/70 leading-relaxed"
                    className="text-lg text-base-content/70 max-w-lg  lg:text-left mx-auto lg:mx-0 leading-relaxed"
                  >
                    {slides[currentSlide].description}
                    <span className="mt-4 block">
                      {slides[currentSlide].description2}
                    </span>
                    {/* <span className="mt-4 block">
                      {slides[currentSlide].description3}
                    </span> */}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mt-4 lg:mt-8"
                  ></motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Image - Full width with proper spacing */}
            <div className="lg:hidden w-full h-[40vh] absolute bottom-0 left-0 right-0 px-4 pb-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full h-full rounded-2xl overflow-hidden"
                >
                  <motion.img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 8, ease: "linear" }}
                    style={{
                      filter: "brightness(0.8) contrast(1.1)",
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Desktop Image Content - 3/5 width on desktop */}
            <div className="hidden lg:block lg:w-3/5 h-auto absolute overflow-hidden bg-base flex lg:justify-end bottom-0 lg:right-[5%] 2xl:right-[3%]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-[90%] h-[70%] rounded-2xl ml-[10%]"
                >
                  <div className="flex items-center justify-center h-full ml-8 xl:ml-19.5 rounded-2xl overflow-hidden">
                    <motion.img
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 8, ease: "linear" }}
                      style={{
                        filter: "brightness(0.8) contrast(1.1)",
                      }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Slide Progress Indicator */}
        <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-2 lg:space-x-3">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                  i === currentSlide
                    ? "bg-primary scale-125"
                    : "bg-base-content/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-20">
          <div className="w-0.5 lg:w-1 h-20 lg:h-32 bg-base-content/20 rounded-full overflow-hidden">
            <motion.div
              className="w-full bg-primary rounded-full"
              initial={{ height: 0 }}
              animate={{ height: `${scrollProgress * 100}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
