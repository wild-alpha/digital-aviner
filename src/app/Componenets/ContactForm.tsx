"use client";
import { useState } from "react";
import { RiUserFill, RiMailFill } from 'react-icons/ri';
import { FaPhoneVolume } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { RiSendPlaneFill } from 'react-icons/ri';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        // Clear the form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        // Show success message
        alert("Message submitted successfully");
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      // Handle error (e.g., display error message to user)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap">
      <h2 className="w-full text-white text-xl font-semibold mb-2 mt-6">Send your message here</h2>
      <div className="w-full md:w-1/2 md:pr-2 mb-6 md:mb-10 flex items-center relative">
        <RiUserFill className="text-[#c38d90] absolute left-2" />
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full text-white bg-[#121212] outline-none pl-10 border-b border-white"
          placeholder="Name"
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-2 mb-6 md:mb-10 flex items-center relative">
        <RiMailFill className="text-[#c38d90] absolute left-2" />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full text-white bg-[#121212] outline-none pl-10 border-b border-white"
          placeholder="Email"
        />
      </div>
      <div className="w-full md:w-1/2 md:pr-2 mb-6 md:mb-10 flex items-center relative">
        <FaPhoneVolume className="text-[#c38d90] absolute left-2" />
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full text-white bg-[#121212] outline-none pl-10 border-b border-white"
          placeholder="Phone"
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-2 mb-6 md:mb-10 flex items-center relative">
        <FaInfoCircle className="text-[#c38d90] absolute left-2" />
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full text-white bg-[#121212] outline-none pl-10 border-b border-white"
          placeholder="Subject"
        />
      </div>
      <div className="w-full mb-4">
        
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full text-white bg-[#121212] outline-none pl-10 border-b border-white"
          placeholder="Message: How Can We Help You ? Feel Free To Get In Touch!"
          ></textarea>
      </div>
      <button
        type="submit"
        className="rounded-2xl flex items-center justify-center bg-[#c38d90] text-white px-4 py-2 hover:bg-white hover:text-[#c38d90]"
      >
        <RiSendPlaneFill className="mr-2" /> Submit
      </button>
    </form>
  );
};

export default ContactForm;
