import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // replace with EmailJS later
    alert("Message sent!");
  };

  return (
    <section className="py-6 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow">

        <h2 className="font-title text-3xl font-bold mb-2 text-center">
          Get In Touch
        </h2>

        <p className="text-gray-500 text-center mb-8">
          Have questions about studying abroad? We’re here to help.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
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
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us what you need..."
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-yellow-800 text-white py-3 rounded-lg font-semibold hover:bg-yellow-900 transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default ContactForm;