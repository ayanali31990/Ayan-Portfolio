import AnimatedWrapper from "./AnimatedWrapper";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="bg-black text-white py-24 px-10">
      <AnimatedWrapper>
        <h2 className="text-4xl font-bold text-center mb-16">
          Education & <span className="text-red-500">Certifications</span>
        </h2>
      </AnimatedWrapper>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Education */}
        <AnimatedWrapper>
          <div>
            <h3 className="text-2xl font-semibold flex items-center gap-3 mb-6">
              <FaGraduationCap className="text-red-500" /> Education
            </h3>

            <div className="space-y-6">
              {[
                ["2021 - 2025", "B.Tech CSE", "VCT, AKTU"],
                ["2019 - 2020", "XII (CBSE)", "Aligarh Public School"],
              ].map((e, i) => (
                <div
                  key={i}
                  className="bg-gray-900 p-6 rounded-xl border-l-4 border-red-500"
                >
                  <span className="text-red-500 text-sm">{e[0]}</span>
                  <h4 className="font-semibold">{e[1]}</h4>
                  <p className="text-gray-400 text-sm">{e[2]}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedWrapper>

        {/* Certifications */}
        <AnimatedWrapper delay={0.2}>
          <div>
            <h3 className="text-2xl font-semibold flex items-center gap-3 mb-6">
              <FaCertificate className="text-red-500" /> Certifications
            </h3>

            {[
              ["Web Development Fundamentals", "IBM"],
              ["Web Development Bootcamp", "Udemy"],
              ["Postman API Student Expert", "Postman"],
            ].map((c, i) => (
              <div
                key={i}
                className="bg-gray-900 p-5 rounded-xl mb-4 hover:scale-105 transition"
              >
                <h4 className="font-medium">{c[0]}</h4>
                <p className="text-gray-400 text-sm">{c[1]}</p>
              </div>
            ))}
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
