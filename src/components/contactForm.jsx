import { useState, useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_tc0c5mo",     // your service ID
        "template_yrj3ytc",    // your template ID
        formRef.current,       // ✅ correct ref usage
        "AD_52e45oGk67G7Qz"    // your public key
      )
      .then(
        () => {
          alert("Message sent successfully!");

          // reset state
          setForm({
            name: "",
            email: "",
            phone: "",
            message: "",
          });

          // reset actual form DOM
          formRef.current.reset();

          setLoading(false);
        },
        (error) => {
          console.error(error);
          alert("Failed to send message.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="py-6 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow">

        <h2 className="font-title text-3xl font-bold text-blue-900 mb-2 text-center">
          Get In Touch
        </h2>

        <p className="text-gray-500 text-center mb-8">
          Have questions about studying abroad? We’re here to help.
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="+256..."
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us what you need..."
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-950 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>
    </section>
  );
};

export default ContactForm;