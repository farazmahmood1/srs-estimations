import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Reviews.css";

const Reviews = () => {
    // Owl Carousel settings
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: true,
        navText: ["<i class='fa fa-chevron-left p-2'></i>", "<i class='fa fa-chevron-right p-2'></i>"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 3,
            },
        },
    };

    return (
        <div>
            <div className="container rounded">
                <div className="title-area mb-5">
                    <div className="shadow-title">TESTIMONIALS</div>
                    <span className="sub-title">
                        WORK TESTIMONIALS
                    </span>
                    <h2 className="sec-title text-center">What our <span className="text-theme">Client</span> says</h2>
                    <p className="sec-description text-center">
                        Our methodical approach ensures accuracy and precision at every stage, providing comprehensive, dependable estimates and exceptional service.
                    </p>
                </div>
                <OwlCarousel className="owl-theme" {...options}>
                    {[1, 2, 3, 4, 5].map((item, index) => (
                        <div className="item" key={index}>
                            <div className="d-flex flex-column justify-content-start testimonial mb-5 pb-2">
                                <div className="mt-2 d-flex justify-content-start">
                                    <span className="fas fa-star active-star"></span>
                                    <span className="fas fa-star active-star"></span>
                                    <span className="fas fa-star active-star"></span>
                                    <span className="fas fa-star active-star"></span>
                                    <span className="fas fa-star-half-alt active-star"></span>
                                </div>
                                <div className="pb-2 pt-1" style={{ fontWeight: 700, textAlign: "left", color: "#000 !important" }}>Great Service</div>
                                <div className="" style={{ textAlign: "left", color: "#000 !important" }}>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dolores molestias veniam
                                    inventore itaque eius iure omnis, temporibus culpa id.
                                </div>
                                <div className="d-flex flex-row profile pt-4 mt-auto">
                                    <img
                                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                        alt=""
                                        className="rounded-circle"
                                    />
                                    <div className="d-flex flex-column pl-2" style={{ marginLeft: "5px" }}>
                                        <div style={{ textAlign: "left", color: "#000 !important" }}>Megan</div>
                                        <p className=" designation" style={{ textAlign: "left", color: "#000 !important" }}>CEO of My Company</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </div>
    );
};

export default Reviews;