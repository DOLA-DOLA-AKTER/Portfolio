import React, { useRef } from "react";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export const Education = () => {

    let sliderRef = useRef(null);
    const play = () => {
        sliderRef.slickPlay();
    };
    const pause = () => {
        sliderRef.slickPause();
    };

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        customPaging: i => (
            <div className="dot">
            </div>
        ),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]

    };

    const educationData = [
        {
            id: 1,
            institute: "Shahid Smrity High School",
            degree: "Secondary School Certificate (SSC)",
            duration: "January 2017 - February 2019",
        },
        {
            id: 2,
            institute: "Desh Polytechnic College",
            degree: "Diploma In Engineering",
            duration: "March 2022 - May 2016",
        },
        {
            id: 3,
            institute: "Milestone College",
            degree: "Higher Secondary Certificate (HSC)",
            duration: "March 2019 - November 2021",
        },
        {
            id: 4,
            institute: " Bangladesh University of Business and Technology",
            degree: "B.Sc. in Computer Science and Engineering (CSE)",
            duration: "Present",
        },
    ];

    return (
        <section>
            <Container>
                {/* Section Heading */}
                <div>
                    <SectionHeading
                        heading1="Education"
                    />
                </div>

                {/* Card */}
                <div>
                    <Slider ref={slider => (sliderRef = slider)} {...settings}>
                        {educationData.map((item) => (
                            <div key={item.id} className="px-3">
                                <div className="bg-linear-to-r from-orange to-orange-400 rounded-2xl p-8 text-white shadow-lg transition-all duration-300">
                                    <p className="text-sm font-medium">
                                        {item.institute}
                                    </p>

                                    <h3 className="text-xl font-semibold pt-3 pb-10">
                                        {item.degree}
                                    </h3>

                                    <p className="text-sm">
                                        {item.duration}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </Container>
        </section>
    );
};