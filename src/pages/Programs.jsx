import { programs } from "../data/programs";
import Card from "../components/Card";
import Hero from "../components/hero";
import Footer from "../components/footer";

const Programs = () => {
  return (

    <>
      <Hero image="https://images.unsplash.com/photo-1519389950473-47ba0277781c" title="Top Programes" tagline="Explore the most popular courses for international students." />
      <div className="p-6 max-w-8xl mx-auto bg-gray-50">
        <h1 className="font-title text-4xl text-[#0D1164] font-extrabold mb-6 text-center">
          Top Programes
        </h1>

        <div className="grid md:grid-cols-3 gap-4">
          {programs.map((prog, index) => (
            <Card
              key={index}
              title={prog.title}
              description={prog.description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );

};

export default Programs;