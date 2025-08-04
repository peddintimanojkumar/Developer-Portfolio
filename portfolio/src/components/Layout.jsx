import React from "react";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import BlogList from "./BlogList";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./NavBar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <BlogList />
      <Contact />
      <Footer />
    </>
  );
}
