"use client";

import About from "./about/page";
import Blog from "./blog/page";
import Contact from "./contact/page";
import Education from "./education/page";
import Home from "./home/page";
import Projects from "./projects/page";
import Footer from "./shared/footer/page";
import Skills from "./skills/page";

export default function mainPage() {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
