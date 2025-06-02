import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Home", "About", "Projects", "Contact"];

const ModernNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-primary font-heading">
          <div className="text-xl bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow">
            TS
          </div>
          <span className="text-xl font-semibold">Taofeek</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-600 hover:text-accent font-medium transition duration-300"
            >
              {link}
            </a>
          ))}
          <a
            href="/my-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#14b8a6] text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-[#0d9488] transition duration-300"
          >
            My Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none relative z-[60]"
        >
          {isOpen ? (
            <X size={28} className="text-gray-800" />
          ) : (
            <Menu size={28} className="text-gray-800" />
          )}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/30 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleMenu}
              />

              {/* Side Drawer */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.35 }}
                className="fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white z-50 p-8 pt-24 shadow-xl rounded-l-2xl flex flex-col gap-6"
              >
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={toggleMenu}
                    className="text-lg text-gray-700 font-semibold border-b pb-2 hover:text-accent transition"
                  >
                    {link}
                  </a>
                ))}
                <a
                  href="/my-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#14b8a6] text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-[#0d9488] transition duration-300"
                >
                  My Resume
                </a>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default ModernNavbar;
