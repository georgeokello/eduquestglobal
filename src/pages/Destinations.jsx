import Footer from "../components/footer";
import Hero from "../components/hero";
import { destinations } from "../data/destinations";



const Destinations = () => {

    // Group by continent
    const grouped = destinations.reduce((acc, item) => {
        if (!acc[item.continent]) acc[item.continent] = [];
        acc[item.continent].push(item);
        return acc;
    }, {});

    return (
        <>
            <Hero image="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJhbmNlfGVufDB8fDB8fHww" title="Study Destinations" tagline="Learn about countries you can study in." />
            <div className="p-6 max-w-6xl mx-auto">
                <h1 className="font-title text-4xl font-extrabold text-[#9B0F06] mb-2 text-center">
                    Target Destinations
                </h1>
                <p className="text-center py-10">We assist students in accessing opportunities in top study destinations including the UK, Canada, Australia, Europe, Malaysia,Malta, France,Germany, Switzerland, South Korea, and beyond.We partner with over 500 Universities in over 50 countries</p>

                <section className="bg-gray-50 py-20 px-6">
                    <div className="max-w-7xl mx-auto space-y-20">

                        {Object.entries(grouped).map(([continent, items]) => (
                            <div key={continent}>

                                {/* Header */}
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 border-l-4 border-red-600 pl-4">
                                    {continent.toUpperCase()}
                                </h2>

                                {/* Grid */}
                                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                                    {items.map((item) => (
                                        <div
                                            key={item.name}
                                            className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                                        >
                                            {/* Image */}
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                loading="lazy"
                                                className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-700 ease-out"
                                            />

                                            {/* Gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                                            {/* Text */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <h3 className="text-white text-lg md:text-xl font-semibold text-center px-3 transform transition duration-500 group-hover:scale-110 group-hover:tracking-wide">
                                                    {item.name}
                                                </h3>
                                            </div>

                                        </div>
                                    ))}

                                </div>
                            </div>
                        ))}

                    </div>
                </section>
            </div>
            <Footer />
        </>

    );
};

export default Destinations;