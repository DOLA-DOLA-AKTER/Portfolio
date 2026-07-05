import React from "react";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { EducationCard } from "./EducationCard";


export const Education = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
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

    return (
        <section>
            <Container className="">
                {/* Section Heading */}
                <div>
                    <SectionHeading
                        heading1="Education"
                        sectionHeading="pb-0!"
                    />
                </div>

                <div className="py-10 overflow-hidden" >
                    <Slider {...settings}>
                            <div className="px-3 h-full">
                                <EducationCard
                                instituteName='Shahid Smrity High School'
                                degree='Secondary School Certificate (SSC)'
                                year='2017 - 2019'
                                />
                            </div>
                            <div className="px-3 h-full">
                                <EducationCard
                                instituteName='Desh Polytechnic College'
                                degree='Diploma In Engineering'
                                year='2022 - 2016'
                                />
                            </div>
                            <div className="px-3 h-full">
                                <EducationCard
                                instituteName='Milestone College'
                                degree='Higher Secondary Certificate (HSC)'
                                year='2019 - 2021'
                                />
                            </div>
                            <div className="px-3 h-full">
                                <EducationCard
                                instituteName='Bangladesh University of Business and Technology'
                                degree='B.Sc. in Computer Science and Engineering (CSE)'
                                year='Present'
                                />
                            </div>
                    </Slider>
                </div>
            </Container>
        </section>
    );
};