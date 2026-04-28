import Footer from "../components/footer";
import Hero from "../components/hero";



const Destinations = () => {

    const destinations = [
        // AFRICA
        { continent: "Africa", name: "Egypt", image: "https://images.unsplash.com/photo-1544986581-efac024faf62" },
        { continent: "Africa", name: "Ghana", image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59" },
        { continent: "Africa", name: "Kenya", image: "https://images.unsplash.com/photo-1562774053-701939374585" },
        { continent: "Africa", name: "Malawi", image: "https://images.unsplash.com/photo-1600208669687-5c43b9c5f582" },
        { continent: "Africa", name: "Mauritius", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
        { continent: "Africa", name: "Nigeria", image: "https://images.unsplash.com/photo-1573164713988-8665fc963095" },
        { continent: "Africa", name: "Rwanda", image: "https://images.unsplash.com/photo-1551632811-561732d1e306" },
        { continent: "Africa", name: "Zambia", image: "https://images.unsplash.com/photo-1593642532400-2682810df593" },

        // AMERICA
        { continent: "America", name: "Canada", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
        { continent: "America", name: "Grenada", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
        { continent: "America", name: "Guyana", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
        { continent: "America", name: "Saint Kitts And Nevis", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
        { continent: "America", name: "United States", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },

        // ASIA
        { continent: "Asia", name: "India", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da" },
        { continent: "Asia", name: "Malaysia", image: "https://images.unsplash.com/photo-1506973035872-a4f23efc9f4d" },
        { continent: "Asia", name: "Philippines", image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86" },
        { continent: "Asia", name: "Singapore", image: "https://images.unsplash.com/photo-1496939376851-89342e90adcd" },
        { continent: "Asia", name: "South Korea", image: "https://images.unsplash.com/photo-1538485399081-7c897b6b8f62" },
        { continent: "Asia", name: "Sri Lanka", image: "https://images.unsplash.com/photo-1548013146-72479768bada" },
        { continent: "Asia", name: "Turkey", image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee" },
        { continent: "Asia", name: "United Arab Emirates", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c" },

        // EUROPE (as provided)
        { continent: "Europe", name: "Australia", image: "https://images.unsplash.com/photo-1506973035872-a4f23efc9f4d" },
        { continent: "Europe", name: "Belgium", image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad" },
        { continent: "Europe", name: "Croatia", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
        { continent: "Europe", name: "Cyprus", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
        { continent: "Europe", name: "Czech Republic", image: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60b" },
        { continent: "Europe", name: "Denmark", image: "https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d" },
        { continent: "Europe", name: "Finland", image: "https://images.unsplash.com/photo-1500534623283-312aade485b7" },
        { continent: "Europe", name: "France", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34" },
        { continent: "Europe", name: "Georgia", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da" },

        // OCEANIA
        { continent: "Oceania", name: "Australia", image: "https://images.unsplash.com/photo-1506973035872-a4f23efc9f4d" },
        { continent: "Oceania", name: "New Zealand", image: "https://images.unsplash.com/photo-1502784444185-1b7e68c6b3a3" },
    ];

    // Group by continent
    const grouped = destinations.reduce((acc, item) => {
        if (!acc[item.continent]) acc[item.continent] = [];
        acc[item.continent].push(item);
        return acc;
    }, {});

    return (
        <>
            <Hero image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" title="Study Destinations" tagline="Learn about countries you can study in." />
            <div className="p-6 max-w-6xl mx-auto">
                <h1 className="font-title text-4xl font-bold text-blue-900 mb-2 text-center">
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