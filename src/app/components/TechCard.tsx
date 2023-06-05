import Image, { StaticImageData } from "next/image";

interface TechCardProps {
  logoImage: StaticImageData | string;
  title: string;
  children: string;
}

export default function TechCard({
  logoImage,
  children,
  title,
}: TechCardProps) {
  return (
    <article className="flex items-center justify-center ml-48 mt-28">
      <div className="flex justify-center items-center bg-dark w-40 h-40 rounded-full grow-0 shrink-0  ">
        <Image src={logoImage} width={140} height={140} alt={title + " Logo"} />
      </div>
      <div className="ml-10">
        <h1 className="text-3xl text-yellow">{title}</h1>
        <p className="w-3/5 mt-4 leading-relaxed">{children}</p>
      </div>
    </article>
  );
}
