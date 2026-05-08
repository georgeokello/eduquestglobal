import { useEffect, useRef, useState } from "react";

export default function ServicesSection() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            {
                threshold: 0.2,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`py-16 px-6 transition-all duration-[1000ms] ease-out ${visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
                }`}
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="font-title text-4xl text-[#0D1164] font-extrabold mb-2">
                    Our Services
                </h2>

                <h4 className="mb-10">
                    At EduQuest Global, we offer comprehensive services tailored to meet
                    each student’s unique needs
                </h4>

                <div className="grid md:grid-cols-4 gap-6">
                    <div className="p-6 border rounded-xl shadow-sm">
                        <h3 className="font-semibold text-xl mb-2">
                            University & Course Selection
                        </h3>
                        <p className="text-gray-600">
                            Helping students choose the right programs and institutions based
                            on their goals
                        </p>
                    </div>

                    <div className="p-6 border rounded-xl shadow-sm">
                        <h3 className="font-semibold text-xl mb-2">
                            Application Processing
                        </h3>
                        <p className="text-gray-600">
                            Assisting with complete and accurate applications to partner
                            universities
                        </p>
                    </div>

                    <div className="p-6 border rounded-xl shadow-sm">
                        <h3 className="font-semibold text-xl mb-2">Visa Guidance</h3>
                        <p className="text-gray-600">
                            Providing expert support through the visa application process
                        </p>
                    </div>

                    <div className="p-6 border rounded-xl shadow-sm">
                        <h3 className="font-semibold text-xl mb-2">
                            Accommodation Arrangements
                        </h3>
                        <p className="text-gray-600">
                            Helping secure safe and convenient student housing
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto text-center mt-5">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 border rounded-xl shadow-sm">
                        <h3 className="font-semibold text-xl mb-2">
                            Pre-Departure Support
                        </h3>
                        <p className="text-gray-600">
                            Preparing students for life abroad, including travel guidance
                        </p>
                    </div>

                    <div className="p-6 border rounded-xl shadow-sm">
                        <h3 className="font-semibold text-xl mb-2">
                            Airport Pickup & Settling In
                        </h3>
                        <p className="text-gray-600">
                            Ensuring a smooth transition upon arrival
                        </p>
                    </div>

                    <div className="p-6 border rounded-xl shadow-sm">
                        <h3 className="font-semibold text-xl mb-2">
                            Career & Academic Counseling
                        </h3>
                        <p className="text-gray-600">
                            Offering advice to align studies with long-term career goals
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}