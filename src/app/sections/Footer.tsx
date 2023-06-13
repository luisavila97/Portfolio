const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-5">
      <button className="flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300">
        <a href="#contact">
          <div className="bg-green w-14 ml-3 py-3.5 px-3 rounded-full text-dark text-xl">
            &darr;
          </div>
          <h3 className="mb-8 mt-4 text-m">Contact me</h3>
        </a>
      </button>
    </footer>
  );
};

export default Footer;
