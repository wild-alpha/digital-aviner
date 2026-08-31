"use client";
import { FaPhoneAlt } from "react-icons/fa";

const CallButton1 = () => {
  const phoneNumber = '+923034668695';

  const handleClick = () => {
    // Format the phone number
    const formattedPhoneNumber = `tel:${phoneNumber}`;
    // Initiate the call
    window.location.href = formattedPhoneNumber;
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#34C7C2] text-white font-bold py-2 px-3.5 rounded-full flex items-center space-x-2 sm:py-4 sm:px-4 animate-pulse md:hidden"
      style={{
        bottom: '60px',
        right: '2px',
        zIndex: '9999', // Ensure the button is on top of other elements
      }}
    >
      <FaPhoneAlt className="text-xl mr-2" />Call Us Now
    </button>
  );
};

export default CallButton1;
