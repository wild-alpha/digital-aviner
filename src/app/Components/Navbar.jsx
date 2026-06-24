"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FiChevronDown, FiPhoneCall, FiX, FiGlobe } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { title: "WHAT WE DO", path: "/what-we-do" },
  { title: "WHO WE ARE", path: "/who-we-are" },
  { title: "HOW WE DELIVER", path: "/how-we-deliver" },
  { title: "JOIN DIGITAL AVINER", path: "/join-us" },
];

const capabilities = [
  { title: "Lead Generation", path: "/what-we-do/lead-generation" },
  { title: "Agentic AI", path: "/what-we-do/agentic-ai" },
  { title: "Generative AI", path: "/what-we-do/generative-ai" },
  { title: "AI Agents on Demand", path: "/what-we-do/ai-agents-on-demand" },
  { title: "Digital Marketing", path: "/what-we-do/digital-marketing" },
  { title: "Cloud Computing", path: "/what-we-do/cloud-computing" },
  { title: "SaaS", path: "/what-we-do/saas" },
  { title: "Mobile App Development", path: "/what-we-do/mobile-app-development" },
  { title: "Web Development", path: "/what-we-do/web-development" },
];

const industries = [
  { title: "Real Estate", path: "/industries/real-estate" },
  { title: "Healthcare", path: "/industries/healthcare" },
  { title: "E-commerce", path: "/industries/ecommerce" },
  { title: "Hospitality", path: "/industries/hospitality" },
  { title: "Education", path: "/industries/education" },
  { title: "Finance and Fintech", path: "/industries/finance-fintech" },
  { title: "Construction", path: "/industries/construction" },
  { title: "Retail", path: "/industries/retail" },
  { title: "Logistics", path: "/industries/logistics" },
  { title: "Professional Services", path: "/industries/professional-services" },
  { title: "Automotive", path: "/industries/automotive" },
  { title: "Travel and Tourism", path: "/industries/travel-tourism" },
];

const howWeDeliverLinks = [
  { title: "Blogs", path: "/blogs" },
  { title: "News", path: "/news" },
  { title: "Case Studies", path: "/case-studies" },
];

const countries = [
  { label: "UAE", path: "/" },
  { label: "United Kingdom", path: "/uk" },
  { label: "Australia", path: "/australia" },
  { label: "Canada", path: "/canada" },
  { label: "USA", path: "/usa" },
];

const BG_MS = 300;
const STEP_DELAY_MS = 80;
const NAVBAR_OFFSET = 72;

const Navbar = ({ className = "" }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [overlayMounted, setOverlayMounted] = useState(false);
  const [bgVisible, setBgVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const [selectedCountry, setSelectedCountry] = useState("UAE");
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false);
  const [howWeDeliverOpen, setHowWeDeliverOpen] = useState(false);

  const lastScrollY = useRef(0);
  const countryRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const howWeDeliverRef = useRef(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryRef.current && !countryRef.current.contains(event.target)) {
        setCountryDropdownOpen(false);
      }

      if (whatWeDoRef.current && !whatWeDoRef.current.contains(event.target)) {
        setWhatWeDoOpen(false);
      }

      if (
        howWeDeliverRef.current &&
        !howWeDeliverRef.current.contains(event.target)
      ) {
        setHowWeDeliverOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openMenu = () => {
    setOverlayMounted(true);

    requestAnimationFrame(() => {
      setBgVisible(true);
      window.setTimeout(() => setContentVisible(true), STEP_DELAY_MS);
    });
  };

  const closeMenu = () => {
    setContentVisible(false);

    window.setTimeout(() => setBgVisible(false), STEP_DELAY_MS);

    window.setTimeout(() => {
      setOverlayMounted(false);
    }, STEP_DELAY_MS + BG_MS);
  };

  const toggleMenu = () => {
    if (!overlayMounted) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && !overlayMounted) {
        setIsVisible(false);
        setWhatWeDoOpen(false);
        setHowWeDeliverOpen(false);
        setCountryDropdownOpen(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [overlayMounted]);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-[10000] bg-black transition-transform duration-300 ${
          isVisible || overlayMounted ? "translate-y-0" : "-translate-y-full"
        } ${className}`}
      >
        <div className="mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="group flex items-center">
            <div className="relative h-6 w-40 overflow-hidden">
              <img
                src="/images/logo-f.png"
                alt="Logo Final"
                className="h-full object-contain md:hidden"
              />

              <div className="relative hidden h-full w-full md:block">
                <img
                  src="/images/logo-i.png"
                  alt="Logo Initial"
                  className="absolute inset-y-0 left-0 h-full object-contain transition-opacity duration-500 group-hover:opacity-0"
                />

                <div className="pointer-events-none absolute inset-y-0 left-0 w-0 overflow-hidden transition-all duration-500 ease-out group-hover:w-full">
                  <img
                    src="/images/logo-f.png"
                    alt="Logo Final"
                    className="h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </Link>

          <ul className="hidden flex-1 items-center justify-center gap-6 text-[10px] text-white md:flex">
            {navLinks.map((link) => {
              const isWhatWeDo = link.title === "WHAT WE DO";
              const isHowWeDeliver = link.title === "HOW WE DELIVER";

              return (
                <li
                  key={link.title}
                  ref={
                    isWhatWeDo
                      ? whatWeDoRef
                      : isHowWeDeliver
                      ? howWeDeliverRef
                      : null
                  }
                  className="relative"
                >
                  {isWhatWeDo ? (
                    <button
                      type="button"
                      onClick={() => {
                        setWhatWeDoOpen((prev) => !prev);
                        setHowWeDeliverOpen(false);
                        setCountryDropdownOpen(false);
                      }}
                      className="flex items-center gap-2 uppercase transition hover:opacity-80"
                    >
                      <span>{link.title}</span>
                      <FiChevronDown
                        className={`text-[0.8rem] transition-transform duration-300 ${
                          whatWeDoOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : isHowWeDeliver ? (
                    <button
                      type="button"
                      onClick={() => {
                        setHowWeDeliverOpen((prev) => !prev);
                        setWhatWeDoOpen(false);
                        setCountryDropdownOpen(false);
                      }}
                      className="flex items-center gap-2 uppercase transition hover:opacity-80"
                    >
                      <span>{link.title}</span>
                      <FiChevronDown
                        className={`text-[0.8rem] transition-transform duration-300 ${
                          howWeDeliverOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.path}
                      className="flex items-center gap-2 uppercase transition hover:opacity-80"
                    >
                      <span>{link.title}</span>
                      <FiChevronDown className="text-[0.8rem]" />
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-4 md:flex">
            <div className="flex items-center gap-2 whitespace-nowrap text-xs text-white">
              <span className="flex h-5 w-5 items-center justify-center text-[10px]">
                <FiPhoneCall />
              </span>
              <span className="tracking-wide">+1 000 000 0000</span>
            </div>

            <div className="flex items-center gap-2 whitespace-nowrap text-xs text-white">
              <FaWhatsapp className="text-base" />
              <span className="tracking-wide">+1 000 000 0000</span>
            </div>

            <div ref={countryRef} className="relative">
              <button
                type="button"
                onClick={() => {
                  setCountryDropdownOpen((prev) => !prev);
                  setWhatWeDoOpen(false);
                  setHowWeDeliverOpen(false);
                }}
                className="flex items-center gap-2 whitespace-nowrap text-xs text-white transition hover:opacity-80"
                aria-label="Select country"
              >
                <FiGlobe className="text-base" />
                <span className="tracking-wide">{selectedCountry}</span>
                <FiChevronDown
                  className={`text-sm transition-transform duration-300 ${
                    countryDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {countryDropdownOpen && (
                <div className="absolute right-0 top-8 w-48 overflow-hidden rounded-md border border-white/10 bg-[#1f1f1f] shadow-xl">
                  {countries.map((country) => (
                    <Link
                      key={country.label}
                      href={country.path}
                      onClick={() => {
                        setSelectedCountry(country.label);
                        setCountryDropdownOpen(false);
                      }}
                      className={`block px-4 py-3 text-xs text-white transition hover:bg-white/10 ${
                        selectedCountry === country.label ? "bg-white/10" : ""
                      }`}
                    >
                      {country.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            aria-label={overlayMounted ? "Close menu" : "Open menu"}
            className="relative flex h-8 w-10 items-center justify-end md:hidden"
          >
            {overlayMounted ? (
              <FiX className="text-3xl text-white" />
            ) : (
              <span className="flex flex-col items-end gap-1.5">
                <span className="h-[2px] w-8 bg-white" />
                <span className="h-[2px] w-8 bg-white" />
                <span className="h-[2px] w-8 bg-white" />
              </span>
            )}
          </button>
        </div>

        {whatWeDoOpen && (
          <div className="hidden border-t border-white/10 bg-[#1f1f1f] px-4 py-12 text-white md:block">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-20">
              <div>
                <h3 className="mb-7 text-sm font-medium text-white/45">
                  Capabilities
                </h3>

                <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                  {capabilities.map((item) => (
                    <Link
                      key={item.title}
                      href={item.path}
                      onClick={() => setWhatWeDoOpen(false)}
                      className="text-[15px] leading-relaxed text-white/90 transition hover:text-white hover:underline"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-7 text-sm font-medium text-white/45">
                  Industries
                </h3>

                <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                  {industries.map((item) => (
                    <Link
                      key={item.title}
                      href={item.path}
                      onClick={() => setWhatWeDoOpen(false)}
                      className="text-[15px] leading-relaxed text-white/90 transition hover:text-white hover:underline"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {howWeDeliverOpen && (
          <div className="hidden border-t border-white/10 bg-[#1f1f1f] px-4 py-12 text-white md:block">
            <div className="mx-auto max-w-6xl">
              <h3 className="mb-7 text-sm font-medium text-white/45">
                How We Deliver
              </h3>

              <div className="grid max-w-2xl grid-cols-3 gap-x-16 gap-y-5">
                {howWeDeliverLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.path}
                    onClick={() => setHowWeDeliverOpen(false)}
                    className="text-[15px] leading-relaxed text-white/90 transition hover:text-white hover:underline"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {hasMounted &&
        overlayMounted &&
        createPortal(
          <div className="fixed inset-0 z-[9999] md:hidden">
            <div
              className={`absolute inset-0 bg-black transition-opacity duration-300 ease-out ${
                bgVisible ? "opacity-100" : "opacity-0"
              }`}
              onClick={closeMenu}
            />

            <div
              className="absolute bottom-0 left-0 right-0"
              style={{ top: NAVBAR_OFFSET }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  contentVisible ? "translate-y-0" : "-translate-y-full"
                }`}
              >
                <div
                  className={`h-full w-full transition-opacity delay-100 duration-300 ${
                    contentVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="px-6 pt-10">
                    <ul className="flex flex-col gap-10 text-white">
                      {navLinks.map((link) => (
                        <li key={link.title}>
                          <Link
                            href={link.path}
                            onClick={closeMenu}
                            className="flex items-center justify-between text-[16px] uppercase tracking-wide"
                          >
                            <span>{link.title}</span>
                            <FiChevronDown className="text-lg opacity-80" />
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-10 border-t border-white/10 pt-8">
                      <div className="mb-5 flex items-center gap-3 text-white">
                        <FiGlobe className="text-xl" />
                        <span className="text-[16px] font-medium uppercase tracking-wide">
                          Select Country
                        </span>
                      </div>

                      <div className="flex flex-col gap-4">
                        {countries.map((country) => (
                          <Link
                            key={country.label}
                            href={country.path}
                            onClick={() => {
                              setSelectedCountry(country.label);
                              closeMenu();
                            }}
                            className={`text-[15px] text-white/80 transition hover:text-white ${
                              selectedCountry === country.label
                                ? "text-white"
                                : ""
                            }`}
                          >
                            {country.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="mt-14 space-y-4">
                      <Link
                        href="/join-us"
                        onClick={closeMenu}
                        className="block w-full rounded-full bg-[#4FB9B3] py-4 text-center font-semibold text-white"
                      >
                        Explore Careers
                      </Link>

                      <Link
                        href="/contact"
                        onClick={closeMenu}
                        className="block w-full rounded-full border border-[#4FB9B3] py-4 text-center font-semibold text-[#4FB9B3]"
                      >
                        Let&apos;s Talk Business
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Navbar;