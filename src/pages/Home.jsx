import Section from "../components/section";
import Footer from "../components/footer";
import Hero from "../components/hero";
import TestimonialCard from "../components/testimonialCard";

const Home = () => {
  return (
    <div>
      <Hero
        image="images/eduquest_7.jpeg"
        title="Start Your Study Journey Abroad Today"
        tagline="EduQuest Global Education Placement Agency helps you find the best universities, secure admissions, and guide you every step of the way."
      />

      {/* 🔹 Image + Mission Section */}
      <section className="bg-gray-50 py-10 px-4 md:px-10 grid md:grid-cols-12 gap-6">

        {/* Text */}
        <div className="bg-white flex flex-col justify-center items-center text-center p-6 md:col-span-4 rounded-xl space-y-6">
          <Section title="Our Mission">
            <p className="text-gray-600">
              To empower students with access to quality global education by providing reliable guidance, transparent processes, and continuous support throughout their academic journey.
            </p>
          </Section>

          <Section title="Our Vision">
            <p className="text-gray-600">
              To become a trusted leader in international student placement, recognized for integrity, excellence, and student success worldwide.
            </p>
          </Section>
        </div>

        {/* Image */}
        <div className="bg-white md:col-span-8 w-full h-24 md:h-auto overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
            alt=""
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>

      </section>

      <section className="bg- py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="grid md:grid-cols-1 gap-6">

            <div className="p-8">
              <h3 className="font-extrabold text-3xl mb-4">
                Our Commitment
                </h3>
              <p className="text-gray-600">
                At EduQuest Global, we are committed to walking every step of the journey with our students—from the first consultation to their successful arrival and settlement abroad. Your success is our priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Testimonials */}
      <section className="bg-gray-50 py-12 px-4 md:px-10">
        <Section title="Testimonials">

          <div className="relative overflow-hidden mt-8">

            {/* Fade edges (optional but premium) */}
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

            {/* Scrolling Row */}
            <div className="flex gap-6 animate-scroll whitespace-nowrap">

              {[
                {
                  name: "Sarah K.",
                  country: "Uganda → Canada",
                  message: "EduQuest Global made my dream possible!",
                  image: "https://randomuser.me/api/portraits/women/1.jpg",
                },
                {
                  name: "David M.",
                  country: "Uganda → UK",
                  message: "Smooth process and great support.",
                  image: "https://randomuser.me/api/portraits/men/2.jpg",
                },
                {
                  name: "Linda A.",
                  country: "Uganda → Australia",
                  message: "Highly professional and reliable.",
                  image: "https://randomuser.me/api/portraits/women/3.jpg",
                },
                {
                  name: "James K.",
                  country: "Uganda → Canada",
                  message: "I got my visa without stress!",
                  image: "https://randomuser.me/api/portraits/men/4.jpg",
                },
              ]
                // 🔥 duplicate for seamless loop
                .concat([
                  {
                    name: "Sarah K.",
                    country: "Uganda → Canada",
                    message: "EduQuest Global made my dream possible!",
                    image: "https://randomuser.me/api/portraits/women/1.jpg",
                  },
                  {
                    name: "David M.",
                    country: "Uganda → UK",
                    message: "Smooth process and great support.",
                    image: "https://randomuser.me/api/portraits/men/2.jpg",
                  },
                  {
                    name: "Linda A.",
                    country: "Uganda → Australia",
                    message: "Highly professional and reliable.",
                    image: "https://randomuser.me/api/portraits/women/3.jpg",
                  },
                  {
                    name: "James K.",
                    country: "Uganda → Canada",
                    message: "I got my visa without stress!",
                    image: "https://randomuser.me/api/portraits/men/4.jpg",
                  },
                ])
                .map((t, index) => (
                  <div key={index} className="min-w-[280px] max-w-[280px] hover:-translate-y-1 transition">
                    <TestimonialCard {...t} />
                  </div>
                ))}

            </div>

          </div>

        </Section>
      </section>

      <Footer />
    </div>
  );
};

export default Home;