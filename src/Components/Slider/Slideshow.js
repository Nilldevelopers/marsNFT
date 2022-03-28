import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image_1 from "./img/image_1.png";
import image_2 from './img/image_2.png';
import image_3 from './img/image_3.png'
import image_4 from './img/image_4.png'
import Dots from './img/ThreeDots.png'
import contacts from './img/Contact_GP.png'
import contacts_1 from './img/Contact_GP_1.png'
import contacts_2 from './img/Contact_GP_2.png'
import contacts_3 from './img/Contact_GP_3.png'

import CoverSlider from "../UI/CoverSlider";
import './SlideShow.css'

const Slideshow = (props) => {

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
                        <div className=" items">
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-row justify-content-between mt-1 mb-1">
                                    <div className={`m-2`}>
                                        <img src={contacts} alt=""/>
                                    </div>
                                    <div className={`me-4 my-mt`}>
                                        <img src={Dots} alt=""/>
                                    </div>
                                </div>
                                <img className="img-fluid" src={image_1} alt=""/>
                                <div>
                                    <p className="text-start text-white my-sm-3 ms-2">OhHandy #556842664</p>
                                </div>
                                <hr/>
                                <div className="d-flex flex-row justify-content-between p-9 Grey_BG">
                                    <div className="d-flex flex-column">
                                        <div>Current bid</div>
                                        <div className={`text-white`}>1.28 ETH</div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div>Ending in</div>
                                        <div className={`text-white`}>4h  9m  10s</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" items">
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-row justify-content-between mt-1 mb-1">
                                    <div className={`m-2`}>
                                        <img src={contacts_1} alt=""/>
                                    </div>
                                    <div className={`me-4 my-mt`}>
                                        <img src={Dots} alt=""/>
                                    </div>
                                </div>
                                <img className="img-fluid" src={image_2} alt=""/>
                                <div>
                                    <p className="text-start text-white my-sm-3 ms-2">YourFace</p>
                                </div>
                                <hr/>
                                <div className="d-flex flex-row justify-content-between p-9 Grey_BG">
                                    <div className="d-flex flex-column">
                                        <div>Current bid</div>
                                        <div className={`text-white`}>8.60 ETH</div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div>Ending in</div>
                                        <div className={`text-white`}>6h  28m  35s</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className=" items">
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-row justify-content-between mt-1 mb-1">
                                    <div className={`m-2`}>
                                        <img src={contacts_2} alt=""/>
                                    </div>
                                    <div className={`me-4 my-mt`}>
                                        <img src={Dots} alt=""/>
                                    </div>
                                </div>
                                <img className="img-fluid" src={image_3} alt=""/>
                                <div>
                                    <p className="text-start text-white my-sm-3 ms-2">OhHandy #556842664</p>
                                </div>
                                <hr/>
                                <div className="d-flex flex-row justify-content-between p-9 Grey_BG">
                                    <div className="d-flex flex-column">
                                        <div>Current bid</div>
                                        <div className={`text-white`}>1.00 ETH</div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div>Ending in</div>
                                        <div className={`text-white`}>2h  57m  3s</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className=" items">
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-row justify-content-between mt-1 mb-1">
                                    <div className={`m-2`}>
                                        <img src={contacts_3} alt=""/>
                                    </div>
                                    <div className={`me-4 my-mt`}>
                                        <img src={Dots} alt=""/>
                                    </div>
                                </div>
                                <img className="img-fluid" src={image_4} alt=""/>
                                <div>
                                    <p className="text-start text-white my-sm-3 ms-2">OhHandy #556842664</p>
                                </div>
                                <hr/>
                                <div className="d-flex flex-row justify-content-between p-9 Grey_BG">
                                    <div className="d-flex flex-column">
                                        <div>mohammad</div>
                                        <div>mohammad</div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div>mohammad</div>
                                        <div className={`text-white`}>3h  12m  35s</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className=" items">
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-row justify-content-between mt-1 mb-1">
                                    <div className={`m-2`}>
                                        <img src={contacts} alt=""/>
                                    </div>
                                    <div className={`me-4 my-mt`}>
                                        <img src={Dots} alt=""/>
                                    </div>
                                </div>
                                <img className="img-fluid" src={image_4} alt=""/>
                                <div>
                                    <p className="text-start text-white my-sm-3 ms-2">OhHandy #556842664</p>
                                </div>
                                <hr/>
                                <div className="d-flex flex-row justify-content-between p-9 Grey_BG">
                                    <div className="d-flex flex-column">
                                        <div>Current bid</div>
                                        <div>1.28 ETH</div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div>Ending in</div>
                                        <div className={`text-white`}>4h  9m  10s</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className=" items">
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-row justify-content-between mt-1 mb-1">
                                    <div className={`m-2`}>
                                        <img src={contacts} alt=""/>
                                    </div>
                                    <div className={`me-4 my-mt`}>
                                        <img src={Dots} alt=""/>
                                    </div>
                                </div>
                                <img className="img-fluid" src={image_1} alt=""/>
                                <div>
                                    <p className="text-start text-white my-sm-3 ms-2">OhHandy #556842664</p>
                                </div>
                                <hr/>
                                <div className="d-flex flex-row justify-content-between p-9 Grey_BG">
                                    <div className="d-flex flex-column">
                                        <div>mohammad</div>
                                        <div>mohammad</div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div>mohammad</div>
                                        <div className={`text-white`}>mohammad</div>
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
export default Slideshow;
