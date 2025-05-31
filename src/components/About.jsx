import React from "react";
import { motion } from "framer-motion";
import { Palette, Cpu, Heart, BookOpen, Smile } from "lucide-react";
import avatar from "../assets/avatar2.JPG";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};
const featuresContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 md:px-24 py-24 flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-indigo-50"
    >
      <motion.div
        className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Avatar */}
        <motion.div
          variants={fadeInUp}
          className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full shadow-2xl bg-white overflow-hidden"
        >
          <img
            src={avatar}
            alt="Taofeek Abdul Salam"
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </motion.div>

        {/* Content */}
        <motion.div className="flex-1 text-left" variants={fadeInUp}>
          <h2 className="text-4xl font-extrabold text-gray-900 font-heading mb-6 leading-snug">
            About Me — A Passion for Creativity & Impact
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed tracking-wide font-medium mb-10 max-w-3xl">
            I'm{" "}
            <span className="text-gray-900 font-semibold">
              Taofeek Abdul Salam
            </span>
            , a frontend developer driven by curiosity and creativity. I'm
            intrigued by how far technology has simplified our lives, and I’m
            committed to contributing through solutions that truly impact
            people.
          </p>

          {/* Features */}
          {/* Features */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mb-12"
            variants={featuresContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                icon: <Palette className="text-accent w-8 h-8" />,
                text: "Lover of art and design — I believe beautiful UI inspires great user experiences.",
              },
              {
                icon: <Cpu className="text-accent w-8 h-8" />,
                text: "Fascinated by how far technology has simplified and empowered our lives.",
              },
              {
                icon: <Heart className="text-accent w-8 h-8" />,
                text: "Passionate about building impactful tools and contributing to meaningful change.",
              },
              {
                icon: <BookOpen className="text-accent w-8 h-8" />,
                text: "I enjoy reading — a good book opens new ideas and sharpens the mind.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-accent/10 rounded-full p-2">{item.icon}</div>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Fun Fact */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-4 bg-gradient-to-r from-accent to-accent2 text-white rounded-xl p-6 shadow-lg max-w-xl"
          >
            <Smile className="w-10 h-10 bg-white/20 p-2 rounded-full" />
            <p className="font-medium leading-snug text-gray-400">
              <span className="font-semibold">Fun Fact:</span> When not coding,
              I enjoy exploring digital art, sketching, and diving into great
              books — keeping creativity and knowledge flowing!
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
