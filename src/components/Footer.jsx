import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 px-10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
      {/* Logo / Name */}
      <div>
        <h3 className="text-red-500 font-bold text-lg">AA</h3>
      </div>

      {/* Social Links */}
      <div className="flex gap-6 text-xl">
        <a
          href="https://github.com/ayanali31990"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-red-500 hover:scale-110 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/ayan-ali-8019832b6/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-red-500 hover:scale-110 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:ayan.softdev@gmail.com"
          aria-label="Email"
          className="hover:text-red-500 hover:scale-110 transition"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-sm">
        Made by <span className="text-red-500 font-medium">Ayan Ali</span>
      </p>
    </footer>
  );
}
