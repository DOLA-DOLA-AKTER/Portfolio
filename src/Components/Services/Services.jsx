import { FaLaptop, FaMobileAlt, FaPaintBrush } from "react-icons/fa";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";

const Services = () => {
    const services = [
        {
            id: 1,
            icon: <FaLaptop />,
            title: "Web Development",
            description:
                "Build modern, fast, and responsive websites using React, Tailwind CSS, and JavaScript.",
        },
        {
            id: 2,
            icon: <FaMobileAlt />,
            title: "Mobile Responsive",
            description:
                "Websites that look perfect and work smoothly across desktop, tablet, and mobile devices.",
        },
        {
            id: 3,
            icon: <FaPaintBrush />,
            title: "Website Designing",
            description:
                "Create clean, modern, and user-friendly UI designs with attention to user experience.",
        },
    ];

    return (
        <section>
            <Container>
                {/* Section Heading */}
                <div>
                    <SectionHeading
                    heading1="My"
                    heading2="Services"
                    />
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="border-2 border-orange-500 rounded-xl p-8 shadow-md hover:-translate-y-3 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center"
                        >
                            <div className="text-5xl text-orange-500 mb-6">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 leading-7">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Services;