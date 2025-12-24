import { FaCode, FaRocket, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-24 px-6 md:px-16"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          Passionate about creating{" "}
          <span className="text-red-500">digital experiences</span>
        </h2>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-16 items-start">
        
        {/* LEFT TEXT */}
        <div className="space-y-6 text-gray-400 leading-relaxed">
          <p>
            Hello, I'm <span className="text-white font-medium">Ayan Ali</span>,
            a passionate Frontend Developer specializing in creating modern,
            responsive, and user-centric web applications.
          </p>

          <p>
            With a strong foundation in React.js, Tailwind CSS, and JavaScript,
            I enjoy building clean interfaces that focus on performance,
            accessibility, and great user experience.
          </p>

          <p>
            I love turning complex problems into elegant solutions and
            continuously improving my skills by working on real-world projects.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid sm:grid-cols-2 gap-6">
          
          {/* Card */}
          <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-6 hover:border-red-500 transition">
            <FaCode className="text-red-500 text-2xl mb-4" />
            <h3 className="font-semibold mb-2">Clean Code</h3>
            <p className="text-gray-400 text-sm">
              Writing maintainable, readable, and scalable code.
            </p>
          </div>

          <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-6 hover:border-red-500 transition">
            <FaRocket className="text-red-500 text-2xl mb-4" />
            <h3 className="font-semibold mb-2">Performance</h3>
            <p className="text-gray-400 text-sm">
              Optimized UI with fast load times and smooth interactions.
            </p>
          </div>

          <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-6 hover:border-red-500 transition">
            <FaMobileAlt className="text-red-500 text-2xl mb-4" />
            <h3 className="font-semibold mb-2">Responsive Design</h3>
            <p className="text-gray-400 text-sm">
              Mobile-first designs that work across all devices.
            </p>
          </div>

          <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-6 hover:border-red-500 transition">
            <FaPaintBrush className="text-red-500 text-2xl mb-4" />
            <h3 className="font-semibold mb-2">Modern UI</h3>
            <p className="text-gray-400 text-sm">
              Clean layouts with modern aesthetics and animations.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
