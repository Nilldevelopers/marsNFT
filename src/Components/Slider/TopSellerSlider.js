import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CoverSlider from "../UI/CoverSlider";
import './SlideShow.css'
import './TopSellerSlider.css'
import mojtaba from './img/mojtaba.png'
import mojtaba_1 from './img/mojtaba_1.png'
import mojtaba_2 from './img/mojtaba_2.png'
import mojtaba_3 from './img/mojtaba_3.png'
import mojtaba_4 from './img/mojtaba_4.png'
import mojtaba_5 from './img/mojtaba_5.png'
import mojtaba_6 from './img/mojtaba_6.png'
import mojtaba_7 from './img/mojtaba_7.png'
import mojtaba_8 from './img/mojtaba_8.png'
import mojtaba_9 from './img/mojtaba_9.png'
import mojtaba_10 from './img/mojtaba_10.png'
import mojtaba_11 from './img/mojtaba_11.png'
import Dots from './img/ThreeDots.png';


const TopSellerSlider = (props) => {

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
                        <div className="item ">
                            <div className="d-flex flex-column ">
                                <div
                                    className="module-border-wrap active-inner-items p-10 d-flex flex-row flex-wrap justify-content-around align-items-center">
                                    <div className="module module-border-wrap p-10 d-flex flex-row flex-wrap justify-content-around align-items-center">
                                        <div className="text-white">
                                            1
                                        </div>
                                        <div className="position-relative">
                                            <div className="vl-top"></div>
                                        </div>
                                        <div>
                                            <img src={mojtaba} alt=""/>
                                        </div>
                                        <div className="d-flex flex-column">
                                    <span className="text-white">
                                        Mojtaba
                                    </span>
                                            <span>
                                        370.2 ETH
                                    </span>
                                        </div>
                                        <div>
                                            <img src={Dots} alt=""/>
                                        </div>
                                    </div>

                                </div>
                                <div
                                    className="inner-items p-10 d-flex flex-row flex-wrap justify-content-around align-items-center">
                                    <div className="text-white">
                                        2
                                    </div>
                                    <div className="position-relative">
                                        <div className="vl-top"></div>
                                    </div>
                                    <div>
                                        <img src={mojtaba_1} alt=""/>
                                    </div>
                                    <div className="d-flex flex-column">
                                    <span className="text-white">
                                        mobinsly
                                    </span>
                                        <span>
                                        365.8 ETH
                                    </span>
                                    </div>
                                    <div>
                                        <img src={Dots} alt=""/>
                                    </div>
                                </div>
                                <div
                                    className="inner-items p-10 d-flex flex-row flex-wrap justify-content-around align-items-center">
                                    <div className="text-white">
                                        3
                                    </div>
                                    <div className="position-relative">
                                        <div className="vl-top"></div>
                                    </div>
                                    <div>
                                        <img src={mojtaba_2} alt=""/>
                                    </div>
                                    <div className="d-flex flex-column">
                                    <span className="text-white">
                                        Helia
                                    </span>
                                        <span>
                                        370.2 ETH
                                    </span>
                                    </div>
                                    <div>
                                        <img src={Dots} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className="item">
                            <div className="d-flex flex-column">
                                <div
                                    className="inner-items p-10 d-flex flex-row flex-wrap justify-content-around align-items-center">
                                    <div className="text-white">
                                        4
                                    </div>
                                    <div className="position-relative">
                                        <div className="vl-top"></div>
                                    </div>
                                    <div>
                                        <img src={mojtaba_3} alt=""/>
                                    </div>
                                    <div className="d-flex flex-column">
                                    <span className="text-white">
                                        Mojtaba
                                    </span>
                                        <span>
                                        370.2 ETH
                                    </span>
                                    </div>
                                    <div>
                                        <img src={Dots} alt=""/>
                                    </div>
                                </div>
                                <div
                                    className="inner-items p-10 d-flex flex-row flex-wrap justify-content-around align-items-center">
                                    <div className="text-white">
                                        5
                                    </div>
                                    <div className="position-relative">
                                        <div className="vl-top"></div>
                                    </div>
                                    <div>
                                        <img src={mojtaba_4} alt=""/>
                                    </div>
                                    <div className="d-flex flex-column">
                                    <span className="text-white">
                                        Mojtaba
                                    </span>
                                        <span>
                                        370.2 ETH
                                    </span>
                                    </div>
                                    <div>
                                        <img src={Dots} alt=""/>
                                    </div>
                                </div>
                                <div
                                    className="inner-items p-10 d-flex flex-row flex-wrap justify-content-around align-items-center">
                                    <div className="text-white">
                                        6
                                    </div>
                                    <div className="position-relative">
                                        <div className="vl-top"></div>
                                    </div>
                                    <div>
                                        <img src={mojtaba_5} alt=""/>
                                    </div>
                                    <div className="d-flex flex-column">
                                    <span className="text-white">
                                        Mojtaba
                                    </span>
                                        <span>
                                        370.2 ETH
                                    </span>
                                    </div>
                                    <div>
                                        <img src={Dots} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                    <div>
                        <div className="item">
                            <div className="d-flex flex-column">
                                <div
                                    className="inner-items p-10 d-flex flex-row flex-wrap justify-content-around align-items-center">
                                    <div className="text-white">
                                        7
                                    </div>
                                    <div className="position-relative">
                                        <div className="vl-top"></div>
                                    </div>
                                    <div>
                                        <img src={mojtaba_6} alt=""/>
                                    </div>
                                    <div className="d-flex flex-column">
                                    <span className="text-white">
                                        Mojtaba
                                    </span>
                                        <span>
                                        370.2 ETH
                                    </span>
                                    </div>
                                    <div>
                                        <img src={Dots} alt=""/>
                                    </div>
                                </div>
                                <div
                                    className="inner-items p-10 d-flex flex-row flex-wrap justify-content-around align-items-center">
                                    <div className="text-white">
                                        8
                                    </div>
                                    <div className="position-relative">
                                        <div className="vl-top"></div>
                                    </div>
                                    <div>
                                        <img src={mojtaba_7} alt=""/>
                                    </div>
                                    <div className="d-flex flex-column">
                                    <span className="text-white">
                                        Mojtaba
                                    </span>
                                        <span>
                                        370.2 ETH
                                    </span>
                                    </div>
                                    <div>
                                        <img src={Dots} alt=""/>
                                    </div>
                                </div>
                                <div
                                    className="inner-items p-10 d-flex flex-row flex-wrap justify-content-around align-items-center">
                                    <div className="text-white">
                                        9
                                    </div>
                                    <div className="position-relative">
                                        <div className="vl-top"></div>
                                    </div>
                                    <div>
                                        <img src={mojtaba_8} alt=""/>
                                    </div>
                                    <div className="d-flex flex-column">
                                    <span className="text-white">
                                        Mojtaba
                                    </span>
                                        <span>
                                        370.2 ETH
                                    </span>
                                    </div>
                                    <div>
                                        <img src={Dots} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                    <div>
                        <div className="item">
                            <div className="d-flex flex-column">
                                <div
                                    className="inner-items p-10 d-flex flex-row flex-wrap justify-content-around align-items-center">
                                    <div className="text-white">
                                        10
                                    </div>
                                    <div className="position-relative">
                                        <div className="vl-top"></div>
                                    </div>
                                    <div>
                                        <img src={mojtaba_9} alt=""/>
                                    </div>
                                    <div className="d-flex flex-column">
                                    <span className="text-white">
                                        Mojtaba
                                    </span>
                                        <span>
                                        370.2 ETH
                                    </span>
                                    </div>
                                    <div>
                                        <img src={Dots} alt=""/>
                                    </div>
                                </div>
                                <div
                                    className="inner-items p-10 d-flex flex-row flex-wrap justify-content-around align-items-center">
                                    <div className="text-white">
                                        11
                                    </div>
                                    <div className="position-relative">
                                        <div className="vl-top"></div>
                                    </div>
                                    <div>
                                        <img src={mojtaba_10} alt=""/>
                                    </div>
                                    <div className="d-flex flex-column">
                                    <span className="text-white">
                                        Mojtaba
                                    </span>
                                        <span>
                                        370.2 ETH
                                    </span>
                                    </div>
                                    <div>
                                        <img src={Dots} alt=""/>
                                    </div>
                                </div>
                                <div
                                    className="inner-items p-10 d-flex flex-row flex-wrap justify-content-around align-items-center">
                                    <div className="text-white">
                                        12
                                    </div>
                                    <div className="position-relative">
                                        <div className="vl-top"></div>
                                    </div>
                                    <div>
                                        <img src={mojtaba_11} alt=""/>
                                    </div>
                                    <div className="d-flex flex-column">
                                    <span className="text-white">
                                        Mojtaba
                                    </span>
                                        <span>
                                        370.2 ETH
                                    </span>
                                    </div>
                                    <div>
                                        <img src={Dots} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                    <div>
                        <div className="item">
                            <div className="d-flex flex-column">
                                <div
                                    className="inner-items p-10 d-flex flex-row flex-wrap justify-content-around align-items-center">
                                    <div className="text-white">
                                        13
                                    </div>
                                    <div className="position-relative">
                                        <div className="vl-top"></div>
                                    </div>
                                    <div>
                                        <img src={mojtaba} alt=""/>
                                    </div>
                                    <div className="d-flex flex-column">
                                    <span className="text-white">
                                        Mojtaba
                                    </span>
                                        <span>
                                        370.2 ETH
                                    </span>
                                    </div>
                                    <div>
                                        <img src={Dots} alt=""/>
                                    </div>
                                </div>
                                <div
                                    className="inner-items p-10 d-flex flex-row flex-wrap justify-content-around align-items-center">
                                    <div>
                                        1
                                    </div>
                                    <div className="position-relative">
                                        <div className="vl-top"></div>
                                    </div>
                                    <div>
                                        <img src={mojtaba} alt=""/>
                                    </div>
                                    <div className="d-flex flex-column">
                                    <span className="text-white">
                                        Mojtaba
                                    </span>
                                        <span>
                                        370.2 ETH
                                    </span>
                                    </div>
                                    <div>
                                        <img src={Dots} alt=""/>
                                    </div>
                                </div>
                                <div
                                    className="inner-items p-10 d-flex flex-row flex-wrap justify-content-around align-items-center">
                                    <div>
                                        1
                                    </div>
                                    <div className="position-relative">
                                        <div className="vl-top"></div>
                                    </div>
                                    <div>
                                        <img src={mojtaba} alt=""/>
                                    </div>
                                    <div className="d-flex flex-column">
                                    <span className="text-white">
                                        Mojtaba
                                    </span>
                                        <span>
                                        370.2 ETH
                                    </span>
                                    </div>
                                    <div>
                                        <img src={Dots} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                    <div>
                        <div className="item">
                            <div className="d-flex flex-column">
                                <div
                                    className="inner-items p-10 d-flex flex-row flex-wrap justify-content-around align-items-center">
                                    <div>
                                        2
                                    </div>
                                    <div className="position-relative">
                                        <div className="vl-top"></div>
                                    </div>
                                    <div>
                                        <img src={mojtaba} alt=""/>
                                    </div>
                                    <div className="d-flex flex-column">
                                    <span className="text-white">
                                        Mojtaba
                                    </span>
                                        <span>
                                        370.2 ETH
                                    </span>
                                    </div>
                                    <div>
                                        <img src={Dots} alt=""/>
                                    </div>
                                </div>
                                <div
                                    className="inner-items p-10 d-flex flex-row flex-wrap justify-content-around align-items-center">
                                    <div>
                                        1
                                    </div>
                                    <div className="position-relative">
                                        <div className="vl-top"></div>
                                    </div>
                                    <div>
                                        <img src={mojtaba} alt=""/>
                                    </div>
                                    <div className="d-flex flex-column">
                                    <span className="text-white">
                                        Mojtaba
                                    </span>
                                        <span>
                                        370.2 ETH
                                    </span>
                                    </div>
                                    <div>
                                        <img src={Dots} alt=""/>
                                    </div>
                                </div>
                                <div
                                    className="inner-items p-10 d-flex flex-row flex-wrap justify-content-around align-items-center">
                                    <div>
                                        1
                                    </div>
                                    <div className="position-relative">
                                        <div className="vl-top"></div>
                                    </div>
                                    <div>
                                        <img src={mojtaba} alt=""/>
                                    </div>
                                    <div className="d-flex flex-column">
                                    <span className="text-white">
                                        Mojtaba
                                    </span>
                                        <span>
                                        370.2 ETH
                                    </span>
                                    </div>
                                    <div>
                                        <img src={Dots} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                    <div>
                        <div className="item">
                            <div className="d-flex flex-column">
                                <div
                                    className="inner-items p-10 d-flex flex-row flex-wrap justify-content-around align-items-center">
                                    <div>
                                        1
                                    </div>
                                    <div className="position-relative">
                                        <div className="vl-top"></div>
                                    </div>
                                    <div>
                                        <img src={mojtaba} alt=""/>
                                    </div>
                                    <div className="d-flex flex-column">
                                    <span className="text-white">
                                        Mojtaba
                                    </span>
                                        <span>
                                        370.2 ETH
                                    </span>
                                    </div>
                                    <div>
                                        <img src={Dots} alt=""/>
                                    </div>
                                </div>
                                <div
                                    className="inner-items p-10 d-flex flex-row flex-wrap justify-content-around align-items-center">
                                    <div>
                                        1
                                    </div>
                                    <div className="position-relative">
                                        <div className="vl-top"></div>
                                    </div>
                                    <div>
                                        <img src={mojtaba} alt=""/>
                                    </div>
                                    <div className="d-flex flex-column">
                                    <span className="text-white">
                                        Mojtaba
                                    </span>
                                        <span>
                                        370.2 ETH
                                    </span>
                                    </div>
                                    <div>
                                        <img src={Dots} alt=""/>
                                    </div>
                                </div>
                                <div
                                    className="inner-items p-10 d-flex flex-row flex-wrap justify-content-around align-items-center">
                                    <div>
                                        1
                                    </div>
                                    <div className="position-relative">
                                        <div className="vl-top"></div>
                                    </div>
                                    <div>
                                        <img src={mojtaba} alt=""/>
                                    </div>
                                    <div className="d-flex flex-column">
                                    <span className="text-white">
                                        Mojtaba
                                    </span>
                                        <span>
                                        370.2 ETH
                                    </span>
                                    </div>
                                    <div>
                                        <img src={Dots} alt=""/>
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
export default TopSellerSlider;
