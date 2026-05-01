import Footer from "../components/footer";
import Hero from "../components/hero";
import { universities } from "../data/universities"
import { useState } from "react";


const Universities = () => {

    const [search, setSearch] = useState("");

    const filtered = universities.filter((uni) =>
        uni.name.toLowerCase().includes(search.toLowerCase())
    );

    // group AFTER filtering
    const grouped = filtered.reduce((acc, uni) => {
        if (!acc[uni.country]) acc[uni.country] = [];
        acc[uni.country].push(uni);
        return acc;
    }, {});

    return (
        <>
            <Hero image="https://images.unsplash.com/photo-1562774053-701939374585" title="Universities" tagline="Discover top universities around the world." />
            <div className="p-6 max-w-6xl mx-auto">
                <h1 className="font-title text-4xl font-extrabold text-[#9B0F06] mb-6 text-center">
                    Universities
                </h1>

                <section className="bg-gray-50 py-20 px-6">
                    <div className="max-w-7xl mx-auto space-y-16">
                        {/* 🔍 Search */}
                        <div className="max-w-2xl mx-auto mb-12">
                            <input
                                type="text"
                                placeholder="Search universities..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full px-5 py-4 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-900"
                            />
                        </div>

                        {/* Results */}
                        <div className="space-y-16">
                            {Object.keys(grouped).length === 0 ? (
                                <p className="text-center text-gray-500">
                                    No universities found.
                                </p>
                            ) : (
                                Object.entries(grouped).map(([country, items]) => (
                                    <div key={country}>
                                        <h2 className="text-2xl font-bold mb-6 border-l-4 border-red-600 pl-4">
                                            {country.toUpperCase()}
                                        </h2>

                                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {items.map((uni, index) => (
                                                <UniversityCard key={index} uni={uni} />
                                            ))}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                    </div>
                </section>
            </div>
            <Footer />
        </>

    );
};

export default Universities;



function UniversityCard({ uni }) {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition">

            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={uni.image}
                    alt={uni.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Tag */}
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                    {uni.tag}
                </span>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">

                <h3 className="font-semibold text-lg text-gray-800">
                    {uni.name}
                </h3>

                <p className="text-sm text-gray-500">
                    {uni.city}, {uni.country}
                </p>

                <div className="text-sm text-gray-600">
                    <p className="font-medium text-gray-700 mb-1">
                        Why EduQuest Global Recommends
                    </p>
                    <p>{uni.description}</p>
                </div>

                {/* Stats */}
                <ul className="text-xs text-gray-600 space-y-1 pt-2">
                    {uni.stats.map((stat, i) => (
                        <li key={i}>• {stat}</li>
                    ))}
                </ul>

            </div>
        </div>
    );
}