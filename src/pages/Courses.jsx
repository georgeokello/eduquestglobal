import Footer from "../components/footer";
import Hero from "../components/hero";



const Courses = () => {
    const courses = [
        { title: "Business Administration", desc: "Management, finance, and entrepreneurship." },
        { title: "Computer Science", desc: "Software development and AI systems." },
        { title: "Nursing", desc: "Healthcare and patient care training." },
    ];

    return (
        <>
            <Hero image="https://images.unsplash.com/photo-1519389950473-47ba0277781c" title="Top Courses" tagline="Explore the most popular courses for international students." />
            <div className="p-6 max-w-8xl mx-auto bg-gray-50">
                <h1 className="font-title text-4xl text-[#0D1164] font-extrabold mb-6 text-center">
                    Top Courses
                </h1>

                <div className="grid md:grid-cols-3 gap-6">
                    {courses.map((course, i) => (
                        <div
                            key={i}
                            className="p-6 bg-white  rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition"
                        >
                            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">

                                {/* bullet box */}
                                <span
                                    className="w-4 h-4  inline-block  border border-1 border-l-4 border-t-4 rounded-lg border-[#9B0F06]"
                                ></span>

                                {course.title}
                            </h3>

                            <p className="text-gray-600">{course.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>

    );
};

export default Courses;