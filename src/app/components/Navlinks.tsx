interface NavlinksProps {
  children: string;
}

export default function Navlinks({ children }: NavlinksProps) {
  return (
    <a
      className=" text-pink hover:text-white transition-colors duration-200  "
      href={`#${children.replace(/\s/g, "").toLowerCase()}`}
    >
      &#60;{children}/&#62;
    </a>
  );
}
