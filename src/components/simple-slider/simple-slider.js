import React, {Component} from 'react'
import Slider from "react-slick";
import "./simple_slider.sass"
import slide1 from "./slider/1.jpg"
import slide2 from "./slider/1.jpg"
import slide3 from "./slider/1.jpg"

class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            fade: true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: false
        };
        return (
            <div className={"slider-section"}>
                <div className="slider">
                    <Slider {...settings}>
                        <div>
                            <div className={"slide"} style={{"backgroundImage":`url(${slide1})`}}></div>
                        </div>
                        <div>
                            <div className={"slide"} style={{"backgroundImage":`url(${slide2})`}}></div>
                        </div>
                        <div>
                            <div className={"slide"} style={{"backgroundImage":`url(${slide3})`}}></div>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}

export default SimpleSlider