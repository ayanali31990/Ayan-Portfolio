import { motion } from "framer-motion";
import matrixBg from "../assets/matrix.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* 🧩 Matrix Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.10]"
        style={{ backgroundImage: `url(${matrixBg})` }}
      />

      {/* 🔴 Subtle Red Glow */}
      <motion.div
        className="absolute w-[420px] h-[420px] bg-red-500/15 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Hi, I'm <span className="text-red-500">Ayan Ali</span>
        </h1>

        <p className="text-white mt-6 max-w-xl mx-auto">
          MERN Stack Developer crafting modern, scalable, and interactive web
          experiences.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg transition text-white">
            View Projects
          </button>
          <button className="border border-gray-700 hover:border-red-500 px-6 py-3 rounded-lg transition text-white">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
