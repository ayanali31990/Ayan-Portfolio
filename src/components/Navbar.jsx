import { motion } from "framer-motion";

const navItems = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] bg-black/70 backdrop-blur-md px-10 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-red-500 text-xl font-bold">
        <a
          href={`#hero`}
          className="hover:bg-red-700 p-2 hover:text-white rounded-2xl transition"
        >
          AA
        </a>
      </h1>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-8 text-gray-300">
        {navItems.map((item) => (
          <motion.li
            key={item.id}
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer"
          >
            <a href={`#${item.id}`} className="hover:text-red-500 transition">
              {item.label}
            </a>
          </motion.li>
        ))}
      </ul>

      {/* CTA */}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-red-500 px-5 py-2 rounded-full text-white font-medium cursor-pointer"
      >
        Hire Me
      </motion.a>
    </nav>
  );
}
