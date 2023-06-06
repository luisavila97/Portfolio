// Projects Images
import productiveImage from "../assets/projects/productive.png";
import gitfavImage from "../assets/projects/gitfav.png";
import pokedexImage from "../assets/projects/pokedex.png";
import notesImage from "../assets/projects/notes.png";
import focusTimerImage from "../assets/projects/focustimer.png";
import portfolioImage from "../assets/projects/portfolio.png";

// Components
import ProjectsButton from "../components/ProjectsButton";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
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
  );
};

export default Projects;
