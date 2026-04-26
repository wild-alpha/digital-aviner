"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FiChevronDown, FiPhoneCall, FiX } from "react-icons/fi";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaPinterestP,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const navLinks = [
  { title: "WHAT WE DO", path: "/what-we-do" },
  { title: "WHO WE HELP", path: "/who-we-help" },
  { title: "WHO WE ARE", path: "/who-we-are" },
  { title: "HOW WE DELIVER", path: "/how-we-deliver" },
  { title: "JOIN DIGITAL AVINER", path: "/join-us" },
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

  const lastScrollY = useRef(0);

  useEffect(() => {
    setHasMounted(true);
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
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.path}
                  className="flex items-center gap-2 uppercase transition hover:opacity-80"
                >
                  <span>{link.title}</span>
                  <FiChevronDown className="text-[0.8rem]" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 md:flex">
            <div className="flex items-center gap-2 whitespace-nowrap text-xs text-white">
              <span className="flex h-5 w-5 items-center justify-center text-[10px]">
                <FiPhoneCall />
              </span>
              <span className="tracking-wide">+971 58 807 5603</span>
            </div>

            <div className="flex items-center gap-2 whitespace-nowrap text-xs text-white">
              <FaWhatsapp className="text-base" />
              <span className="tracking-wide">+971 58 807 5603</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-white">
              <Link href="#" className="transition hover:opacity-80">
                <FaLinkedinIn />
              </Link>
              <Link href="#" className="transition hover:opacity-80">
                <FaPinterestP />
              </Link>
              <Link href="#" className="transition hover:opacity-80">
                <FaInstagram />
              </Link>
              <Link href="#" className="transition hover:opacity-80">
                <FaFacebookF />
              </Link>
              <Link href="#" className="transition hover:opacity-80">
                <FaTiktok />
              </Link>
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

                    <div className="mt-10 flex items-center justify-center gap-6 text-xl text-white/90">
                      <a href="#" aria-label="LinkedIn" className="transition hover:opacity-80">
                        <FaLinkedinIn />
                      </a>
                      <a href="#" aria-label="Pinterest" className="transition hover:opacity-80">
                        <FaPinterestP />
                      </a>
                      <a href="#" aria-label="Instagram" className="transition hover:opacity-80">
                        <FaInstagram />
                      </a>
                      <a href="#" aria-label="Facebook" className="transition hover:opacity-80">
                        <FaFacebookF />
                      </a>
                      <a href="#" aria-label="TikTok" className="transition hover:opacity-80">
                        <FaTiktok />
                      </a>
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