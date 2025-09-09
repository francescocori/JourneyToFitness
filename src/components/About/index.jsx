"use client";

import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-base flex items-center px-4 lg:pl-10 pb-4">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-center">
          <div className="relative col-span-1 lg:col-span-3">
            <div className="relative overflow-hidden ">
              <img
                src="/Images/carlo.png"
                alt="carlo"
                className="w-full h-[350px] sm:h-[450px] lg:h-[600px] xl:h-[700px] object-cover "
              />

              {/* Subtle overlay for consistency */}
              <div className="absolute inset-0 bg-base-300/10" />

              <div className="absolute -top-4 -left-4 w-16 h-16 bg-base-content/30 rounded-full opacity-30 blur-lg" />
            </div>
          </div>

          <div className="text-base-content space-y-6 col-span-1 lg:col-span-2">
            <h2 className="text-4xl lg:text-5xl leading-tight text-center lg:text-left text-primary">
              Meet Carlo
            </h2>

            <p className="text-lg text-base-content/70 max-w-lg text-center lg:text-left mx-auto lg:mx-0 leading-relaxed">
              Hi, my name is Carlo and I'm a personal trainer with 15 years of
              experience. I really know how to get you fit.
            </p>
            <p className="text-lg text-base-content/70 max-w-lg text-center lg:text-left mx-auto lg:mx-0 leading-relaxed">
              In my spare time, I like to believe that dinosaurs still exist—and
              honestly, I actually believe in them.
            </p>
            <p className="text-lg text-base-content/70 max-w-lg text-center lg:text-left mx-auto lg:mx-0 leading-relaxed">
              My friends say I'm a bit tonto, but that's not true, because I
              haven't felt anything like this since the time of Daniela.
            </p>
            <div className="pt-4 text-center lg:text-left">
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
          </div>
        </div>
      </div>
    </div>
  );
}
