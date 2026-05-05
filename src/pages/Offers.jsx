import Footer from "../components/footer";
import Hero from "../components/hero";


const Offers = () => {
    const offers = [
        {
            title: "50% Scholarship - UK",
            desc: "Limited slots available for September intake.",
        },
        {
            title: "No IELTS - Canada",
            desc: "Apply without IELTS under special conditions.",
        },
        {
            title: "Free Application Support",
            desc: "Apply to multiple universities at no cost.",
        },
    ];

    return (
        <>
            <Hero image="https://thumbs.dreamstime.com/b/special-offer-37086976.jpg" title="Special Offers" tagline="Check out scholarships and limited-time opportunities." />
            <div className="p-6 max-w-5xl mx-auto">
                <h1 className="font-title text-4xl font-extrabold mb-6 text-center">
                    Special Offers
                </h1>

                <div className="space-y-4">
                    {offers.map((offer, i) => (
                        <div
                            key={i}
                            className="p-6 border-l-4 border-blue-600 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
                        >
                            <h3 className="text-xl font-semibold mb-1">{offer.title}</h3>
                            <p className="text-gray-600">{offer.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>

    );
};

export default Offers;