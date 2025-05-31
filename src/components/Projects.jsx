import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const workExperiences = [
  {
    company: "Medimap",
    role: "Mobile App Developer",
    period: "2024 - Present",
    tech: ["Expo"],
    impact:
      "Developed cross-platform mobile apps using Expo, improving patient record access and appointment booking by 40%.",
  },
  {
    company: "PlotXpert",
    role: "Frontend Developer",
    period: "2023 - Present",
    tech: ["React", "Tailwind"],
    impact:
      "Built scalable UI for land management platform, boosting usability and performance across dashboards.",
  },
  {
    company: "Smart Approaches",
    role: "Mobile App Developer",
    period: "2023",
    tech: ["React Native"],
    impact:
      "Led the mobile development of a logistics app using bare React Native, increasing operational efficiency by 30%.",
  },
  {
    company: "Tomorrow AI",
    role: "Frontend Developer",
    period: "2023 - 2024",
    tech: ["Next.js", "TypeScript"],
    impact:
      "Implemented dynamic AI dashboard features and improved UI consistency across the app.",
  },
];

const projects = [
  {
    name: "Gira App",
    description:
      "Mobile solution for resident verification and access control.",
    live: "https://giraweb.vercel.app/",
    github: "https://github.com/salmoon7/gira-app",
  },
  {
    name: "Adamsfoam",
    description: "Corporate website for a foam manufacturing company.",
    live: "https://adamsfoam.ng",
    github: "https://github.com/salmoon7/adamsfoam",
  },
  {
    name: "Zylo Converta",
    description: "Real-time file and media conversion web app.",
    live: "https://zylo-converter.vercel.app/",
    github: "https://github.com/salmoon7/zylo-converta",
  },
  {
    name: "Naturex",
    description: "E-commerce platform for natural products.",
    live: "https://vrvisual.netlify.app/",
    github: "https://github.com/salmoon7/naturex",
  },
  {
    name: "FlashCard Web",
    description: "Interactive flashcard website to aid learning.",
    live: "https://brineflashcards.netlify.app/",
    github: "https://github.com/salmoon7/flashcard-web",
  },
  {
    name: "Crest Video Conferencing",
    description: "Secure video conferencing app with real-time chat.",
    live: "https://crestmeet.live",
    github: "https://github.com/salmoon7/crest-meet",
  },
  {
    name: "Adamsfoam",
    description: "Corporate website for a foam manufacturing company.",
    live: "https://adamsfoam.ng",
    github: "https://github.com/salmoon7/adamsfoam",
  },
  {
    name: "CoffeeShop Mobile",
    description:
      "Mobile app built with bare React Native for a coffee business.",
    live: "https://coffeeshopapp.live",
    github: "https://github.com/yourusername/coffeeshop-native",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const ProjectsExperience = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section className="px-6 md:px-24 py-24 bg-white" id="projects">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-16 text-center">
        Work Experience & Projects
      </h2>

      <div className="grid gap-16 md:grid-cols-2">
        {/* Work Experience */}
        <div>
          <h3 className="text-2xl font-bold mb-6 border-l-4 border-accent pl-4">
            Work Experience
          </h3>
          <div className="space-y-8">
            {workExperiences.map((job, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-gray-50 cursor-default"
              >
                <h4 className="text-lg font-semibold text-gray-900">
                  {job.role} @ {job.company}
                </h4>
                <p className="text-sm text-gray-500 mb-2">
                  {job.period} — {job.tech.join(", ")}
                </p>
                <p className="text-gray-700">{job.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-6 border-l-4 border-accent pl-4">
            Projects
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {visibleProjects.map((project, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="border border-gray-200 rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow bg-gray-50"
              >
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {project.name}
                  </h4>
                  <p className="text-gray-600 text-sm mt-2 mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center gap-6 mt-auto pt-2 border-t border-gray-300">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-accent hover:underline font-semibold"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-gray-900"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {!showAll && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAll(true)}
                className="inline-block px-6 py-2 rounded-full bg-accent text-white font-semibold hover:bg-accent/90 transition"
              >
                Show More Projects
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsExperience;
