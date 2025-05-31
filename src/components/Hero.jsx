import React from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariantsUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-24 py-24 bg-[#f9fafb]"
    >
      <motion.div
        className="max-w-3xl text-center md:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariantsUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 font-heading mb-6"
        >
          Building Web Experiences <br /> That Speak Creativity.
        </motion.h1>

        <motion.p
          variants={itemVariantsUp}
          className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed tracking-wide font-medium mb-10"
        >
          I’m <strong className="text-gray-800">Taofeek Abdul Salam</strong>, a
          frontend developer passionate about creating intuitive digital
          experiences with React, Next.js, and React Native. I focus on clean
          design and seamless interactions.
        </motion.p>

        <motion.div
          variants={itemVariantsUp}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start"
        >
          <a
            href="/Taofeek_Abdul_Salam_Resume.pdf"
            download
            className="bg-accent text-white px-7 py-3 rounded-full font-semibold shadow-md hover:bg-accent2 transition-transform duration-300 hover:scale-105"
          >
            Download Resume
          </a>

          <AnchorLink
            href="#projects"
            className="border-2 border-accent text-accent px-7 py-3 rounded-full font-semibold hover:bg-accent hover:text-white transition-transform duration-300 hover:scale-105"
          >
            View Projects
          </AnchorLink>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
