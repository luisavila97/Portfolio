import Image from "next/image";

// Images
import profileImage from "../assets/profile.png";

const Presentation = () => {
  return (
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

        <h2 className="text-2xl text-pink">&#60;Full Stack Developer/&#62;</h2>
      </div>

      <p className="text-xl mt-7 leading-relaxed w-3/5 text-center">
        As a Fullstack Developer, I am excited to learn new skills and
        techniques to build effective and efficient applications. My passion for
        technology drives me to stay up-to-date with the latest industry trends
        and seek opportunities to apply my skills to innovative projects. I am
        eager to work in a team and learn from experienced colleagues, while
        continuing to hone my Fullstack development skills to become a highly
        skilled professional.
      </p>
    </section>
  );
};

export default Presentation;
