"use client";
import { FaPhoneAlt } from "react-icons/fa";

const CallButton = () => {
  const phoneNumber = '+971588075603';

  const handleClick = () => {
    // Format the phone number
    const formattedPhoneNumber = `tel:${+971588075603}`;
    // Initiate the call
    window.location.href = formattedPhoneNumber;
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#c38d90] text-white font-bold py-6 px-6 rounded-full flex items-center space-x-2 sm:py-4 sm:px-4 animate-pulse md:hidden"
      style={{
        position: 'fixed',
        bottom: '60px',
        right: '40px',
        zIndex: '9999', // Ensure the button is on top of other elements
      }}
    >
      <FaPhoneAlt className="text-2xl" />
    </button>
  );
};

export default CallButton;