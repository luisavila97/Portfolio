import Image from "next/image";

// Logo Images
import logoImage from "../assets/logos/lf-logo.png";

// Components
import Navlinks from "../components/Navlinks";

const Header = () => {
  return (
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
  );
};

export default Header;
