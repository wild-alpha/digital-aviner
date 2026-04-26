"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const defaultGroups = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/who-we-are" },
      { label: "Careers", href: "/join-us" },
    ],
  },
  {
    title: "Industries We Serve",
    links: [
      { label: "Hospitality", href: "/industries/hospitality" },
      { label: "Retail", href: "/industries/retail" },
      { label: "Healthcare", href: "/industries/healthcare" },
    ],
  },
  {
    title: "Services and Solutions",
    links: [
      { label: "AI & ML", href: "/services/ai-ml" },
      { label: "Web Development", href: "/services/web" },
      { label: "Mobile Apps", href: "/services/mobile" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
];

const defaultLegal = [
  { label: "Terms and Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const defaultSocial = [
  { label: "Facebook", href: "#", external: true },
  { label: "LinkedIn", href: "#", external: true },
  { label: "Instagram", href: "#", external: true },
  { label: "X", href: "#", external: true },
];

function FooterAnchor({ link, className = "", onClick }) {
  const base =
    "inline-flex items-center transition focus:outline-none focus:ring-2 focus:ring-black/15 rounded";

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${className}`}
        onClick={onClick}
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} className={`${base} ${className}`} onClick={onClick}>
      {link.label}
    </Link>
  );
}

function useCloseOnOutside({
  isOpen,
  onClose,
  containerRef,
  ignoreSelectors = [],
}) {
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    const onDown = (e) => {
      const target = e.target;

      for (const sel of ignoreSelectors) {
        if (target.closest(sel)) return;
      }

      if (containerRef?.current && containerRef.current.contains(target)) return;

      onClose();
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onDown);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onDown);
    };
  }, [isOpen, onClose, containerRef, ignoreSelectors]);
}

const Footer = ({
  className = "",
  logoSrc = "/images/logo-f.png",
  logoAlt = "Logo",
  groups = defaultGroups,
  email = "sales@digitalaviner.com",
  legalLinks = defaultLegal,
  socialLinks = defaultSocial,
  showSideCta = true,
  sideCtaLabel = "Let's Talk Business",
  sideCtaHref = "/contact",
}) => {
  const [openDesktop, setOpenDesktop] = useState(null);
  const [openMobile, setOpenMobile] = useState(null);

  const desktopWrapRef = useRef(null);

  useCloseOnOutside({
    isOpen: !!openDesktop,
    onClose: () => setOpenDesktop(null),
    containerRef: desktopWrapRef,
  });

  useCloseOnOutside({
    isOpen: !!openMobile,
    onClose: () => setOpenMobile(null),
    ignoreSelectors: ["[data-footer-mobile-trigger]", "[data-footer-mobile-card]"],
  });

  const toggleDesktop = (title) =>
    setOpenDesktop((prev) => (prev === title ? null : title));

  const toggleMobile = (title) =>
    setOpenMobile((prev) => (prev === title ? null : title));

  return (
    <footer className={`relative overflow-hidden bg-black text-white ${className}`}>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] md:hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#33C7C2]/55 via-[#33C7C2]/18 to-transparent" />
        <div className="absolute -right-28 -bottom-28 h-[460px] w-[460px] rounded-full bg-[#33C7C2]/45 blur-[130px]" />
      </div>

      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="absolute inset-0 [background:linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_42%,rgba(51,199,194,0.42)_100%)]" />
        <div className="absolute inset-0 opacity-80 [background:radial-gradient(980px_780px_at_88%_55%,rgba(51,199,194,0.62),rgba(0,0,0,0)_65%)]" />
        <div className="absolute -right-44 top-[-170px] h-[860px] w-[860px] rounded-full bg-[#33C7C2]/18 blur-[175px]" />
        <div className="absolute -right-24 bottom-[-340px] h-[840px] w-[840px] rounded-full bg-[#33C7C2]/16 blur-[185px]" />
      </div>

      {showSideCta && (
        <div className="absolute right-0 top-28 z-20">
          <Link
            href={sideCtaHref}
            className="inline-flex items-center justify-center rounded-l-2xl bg-[#33C7C2] px-4 py-3 text-sm font-semibold text-black shadow-lg transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/50"
            style={{ transform: "rotate(-90deg)", transformOrigin: "right top" }}
          >
            {sideCtaLabel}
          </Link>
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-14">
        <div className="flex items-start justify-between gap-8">
          <div className="flex w-full justify-center md:w-auto md:justify-start">
            <img src={logoSrc} alt={logoAlt} className="h-8 w-auto object-contain" />
          </div>

          <div
            ref={desktopWrapRef}
            className="hidden flex-1 items-start justify-end gap-12 md:flex"
          >
            {groups.map((g) => {
              const isOpen = openDesktop === g.title;

              return (
                <div key={g.title} className="relative">
                  <button
                    type="button"
                    className="inline-flex items-center gap-3 text-base font-semibold text-white/95 transition hover:text-white"
                    onClick={() => toggleDesktop(g.title)}
                    aria-expanded={isOpen}
                  >
                    {g.title}
                    <FiChevronDown
                      className={`text-[#33C7C2] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`absolute left-0 top-full mt-5 w-[240px] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen
                        ? "translate-y-0 opacity-100 pointer-events-auto"
                        : "-translate-y-2 opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="rounded-2xl bg-white p-4 shadow-2xl">
                      <ul className="space-y-1">
                        {g.links.map((l, idx) => (
                          <li key={l.label}>
                            <FooterAnchor
                              link={l}
                              onClick={() => setOpenDesktop(null)}
                              className={`w-full rounded-xl px-3 py-2 text-[17px] ${
                                idx === 0 ? "text-[#1E63FF]" : "text-black"
                              } hover:bg-black/5`}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 md:hidden">
          {groups.map((g) => {
            const isOpen = openMobile === g.title;

            return (
              <div key={g.title} className="relative">
                <button
                  type="button"
                  data-footer-mobile-trigger
                  className="flex items-center gap-2 py-5 text-left text-sm font-semibold text-white"
                  onClick={() => toggleMobile(g.title)}
                  aria-expanded={isOpen}
                >
                  {g.title}
                  <FiChevronDown
                    className={`text-[#33C7C2] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  data-footer-mobile-card
                  className={`absolute left-0 top-full mt-3 w-[220px] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen
                      ? "translate-y-0 opacity-100 pointer-events-auto"
                      : "-translate-y-2 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="rounded-2xl bg-white p-4 shadow-2xl">
                    <ul className="space-y-1">
                      {g.links.map((l, idx) => (
                        <li key={l.label}>
                          <FooterAnchor
                            link={l}
                            onClick={() => setOpenMobile(null)}
                            className={`w-full rounded-xl px-3 py-2 text-[17px] ${
                              idx === 0 ? "text-[#1E63FF]" : "text-black"
                            } hover:bg-black/5`}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <a
            href={`mailto:${email}`}
            className="rounded text-lg font-extrabold tracking-tight text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            {email}
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm text-white/80">
            {legalLinks.map((l) => (
              <FooterAnchor key={l.label} link={l} className="hover:text-white" />
            ))}
          </div>

          <div className="flex items-center justify-center gap-5 text-2xl text-white/90 md:justify-end">
            <a href={socialLinks[0]?.href || "#"} aria-label="Facebook" className="transition hover:opacity-80">
              <FaFacebookF />
            </a>
            <a href={socialLinks[1]?.href || "#"} aria-label="LinkedIn" className="transition hover:opacity-80">
              <FaLinkedinIn />
            </a>
            <a href={socialLinks[2]?.href || "#"} aria-label="Instagram" className="transition hover:opacity-80">
              <FaInstagram />
            </a>
            <a href={socialLinks[3]?.href || "#"} aria-label="X" className="transition hover:opacity-80">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;