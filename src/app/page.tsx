import Image from "next/image";

// Images
import profileImage from "./assets/profile.png";

// Logo Images
import logoImage from "./assets/logos/lf-logo.png";
import nextLogoImage from "./assets/logos/next-logo.png";
import tailwindLogoImage from "./assets/logos/tailwind-logo.png";
import reactLogoImage from "./assets/logos/react-logo.png";
import djangoLogoImage from "./assets/logos/django-logo.png";

// Projects Images
import productiveImage from "./assets/projects/productive.png";
import gitfavImage from "./assets/projects/gitfav.png";
import pokedexImage from "./assets/projects/pokedex.png";
import notesImage from "./assets/projects/notes.png";
import focusTimerImage from "./assets/projects/focustimer.png";
import portfolioImage from "./assets/projects/portfolio.png";

// Experience Images
import brasmacImage from "./assets/experiences/brasmac.png";

// Contact Images
import whatsappImage from "./assets/contacts/whatsapp.png";
import emailImage from "./assets/contacts/email.png";
import linkedinImage from "./assets/contacts/linkedin.png";

// Components
import Navlinks from "./components/Navlinks";
import TechCard from "./components/TechCard";
import ProjectsButton from "./components/ProjectsButton";
import ProjectCard from "./components/ProjectCard";
import ContactCard from "./components/ContactCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-light text-white">
      {/* Header */}
      <header className="flex gap-80 justify-center fixed z-50 top-0 w-full bg-dark h-28 items-center ">
        <div>
          <Image
            src={logoImage}
            width={150}
            height={150}
            alt="Luis Felipe Avila's Logo"
            className="ml-28"
          />
        </div>

        <nav className="flex gap-12  justify-center items-center ">
          <Navlinks>Presentation</Navlinks>
          <Navlinks>Technologies</Navlinks>
          <Navlinks>Projects</Navlinks>
          <Navlinks>Profissional Experience</Navlinks>
          <Navlinks>Contact</Navlinks>
        </nav>
      </header>

      {/* Presentation */}
      <section
        id="presentation"
        className="flex flex-col items-center justify-center min-h-screen"
      >
        <Image
          src={profileImage}
          width={250}
          height={250}
          alt="Luis's Profile Picture"
          className="rounded-full border-solid border-4 border-pink  "
        />

        <div className="flex flex-col items-center mt-10">
          <h1 className="text-3xl mb-7">Hi, I&apos;m Luís Felipe Ávila 👽 </h1>

          <h2 className="text-2xl text-pink">
            &#60;Full Stack Developer/&#62;
          </h2>
        </div>

        <p className="text-xl mt-7 leading-relaxed w-3/5 text-center">
          As a Fullstack Developer, I am excited to learn new skills and
          techniques to build effective and efficient applications. My passion
          for technology drives me to stay up-to-date with the latest industry
          trends and seek opportunities to apply my skills to innovative
          projects. I am eager to work in a team and learn from experienced
          colleagues, while continuing to hone my Fullstack development skills
          to become a highly skilled professional.
        </p>
      </section>

      <hr className=" border-pink w-4/5" />

      {/* Technologies */}
      <section
        id="technologies"
        className="flex flex-col items-center justify-center min-h-screen"
      >
        <h1 className="text-3xl text-yellow">&#60;Technologies/&#62;</h1>
        <div className="grid grid-cols-2">
          <TechCard title="<Next.js/>" logoImage={nextLogoImage}>
            Next.js is a React framework that gives you building blocks to
            create web applications.
          </TechCard>

          <TechCard title="<Tailwind CSS/>" logoImage={tailwindLogoImage}>
            Tailwind CSS is a utility-first CSS framework for rapidly building
            modern websites without ever leaving your HTML.
          </TechCard>

          <TechCard title="<React/>" logoImage={reactLogoImage}>
            The React.js framework is an open-source JavaScript framework and
            library developed by Facebook.
          </TechCard>

          <TechCard title="<Django/>" logoImage={djangoLogoImage}>
            Django is a high-level Python web framework that encourages rapid
            development and clean, pragmatic design.
          </TechCard>
        </div>
      </section>

      <hr className="mt-40 border-yellow w-4/5" />

      {/* Projectss */}
      <section
        id="projects"
        className="flex flex-col items-center justify-center min-h-screen"
      >
        <h1 className="mt-40  text-3xl text-green">&#60;Projects/&#62;</h1>

        <div className="grid grid-cols-3">
          <ProjectCard
            link="Portfolio"
            title="Portfolio Website"
            thumbnailProject={portfolioImage}
            description="Portfolio website."
          >
            <ProjectsButton>Next.js</ProjectsButton>
            <ProjectsButton>React.js</ProjectsButton>
            <ProjectsButton>Tailwind CSS</ProjectsButton>
          </ProjectCard>

          <ProjectCard
            link="Gitfav"
            title="Github Favorites"
            thumbnailProject={gitfavImage}
            description="Bookmark any github user."
          >
            <ProjectsButton>React.js</ProjectsButton>
            <ProjectsButton>React Query</ProjectsButton>
            <ProjectsButton>Github API</ProjectsButton>
          </ProjectCard>

          <ProjectCard
            link="Pokedex"
            title="Pokedex"
            thumbnailProject={pokedexImage}
            description="Search for pokemons."
          >
            <ProjectsButton>React.js</ProjectsButton>
            <ProjectsButton>React-Router</ProjectsButton>
            <ProjectsButton>PokeAPI</ProjectsButton>
          </ProjectCard>

          <ProjectCard
            link="Productive"
            title="Productive"
            thumbnailProject={productiveImage}
            description="Track your tasks."
          >
            <ProjectsButton>React.js</ProjectsButton>
            <ProjectsButton>React-Router</ProjectsButton>
            <ProjectsButton>Json-Server</ProjectsButton>
          </ProjectCard>

          <ProjectCard
            link="Notes"
            title="Notes"
            thumbnailProject={notesImage}
            description="Create notes and read them."
          >
            <ProjectsButton>React.js</ProjectsButton>
            <ProjectsButton>Json-Server</ProjectsButton>
          </ProjectCard>

          <ProjectCard
            link="FocusTimer"
            title="Focus Timer"
            thumbnailProject={focusTimerImage}
            description="Timer clock to study while listening to sounds."
          >
            <ProjectsButton>HTML</ProjectsButton>
            <ProjectsButton>CSS</ProjectsButton>
          </ProjectCard>

          <button className="flex flex-col items-center justify-center mt-28 hover:scale-110 transition-transform duration-300">
            <a href="https://github.com/luisavila97" target="_blank">
              <div className="bg-green py-7 px-4 rounded-full text-dark text-3xl">
                &rarr;
              </div>
              <h1 className="mt-8 text-xl">See more!</h1>
            </a>
          </button>
        </div>
      </section>

      <hr className="mt-40 border-green w-4/5" />

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

      <hr className="mt-40 border-pink w-4/5" />

      <section
        id="contact"
        className="flex flex-col items-center justify-center min-h-screen"
      >
        <h1 className="mt-40  text-3xl text-yellow">&#60;Contact Me/&#62;</h1>

        <div className="grid grid-cols-2 gap-96 mt-36 mb-32">
          <ContactCard
            link="https://api.whatsapp.com/send?phone=5551995611721"
            image={whatsappImage}
            title="Whatsapp"
            info="+55 51 9 9561-1721"
          />

          <ContactCard
            link="https://www.linkedin.com/in/luisfgd/"
            image={linkedinImage}
            title="LinkedIn"
            info="Luís Felipe Ávila"
          />
        </div>

        <ContactCard
          link="mailto:luisf.avila97@gmail.com"
          image={emailImage}
          title="E-mail"
          info="luisf.avila97@gmail.com"
        />
      </section>
    </main>
  );
}
