"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Questrial } from "next/font/google";
import Link from "next/link";
import { INavLink } from "@/models/INavLink";

const questrial = Questrial({ subsets: ["latin"], weight: "400" });

export default function Navbar({ navLinks }: { navLinks: INavLink[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`${questrial.className} text-xl flex justify-between items-center text-black p-5`}
    >
      <span>
        <strong>CVSS</strong>
      </span>

      <div className="md:hidden">
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:flex`}>
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.name}
            className="p-2 mx-2 rounded hover:underline underline-offset-4"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
