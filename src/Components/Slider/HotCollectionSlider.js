import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CoverSlider from "../UI/CoverSlider";
import './SlideShow.css'
import './TopSellerSlider.css'
import hot from './img/Hot.png'
import hot1 from './img/Hot_1.png'
import hot2 from './img/Hot_2.png'
import hot3 from './img/Hot_3.png'

import eclipse1 from './img/Ellipse 34.png'
import eclipse2 from './img/i1.png'
import eclipse3 from './img/i2.png'
import eclipse4 from './img/i3.png'
import './HotCollectionSlider.css'

const HotCollectionSlider = (props) => {

    let settings = {
        dots: props.DotsShow,
        infinite: props.Infinite,
        speed: props.speed,
        slidesToShow: props.ToShow,
        slidesToScroll: props.ToScroll,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }


    return (
        <CoverSlider>
            <div className="container p-5">
                <Slider {...settings}>
                    <div>
                        <div className="Hot-item">
                            <div className="d-flex flex-column">
                                <div className="img_C">
                                    <img src={hot} alt=""/>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <div className="position-relative">
                                        <div className="position-absolute eclipse_img">
                                            <img src={eclipse1} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-50">
                                    <div>
                                        <div>
                                            <p className="text-white">
                                                forgotten Perpel guy
                                            </p>
                                        </div>
                                        <div>
                                            <a href="/">
                                                by Mojtaba
                                            </a>
                                        </div>
                                    </div>
                                    <div className="m-3">
                                        <p>
                                            Taken from a part of a forgotten history of human beings who were still
                                            happy
                                            and in love with each other. Compiled with modern art and purple color by
                                            Mobin
                                            and Mojtaba
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="Hot-item">
                            <div className="d-flex flex-column">
                                <div className="img_C">
                                    <img src={hot1} alt=""/>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <div className="position-relative">
                                        <div className="position-absolute eclipse_img">
                                            <img src={eclipse2} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-50">
                                    <div>
                                        <div>
                                            <p className="text-white">
                                                The Hands
                                            </p>
                                        </div>
                                        <div>
                                            <a href="/">
                                                by mobinsly
                                            </a>
                                        </div>
                                    </div>
                                    <div className="m-3">
                                        <p>
                                            Taken from a part of a forgotten history of human beings who were still
                                            happy
                                            and in love with each other. Compiled with modern art and purple color by
                                            Mobin
                                            and Mojtaba
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="Hot-item">
                            <div className="d-flex flex-column">
                                <div className="img_C">
                                    <img src={hot2} alt=""/>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <div className="position-relative">
                                        <div className="position-absolute eclipse_img">
                                            <img src={eclipse3} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-50">
                                    <div>
                                        <div>
                                            <p className="text-white">
                                                forgotten Perpel guy
                                            </p>
                                        </div>
                                        <div>
                                            <a href="/">
                                                by Mojtaba
                                            </a>
                                        </div>
                                    </div>
                                    <div className="m-3">
                                        <p>
                                            Taken from a part of a forgotten history of human beings who were still
                                            happy
                                            and in love with each other. Compiled with modern art and purple color by
                                            Mobin
                                            and Mojtaba
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="Hot-item">
                            <div className="d-flex flex-column">
                                <div className="img_C">
                                    <img src={hot3} alt=""/>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <div className="position-relative">
                                        <div className="position-absolute eclipse_img">
                                            <img src={eclipse4} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-50">
                                    <div>
                                        <div>
                                            <p className="text-white">
                                                The Hands
                                            </p>
                                        </div>
                                        <div>
                                            <a href="/">
                                                by mobinsly
                                            </a>
                                        </div>
                                    </div>
                                    <div className="m-3">
                                        <p>
                                            Taken from a part of a forgotten history of human beings who were still
                                            happy
                                            and in love with each other. Compiled with modern art and purple color by
                                            Mobin
                                            and Mojtaba
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="Hot-item">
                            <div className="d-flex flex-column">
                                <div className="img_C">
                                    <img src={hot3} alt=""/>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <div className="position-relative">
                                        <div className="position-absolute eclipse_img">
                                            <img src={eclipse4} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-50">
                                    <div>
                                        <div>
                                            <p className="text-white">
                                                The Hands
                                            </p>
                                        </div>
                                        <div>
                                            <a href="/">
                                                by mobinsly
                                            </a>
                                        </div>
                                    </div>
                                    <div className="m-3">
                                        <p>
                                            Taken from a part of a forgotten history of human beings who were still
                                            happy
                                            and in love with each other. Compiled with modern art and purple color by
                                            Mobin
                                            and Mojtaba
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </CoverSlider>
    );
};
export default HotCollectionSlider;
