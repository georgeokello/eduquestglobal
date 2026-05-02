import ContactForm from "../components/contactForm";
import Footer from "../components/footer";
import Hero from "../components/hero";

const Contact = () => {
    return (
      <div>
        <Hero image="https://media.istockphoto.com/id/2189341261/photo/contact-us-customer-service-channel-concept-using-laptop-and-virtual-screen-icons-of-customer.jpg?s=612x612&w=0&k=20&c=olRPoOJ0LjmuHEQ9igXtNqPAf51VhEoBaH4sIKpWx3c=" title="Contact Us" tagline="Email: info@eduquestglobal.com" />
        <ContactForm />
        <Footer />
      </div>
    );
  };
  
  export default Contact;