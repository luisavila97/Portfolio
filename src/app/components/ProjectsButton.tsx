interface ProjectsButtonProps {
  children: string;
}

function ProjectsButton({ children }: ProjectsButtonProps) {
  return (
    <button className=" cursor-default bg-transparent text-green font-semibold py-2 px-2 m-2 border border-green rounded">
      {children}
    </button>
  );
}

export default ProjectsButton;
