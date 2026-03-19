import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Education from "./sections/Education";
import Certificates from "./sections/Certificates";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_35%)]" />
      </div>

      <Navbar />

      <main className="mx-auto max-w-6xl px-6">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}