// Sections
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import ProfissionalExperience from "./sections/ProfissionalExperience";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies";
import Presentation from "./sections/Presentation";
import Header from "./sections/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-light text-white">
      {/* Header */}
      <Header />

      {/* Presentation */}
      <Presentation />

      <hr className=" border-pink w-4/5" />

      {/* Technologies */}
      <Technologies />

      <hr className="mt-40 border-yellow w-4/5" />

      {/* Projectss */}
      <Projects />

      <hr className="mt-40 border-green w-4/5" />

      {/* Profissional Experience */}
      <ProfissionalExperience />

      <hr className="mt-40 border-pink w-4/5" />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
