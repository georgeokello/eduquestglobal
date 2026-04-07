import Section from "../components/Section";
import Footer from "../components/footer";
import Hero from "../components/hero";
import TestimonialCard from "../components/testimonialCard";

const Home = () => {
  return (
    <div>
      <Hero
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
        title="Start Your Study Journey Abroad Today"
        tagline="EduQuest Global helps you find the best universities, secure admissions, and guide you every step of the way."
      />

      {/* 🔹 Image + Mission Section */}
      <section className="bg-blue-950 py-10 px-4 md:px-10 grid md:grid-cols-12 gap-6">
        
        {/* Image */}
        <div className="bg-white md:col-span-8 w-full h-64 md:h-auto overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="bg-white flex flex-col justify-center items-center text-center p-6 md:col-span-4 rounded-xl space-y-6">
          <Section title="Our Mission">
            <p className="text-gray-600">
              We help students access global education opportunities.
            </p>
          </Section>

          <Section title="Our Vision">
            <p className="text-gray-600">
              We empower students to achieve global success.
            </p>
          </Section>

          <Section title="Why Choose Us">
            <p className="text-gray-600">
              Trusted guidance, global reach, and student success.
            </p>
          </Section>
        </div>
      </section>

      {/* 🔹 Spacer */}
      <section className="py-10"></section>

      {/* 🔹 Testimonials */}
      <section className="bg-gray-50 py-12 px-4 md:px-10">
        <Section title="Testimonials">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <TestimonialCard
              name="Sarah K."
              country="Uganda → Canada"
              message="EduQuest Global made my dream possible!"
              image="https://randomuser.me/api/portraits/women/1.jpg"
            />

            <TestimonialCard
              name="David M."
              country="Uganda → UK"
              message="Smooth process and great support."
              image="https://randomuser.me/api/portraits/men/2.jpg"
            />

            <TestimonialCard
              name="Linda A."
              country="Uganda → Australia"
              message="Highly professional and reliable."
              image="https://randomuser.me/api/portraits/women/3.jpg"
            />

            <TestimonialCard
              name="James K."
              country="Uganda → Canada"
              message="I got my visa without stress!"
              image="https://randomuser.me/api/portraits/men/4.jpg"
            />
          </div>

        </Section>
      </section>

      <Footer />
    </div>
  );
};

export default Home;