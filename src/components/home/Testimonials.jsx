import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import person1 from '../../assets/images/person_1.jpg'
import person2 from '../../assets/images/person_2.jpg'
import person3 from '../../assets/images/person_3.jpg'



export default function Testimonials() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <div className="testimonial-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mx-auto text-center">
                            <h2 className="section-title">Testimonials</h2>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-12">
                            <div className="testimonial-slider-wrap text-center">

                                {/* <div id="testimonial-nav">
                                    <span className="prev" data-controls="prev"><span className="fa fa-chevron-left"></span></span>
                                    <span className="next" data-controls="next"><span className="fa fa-chevron-right"></span></span>
                                </div> */}

                                <div className="testimonial-slider">
                                    <Slider {...settings}>
                                        <div className="item">
                                            <div className="row justify-content-center">
                                                <div className="col-lg-8 mx-auto">

                                                    <div className="testimonial-block text-center">
                                                        <blockquote className="mb-5">
                                                            <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                                                        </blockquote>

                                                        <div className="author-info">
                                                            <div className="author-pic">
                                                                <img src={person1} alt="Maria Jones" className="img-fluid mx-auto" />
                                                            </div>
                                                            <h3 className="font-weight-bold">Maria Jones</h3>
                                                            <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="item">
                                            <div className="row justify-content-center">
                                                <div className="col-lg-8 mx-auto">

                                                    <div className="testimonial-block text-center">
                                                        <blockquote className="mb-5">
                                                            <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                                                        </blockquote>

                                                        <div className="author-info">
                                                            <div className="author-pic">
                                                                <img src={person2} alt="Maria Jones" className="img-fluid mx-auto" />
                                                            </div>
                                                            <h3 className="font-weight-bold">Maria Jones</h3>
                                                            <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="item">
                                            <div className="row justify-content-center">
                                                <div className="col-lg-8 mx-auto">

                                                    <div className="testimonial-block text-center">
                                                        <blockquote className="mb-5">
                                                            <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                                                        </blockquote>

                                                        <div className="author-info">
                                                            <div className="author-pic">
                                                                <img src={person3} alt="Maria Jones" className="img-fluid mx-auto" />
                                                            </div>
                                                            <h3 className="font-weight-bold">Maria Jones</h3>
                                                            <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
