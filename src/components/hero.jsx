import { Link } from "react-router-dom";

const Hero = ({image, title, tagline}) => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="font-title text-4xl md:text-5xl font-bold leading-tight mb-6">
            {title}
          </h1>

          <p className="text-gray-600 text-lg mb-6">
            {tagline}
            
          </p>

          <div className="flex gap-4">
            <Link
              to="/programs"
              className="bg-yellow-800 text-white px-6 py-3 rounded-lg shadow hover:bg-yellow-900 transition"
            >
              Explore Programs
            </Link>

            <Link
              to="/contact"
              className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Get Consultation
            </Link>
          </div>
        </div>

        {/* Right Content (Image / Visual) */}
        <div className="relative h-90 rounded-xl overflow-hidden group">
          <img
            src={image}
            alt="Students studying abroad"
            className="w-full h-full object-cover rounded-xl shadow-lg "
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;