import React from "react";
import Image from "next/image";
import CallButton1 from "./CallButton1";
import WhatsAppButton1 from "./WhatsAppButton1";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <section id="contact-us" className="container mx-auto mt-20 px-4">
      <div className="contact-us">
        <h2 className="mb-8 text-center text-lg font-bold text-white lg:text-6xl">
          CONTACT US
        </h2>
      </div>

      <div className="mb-2 flex justify-center">
        <span className="px-0.5">
          <WhatsAppButton1 />
        </span>
        <span className="px-0.5">
          <CallButton1 />
        </span>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="mb-2 rounded-lg bg-[#121212] p-8 lg:mb-0 lg:w-1/2">
          <h2 className="mb-4 text-center text-2xl font-semibold text-white lg:text-left">
            Live Location Map
          </h2>

          <a
            href="https://maps.app.goo.gl/13rDYUCMygp2kCiu5"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open location on Google Maps"
          >
            <Image
              src="/images/map.webp"
              alt="Live Location Map"
              className="h-[280px] w-full rounded-lg object-cover"
              width={700}
              height={280}
              priority={false}
            />
          </a>
        </div>

        <div className="lg:w-1/2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;