import Background from "@/components/Background";
import BootScreen from "@/components/BootScreen";
import CRTOverlay from "@/components/CRTOverlay";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import EducationCerts from "@/components/EducationCerts";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { marqueeWords } from "@/data/resume";

export default function Home() {
  return (
    <>
      <BootScreen />
      <Background />
      <CRTOverlay />
      <Cursor />
      <Nav />

      <main className="relative z-10">
        <Hero />
        <Marquee words={marqueeWords} accent="cyan" />
        <About />
        <Projects />
        <Marquee
          words={[
            "SEARCH MODERNIZATION",
            "ONTOLOGY COMPOSER",
            "AGENT BUILDER",
            "NEXUS AI",
            "RETAILPILOT",
          ]}
          accent="magenta"
          reverse
          duration={24}
        />
        <Skills />
        <Experience />
        <EducationCerts />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
