import ContactForm from "../components/contactForm";
import Footer from "../components/footer";
import Hero from "../components/hero";

const Contact = () => {
    return (
      <div>
        <Hero image="https://images.unsplash.com/photo-1551434678-e076c223a692" title="Contact Us" tagline="Email: info@eduquestglobal.com" />
        <ContactForm />
        <Footer />
      </div>
    );
  };
  
  export default Contact;