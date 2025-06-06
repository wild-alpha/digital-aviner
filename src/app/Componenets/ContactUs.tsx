import React from "react";
import Image from "next/image";
import CallButton1 from "./CallButton1";
import WhatsAppButton1 from "./WhatsAppButton1";
import ContactForm from "./ContactForm";



const ContactUs = () => {
  return (
    <section id="contact-us" className="container mx-auto mt-20 px-4">
    <div className="contact-us">
    <h2 className="text-white mb-8 text-lg lg:text-6xl font-bold text-center">
          CONTACT US
        </h2>  
    </div>

    <div className="flex justify-center mb-2">
        <span className="px-0.5">
        <WhatsAppButton1 /></span>
        <span className="px-0.5">
        <CallButton1 /></span>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Live Location Map */}
        <div className="bg-[#121212] rounded-lg p-8 lg:w-1/2 mb-2 lg:mb-0">
          <h2 className="text-white mb-4 text-2xl font-semibold text-center lg:text-left">Live Location Map</h2>
          {/* Replace with an image and link */}
          <a href="https://maps.app.goo.gl/13rDYUCMygp2kCiu5" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/images/map.webp" 
              alt="Live Location Map" 
              className="h-70 w-full object-cover rounded-lg" 
              width={500}
              height={5} 
            />
          </a>
        </div>
        {/* Contact Form */}
        <div className="lg:w-1/2">
          <ContactForm />
        </div>
      </div>
  </section>
  )
}


export default ContactUs;