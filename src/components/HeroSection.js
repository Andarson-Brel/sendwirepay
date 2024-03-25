import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@lottiefiles/lottie-player";
import { Link } from "react-router-dom";

const HeroSection = () => {
  AOS.init();
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div
          className="hero-description-container"
          data-aos="fade-up"
          data-aos-once={true}
        >
          <p className="hero-section-heading">Your financial passport</p>
          <p
            className="description"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-once={true}
          >
            Easy multi-currency money management, instant payments, best
            exchange rates. Open a global account now that moves with you round
            the world.
          </p>
          <div
            className="button-container"
            data-aos="fade-up"
            data-aos-once={true}
            data-aos-duration="2300"
          >
            <Link
              to={
                "https://play.google.com/store/apps/details?id=com.maplerad.wirepayapp&pli=1"
              }
            >
              <button className="stores-btn">
                <img src="./images/google-icon.svg" alt="" className="google" />
              </button>
            </Link>
            <Link
              to={
                "https://apps.apple.com/ng/app/wirepay-global-payment/id1546502829"
              }
            >
              <button className="stores-btn">
                <img src="./images/apple-icon.svg" alt="" className="apple" />
              </button>
            </Link>
          </div>
          <div
            className="sponsors"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-once={true}
          >
            <p>Backed By</p>
            <img src="./images/sponsors.svg" alt="" className="sponsors-img" />
          </div>
        </div>
        <div className="hero-img-section">
          <div className="outside-container">
            <lottie-player
              autoplay
              mode="normal"
              src="https://lottie.host/771711ab-ea1f-44b7-857e-6c096fd2e951/2cPLu0lCnR.json"
            ></lottie-player>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
