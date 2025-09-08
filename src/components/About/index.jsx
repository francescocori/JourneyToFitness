"use client";

import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-base flex items-center px-4 lg:pl-10">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div className="relative">
            <div className="relative overflow-hidden ">
              <img
                src="/Images/carlo.png"
                //src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="carlo"
                className="w-full h-[300px] sm:h-[400px] lg:h-[600px] xl:h-[700px] object-cover"
              />

              {/* Subtle overlay for consistency */}
              <div className="absolute inset-0 bg-base-300/10" />

              {/* Decorative element */}
              {/* <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20 blur-xl" /> */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-base-content/30 rounded-full opacity-30 blur-lg" />
            </div>
          </div>

          <div className="text-base-content space-y-6">
            <h2 className="text-4xl lg:text-6xl leading-tight text-center lg:text-left">
              Meet Carlo
            </h2>

            <p className="text-lg text-base-content/70 max-w-lg text-center lg:text-left mx-auto lg:mx-0 leading-relaxed">
              Hi, my name is Carlo and I'm a personal trainer with 15 years of
              experience. I really know how to get you fit, hahaha. In my spare
              time, I like to believe that dinosaurs still exist—and honestly, I
              actually believe in them. My friends say I'm a bit tonto (and
              maybe they're right—I mean, just look at the picture, haha), but
              that's not true, because I haven't felt anything like this since
              the time of Daniela.
            </p>

            <div className="pt-4 text-center lg:text-left">
              <button className="btn btn-primary rounded-full px-6 py-3 text-base font-medium">
                BOOK A FREE CALL
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
