import Footer from "../components/footer";
import Hero from "../components/hero";


const Offers = () => {

    const borderColors = [
        "border-blue-600",
        "border-yellow-500",
        "border-green-600",
    ];

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
            <div className="p-6 max-w-8xl mx-auto bg-gray-50">
                <h1 className="font-title text-4xl font-extrabold mb-6 text-center">
                    Special Offers
                </h1>

                <div className="space-y-4 px-80 ">
                    {offers.map((offer, i) => (
                        <div
                            key={i}
                            className={`p-6 border-l-4 ${borderColors[i % 3]} bg-white rounded-lg shadow-sm hover:shadow-md transition`}
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