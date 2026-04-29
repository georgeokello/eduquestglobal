import Hero from "../components/hero";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div>
      <Hero image="eduquestglobal/images/eduquest_3.jpeg" title="About Us" tagline="EduQuest Global helps students achieve their dreams of studying abroad." />
      {/* 🔹 2. Our Story */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="font-title text-3xl font-bold text-blue-900 mb-6 text-center">
        About Us
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed text-center">
        EduQuest Global Education Placement Agency is a dedicated international  education consultancy committed to guiding students toward achieving their academic and career aspirations through international education opportunities. We specialize in providing personalized, end-to-end support for students seeking to study abroad.
        </p>
      </section>

      {/* 🔹 3. Services */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-title text-3xl font-bold text-blue-900 mb-2">
          Our Services
          </h2>
          <h4 className="mb-10">
            At EduQuest Global, we offer comprehensive services tailored to meet each student’s unique needs
            </h4>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 border rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-2">University & Course Selection </h3>
              <p className="text-gray-600">
              Helping students choose the right programs and institutions based on their goals
              </p>
            </div>

            <div className="p-6 border rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-2">Application Processing</h3>
              <p className="text-gray-600">
              Assisting with complete and accurate applications to partner universities
              </p>
            </div>

            <div className="p-6 border rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-2">Visa Guidance</h3>
              <p className="text-gray-600">
              Providing expert support through the visa application process
              </p>
            </div>

            <div className="p-6 border rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-2">Accommodation Arrangements </h3>
              <p className="text-gray-600">
              Helping secure safe and convenient student housing
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto text-center mt-5">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-2">Pre-Departure Support </h3>
              <p className="text-gray-600">
              Preparing students for life abroad, including travel guidance
              </p>
            </div>

            <div className="p-6 border rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-2">Airport Pickup & Settling In</h3>
              <p className="text-gray-600">
              Ensuring a smooth transition upon arrival
              </p>
            </div>

            <div className="p-6 border rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-2">Career & Academic Counseling</h3>
              <p className="text-gray-600">
              Offering advice to align studies with long-term career goals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 4. Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="font-title text-3xl font-bold text-blue-900 mb-10 text-center">
        Why Choose EduQuest Global?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="font-semibold text-xl mb-2">Personalized, student-focused approach</h3>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">Experienced and knowledgeable advisors</h3>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">Strong partnerships with reputable international institutions</h3>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 text-center ml-15 mr-15 mt-10">
          <div>
            <h3 className="font-semibold text-xl mb-2">Transparent and ethical processes</h3>
          </div>

          <div></div>

          <div>
            <h3 className="font-semibold text-xl mb-2 ">High success rate in admissions and visa approvals</h3>
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