'use client';

import React from 'react';
import { FaMobileScreen } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#8a8a8a] text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
        {/* Left: Logo + Navigation */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="mb-4">
            <Image
              src="/images/logo.webp"
              alt="Logo"
              width={190}
              height={60}
              className="h-auto w-auto"
              priority
            />
          </Link>
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-sm">
            <Link href="/" className="hover:text-[#c38d90]">Home</Link>
            <Link href="/#about-us" className="hover:text-[#c38d90]">About Us</Link>
            <Link href="/#projects" className="hover:text-[#c38d90]">Projects</Link>
            <Link href="/#features" className="hover:text-[#c38d90]">Features</Link>
            <Link href="/#areas" className="hover:text-[#c38d90]">Areas</Link>
            <Link href="/#services" className="hover:text-[#c38d90]">Services</Link>
            <Link href="/#contact" className="hover:text-[#c38d90]">Contact Us</Link>
          </nav>
        </div>

        {/* Right: Contact Info */}
        <div className="text-sm space-y-2">
          <div className="flex items-center">
            <FaMobileScreen className="text-[#c38d90] w-4 h-4 mr-2" />
            <span>+971 58 807 5603</span>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-[#c38d90] w-4 h-4 mr-2" />
            <span>+971 42 762 520</span>
          </div>
          <div className="flex items-center">
            <IoIosMail className="text-[#c38d90] w-4 h-4 mr-2" />
            <span>INFO@WDFITOUT.COM</span>
          </div>
          <div className="flex items-start">
            <IoLocationSharp className="text-[#c38d90] w-4 h-4 mr-2 mt-1" />
            <span>
              OFFICE - WH-05 A <br />
              JABEL ALI INDUSTRIAL 1 <br />
              DUBAI, UAE
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-black mt-6">
        We Do &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
