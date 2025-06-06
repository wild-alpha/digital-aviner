"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import {
  FaBars,
  FaTiktok,
  FaInstagram,
  FaPinterest,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

// ✅ NEW: Props type
type NavbarProps = {
  className?: string;
};

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/#about-us" },
  { title: "Projects", path: "/#projects" },
  { title: "Features", path: "/#features" },
  { title: "Services", path: "/#services" },
  { title: "Contact Us", path: "/#contact-us" },
];

const socialLinks = [
  {
    icon: <FaTiktok />,
    href: "https://www.tiktok.com/@wedo_interior",
    hoverColor: "hover:text-teal-500",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/wedo_interior/",
    hoverColor: "hover:text-pink-500",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/company/wedointeriors/",
    hoverColor: "hover:text-blue-600",
  },
  {
    icon: <FaPinterest />,
    href: "https://www.pinterest.com/wedo_interior/",
    hoverColor: "hover:text-red-500",
  },
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/wedofitout",
    hoverColor: "hover:text-blue-500",
  },
];

// ✅ Add props to the function
const Navbar = ({ className = "" }: NavbarProps) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`transition-all duration-300 fixed top-0 left-0 right-0 z-20 ${
        scrolled || navbarOpen
          ? "bg-[#ffffff] bg-opacity-80 shadow-lg"
          : "bg-white"
      } ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto px-8 py-2">
        {/* Logo */}
        <Link href={"/"} className="flex items-center">
          <Image
            src="/images/DA-LOGO.svg"
            alt="Your Company Logo"
            width={250}
            height={5}
            className="w-40 md:w-40 lg:w-48 xl:w-56 mr-4"
            style={{
              paddingLeft: "0.5rem",
              paddingRight: "1rem",
            }}
          />
        </Link>

        {/* Mobile Menu Button */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-6 py-02 text-black"
            >
              <FaBars className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 text-black"
            >
              <IoMdCloseCircleOutline className="h-6 w-6" />
            </button>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="menu hidden md:flex items-center md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
          {/* Social Media Icons */}
          <div className="flex space-x-4 ml-8 text-black">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.hoverColor} transition-colors text-lg md:text-xl lg:text-2xl`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Overlay */}
      {navbarOpen ? (
        <MenuOverlay links={navLinks}>
          {/* Social Media Icons at the Bottom */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-8 text-black">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.hoverColor} transition-colors text-2xl`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </MenuOverlay>
      ) : null}
    </nav>
  );
};

export default Navbar;
