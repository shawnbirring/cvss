"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Questrial } from "next/font/google";
import Link from "next/link";
import { INavLink } from "@/models/INavLink";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

const questrial = Questrial({ subsets: ["latin"], weight: "400" });

export default function Navbar({ navLinks }: { navLinks: INavLink[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`${questrial.className} text-xl flex justify-between items-center text-black p-5`}
    >
      <strong>CVSS</strong>

      <div className="md:hidden">
        {isOpen ? (
          <FiX
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <FiMenu
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>

      {/* this is the nav links */}
      <ul className="flex">
        {navLinks.map((link) => (
          <motion.li
            key={link.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={link.url}
              className="p-2 mx-2 hover:underline underline-offset-4"
            >
              {link.name}
            </Link>
          </motion.li>
        ))}
      </ul>

      {isOpen && <Sidebar navLinks={navLinks} />}
    </nav>
  );
}
