import React from "react";

const faqs = [
  {
    question: "Who is this for?",
    answer:
      "This is for marketing and growth leaders, founders, and CMOs who want more than traditional marketing support. It is built for teams that want strategy, execution, and smarter AI-powered operations in one place.",
  },
  {
    question: "How are you different from a regular agency?",
    answer:
      "We do not just deliver monthly reports and wait for the next meeting. We help teams adapt in real time, improve performance continuously, and connect strategy directly to execution.",
  },
  {
    question: "Do you work with companies entering new markets?",
    answer:
      "Yes. We support teams expanding into the UAE, KSA, US, UK, Canada, and Australia with both the strategic direction and hands-on execution they need to launch with confidence.",
  },
  {
    question: "Are AI agents part of your service?",
    answer:
      "Yes. We help companies explore and integrate AI agents into their marketing operations so they can move faster, work smarter, and scale more efficiently.",
  },
  {
    question: "What kind of teams get the most value?",
    answer:
      "The best fit is teams that are growing quickly, need sharper execution, and want a partner that can think strategically while also getting the work done.",
  },
  {
    question: "What should I do next?",
    answer:
      "If you are evaluating how AI, strategy, and execution can work together for your team, the next step is to book a consultation and discuss your goals.",
  },
];

const FAQs = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <p className="text-[#caa193] uppercase tracking-[0.2em] text-sm mb-3">
            FAQs
          </p>
          <h2 className="text-3xl md:text-4xl font-conthrax text-white leading-tight">
            Answers to the questions teams ask most
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto font-play">
            Clear answers for leaders evaluating AI-powered growth, strategy, and execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#2a2a2a] bg-[#111111] p-6 shadow-sm"
            >
              <h3 className="text-lg md:text-xl font-conthrax text-[#caa193] leading-snug">
                {faq.question}
              </h3>
              <p className="mt-3 text-gray-300 font-play leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;