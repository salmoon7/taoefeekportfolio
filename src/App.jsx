import React from "react";

import Hero from "./components/Hero";
import ModernNavbar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectsExperience from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ModernNavbar />

      <Hero />
      <About />
      <Skills />
      <ProjectsExperience />
      <Footer />
    </>
  );
}

export default App;
