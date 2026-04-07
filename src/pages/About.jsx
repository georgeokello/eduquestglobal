import Hero from "../components/hero";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div>
      <Hero image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" title="About Us" tagline="EduQuest Global helps students achieve their dreams of studying abroad." />
      {/* 🔹 2. Our Story */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="font-title text-3xl font-bold mb-6 text-center">
          Our Story
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed text-center">
          EduQuest Global was founded with a simple mission — to make studying abroad accessible,
          transparent, and achievable for every student. We understand the challenges students face,
          from choosing the right university to handling applications and visas.
          That’s why we provide step-by-step guidance to help you succeed.
        </p>
      </section>

      {/* 🔹 3. Services */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-title text-3xl font-bold mb-10">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-2">University Selection</h3>
              <p className="text-gray-600">
                We help you choose the best university based on your goals and budget.
              </p>
            </div>

            <div className="p-6 border rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-2">Application Support</h3>
              <p className="text-gray-600">
                Get assistance with your application process to increase acceptance chances.
              </p>
            </div>

            <div className="p-6 border rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-2">Visa Guidance</h3>
              <p className="text-gray-600">
                We guide you through visa requirements and preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 4. Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="font-title text-3xl font-bold mb-10 text-center">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="font-semibold text-xl mb-2">Personalized Guidance</h3>
            <p className="text-gray-600">
              Every student gets tailored advice based on their goals.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">Trusted Expertise</h3>
            <p className="text-gray-600">
              We understand the global education system and requirements.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">Student Success Focus</h3>
            <p className="text-gray-600">
              Your success is our priority from start to finish.
            </p>
          </div>
        </div>
      </section>

  

      {/* 🔹 5. CTA Section */}
      <section className="bg-blue-950 text-white py-16 px-6 text-center">
        <h2 className="font-title text-3xl font-bold mb-4">
          Ready to Start Your Journey?
        </h2>

        <p className="mb-6">
          Get in touch with us today and take the first step toward studying abroad.
        </p>

        <Link
          to="/contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>

    </div>
  );
};

export default About;