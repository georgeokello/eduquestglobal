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
        tagline="EduQuest Global helps you find the best universities, secure admissions,
      and guide you every step of the way."
      />

      <section className="bg-blue-950 py-16 px-16 grid sm:grid-cols-12 h-80 gap-4">
        <div className="bg-white min-h-[400px] sm:col-span-8 w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
            alt="Students studying abroad"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white min-h-[400px] flex flex-col justify-center items-center text-center px-6 sm:col-span-4">
          <Section title="Our Mission">
            <p className="text-gray-600">
              We help students access global education opportunities.
            </p>
          </Section>
          <Section title="Our Vision">
            <p className="text-gray-600">
              We help students access global education opportunities.
            </p>
          </Section>
          <Section title="Why Choose Us">
            <p className="text-gray-600">
              Trusted guidance, global reach, and student success.
            </p>
          </Section>
        </div>
      </section>

      <section className="bg-gray-50 py-6 px-6 gap-4 h-50">
      </section>

      <section className="bg-gray-50 h-100 gap-4">
        <Section title="Testimonials">
          <div className="grid grid-cols-4 gap-4 py-12 mx-20">
            <TestimonialCard
              name="Sarah K."
              country="Uganda → Canada"
              message="EduQuest Global made my dream of studying abroad possible. The process was smooth and stress-free!"
              image="https://randomuser.me/api/portraits/women/1.jpg"
            />
            <TestimonialCard
              name="Sarah K."
              country="Uganda → Canada"
              message="EduQuest Global made my dream of studying abroad possible. The process was smooth and stress-free!"
              image="https://randomuser.me/api/portraits/women/1.jpg"
            />
            <TestimonialCard
              name="Sarah K."
              country="Uganda → Canada"
              message="EduQuest Global made my dream of studying abroad possible. The process was smooth and stress-free!"
              image="https://randomuser.me/api/portraits/women/1.jpg"
            />
            <TestimonialCard
              name="Sarah K."
              country="Uganda → Canada"
              message="EduQuest Global made my dream of studying abroad possible. The process was smooth and stress-free!"
              image="https://randomuser.me/api/portraits/women/1.jpg"
            />
          </div>
        </Section>
      </section>

      <Footer />
    </div>
  );
};

export default Home;