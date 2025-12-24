import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaTools,
  FaCogs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiPostman,
  SiExpress,
  SiNetlify,
  SiVercel,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

const skillBoxStyle =
  "bg-[#0f0f0f] border border-gray-800 rounded-xl p-6 hover:border-red-500 hover:shadow-[0_0_40px_rgba(239,68,68,0.15)] transition";

const skillItemStyle =
  "flex items-center gap-3 bg-black/40 px-4 py-2 rounded-lg hover:scale-105 transition";

export default function Skills() {
  return (
    <section id="skills" className="bg-black text-white py-24 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          Technical <span className="text-red-500">Skills</span>
        </h2>
        <p className="text-gray-400 mt-4">
          Technologies and concepts I work with
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Languages */}
        <div className={skillBoxStyle}>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <FaCogs className="text-red-500" /> Languages
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <SkillItem
              icon={<FaHtml5 />}
              label="HTML5"
              color="text-orange-500"
            />
            <SkillItem
              icon={<FaCss3Alt />}
              label="CSS3"
              color="text-blue-500"
            />
            <SkillItem
              icon={<FaJs />}
              label="JavaScript"
              color="text-yellow-400"
            />
          </div>
        </div>

        {/* Frameworks */}
        <div className={skillBoxStyle}>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <FaReact className="text-red-500" /> Frameworks & Libraries
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <SkillItem
              icon={<FaReact />}
              label="React.js"
              color="text-cyan-400"
            />
            <SkillItem
              icon={<SiTailwindcss />}
              label="Tailwind CSS"
              color="text-sky-400"
            />
            <SkillItem
              icon={<FaNodeJs />}
              label="Node.js"
              color="text-green-500"
            />
            <SkillItem
              icon={<SiExpress />}
              label="Express.js"
              color="text-gray-300"
            />
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className={skillBoxStyle}>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <FaTools className="text-red-500" /> Tools & Platforms
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <SkillItem
              icon={<FaGitAlt />}
              label="Git"
              color="text-orange-500"
            />
            <SkillItem icon={<FaGithub />} label="GitHub" color="text-white" />
            <SkillItem
              icon={<SiPostman />}
              label="Postman"
              color="text-orange-400"
            />
            <SkillItem
              icon={<BiLogoVisualStudio />}
              label="VS Code"
              color="text-blue-400"
            />
            <SkillItem
              icon={<SiNetlify />}
              label="Netlify"
              color="text-teal-400"
            />
            <SkillItem icon={<SiVercel />} label="Vercel" color="text-white" />
            <SkillItem
              icon={<FaDatabase />}
              label="MongoDB"
              color="text-green-500"
            />
          </div>
        </div>

        {/* Core Concepts */}
        <div className={skillBoxStyle}>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <FaCogs className="text-red-500" /> Core Concepts
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <SkillItem label="REST APIs" />
            <SkillItem label="Responsive Design" />
            <SkillItem label="JWT Authentication" />
            <SkillItem label="State Management" />
            <SkillItem label="CRUD Operations" />
            <SkillItem label="Component Architecture" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* 🔹 Reusable Skill Item */
function SkillItem({ icon, label, color }) {
  return (
    <div className={skillItemStyle}>
      {icon && <span className={`${color} text-xl`}>{icon}</span>}
      <span className="text-sm">{label}</span>
    </div>
  );
}
