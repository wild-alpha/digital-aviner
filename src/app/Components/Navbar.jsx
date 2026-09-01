"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { createPortal } from "react-dom";
import {
  FiChevronDown,
  FiPhoneCall,
  FiX,
  FiArrowRight,
} from "react-icons/fi";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

/* ------------------------------------------------------------------
   CONTACT
------------------------------------------------------------------ */

const PHONE_E164 = "+923034668695";
const PHONE_DISPLAY = "+92 303 466 8695";

const WHATSAPP_MSG = encodeURIComponent(
  "Hi Digital Aviner — I'd like to discuss a project."
);

const WHATSAPP_URL = `https://wa.me/${PHONE_E164.replace(
  "+",
  ""
)}?text=${WHATSAPP_MSG}`;

/* ------------------------------------------------------------------
   SOCIAL LINKS
------------------------------------------------------------------ */

const SOCIAL_LINKS = {
  instagram: "https://instagram.com/YOUR_HANDLE",
  facebook: "https://facebook.com/YOUR_PAGE",
  linkedin: "https://linkedin.com/company/YOUR_COMPANY",
};

/* ------------------------------------------------------------------
   GLASS SURFACE
------------------------------------------------------------------ */

const GLASS =
  "bg-[#3b4657]/25 backdrop-blur-sm backdrop-saturate-50 " +
  "shadow-[0_8px_32px_rgba(2,6,23,0.28)]";

/* ------------------------------------------------------------------
   SERVICES
------------------------------------------------------------------ */

const services = [
  {
    title: "SEO & AI Search Visibility",
    path: "#",
  },
  {
    title: "Performance Marketing",
    path: "#",
  },
  {
    title: "Web Design & Development",
    path: "#",
  },
  {
    title: "Lead Generation",
    path: "#",
  },
  {
    title: "Agentic AI Marketing",
    path: "#",
  },
  {
    title: "AI Agents & Automation",
    path: "#",
  },
];

/* ------------------------------------------------------------------
   INDUSTRIES
------------------------------------------------------------------ */

const industries = [
  {
    title: "Interior Design & Fit-Out",
    path: "#",
  },
  {
    title: "Real Estate & Property",
    path: "#",
  },
  {
    title: "Hospitality & Restaurants",
    path: "#",
  },
  {
    title: "Retail & E-commerce",
    path: "#",
  },
  {
    title: "Construction & Architecture",
    path: "#",
  },
];

const insights = [
  {
    title: "Blog",
    path: "#",
  },
  {
    title: "Case Studies",
    path: "#",
  },
];

/* ------------------------------------------------------------------
   NAV STRUCTURE
------------------------------------------------------------------ */

const NAV = [
  {
    id: "services",
    title: "SERVICES",
    path: "#",
    columns: [
      {
        heading: "Capabilities",
        links: services,
      },
      {
        heading: "Industries",
        links: industries,
      },
    ],
    viewAll: {
      label: "View all services",
      path: "#",
    },
  },

  {
    id: "who",
    title: "WHO WE ARE",
    path: "",
  },

  {
    id: "insights",
    title: "INSIGHTS",
    path: "#",
    columns: [
      {
        heading: "Insights",
        links: insights,
      },
    ],
  },

  {
    id: "careers",
    title: "JOIN DIGITAL AVINER",
    path: "",
  },
];

/* ------------------------------------------------------------------
   SETTINGS
------------------------------------------------------------------ */

const BG_MS = 300;
const STEP_DELAY_MS = 80;
const HIDE_AFTER_PX = 120;
const SCROLL_DELTA_PX = 6;
const FOOTER_ID = "footer";

/* ------------------------------------------------------------------
   NAVBAR
------------------------------------------------------------------ */

const Navbar = ({ className = "" }) => {
  const [hasMounted, setHasMounted] = useState(false);

  const [overlayMounted, setOverlayMounted] = useState(false);
  const [bgVisible, setBgVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  const [isVisible, setIsVisible] = useState(true);

  const [openMenuId, setOpenMenuId] = useState(null);
  const [mobileOpenId, setMobileOpenId] = useState(null);

  const lastScrollY = useRef(0);
  const navRef = useRef(null);
  const navHeight = useRef(72);

  const pathname = usePathname();

  /* --------------------------------------------------------------
     Mounted
  -------------------------------------------------------------- */

  useEffect(() => {
    setHasMounted(true);
  }, []);

  /* --------------------------------------------------------------
     Measure navbar height
  -------------------------------------------------------------- */

  useEffect(() => {
    const measure = () => {
      if (navRef.current) {
        navHeight.current = navRef.current.offsetHeight;
      }
    };

    measure();

    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("resize", measure);
    };
  }, []);

  /* --------------------------------------------------------------
     Close desktop dropdown on outside click
  -------------------------------------------------------------- */

  useEffect(() => {
    if (!openMenuId) return;

    const onPointerDown = (e) => {
      if (
        navRef.current &&
        !navRef.current.contains(e.target)
      ) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener("mousedown", onPointerDown);

    return () => {
      document.removeEventListener(
        "mousedown",
        onPointerDown
      );
    };
  }, [openMenuId]);

  /* --------------------------------------------------------------
     MOBILE MENU OPEN
  -------------------------------------------------------------- */

  const openMenuOverlay = useCallback(() => {
    setOverlayMounted(true);

    requestAnimationFrame(() => {
      setBgVisible(true);

      window.setTimeout(() => {
        setContentVisible(true);
      }, STEP_DELAY_MS);
    });
  }, []);

  /* --------------------------------------------------------------
     MOBILE MENU CLOSE
  -------------------------------------------------------------- */

  const closeMenu = useCallback(() => {
    setContentVisible(false);
    setMobileOpenId(null);

    window.setTimeout(() => {
      setBgVisible(false);
    }, STEP_DELAY_MS);

    window.setTimeout(() => {
      setOverlayMounted(false);
    }, STEP_DELAY_MS + BG_MS);
  }, []);

  const toggleMenu = () => {
    if (overlayMounted) {
      closeMenu();
    } else {
      openMenuOverlay();
    }
  };

  /* --------------------------------------------------------------
     "LET'S TALK BUSINESS" -> SCROLL TO FOOTER

     The footer (Footer.jsx) renders <footer id="footer">. Rather
     than relying on the browser's default hash-jump (which lands
     the footer flush under this fixed navbar), we scroll to it
     manually and offset by the navbar's real measured height.
  -------------------------------------------------------------- */

  const scrollToFooter = useCallback((behavior = "smooth") => {
    const el = document.getElementById(FOOTER_ID);

    if (!el) return false;

    const top =
      el.getBoundingClientRect().top +
      window.scrollY -
      (navHeight.current || 72) -
      8;

    window.scrollTo({
      top: Math.max(top, 0),
      behavior,
    });

    return true;
  }, []);

  const handleTalkBusinessClick = useCallback(
    (e) => {
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

      if (overlayMounted) {
        closeMenu();
      }

      if (pathname !== "/") {
        // We're on another page — let the Link navigate to
        // "/#footer" normally; the effect below scrolls once
        // we land on the homepage.
        return;
      }

      // Already on the homepage — skip the full navigation and
      // just smooth-scroll straight to the footer.
      e.preventDefault();

      scrollToFooter("smooth");

      window.history.replaceState(null, "", `/#${FOOTER_ID}`);
    },
    [pathname, overlayMounted, closeMenu, scrollToFooter]
  );

  // Landed on "/#footer" (e.g. clicked from another page) —
  // scroll to the footer once the page has mounted.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash !== `#${FOOTER_ID}`) return;

    const raf = requestAnimationFrame(() => {
      scrollToFooter("auto");
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname, scrollToFooter]);

  /* --------------------------------------------------------------
     ESCAPE KEY
  -------------------------------------------------------------- */

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key !== "Escape") return;

      if (openMenuId) {
        setOpenMenuId(null);
      } else if (overlayMounted) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openMenuId, overlayMounted, closeMenu]);

  /* --------------------------------------------------------------
     BODY SCROLL LOCK
  -------------------------------------------------------------- */

  useEffect(() => {
    if (!overlayMounted) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [overlayMounted]);

  /* --------------------------------------------------------------
     HIDE NAVBAR ON SCROLL DOWN
  -------------------------------------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;

      if (Math.abs(delta) < SCROLL_DELTA_PX) {
        return;
      }

      if (y <= HIDE_AFTER_PX) {
        setIsVisible(true);
      } else if (delta > 0 && !overlayMounted) {
        setIsVisible(false);
        setOpenMenuId(null);
      } else if (delta < 0) {
        setIsVisible(true);
      }

      lastScrollY.current = y;
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [overlayMounted]);

  return (
    <>
      {/* ==========================================================
          NAVBAR
      ========================================================== */}

      <nav
        ref={navRef}
        aria-label="Primary"
        className={`fixed left-0 right-0 top-0 z-[10000] transition-transform duration-300 motion-reduce:transition-none ${
          isVisible || overlayMounted
            ? "translate-y-0"
            : "-translate-y-full"
        } ${className}`}
      >
        {/* NAVBAR BAR */}

        <div className="border-b border-white/10 bg-black">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-4 py-4">
            {/* LOGO */}

            <Link
              href="/"
              className="flex shrink-0 items-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-500)]"
            >
              <span className="sr-only">
                Digital Aviner — home
              </span>

              <div className="relative h-6 w-40">
                <img
                  src="/images/logo-f.png"
                  alt="Digital Aviner"
                  width="160"
                  height="24"
                  className="h-full w-full object-contain"
                />
              </div>
            </Link>

            {/* ==================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <ul className="hidden flex-1 items-center justify-center gap-7 text-[10px] tracking-[0.08em] text-white lg:flex">
              {NAV.map((item) => {
                const hasMenu = Boolean(
                  item.columns
                );

                const isOpen =
                  openMenuId === item.id;

                return (
                  <li
                    key={item.id}
                    className="relative"
                  >
                    {hasMenu ? (
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMenuId(
                            isOpen
                              ? null
                              : item.id
                          )
                        }
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        aria-controls={`menu-${item.id}`}
                        className="flex items-center gap-2 rounded px-1 py-1 uppercase transition hover:text-[var(--brand-500)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-500)]"
                      >
                        <span>
                          {item.title}
                        </span>

                        <FiChevronDown
                          aria-hidden="true"
                          className={`text-[0.85rem] transition-transform duration-300 motion-reduce:transition-none ${
                            isOpen
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.path}
                        className="flex items-center rounded px-1 py-1 uppercase transition hover:text-[var(--brand-500)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-500)]"
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* ==================================================
                DESKTOP CONTACT
            ================================================== */}

            <div className="hidden shrink-0 items-center gap-5 lg:flex">
              {/* PHONE */}

              <a
                href={`tel:${PHONE_E164}`}
                className="flex items-center gap-2 whitespace-nowrap rounded text-xs text-white transition hover:text-[#34C7C2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-500)]"
              >
                <FiPhoneCall
                  aria-hidden="true"
                  className="text-sm"
                />

                <span className="tracking-wide">
                  {PHONE_DISPLAY}
                </span>
              </a>

              {/* WHATSAPP */}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Message Digital Aviner on WhatsApp at ${PHONE_DISPLAY}`}
                className="flex items-center gap-2 rounded text-white transition hover:text-[#0B8839] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-500)]"
              >
                <FaWhatsapp
                  aria-hidden="true"
                  className="text-lg"
                />

                <span className="text-xs tracking-wide">
                  WhatsApp
                </span>
              </a>

              {/* FOOTER CTA */}

              <Link
                href={`/#${FOOTER_ID}`}
                onClick={handleTalkBusinessClick}
                className="whitespace-nowrap rounded-full bg-[var(--brand-500)] px-5 py-2 text-xs font-semibold text-white transition hover:bg-[#34C7C2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                Let&apos;s Talk Business
              </Link>
            </div>

            {/* ==================================================
                MOBILE TOGGLE
            ================================================== */}

            <button
              type="button"
              onClick={toggleMenu}
              aria-label={
                overlayMounted
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={overlayMounted}
              className="relative flex h-8 w-10 shrink-0 items-center justify-end rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-500)] lg:hidden"
            >
              {overlayMounted ? (
                <FiX
                  aria-hidden="true"
                  className="text-3xl text-white"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="flex flex-col items-end gap-1.5"
                >
                  <span className="h-[2px] w-8 bg-white" />
                  <span className="h-[2px] w-8 bg-white" />
                  <span className="h-[2px] w-8 bg-white" />
                </span>
              )}
            </button>
          </div>
        </div>

        {/* ======================================================
            DESKTOP MEGA MENUS
        ====================================================== */}

        {NAV.filter(
          (item) => item.columns
        ).map((item) => {
          const isOpen =
            openMenuId === item.id;

          return (
            <div
              key={item.id}
              id={`menu-${item.id}`}
              inert={
                isOpen
                  ? undefined
                  : ""
              }
              className={`absolute left-0 right-0 top-full hidden border-b border-white/10 px-4 py-12 text-white transition-all duration-200 ease-out motion-reduce:transition-none lg:block ${GLASS} ${
                isOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >
              <div className="mx-auto max-w-6xl">
                <div
                  className={`grid gap-16 ${
                    item.columns.length > 1
                      ? "grid-cols-2"
                      : "grid-cols-1"
                  }`}
                >
                  {item.columns.map(
                    (col) => (
                      <div
                        key={col.heading}
                      >
                        <h2 className="mb-6 text-xs font-medium uppercase tracking-[0.15em] text-white/50">
                          {col.heading}
                        </h2>

                        <ul className="grid grid-cols-2 gap-x-10 gap-y-4">
                          {col.links.map(
                            (link) => (
                              <li
                                key={
                                  link.title
                                }
                              >
                                <Link
                                  href={
                                    link.path
                                  }
                                  onClick={() =>
                                    setOpenMenuId(
                                      null
                                    )
                                  }
                                  className="rounded text-[15px] leading-relaxed text-white/80 transition hover:text-[var(--brand-500)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-500)]"
                                >
                                  {
                                    link.title
                                  }
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )
                  )}
                </div>

                {item.viewAll && (
                  <div className="mt-10 border-t border-white/10 pt-6">
                    <Link
                      href={
                        item.viewAll.path
                      }
                      onClick={() =>
                        setOpenMenuId(null)
                      }
                      className="inline-flex items-center gap-2 rounded text-sm font-semibold text-[var(--brand-500)] transition hover:text-[var(--brand-600)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-500)]"
                    >
                      {
                        item.viewAll.label
                      }

                      <FiArrowRight
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </nav>

      {/* ==========================================================
          MOBILE OVERLAY
      ========================================================== */}

      {hasMounted &&
        overlayMounted &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            {/* BACKGROUND */}

            <div
              style={{
                top: navHeight.current,
              }}
              className={`absolute bottom-0 left-0 right-0 bg-black transition-opacity duration-300 ease-out motion-reduce:transition-none ${
                bgVisible
                  ? "opacity-100"
                  : "opacity-0"
              }`}
              onClick={closeMenu}
            />

            {/* MENU CONTENT */}

            <div
              className="absolute bottom-0 left-0 right-0 overflow-y-auto overscroll-contain"
              style={{
                top: navHeight.current,
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
            >
              <div
                className={`w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                  contentVisible
                    ? "translate-y-0"
                    : "-translate-y-full"
                }`}
              >
                <div
                  className={`w-full transition-opacity delay-100 duration-300 motion-reduce:transition-none ${
                    contentVisible
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <div className="px-6 pb-16 pt-8">
                    {/* MOBILE NAV */}

                    <ul className="flex flex-col divide-y divide-white/10 text-white">
                      {NAV.map(
                        (item) => {
                          const hasMenu =
                            Boolean(
                              item.columns
                            );

                          const isOpen =
                            mobileOpenId ===
                            item.id;

                          return (
                            <li
                              key={
                                item.id
                              }
                              className="py-5"
                            >
                              {hasMenu ? (
                                <>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setMobileOpenId(
                                        isOpen
                                          ? null
                                          : item.id
                                      )
                                    }
                                    aria-expanded={
                                      isOpen
                                    }
                                    aria-controls={`m-${item.id}`}
                                    className="flex w-full items-center justify-between rounded text-[16px] uppercase tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-500)]"
                                  >
                                    <span>
                                      {
                                        item.title
                                      }
                                    </span>

                                    <FiChevronDown
                                      aria-hidden="true"
                                      className={`text-lg text-[var(--brand-500)] transition-transform duration-300 motion-reduce:transition-none ${
                                        isOpen
                                          ? "rotate-180"
                                          : ""
                                      }`}
                                    />
                                  </button>

                                  {isOpen && (
                                    <div
                                      id={`m-${item.id}`}
                                      className="mt-5 space-y-6"
                                    >
                                      {item.columns.map(
                                        (
                                          col
                                        ) => (
                                          <div
                                            key={
                                              col.heading
                                            }
                                          >
                                            <h2 className="mb-3 text-[11px] uppercase tracking-[0.15em] text-white/50">
                                              {
                                                col.heading
                                              }
                                            </h2>

                                            <ul className="space-y-3">
                                              {col.links.map(
                                                (
                                                  link
                                                ) => (
                                                  <li
                                                    key={
                                                      link.title
                                                    }
                                                  >
                                                    <Link
                                                      href={
                                                        link.path
                                                      }
                                                      onClick={
                                                        closeMenu
                                                      }
                                                      className="block rounded text-[15px] text-white/80 transition hover:text-[var(--brand-500)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-500)]"
                                                    >
                                                      {
                                                        link.title
                                                      }
                                                    </Link>
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  )}
                                </>
                              ) : (
                                <Link
                                  href={
                                    item.path
                                  }
                                  onClick={
                                    closeMenu
                                  }
                                  className="block rounded text-[16px] uppercase tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-500)]"
                                >
                                  {
                                    item.title
                                  }
                                </Link>
                              )}
                            </li>
                          );
                        }
                      )}
                    </ul>

                    {/* ==================================================
                        MOBILE CONTACT
                    ================================================== */}

                    <div className="mt-8 space-y-4 border-t border-white/10 pt-8">
                      <a
                        href={`tel:${PHONE_E164}`}
                        className="flex items-center gap-3 rounded text-[15px] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-500)]"
                      >
                        <FiPhoneCall
                          aria-hidden="true"
                          className="text-lg text-[var(--brand-500)]"
                        />

                        {
                          PHONE_DISPLAY
                        }
                      </a>

                      <a
                        href={
                          WHATSAPP_URL
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Message Digital Aviner on WhatsApp at ${PHONE_DISPLAY}`}
                        className="flex items-center gap-3 rounded text-[15px] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-500)]"
                      >
                        <FaWhatsapp
                          aria-hidden="true"
                          className="text-lg text-[var(--brand-500)]"
                        />

                        WhatsApp
                      </a>
                    </div>

                    {/* ==================================================
                        MOBILE CTAs
                    ================================================== */}

                    <div className="mt-8 space-y-3">
                      <Link
                        href={`/#${FOOTER_ID}`}
                        onClick={handleTalkBusinessClick}
                        className="block w-full rounded-full bg-[var(--brand-500)] py-4 text-center font-semibold text-white transition hover:bg-[#34C7C2]"
                      >
                        Let&apos;s Talk
                        Business
                      </Link>

                      <Link
                        href="/join-us"
                        onClick={
                          closeMenu
                        }
                        className="block w-full rounded-full border border-[var(--brand-500)] py-4 text-center font-semibold text-[var(--brand-500)] transition hover:bg-[var(--brand-500)] hover:text-white"
                      >
                        Explore Careers
                      </Link>
                    </div>

                    {/* ==================================================
                        SOCIAL MEDIA
                    ================================================== */}

                    <div className="mt-10 flex items-center justify-center gap-6 border-t border-white/10 pt-8">
                      <a
                        href={
                          SOCIAL_LINKS.instagram
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[var(--brand-500)] hover:text-[var(--brand-500)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-500)]"
                      >
                        <FaInstagram
                          aria-hidden="true"
                          className="text-lg"
                        />
                      </a>

                      <a
                        href={
                          SOCIAL_LINKS.facebook
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[var(--brand-500)] hover:text-[var(--brand-500)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-500)]"
                      >
                        <FaFacebookF
                          aria-hidden="true"
                          className="text-lg"
                        />
                      </a>

                      <a
                        href={
                          SOCIAL_LINKS.linkedin
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[var(--brand-500)] hover:text-[var(--brand-500)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-500)]"
                      >
                        <FaLinkedinIn
                          aria-hidden="true"
                          className="text-lg"
                        />
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