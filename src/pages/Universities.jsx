import Footer from "../components/footer";
import Hero from "../components/hero";


const Universities = () => {
    const universities = [
        {
            name: "University of Toronto",
            image: "https://images.unsplash.com/photo-1562774053-701939374585",
        },
        {
            name: "University of Manchester",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
        },
        {
            name: "University of Sydney",
            image: "https://images.unsplash.com/photo-1562774053-701939374585",
        },
    ];

    return (
        <>
            <Hero image="https://images.unsplash.com/photo-1562774053-701939374585" title="Universities" tagline="Discover top universities around the world." />
            <div className="p-6 max-w-6xl mx-auto">
                <h1 className="font-title text-4xl font-bold mb-6 text-center">
                    Universities
                </h1>

                <div className="grid md:grid-cols-3 gap-6">
                    {universities.map((uni, i) => (
                        <div
                            key={i}
                            className="rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={uni.image}
                                    alt={uni.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{uni.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>

    );
};

export default Universities;