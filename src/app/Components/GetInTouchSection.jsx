"use client";

import React, { useMemo, useState } from "react";
import { FiGlobe, FiUsers } from "react-icons/fi";

const SERVICE_OPTIONS = [
  { key: "remote-it", label: "Remote IT Resources" },
  { key: "custom-software", label: "Custom Software Development" },
  { key: "web-dev", label: "Web Development" },
  { key: "mobile-dev", label: "Mobile App Development" },
  { key: "ar-vr", label: "AR/VR" },
  { key: "gaming", label: "Gaming" },
  { key: "cyber", label: "Cyber Security" },
  { key: "other", label: "Other IT Services" },
];

export default function GetInTouchSection({
  className = "",
  sideCtaLabel = "Let’s Talk Business",
  sideCtaHref = "/contact",
}) {
  const [services, setServices] = useState({
    "remote-it": false,
    "custom-software": false,
    "web-dev": false,
    "mobile-dev": false,
    "ar-vr": false,
    gaming: false,
    cyber: false,
    other: false,
  });

  const selectedServices = useMemo(
    () =>
      Object.entries(services)
        .filter(([, value]) => value)
        .map(([key]) => key),
    [services]
  );

  const toggleService = (key) => {
    setServices((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Selected services:", selectedServices);
  };

  return (
    <section
      className={[
        "relative overflow-hidden bg-black text-white",
        "before:pointer-events-none before:absolute before:inset-0 before:[background:radial-gradient(900px_520px_at_75%_55%,rgba(51,199,194,0.20),rgba(0,0,0,0)_62%)]",
        "after:pointer-events-none after:absolute after:inset-0 after:[background:radial-gradient(1200px_740px_at_55%_105%,rgba(51,199,194,0.22),rgba(0,0,0,0)_60%)]",
        className,
      ].join(" ")}
      aria-label="Get in touch"
    >
      <div className="pointer-events-none absolute right-6 top-6 hidden md:block">
        <div className="relative h-20 w-20">
          <div className="absolute right-0 top-0 h-10 w-10 rounded-full border border-white/70" />
          <div className="absolute right-3 top-3 h-4 w-4 rounded-full bg-black ring-2 ring-[#33C7C2]/70" />
          <div className="absolute right-5 top-5 h-16 w-16 rounded-full border border-[#33C7C2]/30" />
        </div>
      </div>

      <a
        href={sideCtaHref}
        className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 md:inline-flex"
        aria-label={sideCtaLabel}
      >
        <span
          className="inline-flex items-center justify-center rounded-l-2xl bg-[#33C7C2] px-4 py-3 text-sm font-semibold text-black shadow-lg transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/40"
          style={{ transform: "rotate(-90deg)", transformOrigin: "right top" }}
        >
          {sideCtaLabel}
        </span>
      </a>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 md:px-10 md:py-16">
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          <div className="md:col-span-7">
            <div className="rounded-2xl bg-white text-black shadow-[0_20px_70px_rgba(0,0,0,0.35)] ring-1 ring-black/5">
              <div className="px-5 pb-6 pt-6 sm:px-8 sm:pb-8">
                <header className="text-center">
                  <h2 className="text-3xl font-extrabold tracking-tight text-[#16b7b0] sm:text-4xl">
                    Get In Touch
                  </h2>
                  <p className="mt-2 text-sm text-black/60">
                    Tell us what you’re building—our team will get back to you.
                  </p>
                </header>

                <form onSubmit={onSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label className="text-xs font-medium text-black/70" htmlFor="fullName">
                        Full Name*
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        required
                        autoComplete="name"
                        className="mt-1 h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none transition focus:border-[#33C7C2]/70 focus:ring-2 focus:ring-[#33C7C2]/20"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-xs font-medium text-black/70" htmlFor="email">
                        Email*
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="mt-1 h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none transition focus:border-[#33C7C2]/70 focus:ring-2 focus:ring-[#33C7C2]/20"
                        placeholder="you@company.com"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-xs font-medium text-black/70" htmlFor="phone">
                        Phone Number*
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        className="mt-1 h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none transition focus:border-[#33C7C2]/70 focus:ring-2 focus:ring-[#33C7C2]/20"
                        placeholder="+1 (201) 555-0123"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-black/70" htmlFor="companyName">
                        Company Name*
                      </label>
                      <input
                        id="companyName"
                        name="companyName"
                        required
                        autoComplete="organization"
                        className="mt-1 h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none transition focus:border-[#33C7C2]/70 focus:ring-2 focus:ring-[#33C7C2]/20"
                        placeholder="Company LLC"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-black/70" htmlFor="companyUrl">
                        Company URL
                      </label>
                      <input
                        id="companyUrl"
                        name="companyUrl"
                        type="url"
                        autoComplete="url"
                        className="mt-1 h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none transition focus:border-[#33C7C2]/70 focus:ring-2 focus:ring-[#33C7C2]/20"
                        placeholder="https://company.com"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-xs font-medium text-black/70" htmlFor="region">
                        Region*
                      </label>
                      <select
                        id="region"
                        name="region"
                        required
                        defaultValue=""
                        className="mt-1 h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none transition focus:border-[#33C7C2]/70 focus:ring-2 focus:ring-[#33C7C2]/20"
                      >
                        <option value="" disabled>
                          Select Region
                        </option>
                        <option value="mena">MENA</option>
                        <option value="europe">Europe</option>
                        <option value="north-america">North America</option>
                        <option value="south-america">South America</option>
                        <option value="asia">Asia</option>
                        <option value="australia">Australia</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <p className="text-xs font-medium text-black/70">
                        Services you are looking for*
                      </p>

                      <div className="mt-2 space-y-2">
                        {SERVICE_OPTIONS.map((opt) => (
                          <label
                            key={opt.key}
                            className="flex cursor-pointer items-center gap-2 text-sm text-black/80"
                          >
                            <input
                              type="checkbox"
                              checked={services[opt.key]}
                              onChange={() => toggleService(opt.key)}
                              className="h-4 w-4 rounded border-black/20 text-[#16b7b0] focus:ring-[#33C7C2]/30"
                            />
                            <span>{opt.label}</span>
                          </label>
                        ))}
                      </div>

                      <input
                        type="hidden"
                        name="selectedServices"
                        value={selectedServices.join(",")}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        className="text-xs font-medium text-black/70"
                        htmlFor="projectDetails"
                      >
                        Project Details*
                      </label>
                      <textarea
                        id="projectDetails"
                        name="projectDetails"
                        required
                        rows={3}
                        className="mt-1 w-full resize-y rounded-md border border-black/15 bg-white px-3 py-2 text-sm outline-none transition focus:border-[#33C7C2]/70 focus:ring-2 focus:ring-[#33C7C2]/20"
                        placeholder="Briefly describe your requirements, timeline, and goals..."
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-xs font-medium text-black/70" htmlFor="jobQuery">
                        I am looking for a job
                      </label>
                      <select
                        id="jobQuery"
                        name="jobQuery"
                        defaultValue=""
                        className="mt-1 h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm outline-none transition focus:border-[#33C7C2]/70 focus:ring-2 focus:ring-[#33C7C2]/20"
                      >
                        <option value="">Please Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full bg-[#16b7b0] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#16b7b0]/30"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <aside className="md:col-span-5">
            <div className="h-full rounded-2xl p-6 md:p-8">
              <div className="space-y-10">
                <div>
                  <div className="flex items-center gap-3">
                    <FiGlobe className="text-white/80" aria-hidden="true" />
                    <h3 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                      <span className="text-white">Global </span>
                      <span className="text-[#33C7C2]">Presence</span>
                    </h3>
                  </div>

                  <p className="mt-3 max-w-md text-base leading-relaxed text-white/80 md:text-lg">
                    We’re across 5 continents, explore our office nearest to you.
                  </p>

                  <a
                    href="/locations"
                    className="mt-5 inline-flex items-center justify-center rounded-full bg-[#16b7b0] px-5 py-2 text-xs font-semibold text-black transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/25"
                  >
                    Learn more
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <FiUsers className="text-white/80" aria-hidden="true" />
                    <h3 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                      <span className="text-white">Global </span>
                      <span className="text-[#33C7C2]">Leaders</span>
                    </h3>
                  </div>

                  <p className="mt-3 max-w-md text-base leading-relaxed text-white/80 md:text-lg">
                    Our capability and competencies are backed by diverse Global leadership.
                  </p>

                  <a
                    href="/leadership"
                    className="mt-5 inline-flex items-center justify-center rounded-full bg-[#16b7b0] px-5 py-2 text-xs font-semibold text-black transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/25"
                  >
                    Learn more
                  </a>
                </div>
              </div>

              <div className="mt-10 md:hidden">
                <a
                  href={sideCtaHref}
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/25"
                >
                  {sideCtaLabel}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}