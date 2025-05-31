import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Server,
  GitBranch,
  Paintbrush,
  Type,
  TerminalSquare,
  Settings2,
  Database,
  Coffee,
  Info,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: Code, level: 90 },
      { name: "Next.js", icon: Code, level: 85 },
      { name: "Tailwind CSS", icon: Paintbrush, level: 95 },
      { name: "TypeScript", icon: Type, level: 85 },
      { name: "JavaScript", icon: TerminalSquare, level: 95 },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "React Native", icon: Smartphone, level: 80 },
      { name: "Expo", icon: Smartphone, level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server, level: 75 },
      { name: "MongoDB", icon: Database, level: 70 },
      { name: "Java (Basic)", icon: Coffee, level: 60 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", icon: GitBranch, level: 90 },
      { name: "Problem Solving", icon: Settings2, level: 80 },
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-6 md:px-24 py-24 bg-gradient-to-b from-[#f8fafc] to-[#eef2ff]"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-16">
        My Skills & Stack
      </h2>

      <div className="grid gap-16 max-w-6xl mx-auto">
        {skillCategories.map((category, catIdx) => (
          <div key={catIdx}>
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {category.skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="group relative bg-white rounded-xl p-5 shadow hover:shadow-lg transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-accent bg-accent/10 p-3 rounded-full">
                        <Icon className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-semibold text-gray-700 break-words max-w-[8rem]">
                        {skill.name}
                      </p>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4 w-full h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-accent rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>

                    {/* Tooltip on Hover */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex items-center gap-1 text-xs text-gray-500 bg-white border px-2 py-1 rounded shadow-sm">
                        <Info className="w-3 h-3" />
                        {skill.level}% confident
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
