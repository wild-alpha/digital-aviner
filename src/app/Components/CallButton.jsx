"use client";

import { FaPhoneAlt } from "react-icons/fa";

const CallButton = () => {
  const phoneNumber = "+971588075603";

  const handleClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Call us"
      className="fixed bottom-[60px] right-[40px] z-[9999] flex items-center rounded-full bg-[#c38d90] px-6 py-6 font-bold text-white animate-pulse sm:px-4 sm:py-4 md:hidden"
    >
      <FaPhoneAlt className="text-2xl" />
    </button>
  );
};

export default CallButton;