"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { FiArrowDown } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const logos = [
  { src: "/images/logos/logo-1.png", alt: "Client 1" },
  { src: "/images/logos/logo-2.png", alt: "Client 2" },
  { src: "/images/logos/logo-3.png", alt: "Client 3" },
  { src: "/images/logos/logo-4.png", alt: "Client 4" },
  { src: "/images/logos/logo-5.png", alt: "Client 5" },
  { src: "/images/logos/logo-6.png", alt: "Client 6" },
  { src: "/images/logos/logo-7.png", alt: "Client 7" },
  { src: "/images/logos/logo-8.png", alt: "Client 8" },
];

const services = [
  { title: "Online Business Development", image: "/images/services/ai.jpg", href: "/services/ai-ml" },
  { title: "Business Branding", image: "/images/services/ai.jpg", href: "/services/ai-ml" },
  { title: "Digital Marketing Services", image: "/images/services/erp.jpg", href: "/services/dynamics-365" },
  { title: "Performance Marketing Services", image: "/images/services/mobile.jpg", href: "/services/mobile" },
  { title: "Local Business Optimization", image: "/images/services/staff.jpg", href: "/services/staff-augmentation" },
  { title: "SEO Services", image: "/images/services/ai.jpg", href: "/services/ai-ml" },
  { title: "Design & Development", image: "/images/services/staff.jpg", href: "/services/staff-augmentation" },
  { title: "Web Development", image: "/images/services/ai.jpg", href: "/services/ai-ml" },
  { title: "App Development", image: "/images/services/erp.jpg", href: "/services/dynamics-365" },
  { title: "Social Media Management", image: "/images/services/mobile.jpg", href: "/services/mobile" },
  { title: "Custom Software Development", image: "/images/services/staff.jpg", href: "/services/staff-augmentation" },
  { title: "UI/UX Design", image: "/images/services/erp.jpg", href: "/services/dynamics-365" },
  { title: "E-Commerce", image: "/images/services/mobile.jpg", href: "/services/mobile" },
  { title: "Maintenance & Support", image: "/images/services/staff.jpg", href: "/services/staff-augmentation" },
];

export default function Services({
  className = "",
  eyebrow = "OUR SERVICES",
  title = "Transform Your Business",
  viewMoreLabel = "View More Services",
  viewLessLabel = "View Less",
  showSideCta = true,
  sideCtaLabel = "Let's Talk Business",
  sideCtaHref = "/contact",
}) {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = useMemo(() => {
    return showAll ? services : services.slice(0, 4);
  }, [showAll]);

  return (
    <section className={`relative overflow-hidden bg-black text-white ${className}`}>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <Swiper
            modules={[Autoplay, FreeMode]}
            loop={true}
            freeMode={true}
            speed={3500}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            slidesPerView={3.5}
            spaceBetween={26}
            breakpoints={{
              480: { slidesPerView: 4.5 },
              768: { slidesPerView: 6.5 },
              1024: { slidesPerView: 8.5 },
            }}
            className="!overflow-visible"
          >
            {[...logos, ...logos].map((logo, index) => (
              <SwiperSlide key={`${logo.alt}-${index}`} className="!w-auto">
                <div className="flex h-14 items-center justify-center px-3">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 w-auto object-contain opacity-90"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 [background:radial-gradient(900px_520px_at_40%_35%,rgba(51,199,194,0.22),rgba(0,0,0,0)_60%)]" />
        <div className="absolute inset-0 [background:radial-gradient(1100px_740px_at_75%_55%,rgba(51,199,194,0.18),rgba(0,0,0,0)_64%)]" />
      </div>

      {showSideCta && (
        <div className="absolute right-0 top-44 z-20 hidden md:block">
          <Link
            href={sideCtaHref}
            className="inline-flex items-center justify-center rounded-l-2xl bg-[#33C7C2] px-4 py-3 text-sm font-semibold text-black shadow-lg transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/40"
            style={{ transform: "rotate(-90deg)", transformOrigin: "right top" }}
          >
            {sideCtaLabel}
          </Link>
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <p className="text-[12px] tracking-[0.35em] text-[#33C7C2]">
          {eyebrow}
        </p>

        <h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-6xl">
          {title}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-4">
          {visibleServices.map((service, index) => (
            <Link
              key={`${service.title}-${index}`}
              href={service.href}
              className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:ring-white/25"
            >
              <div className="relative h-[120px] w-full md:h-[300px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-95"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-black/10" />

                <div className="absolute left-5 right-5 top-5">
                  <p className="text-2xl font-extrabold leading-tight md:text-[26px]">
                    {service.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:mt-14">
          <button
            type="button"
            onClick={() => setShowAll((value) => !value)}
            className="inline-flex items-center justify-center gap-4 rounded-full border border-[#33C7C2]/35 bg-white/5 px-10 py-4 text-base font-medium text-white/95 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition hover:border-[#33C7C2]/55 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-expanded={showAll}
          >
            {showAll ? viewLessLabel : viewMoreLabel}

            <FiArrowDown
              className={`text-xl text-white/90 transition-transform ${
                showAll ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}