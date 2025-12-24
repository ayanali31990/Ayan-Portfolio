import { motion } from "framer-motion";
import AnimatedWrapper from "./AnimatedWrapper";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A personal portfolio showcasing projects and skills with clean, responsive layout.",
    points: [
      "Multiple sections",
      "Responsive design",
      "Modern CSS techniques",
      "Clean visual consistency",
    ],
    tags: ["HTML", "CSS", "Flexbox"],
    gradient: "from-sky-500 to-blue-700",
  },
  {
    title: "E-Commerce Website",
    desc: "Fully functional e-commerce app with cart & dynamic state management.",
    points: [
      "Product listing & details",
      "Add-to-cart",
      "Dynamic cart updates",
      "Component-based architecture",
    ],
    tags: ["React", "useState", "useEffect"],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "AI Study Planner",
    desc: "AI-powered planner generating personalized schedules with PDF export.",
    points: [
      "AI-generated schedules",
      "Task management",
      "One-click PDF",
      "Responsive UI",
    ],
    tags: ["React", "Gemini API", "AI"],
    gradient: "from-orange-500 to-amber-600",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-24 px-10">
      <AnimatedWrapper>
        <h2 className="text-4xl font-bold text-center mb-14">
          Featured <span className="text-red-500">Projects</span>
        </h2>
      </AnimatedWrapper>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <AnimatedWrapper key={i} delay={i * 0.2}>
            <motion.div
              whileHover={{ y: -10 }}
              className="rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-red-500 transition"
            >
              <div
                className={`h-24 bg-gradient-to-r ${p.gradient} flex items-center px-6`}
              >
                <div className="bg-black/30 p-3 rounded-xl">📦</div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-gray-400 text-sm">{p.desc}</p>

                <ul className="text-sm space-y-1">
                  {p.points.map((pt, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-red-500">•</span> {pt}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-800 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-4">
                  <button className="flex-1 bg-red-600 hover:bg-red-700 transition py-2 rounded-lg flex justify-center items-center gap-2">
                    <FaExternalLinkAlt /> View Project
                  </button>
                  <button className="p-3 bg-gray-800 rounded-lg hover:scale-110 transition">
                    <FaGithub />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatedWrapper>
        ))}
      </div>
    </section>
  );
}
