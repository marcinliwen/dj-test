import React, { Component } from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./opinions.css";
import Star from '../../assets/Star.svg'

export default function Opinions() {
  const isBrowser = typeof window !== "undefined";
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0);
  const [isVertical, setIsVertical] = useState(true);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  useEffect(() => {
    if (width > 992) {
      setIsVertical(true);
    } else {
      setIsVertical(false);
    }
  }, [width]);

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: isVertical,
    verticalSwiping: isVertical,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <div className="artists-item">
            <div className="artists-img">
              <StaticImage
                src="../../images/opinions.png"
                alt="Opinie"
                placeholder="blurred"
                layout="fullWidth"
              />
            </div>
            <div className="artists-desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <span className="text-second">Jan i Anna Nowaccy</span>
              <span className="sub-title" style={{ color: "#fff" }}>
                Warszawa
              </span>
              <div className="stars">
                  <Star className="icon-gold" />
                  <Star className="icon-gold"/>
                  <Star className="icon-gold"/>
                  <Star className="icon-gold"/>
                  <Star className="icon-gold"/>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="artists-item">
            <div className="artists-img">
              <StaticImage
                src="../../images/opinions.png"
                alt="Opinie"
                placeholder="blurred"
                layout="fullWidth"
              />
            </div>
            <div className="artists-desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <span className="text-second">Jan i Anna Nowaccy</span>
              <span className="sub-title" style={{ color: "#fff" }}>
                Warszawa
              </span>
              <div className="stars">
                  <Star className="icon-gold" />
                  <Star className="icon-gold"/>
                  <Star className="icon-gold"/>
                  <Star className="icon-gold"/>
                  <Star className="icon-gold"/>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="artists-item">
            <div className="artists-img">
              <StaticImage
                src="../../images/opinions.png"
                alt="Opinie"
                placeholder="blurred"
                layout="fullWidth"
              />
            </div>
            <div className="artists-desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <span className="text-second">Jan i Anna Nowaccy</span>
              <span className="sub-title" style={{ color: "#fff" }}>
                Warszawa
              </span>
              <div className="stars">
                  <Star className="icon-gold" />
                  <Star className="icon-gold"/>
                  <Star className="icon-gold"/>
                  <Star className="icon-gold"/>
                  <Star className="icon-gold"/>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
