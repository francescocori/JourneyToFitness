"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Private Lessons",
    subtitle: "BUILD POWER",
    description:
      "Transform your body with our comprehensive strength training programs designed to build lean muscle and increase your power.Transform your body with our comprehensive strength training programs designed to build lean muscle and increase your power.",
    image:
      "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  },
  {
    id: 2,
    title: "Online Lessons",
    subtitle: "PUSH LIMITS",
    description:
      "Push your cardiovascular limits with high-intensity training that builds stamina and mental toughness.Push your cardiovascular limits with high-intensity training that builds stamina and mental toughness.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  },
  {
    id: 3,
    title: "Group Bootcamp",
    subtitle: "FIND HARMONY",
    description:
      "Develop core stability and body awareness through functional movements and mindful training techniques.Develop core stability and body awareness through functional movements and mindful training techniques.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2320&q=80",
  },
  {
    id: 4,
    title: "Nutritional Plans",
    subtitle: "MASTER TRAINER",
    description:
      "Meet our lead trainer who will guide your fitness journey with personalized programs and expert guidance.Meet our lead trainer who will guide your fitness journey with personalized programs and expert guidance.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
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
            <div className="lg:w-2/5 bg-base flex items-start justify-start    relative z-10">
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
                    className="text-4xl lg:text-6xl leading-tight text-primary mb-4"
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

            {/* Image Content - 3/5 width on desktop */}
            <div className="w-full lg:w-3/5 h-[50vh] lg:h-auto absolute overflow-hidden bg-base flex lg:justify-end bottom-0 lg:right-[5%] 2xl:right-[3%]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full lg:w-[90%] h-[160%] lg:h-[70%]"
                >
                  <div className="flex items-center justify-center h-full ml-8 xl:ml-19.5">
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
