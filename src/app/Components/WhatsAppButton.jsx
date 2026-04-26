'use client'; // Add this line at the beginning

import { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [whatsappNumber] = useState('YOUR_WhatsApp_NUMBER');

  const handleClick = () => {
    // Format the WhatsApp URL with your number
    const whatsappUrl = `https://wa.me/${+971588075603}`;
    // Open the WhatsApp URL in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-6 rounded-full flex items-center space-x-2 sm:py-4 sm:px-4 animate-pulse"
      style={{
        position: 'fixed',
        bottom: '60px',
        left: '20px',
        zIndex: '9999', // Ensure the button is on top of other elements
      }}
    >
      <FaWhatsapp className="text-xl" />
    </button>
  );
};

export default WhatsAppButton;