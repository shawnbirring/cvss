"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoIosMenu } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/gallery", text: "Gallery" },
    { href: "/contact", text: "Contact" },
    { href: "/appointment", text: "Book" },
  ];

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="bg-white border-gray-200 sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
            width={32}
            height={32}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            CVSS
          </span>
        </Link>
        <button
          onClick={toggleNav}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open main menu</span>
          <IoIosMenu className="w-6 h-6" aria-hidden="true" />
        </button>
        <div
          className={`${isOpen ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isScrolled && <hr className="border-gray-200 mx-8 border-t-1" />}
    </nav>
  );
}
