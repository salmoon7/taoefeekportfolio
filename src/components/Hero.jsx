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
          Crafting <span className="text-accent">Web</span> &{" "}
          <span className="text-accent">Mobile</span> Experiences{" "}
          <br className="hidden sm:block" /> That Speak Creativity.
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
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center sm:justify-start"
        >
          <AnchorLink
            href="#projects"
            className="w-full sm:w-auto text-center border-2 border-accent text-accent px-6 py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-accent hover:text-white transition duration-300 ease-in-out"
          >
            View Projects
          </AnchorLink>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
