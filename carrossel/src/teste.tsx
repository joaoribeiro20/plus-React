import React, { Component } from "react";
import Slider from "react-slick";
import App from "./App.css";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 1000,
            cssEase: "linear"
        };
        return (
          <div className="teste">
            <h2>Center Mode</h2>
            <Slider {...settings}>
              <div className="divIntem">
                <div className="testew">
                    <h2>legal</h2>
                    <ol>
                        <li>sla</li>
                        <li>sla</li>
                        <li>sla</li>

                        <li>sla</li>
                        <li>sla</li>
                    </ol>
                </div>
              </div>
              <div className="divIntem">
                <div className="testew">
                <h2>legal</h2>
                    <ol>
                        <li>sla</li>
                        <li>sla</li>
                        <li>sla</li>

                        <li>sla</li>
                        <li>sla</li>
                    </ol>
                </div>
              </div>
              <div className="divIntem">
                <div className="testew">
                <h2>legal</h2>
                    <ol>
                        <li>sla</li>
                        <li>sla</li>
                        <li>sla</li>

                        <li>sla</li>
                        <li>sla</li>
                    </ol>
                </div>
              </div>
              <div className="divIntem">
                <div className="testew">
                <h2>legal</h2>
                    <ol>
                        <li>sla</li>
                        <li>sla</li>
                        <li>sla</li>

                        <li>sla</li>
                        <li>sla</li>
                    </ol>
                </div>
              </div>
              <div className="divIntem">
                <div className="testew">
                <h2>legal</h2>
                    <ol>
                        <li>sla</li>
                        <li>sla</li>
                        <li>sla</li>

                        <li>sla</li>
                        <li>sla</li>
                    </ol>
                </div>
              </div>
            </Slider>
          </div>
        );
      } 
}