// Contact Images
import whatsappImage from "../assets/contacts/whatsapp.png";
import emailImage from "../assets/contacts/email.png";
import linkedinImage from "../assets/contacts/linkedin.png";

// Components
import ContactCard from "../components/ContactCard";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <h1 className="mt-40  text-3xl text-yellow">&#60;Contact Me/&#62;</h1>

      <div className="grid grid-cols-2 gap-96 mt-36 mb-32">
        <ContactCard
          link="https://api.whatsapp.com/send?phone=5551995611721"
          image={whatsappImage}
          title="Whatsapp"
          info="+55 51 9 9561-1721"
        />

        <ContactCard
          link="https://www.linkedin.com/in/luisfgd/"
          image={linkedinImage}
          title="LinkedIn"
          info="Luís Felipe Ávila"
        />
      </div>

      <ContactCard
        link="mailto:luisf.avila97@gmail.com"
        image={emailImage}
        title="E-mail"
        info="luisf.avila97@gmail.com"
      />
    </section>
  );
};

export default Contact;
