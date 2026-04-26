"use client";

import Link from "next/link";

const HeroSection = ({
  className = "",
  videoSrcMp4 = "/videos/hero.mp4",
  posterSrc,
  heading = "Building at the Speed of AI",
  subheading =
    "We help companies across North America, Middle East, Africa and Asia Pacific with technological development",
  ctaLabel = "Get in Touch",
  ctaHref = "/contact",
}) => {
  return (
    <section
      className={`relative isolate w-full min-h-[100svh] overflow-hidden bg-black ${className}`}
      aria-label="Hero section"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={posterSrc}
      >
        <source src={videoSrcMp4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 z-10 bg-black/25" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/25 via-transparent to-black/55" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-16 pt-24 sm:px-8 sm:pt-28 md:pt-32">
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
              className="inline-flex items-center justify-center rounded-full bg-[#33C7C2] px-10 py-4 text-base font-semibold text-white shadow-lg transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/60"
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