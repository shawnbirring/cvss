import { INavLink } from "@/models/INavLink";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Sidebar({ navLinks }: { navLinks: INavLink[] }) {
  return (
    <aside className="fixed top-0 right-0 w-64 h-screen">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
        <ul className="space-y-2 font-medium">
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={link.url} className="p-2 mx-2 rounded">
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
