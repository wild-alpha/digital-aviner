'use client'; // Add this line at the beginning

import { useState, useEffect } from 'react';
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton1 = () => {
  const [whatsappNumber] = useState('YOUR_WhatsApp_NUMBER');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the width threshold as needed
    };

    handleResize(); // Check initially
    window.addEventListener('resize', handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener
    };
  }, []);

  const handleClick = () => {
    // Format the WhatsApp URL with your number
    const whatsappUrl = `https://wa.me/${+971588075603}`;
    // Open the WhatsApp URL in a new tab
    window.open(whatsappUrl, '_blank');
  };

  // Render the button only on mobile
  if (!isMobile) {
    return null;
  }

  return (
    <button
      onClick={handleClick}
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-3.5 rounded-full flex items-center space-x-2 sm:py-4 sm:px-4 animate-pulse"
      style={{
        
        bottom: '60px',
        right: '2px',
        zIndex: '9999', // Ensure the button is on top of other elements
      }}
    >
      <FaWhatsapp className="text-2xl mr-2" />What's App
    </button>
  );
};

export default WhatsAppButton1;