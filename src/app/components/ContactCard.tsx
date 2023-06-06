import Image, { StaticImageData } from "next/image";

interface ContactCardProps {
  link: string;
  image: StaticImageData | string;
  title: string;
  info: string;
}

const ContactCard = ({ link, image, title, info }: ContactCardProps) => {
  return (
    <article className="hover:scale-110 transition-transform duration-300">
      <a
        href={link}
        target="_blank"
        className="flex items-center justify-center gap-10 "
      >
        <div className="flex justify-center items-center bg-dark w-40 h-40 rounded-full grow-0 shrink-0">
          <Image src={image} width={100} height={100} alt={title + "'s Logo"} />
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl text-green">{title}</h1>
          <h2 className="mt-4 text-2xl">{info}</h2>
        </div>
      </a>
    </article>
  );
};

export default ContactCard;
