import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

/* ------------------------------------------------------------------
   SERVICES
   Six cards, two tracks. Every href matches its label and its alt text.
   URL scheme: root-level slugs. Keep the navbar and the Service schema
   nodes on these exact paths.
------------------------------------------------------------------ */
const services = [
  {
    title: "SEO & AI Search Visibility",
    href: "/",
    image: "/images/seo.webp",
    alt: "Search performance dashboard showing organic ranking growth",
    description:
      "Rank in Google and get cited in AI answers, across Gulf and Western search markets.",
  },
  {
    title: "Performance Marketing",
    href: "/",
    image: "/images/performance-marketing.webp",
    alt: "Paid media analytics across search and social platforms",
    description:
      "Google, Meta, LinkedIn and TikTok campaigns managed to cost per qualified lead, not impressions.",
  },
  {
    title: "Web Design & Development",
    href: "/",
    image: "/images/web-development.webp",
    alt: "Responsive website interface shown on desktop and mobile",
    description:
      "Fast, search-ready sites built to convert the traffic your campaigns bring in.",
  },
  {
    title: "Lead Generation",
    href: "/",
    image: "/images/lead-generation.webp",
    alt: "Sales pipeline view tracking qualified inbound enquiries",
    description:
      "Inbound and outbound systems that fill your pipeline with buyers who match your ICP.",
  },
  {
    title: "Agentic AI Marketing",
    href: "/",
    image: "/images/agentic-ai-marketing.webp",
    alt: "Autonomous marketing agent adjusting live campaign settings",
    description:
      "Autonomous agents that adjust bids, budgets and creative every hour your campaigns run.",
  },
  {
    title: "AI Agents & Automation",
    href: "/",
    image: "/images/ai-agents.webp",
    alt: "Connected AI agents handling marketing workflow tasks",
    description:
      "Custom agents that handle qualification, follow-up and reporting so your team doesn't have to.",
  },
];

export default function Services({
  className = "",
  eyebrow = "OUR SERVICES",
  title = (
    <>
      Digital marketing and{" "}
      <span className="text-[#33C7C2]">agentic AI</span>, under one roof
    </>
  ),
  ctaLabel = "",
  ctaHref = "/",
}) {
  return (
    <section
      aria-labelledby="services-heading"
      className={`relative overflow-hidden bg-[var(--ink-900)] text-white ${className}`}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 [background:radial-gradient(900px_520px_at_40%_35%,rgba(51,199,194,0.20),rgba(51,199,194,0)_60%)]" />

        <div className="absolute inset-0 [background:radial-gradient(1100px_740px_at_75%_55%,rgba(51,199,194,0.16),rgba(51,199,194,0)_64%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8 md:px-10 md:py-8">
        <p className="text-[12px] font-medium tracking-[0.3em] text-[#33C7C2]">
          {eyebrow}
        </p>

        <h2
          id="services-heading"
          className="mt-4 max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl"
        >
          {title}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group relative block overflow-hidden rounded-2xl ring-1 ring-[var(--line)] transition hover:ring-[#33C7C2]/60 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#33C7C2]"
            >
              <article className="relative h-[260px] w-full md:h-[320px]">

                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="z-0 object-cover transition duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
                />

                {/* Dark Overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 z-10 bg-black/35"
                />

                {/* Bottom Gradient */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/55 to-transparent"
                />

                {/* Card Content */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-6">
                  <h3 className="text-xl font-bold leading-tight md:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {service.description}
                  </p>

                 
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-full bg-[#33C7C2] px-8 py-4 text-sm font-semibold text-[var(--on-brand)] transition hover:bg-[#33C7C2]/90 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ink-900)]"
          >
            {ctaLabel}
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}