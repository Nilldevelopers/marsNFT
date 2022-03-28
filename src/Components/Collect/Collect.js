import React from "react";
import WhiteBtn from "../Button/WhiteBtn";
import EmptyBtn from "../Button/EmptyBtn";
import styles from "./Collect.module.css";
import Cover from "../UI/Cover";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider-style.css'
import image from './img/Group 13.png'

const Collect = (props) => {

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
        <Cover className={`p-5`}>
            <div className={`container`}>
                <div className="row">
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                          <div className={`text-start ${styles["text-style"]}`}>
                              <h1 data-aos="zoom-out-up" data-aos-duration="500">
                                  Collect and Sell
                                  <br/>
                                  your{" "}
                                  <span className={`${styles["gradient-txt"]}`}>awesome</span>
                                  <br/>
                                  NFTs
                              </h1>
                          </div>
                          <div className="text-start">
                              <p className={`${styles["information-txt"]} `} data-aos="zoom-out-right"
                                 data-aos-delay="7000">
                                    <span
                                        className={`text-start ${styles["colorize-decoration"]} position-relative`}
                                    >
                                      Mars{" "}
                                    </span>
                                  is a multi-shadow collection of different types of NFTs.
                                  <br/>
                                  Here it supports and is built on the Ethereum and Polygon
                                  <br/>
                                  blockchain network.
                              </p>
                          </div>
                          <div className="d-flex flex-row flex-wrap">
                              <div>
                                  <WhiteBtn txt={"Connect Wallet"}/>
                              </div>
                              <div>
                                  <EmptyBtn txt={"Learn more..."}/>
                              </div>
                          </div>

                    </div>
                    <div className="col-12 col-md-6">
                        <img className="img-fluid" src={image} alt=""/>
                    </div>
                </div>
            </div>
        </Cover>
    );
};
export default Collect;
