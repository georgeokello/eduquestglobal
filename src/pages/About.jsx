import Hero from "../components/hero";
import { Link } from "react-router-dom";
import ServicesSection from "../components/serviceSection";

const About = () => {
  return (
    <div>
      <Hero image="images/eduquest_3.jpeg" title="About Us" tagline="EduQuest Global helps students achieve their dreams of studying abroad." />
      {/* 🔹 2. Our Story */}
      <section className="py-16 px-6 max-w-8xl mx-auto bg-gray-50">
        <h2 className="font-title text-4xl text-[#0D1164] font-extrabold mb-6 text-center">
          About Us
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed text-center">
          EduQuest Global Education Placement Agency is a dedicated international  education consultancy committed to guiding students toward achieving their academic and career aspirations through international education opportunities. We specialize in providing personalized, end-to-end support for students seeking to study abroad.
        </p>
      </section>

      {/* 🔹 3. Services */}

      <ServicesSection />

      {/* 🔹 4. Why Choose Us */}
      <section className="bg-gray-50 py-16 px-6 max-w-8xl mx-auto">
        <h2 className="font-title text-4xl text-[#0D1164] font-extrabold mb-10 text-center">
          Why Choose EduQuest Global?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="font-semibold text-xl mb-2">
              {/* bullet box */}
              <span
                className="w-4 h-4 mx-2  inline-block  border border-1 border-l-4 border-t-4 rounded-lg border-[#9B0F06]"
              ></span>
               Personalized, student-focused approach</h3>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
            <span
                className="w-4 h-4 mx-2  inline-block  border border-1 border-l-4 border-t-4 rounded-lg border-[#9B0F06]"
              ></span>
              Experienced and knowledgeable advisors</h3>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
            <span
                className="w-4 h-4 mx-2  inline-block  border border-1 border-l-4 border-t-4 rounded-lg border-[#9B0F06]"
              ></span>
              Strong partnerships with reputable international institutions</h3>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 text-center ml-15 mr-15 mt-10">
          <div>
            <h3 className="font-semibold text-xl mb-2">
            <span
                className="w-4 h-4 mx-2  inline-block  border border-1 border-l-4 border-t-4 rounded-lg border-[#9B0F06]"
              ></span>
              Transparent and ethical processes</h3>
          </div>

          <div></div>

          <div>
            <h3 className="font-semibold text-xl mb-2 ">
            <span
                className="w-4 h-4 mx-2  inline-block  border border-1 border-l-4 border-t-4 rounded-lg border-[#9B0F06]"
              ></span>
              High success rate in admissions and visa approvals</h3>
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