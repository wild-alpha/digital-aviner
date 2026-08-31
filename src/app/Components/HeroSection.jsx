"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback } from "react";

/* Matches the <nav aria-label="Primary"> in Navbar.jsx, so the CTA
   can offset its scroll by the real, current navbar height without
   the two components needing to share state. */
const NAV_SELECTOR = 'nav[aria-label="Primary"]';
const FALLBACK_NAV_HEIGHT = 80;

const HeroSection = ({
  className = "",
  imageSrc = "/images/ai-agents.webp",
  heading = (
    <>
      <span className="text-[#33C7C2]">Agentic AI</span> Marketing Agency
      Human Strategy, Autonomous Execution
    </>
  ),
  subheading =
    "We help companies across UAE, UK, Australia, USA and Canada with technological development",
  ctaLabel = "Get in Touch",
  ctaHref = "#footer",
}) => {
  // Only same-page anchors ("#footer") get the custom scroll — any
  // other href (a real route, an external link, etc.) behaves like
  // a normal Link.
  const isHashLink =
    typeof ctaHref === "string" && ctaHref.startsWith("#");

  const handleCtaClick = useCallback(
    (e) => {
      if (!isHashLink) return;

      // Respect middle-click / cmd-click / ctrl-click "open in new tab".
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      const targetId = ctaHref.slice(1);
      const el = document.getElementById(targetId);

      if (!el) return;

      e.preventDefault();

      const nav = document.querySelector(NAV_SELECTOR);
      const navHeight = nav
        ? nav.offsetHeight
        : FALLBACK_NAV_HEIGHT;

      const top =
        el.getBoundingClientRect().top +
        window.scrollY -
        navHeight -
        8;

      window.scrollTo({
        top: Math.max(top, 0),
        behavior: "smooth",
      });

      window.history.replaceState(null, "", `#${targetId}`);
    },
    [ctaHref, isHashLink]
  );

  return (
    <section
      className={`relative isolate w-full min-h-[75svh] overflow-hidden bg-black md:min-h-[100svh] ${className}`}
      aria-label="Hero section"
    >
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover"
      />

      {/* Dark Overlay Above Image */}
      <div className="absolute inset-0 z-10 bg-black/40" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-black/10 to-black/60" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex min-h-[75svh] max-w-7xl items-center px-5 pb-12 pt-24 sm:px-8 md:min-h-[100svh] md:pb-16 md:pt-32">
        <div className="max-w-3xl">
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            {heading}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
            {subheading}
          </p>

          <div className="mt-8">
            <Link
              href={ctaHref}
              onClick={handleCtaClick}
              className="
                inline-flex items-center justify-center
                rounded-full
                border border-white/15
                bg-white/10
                px-10 py-4
                text-base font-semibold text-white
                backdrop-blur-[3px]
                backdrop-saturate-75
                shadow-[0_6px_24px_rgba(2,6,23,0.18)]
                transition-all duration-300
                hover:bg-white/15
                hover:border-white/25
                focus:outline-none
                focus:ring-2
                focus:ring-white/40
              "
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;