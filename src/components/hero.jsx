import { Link } from "react-router-dom";
import ScrollingUniversities from "./scrolllogos";

const Hero = ({ image, title, tagline }) => {
  return (
    <section className="bg-white  bg-cover bg-center py-16 px-6" 
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h1 className="font-title text-5xl md:text-5xl font-extrabold text-[#0D1164] leading-tight mb-6">
            {title}
          </h1>

          <p className="text-[#2C2C2C] text-lg mb-6 py-2">
            {tagline}

          </p>

          <div className="flex gap-4">
            <Link
              to="/programs"
              className="
                bg-[#9B0F06] text-white font-bold px-6 py-3 rounded-lg shadow
                  transition-all duration-300
                  hover:scale-105 hover:shadow-lg
                  animate-[shake_2.5s_ease-in-out_infinite]
                "
            >
              Explore Programs
            </Link>

            <Link
              to="/contact"
              className="border border-[#9B0F06] border-1 px-6 py-3 text-[#9B0F06]  font-bold rounded-lg hover:border-[#9B0F06] transition"
            >
              Get Consultation
            </Link>
          </div>
          {/* Scrolling Universities */}
          <ScrollingUniversities />

        </div>

        {/* Right Content (Image / Visual) */}
        <div className="relative h-90 rounded-xl overflow-hidden group">
          <img
            src={image}
            alt="Students studying abroad"
            className="w-full h-full object-cover rounded-xl shadow-lg "
            style={{ objectPosition: "center 30%" }}
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;