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
    tech: ["React", "TypeScript", "GitHub"],
    impact:
      "Implemented dynamic AI dashboard features and improved UI consistency across the app.",
  },
];

const projects = [
  {
    name: "Gira App",
    description:
      "A secure mobile platform for resident identity verification and digital access control. Integrated robust backend APIs for user authentication and visitor logs.",
    live: "https://giraweb.vercel.app/",
    github: "https://github.com/salmoon7/gira-app",
    tech: "Expo, React Native, API",
  },
  {
    name: "Adamsfoam (Corporate Website)",
    description:
      "Modern business website for a foam manufacturing company. Designed and developed the frontend and integrated backend CMS for product updates.",
    live: "https://adamsfoams.netlify.app/",
    github: "https://github.com/salmoon7/adamsfoam",
    tech: ["React, Tailwind, Netlify"],
  },
  {
    name: "Zylo Converta",
    description:
      "Real-time media and document converter built with React. Integrated external APIs for fast file transformation and ensured smooth UX with loading feedback.",
    live: "https://zylo-converter.vercel.app/",
    github: "https://github.com/salmoon7/zylo-converta",
    tech: ["Next, API, File Handling"],
  },
  {
    name: "BrineGPT",
    description:
      "Front-end clone of Gemini with Gemini 2.0 API integration. Focused on seamless AI interaction and styled to mimic production-ready UI components.",
    live: "https://geminiclone-taofeek.netlify.app/",
    github: "https://github.com/salmoon7/geminiclone",
    tech: ["React, Gemini API, Tailwind"],
  },
  {
    name: "Naturex (Mobile App)",
    description:
      "Nature exploration mobile app for enthusiasts. Developed using React Native with local data persistence and sleek animations.",
    live: "https://github.com/salmoon7/naturex",
    github: "https://github.com/salmoon7/naturex",
    tech: ["React Native Cli, AsyncStorage"],
  },
  {
    name: "VR Visual Landing Page",
    description:
      "High-impact landing page for a VR brand with light/dark mode support. Responsive UI with smooth transitions and immersive visual appeal.",
    live: "https://vrvisual.netlify.app/",
    github: "https://github.com/salmoon7/metaverse",
    tech: ["React, Tailwind, Dark Mode"],
  },
  {
    name: "FlashCard Web",
    description:
      "Interactive flashcard web app built with React to support spaced repetition learning. Supports localStorage, animations, and dynamic editing.",
    live: "https://brineflashcards.netlify.app/",
    github: "https://github.com/salmoon7/flashcard-web",
    tech: ["React, LocalStorage, Animations"],
  },

  {
    name: "MeetSync Video Conferencing",
    description:
      "Secure, real-time video conferencing platform with integrated WebRTC and live chat. Built using React, socket.io, and peer-to-peer connections.",
    live: "https://meetsyc.netlify.app/",
    github: "https://github.com/salmoon7/MeetSync",
    tech: ["React, WebRTC, Socket.io"],
  },
  {
    name: "CoffeeShop Mobile",
    description:
      "A coffee ordering mobile app developed in pure React Native. Managed global state with Context API and custom navigation flow.",
    live: "https://github.com/salmoon7/NatureXMobileApp",
    github: "https://github.com/salmoon7/NatureXMobileApp",
    tech: ["React Native, Context API"],
  },
  {
    name: "E-commerce Mobile App",
    description:
      "Complete mobile commerce app built with Expo and React Native. Includes product listing, cart logic, API integration and payment flow mockup.",
    live: "https://github.com/salmoon7/E-commerce-MobileApp/",
    github: "https://github.com/salmoon7/E-commerce-MobileApp/",
    tech: ["React Native, Expo, Stripe Mock"],
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
                className="relative group border border-gray-200 rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow bg-gray-50"
              >
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {project.name}
                  </h4>
                  <p className="text-gray-600 text-sm mt-2 mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tooltip (only for first two projects) */}
                {i < 12 && project.tech && (
                  <div className="absolute top-2 right-2 hidden group-hover:block bg-white border border-gray-300 rounded px-3 py-1 text-xs text-gray-600 shadow-md z-10">
                    Tech: {project.tech}
                  </div>
                )}

                <div className="flex items-center gap-6 mt-auto pt-2 border-t border-gray-300 text-sm">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-accent hover:underline font-semibold"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-gray-900"
                  >
                    <Github className="w-4 h-4 mr-1" />
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
