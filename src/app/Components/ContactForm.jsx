"use client";

import { useState } from "react";
import { RiUserFill, RiMailFill, RiSendPlaneFill } from "react-icons/ri";
import { FaPhoneVolume, FaInfoCircle } from "react-icons/fa6";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      alert("Message submitted successfully");
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap">
      <h2 className="mb-2 mt-6 w-full text-xl font-semibold text-white">
        Send your message here
      </h2>

      <div className="relative mb-6 flex w-full items-center md:mb-10 md:w-1/2 md:pr-2">
        <RiUserFill className="absolute left-2 text-[#c38d90]" />
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border-b border-white bg-[#121212] pl-10 text-white outline-none"
          placeholder="Name"
        />
      </div>

      <div className="relative mb-6 flex w-full items-center md:mb-10 md:w-1/2 md:pl-2">
        <RiMailFill className="absolute left-4 text-[#c38d90] md:left-4" />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border-b border-white bg-[#121212] pl-10 text-white outline-none"
          placeholder="Email"
        />
      </div>

      <div className="relative mb-6 flex w-full items-center md:mb-10 md:w-1/2 md:pr-2">
        <FaPhoneVolume className="absolute left-2 text-[#c38d90]" />
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border-b border-white bg-[#121212] pl-10 text-white outline-none"
          placeholder="Phone"
        />
      </div>

      <div className="relative mb-6 flex w-full items-center md:mb-10 md:w-1/2 md:pl-2">
        <FaInfoCircle className="absolute left-4 text-[#c38d90] md:left-4" />
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full border-b border-white bg-[#121212] pl-10 text-white outline-none"
          placeholder="Subject"
        />
      </div>

      <div className="mb-4 w-full">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full border-b border-white bg-[#121212] pl-4 pt-2 text-white outline-none"
          placeholder="Message: How Can We Help You? Feel Free To Get In Touch!"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex items-center justify-center rounded-2xl bg-[#c38d90] px-4 py-2 text-white transition hover:bg-white hover:text-[#c38d90] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <RiSendPlaneFill className="mr-2" />
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;