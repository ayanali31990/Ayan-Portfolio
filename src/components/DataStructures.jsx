import AnimatedWrapper from "./AnimatedWrapper";

const topics = [
  "Objects",
  "HashMap",
  "Set",
  "String",
  "Array",
  "Time Complexity",
  "Space Optimization",
];

export default function DataStructures() {
  return (
    <section className="bg-black text-white py-24 px-10">
      <AnimatedWrapper>
        <h2 className="text-3xl font-bold text-center mb-10">
          Data Structures Expertise
        </h2>
      </AnimatedWrapper>

      <div className="flex flex-wrap justify-center gap-4">
        {topics.map((topic, i) => (
          <AnimatedWrapper key={i} delay={i * 0.1}>
            <span className="px-5 py-2 bg-gray-900 rounded-full border border-gray-700 hover:border-red-500 hover:scale-110 transition cursor-pointer">
              {topic}
            </span>
          </AnimatedWrapper>
        ))}
      </div>
    </section>
  );
}
