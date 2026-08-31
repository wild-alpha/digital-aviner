import Image from "next/image";

/* ------------------------------------------------------------------
   CONTENT
   Kept as data so copy edits don't mean touching markup.
------------------------------------------------------------------ */
const whyChooseUs = [
  "Two service tracks: Digital Marketing (SEO, paid media, social and content, conversion optimisation) and Agentic AI (autonomous marketing agents, conversational agents, automation, predictive analytics).",
  "Campaigns are optimised continuously by AI agents rather than reviewed on a weekly or monthly cycle.",
  "Independent and specialist: marketing judgment and agent engineering sit under one roof, so strategy and execution never wait on each other.",
  "Markets served: United Arab Emirates, Saudi Arabia, United States, United Kingdom, Canada and Australia.",
  "Head office and global delivery centre in Okara, Punjab, Pakistan, with a UAE contact number and Gulf working hours.",
];

const whoWeHelp = [
  "Marketing and growth leads evaluating whether to bring AI agents into their marketing operations, not just their product.",
  "Founders and CMOs frustrated with agencies that report results monthly instead of adjusting in real time.",
  "Teams expanding into a new market who need strategy and execution together rather than a platform to run themselves.",
];

const AboutSection = () => {
  return (
    <section
      id="about-us"
      aria-labelledby="about-heading"
      className="relative isolate overflow-hidden text-white"
    >
     

      {/* Scrim — guarantees text contrast regardless of the photograph beneath. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[var(--ink-900)]/75"
      />

      <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8 md:py-6">
        {/* Positioning statement — the strongest entity signal on the page. */}
        <div className="max-w-4xl">
          <h2
            id="about-heading"
            className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl"
          >
            An <span className="text-[#33C7C2]">agentic AI</span>{" "}
            marketing agency
          </h2>

          <p className="mt-6 text-base leading-relaxed text-[var(--text-70)] sm:text-lg">
            Digital Aviner pairs marketing strategists with autonomous AI agents
            that run campaign execution in real time, for brands expanding
            across the UAE, Saudi Arabia, the US, the UK, Canada and Australia.
          </p>

          <p className="mt-4 text-base leading-relaxed text-[var(--text-70)] sm:text-lg">
            A traditional agency reviews performance weekly. A software house
            sells you agent infrastructure without marketing judgment. We do
            both at once: a strategist sets the direction, and an AI agent keeps
            pursuing it every hour the campaign is live.
          </p>
        </div>

        {/* Wireframe panel */}
        <div className="mt-6 bg-[url('/images/mobile-wire.svg')] bg-cover bg-center bg-no-repeat lg:bg-[url('/images/desktop-wire.svg')]">
          <div className="grid gap-12 py-6 md:grid-cols-2 md:gap-16 md:py-6">
            <div>
              <h2 className="font-semibold text-lg tracking-widest text-[#33C7C2] sm:text-xl">
                WHY CHOOSE DIGITAL AVINER
              </h2>
              <ul className="mt-6 space-y-4">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#33C7C2]"
                    />
                    <span className="text-[15px] leading-relaxed text-[var(--text-70)] sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-lg tracking-widest text-[#33C7C2] sm:text-xl">
                WHO WE HELP
              </h2>
              <ul className="mt-6 space-y-4">
                {whoWeHelp.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#33C7C2]"
                    />
                    <span className="text-[15px] leading-relaxed text-[var(--text-70)] sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;