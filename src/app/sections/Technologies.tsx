// Logo Images
import nextLogoImage from "../assets/logos/next-logo.png";
import tailwindLogoImage from "../assets/logos/tailwind-logo.png";
import reactLogoImage from "../assets/logos/react-logo.png";
import djangoLogoImage from "../assets/logos/django-logo.png";

// Components
import TechCard from "../components/TechCard";

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <h1 className="text-3xl text-yellow">&#60;Technologies/&#62;</h1>
      <div className="grid grid-cols-2">
        <TechCard title="<Next.js/>" logoImage={nextLogoImage}>
          Next.js is a React framework that gives you building blocks to create
          web applications.
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
  );
};

export default Technologies;
