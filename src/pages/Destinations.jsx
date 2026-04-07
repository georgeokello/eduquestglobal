import Footer from "../components/footer";
import Hero from "../components/hero";



const Destinations = () => {
    const destinations = [
        {
            name: "Canada",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        },
        {
            name: "United Kingdom",
            image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
        },
        {
            name: "Australia",
            image: "https://images.unsplash.com/photo-1506973035872-a4f23ef47f9e",
        },
    ];

    return (
        <>
            <Hero image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" title="Study Destinations" tagline="Learn about countries you can study in." />
            <div className="p-6 max-w-6xl mx-auto">
                <h1 className="font-title text-4xl font-bold mb-6 text-center">
                    Study Destinations
                </h1>

                <div className="grid md:grid-cols-3 gap-6">
                    {destinations.map((dest, i) => (
                        <div
                            key={i}
                            className="relative h-56 rounded-xl overflow-hidden group"
                        >
                            <img
                                src={dest.image}
                                alt={dest.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                            />

                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <h3 className="text-white text-2xl font-bold">
                                    {dest.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>

    );
};

export default Destinations;