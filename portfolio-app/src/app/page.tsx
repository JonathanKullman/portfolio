'use client';
import Hero from "./pages/hero"
import About from "./pages/about"
import Navbar from "./components/global/navbar";
import Experience from "./pages/experience";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Footer from "./pages/footer";

export default function Home() {
  return (
    <main id="home" className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-between p-24">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      </div>
      <div className="p-0 flex-col w-full flex">
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      </div>
      
    </main>
    
  );
}
