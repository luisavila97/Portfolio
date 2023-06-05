import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  link: string;
  title: string;
  thumbnailProject: StaticImageData | string;
  description: string;
  children: JSX.Element[];
}

export default function ProjectCard({
  link,
  title,
  thumbnailProject,
  description,
  children,
}: ProjectCardProps) {
  const url = "https://github.com/luisavila97";

  return (
    <article className="flex flex-col items-start justify-center ml-24 mr-24  mt-20  rounded-lg bg-dark shadow-2xl hover:scale-110 transition-transform duration-300">
      <a href={url + "/" + link} target="_blank">
        <div className="p-4">
          <h2 className="text-3xl mb-4 text-green">{title}</h2>
          <Image
            src={thumbnailProject}
            width={400}
            height={400}
            alt={title + " Project Thumbnail"}
          />
          <p className="text-xl mt-4 mb-4">{description}</p>

          {children}
        </div>
      </a>
    </article>
  );
}
