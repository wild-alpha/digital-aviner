"use client";

import React, { useCallback } from "react";
import Link from "next/link";

/* Matches the <nav aria-label="Primary"> in Navbar.jsx, so any
   "#anchor" CTA here can offset its scroll by the real, current
   navbar height without needing to share state with that component. */
const NAV_SELECTOR = 'nav[aria-label="Primary"]';
const FALLBACK_NAV_HEIGHT = 80;

function isHashHref(href) {
  return typeof href === "string" && href.startsWith("#");
}

function scrollToHashTarget(targetId) {
  const el = document.getElementById(targetId);

  if (!el) return false;

  const nav = document.querySelector(NAV_SELECTOR);
  const navHeight = nav ? nav.offsetHeight : FALLBACK_NAV_HEIGHT;

  const top =
    el.getBoundingClientRect().top + window.scrollY - navHeight - 8;

  window.scrollTo({
    top: Math.max(top, 0),
    behavior: "smooth",
  });

  window.history.replaceState(null, "", `#${targetId}`);

  return true;
}

const defaultPartners = [
  { src: "/images/adobe-creative-cloud.webp", alt: "Salesforce" },
  { src: "/images/shopify.webp", alt: "Shopify Plus Partner" },
  { src: "/images/microsoft-365.webp", alt: "Microsoft Partner" },
];

const defaultCards = [
  {
    tag: "Case Study",
    title: "USA's Premium Real Estate Company Got 35% More Qualified Leads in 3 Months",
    image: "/images/real-estate.webp",
    href: "/case-studies/interior-design-revenue",
    size: "md",
  },
  {
    tag: "Blogs",
    title: "Custom Web Application Development: Everything You Need to Know",
    image: "/images/web-development-everything-you-need-to-know.webp",
    href: "/blog/custom-web-app-dev",
    size: "md",
  },
  {
    tag: "Blogs",
    title: "Trends of Mobile Design: What’s Next for Your Business?",
    image: "/images/trends-of-mobile-app-design.webp",
    href: "/blog/mobile-design-trends",
    size: "md",
  },
  {
    tag: "Blogs",
    title: "How Generative AI Is Transforming Business Operations",
    image: "/images/how-generative-ai-is-transforming-business-operations.webp",
    href: "/blog/genai-business-ops",
    size: "md",
  },
  {
    tag: "Case Study",
    title: "Dubai's Leading Restaurant Hospitality Company Drives 55% Growth",
    image: "/images/restaurant-hospitality-case-study.webp",
    href: "/case-studies/restaurant-hospitality-growth",
    size: "lg",
  },
  {
    tag: "Case Study",
    title: "USA's Exotic Limo Car Company Drives 40% Growth",
    image: "/images/limo.webp",
    href: "/case-studies/real-estate-growth",
    size: "md",
  },
];

const defaultStats = [
  { value: "130+", label: "Successful Projects" },
  { value: "5+", label: "Countries Supported" },
  { value: "10+", label: "Active Clients" },
  { value: "6+", label: "Years of Engagement Experience" },
];

export default function Features({
  className = "",
  partnersTitle = "Tools & Platforms We Work With",
  partners = defaultPartners,

  insightsEyebrow = "FEATURED INSIGHTS",
  insightsTitle = (
    <>
      Stories of our <span className="text-[#33C7C2]">transformations</span> across
      <br />
      Services and Industries
    </>
  ),
  insightsSub = "From Concept to Completion",
  insightsCtaLabel = "Explore More",
  insightsCtaHref = "#footer",
  insightCards = defaultCards,

  achievementsEyebrow = "PIONEERING TRUST AND INNOVATION",
  achievementsTitle = "Our Achievements",
  achievementsBody =
    "We take pride in empowering businesses worldwide with innovative solutions.\n\nDigital Aviner’s bring an unwavering commitment to excellence, backed by a global presence.",
  achievementsCtaLabel = "Get in Touch",
  achievementsCtaHref = "#footer",

  stats = defaultStats,

  showSideCta = true,
  sideCtaLabel = "Let's Talk Business",
  sideCtaHref = "/contact",
}) {
  // Only same-page anchors ("#footer") get the custom scroll — any
  // other href (a real route, an external link, etc.) behaves like
  // a normal Link.
  const handleHashLinkClick = useCallback((e, href) => {
    if (!isHashHref(href)) return;

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

    const scrolled = scrollToHashTarget(href.slice(1));

    if (scrolled) {
      e.preventDefault();
    }
  }, []);

  return (
    <section className={`relative overflow-hidden bg-black text-white ${className}`}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-70 [background:radial-gradient(900px_700px_at_82%_52%,rgba(51,199,194,0.35),rgba(0,0,0,0)_62%)]" />
        <div className="absolute -right-48 bottom-[-220px] h-[680px] w-[680px] rounded-full bg-[#33C7C2]/30 blur-[150px]" />
      </div>

      {showSideCta && (
        <div className="absolute right-0 top-[420px] z-20 hidden md:block">
          <Link
            href={sideCtaHref}
            className="inline-flex items-center justify-center rounded-l-2xl bg-[#33C7C2] px-4 py-3 text-sm font-semibold text-black shadow-lg transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/40"
            style={{ transform: "rotate(-90deg)", transformOrigin: "right top" }}
          >
            {sideCtaLabel}
          </Link>
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
        <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-4xl">
          {partnersTitle}
        </h2>

        <div className="mt-10 overflow-hidden border border-[#33C7C2]/60 bg-white md:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {partners.map((p, idx) => (
              <div
                key={`${p.alt}-${idx}`}
                className={`flex items-center justify-center bg-white px-8 py-10 ${
                  idx !== partners.length - 1
                    ? "border-b md:border-b-0 md:border-r"
                    : ""
                } border-[#33C7C2]/60`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  className="h-12 w-auto object-contain md:h-14"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:mt-20 md:grid-cols-[1.05fr_1.25fr] md:items-start">
          <div className="max-w-xl">
            <p className="text-[12px] tracking-[0.35em] text-[#33C7C2]">
              {insightsEyebrow}
            </p>

            <h3 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
              {insightsTitle}
            </h3>

            <p className="mt-4 text-lg text-white/85">{insightsSub}</p>

            <div className="mt-8">
              <Link
                href={insightsCtaHref}
                onClick={(e) => handleHashLinkClick(e, insightsCtaHref)}
                className="inline-flex items-center justify-center rounded-full bg-[#33C7C2] px-8 py-4 text-base font-semibold text-black transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                {insightsCtaLabel}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
              {insightCards.map((c, idx) => {
                const isTall = c.size === "lg";
                const isWide = c.size === "md" && idx === 0;

                return (
                  <Link
                    key={`${c.title}-${idx}`}
                    href={c.href}
                    className={`group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition hover:ring-white/25 ${
                      isTall ? "md:row-span-2" : ""
                    } ${isWide ? "md:col-span-1" : ""}`}
                  >
                    <div
                      className={`relative h-full w-full ${
                        isTall
                          ? "min-h-[260px] md:min-h-[380px]"
                          : "min-h-[170px] md:min-h-[190px]"
                      }`}
                    >
                      <img
                        src={c.image}
                        alt={c.title}
                        className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />

                      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/80" />

                      <div className="absolute left-4 top-4 text-sm font-semibold text-white/95">
                        {c.tag}
                      </div>

                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-xs leading-snug text-white/90 md:text-sm">
                          {c.title}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:mt-20 md:grid-cols-[1.15fr_1fr] md:items-start">
          <div>
            <p className="text-[12px] tracking-[0.35em] text-[#33C7C2]">
              {achievementsEyebrow}
            </p>

            <h3 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              {achievementsTitle}
            </h3>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-white/80 md:text-base">
              {achievementsBody.split("\n").map((line, i) =>
                line.trim() ? <p key={i}>{line}</p> : null
              )}
            </div>

            <div className="mt-8">
              <Link
                href={achievementsCtaHref}
                onClick={(e) => handleHashLinkClick(e, achievementsCtaHref)}
                className="inline-flex items-center justify-center rounded-full bg-[#33C7C2] px-8 py-4 text-base font-semibold text-black transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                {achievementsCtaLabel}
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 md:gap-12">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-extrabold text-[#33C7C2] md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-white/90 md:text-base">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}