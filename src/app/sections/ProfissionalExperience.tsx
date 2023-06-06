import Image from "next/image";

// Experience Images
import brasmacImage from "../assets/experiences/brasmac.png";
import ProjectsButton from "../components/ProjectsButton";

const ProfissionalExperience = () => {
  return (
    <section
      id="profissionalexperience"
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <h1 className="mt-40  text-3xl text-pink">
        &#60;Professional Experience/&#62;
      </h1>

      <article className="rounded-lg bg-dark py-8 px-8 mt-20 flex items-center justify-center flex-col">
        <h1 className="text-2xl text-yellow">Brasmac Engenharia</h1>

        <div className="flex flex-col items-center justify-center mt-10 rounded-lg bg-light">
          <Image
            src={brasmacImage}
            width={300}
            height={300}
            alt="Brasmac Logo"
          />
        </div>

        <p className="text-xl my-8">
          Responsible to develop the frontend of the website
        </p>

        <div>
          <ProjectsButton>React.js</ProjectsButton>
          <ProjectsButton>Tailwind CSS</ProjectsButton>
        </div>
      </article>
    </section>
  );
};

export default ProfissionalExperience;
