"use client";

import Image from "next/image";
import React from "react";


const AboutSection = () => {
  return (
    <section
  id="about-us"
  className="
    bg-[url('/images/bg-sec-3-mobile.webp')] 
    sm:bg-[url('/images/bg-sec-3.webp')] 
    bg-cover 
    bg-center 
    bg-no-repeat 
    text-white 
    overflow-hidden"
>
      {/* Top Intro Text */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 pt-6 text-center text-[12px] sm:text-base max-w-6xl mx-auto font-play">
        <p>
        Digital Aviner is an agentic AI marketing agency: marketing strategists paired with autonomous AI agents that run campaign execution in real time, for brands expanding across the UAE, Saudi Arabia, the US, UK, Canada, and Australia. Where a traditional agency reviews performance weekly and a software house sells you agent infrastructure without marketing judgment, Digital Aviner does both at once — a strategist sets the direction, and an AI agent keeps pursuing it every hour the campaign is live.</p>
      </div>



      {/* Wireframe and Content Section */}
      <div className="relative px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-4 md:py-12 bg-no-repeat bg-cover bg-[url('/images/mobile-wire.svg')] lg:bg-[url('/images/desktop-wire.svg')]">

        {/* Why Choose Digital Aviner */}
        <div className="text-center">
          <h2 className="text-[12px] sm:text-xl text-white tracking-widest font-conthrax py-0 md:py-3">
            WHY CHOOSE DIGITAL AVINER?
          </h2>
      <ul className="max-w-6xl text-left mx-auto mt-0 md:mt-4 text-[12px] sm:text-base py-2 md:py-3 font-play list-disc pl-5">
        <li className="py-2">
          Two service tracks: Digital Marketing (SEO, paid media, social & content, conversion optimization) and Agentic AI (autonomous marketing agents, conversational agents, automation, predictive analytics)
        </li>
        <li className="py-2">
          Campaigns are optimized continuously by AI agents, not reviewed on a weekly or monthly cycle.
        </li>
         <li className="py-2">
          Independent agency — not a software/IT staffing house, not a legacy creative-only agency.
        </li>
         <li className="py-2">
          Markets served: United Arab Emirates, Saudi Arabia, United States, United Kingdom, Canada, Australia.
        </li>
         <li className="py-2">
          Founded in 2025, with a team of 6 members, headquartered in Okara, Punjab, Pakistan.
        </li>
      </ul>
        </div>
                {/* CTA */}
        <div className="text-left">
          <h2 className="text-[12px] mt-6 sm:text-xl text-white tracking-widest font-conthrax">
            WHO WE HELP?
          </h2>
      <ul className="max-w-6xl text-left mx-auto mt-0 md:mt-4 text-[12px] sm:text-base font-play list-disc pl-5">
        <li className="py-2">
          Marketing or growth leads evaluating whether to bring AI agents into their marketing operations, not just their product.
        </li>
        <li className="py-2">
          Founders and CMOs frustrated with agencies that report results monthly instead of adjusting in real time.
        </li>
         <li className="py-2">
          Teams expanding into a new market — UAE, KSA, US, UK, Canada, or Australia — who need strategy and execution together, not just a platform.
        </li>
      </ul>
        </div>

        
      </div>
    </section>
  );
};

export default AboutSection;
