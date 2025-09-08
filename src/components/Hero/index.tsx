"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center text-base-content relative">
      {/* Background image with grayscale filter */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/Images/gymBg1.png)",
          //backgroundImage: "url(/Images/gymBg2.png)",
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
        <motion.h1
          className="text-6xl md:text-[180px] font-black leading-[0.8] tracking-tight mb-4 md:mb-8 drop-shadow-2xl text-base-content"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "linear",
            delay: 0.1,
          }}
        >
          <span className="flex flex-col">
            <span className="text-primary text-2xl  tracking-widest">
              WELCOME TO
            </span>
          </span>
          JOURNEY
        </motion.h1>

        <motion.h1
          className="text-6xl md:text-[180px] font-black leading-[0.8] tracking-tight mb-12 md:mb-16 drop-shadow-2xl text-base-content"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "linear",
            delay: 0.2,
          }}
        >
          <span className="text-primary text-2xl  tracking-widest">TO</span>
          FITNESS
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl font-light tracking-[0.2em] text-base-content/70 uppercase drop-shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.5,
          }}
        >
          {/* BUILDING <span className="font-semibold">BETTER</span> TONTOS LEGS{" "}
          <span className="font-semibold">CARAPIX IS</span> BEST. */}
          {/* <span className="text-red-500 text-2xl  tracking-widest">
            FOR HIRE
          </span> */}
        </motion.p>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 1.0,
        }}
      >
        {/* Mouse icon */}
        <div className="mb-2">
          <svg
            width="24"
            height="36"
            viewBox="0 0 24 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-base-content"
          >
            <rect
              x="1"
              y="1"
              width="22"
              height="34"
              rx="11"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <motion.rect
              x="10"
              y="8"
              width="4"
              height="8"
              rx="2"
              fill="currentColor"
              animate={{ y: [8, 12, 8] }}
              // transition={{
              //   duration: 1.5,
              //   repeat: Infinity,
              //   ease: "easeInOut",
              // }}
            />
          </svg>
        </div>

        {/* Scroll down text */}
        <span className="text-base-content text-sm font-medium tracking-wide uppercase">
          Scroll down
        </span>
      </motion.div>
    </section>
  );
}
