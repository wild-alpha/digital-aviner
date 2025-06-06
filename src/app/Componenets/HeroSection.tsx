"use client";

import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px]">
    
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.webp')" }}
    >
    </div>

    <div className="absolute top-0 left-0 w-1/2 h-full px-2 bg-opacity-50 flex items-center justify-center">
      <div className="text-start sm:ml-2.5 md:ml-10 lg:ml-20 text-white">
        <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
        Creative<span className="text-blue-500"> challenge </span><br /> are our passion
        </h1>
        <p className="text-sm lg:text-xl xl-text-2xl text-left">
        Central Kitchen Carnistore, is now open! We're thrilled to announce that
        we have played a key role in designing Carnistore Interior Design Dubai.
        We are known
        </p>
        {/* Button Group with Gap and Responsiveness */}
<div className="flex flex-wrap gap-4 mt-10">
  {/* Gradient Filled Button */}
  <a href="/get-started">
    <button className="cursor-pointer px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg rounded-md font-semibold text-white bg-orange-500 hover:brightness-110 transition">
      Get A Started
    </button>
  </a>

  {/* Gradient Border Button */}
  <a href="/our-projects">
    <button className="cursor-pointer px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg rounded-md font-semibold text-blue bg-transparent border-2 border-orange-500 hover:brightness-110 transition relative overflow-hidden">
      Our Project
    </button>
  </a>
</div>



      </div>
    </div>
  </section>
);
};

export default HeroSection;
