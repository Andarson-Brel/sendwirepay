import React, { useEffect, useRef } from "react";
import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";

const FeaturesSection = () => {
  const myRefs = useRef([]);

  useEffect(() => {
    const cards = document.querySelectorAll(".card-display");

    cards.forEach((card, index) => {
      create({
        mode: "cursor",
        player: `#card${index + 1}`,
        actions: [
          {
            position: { x: [0, 1], y: [0, 1] },
            type: "play",
            frames: getFrameRangeForCard(index + 1),
          },
          {
            position: { x: -1, y: -1 },
            type: "stop",
            frames: [0],
          },
        ],
      });
    });
  }, []);
  // Function to get frame range based on card index
  const getFrameRangeForCard = (cardIndex) => {
    switch (cardIndex) {
      case 1:
        return [0, 184]; // Frame range for card 1
      case 2:
        return [0, 344]; // Frame range for card 2
      // Add cases for other cards as needed
      case 3:
        return [0, 240];
      case 4:
        return [0, 811];
      case 5:
        return [0, 360];
      default:
        return [0, 184]; // Default frame range
    }
  };
  return (
    <section className="features-section">
      <div className="features-description">
        <button
          className="features-btn"
          data-aos="fade-up"
          data-aos-once={true}
          data-aos-duration="2000"
        >
          <p className="features-head">Features</p>
        </button>
        <h1
          className="features-header"
          data-aos="fade-up"
          data-aos-once={true}
          data-aos-duration="3000"
        >
          The Super Financial App
        </h1>
        <p
          className="feats-description"
          data-aos="fade-up"
          data-aos-once={true}
          data-aos-duration="3000"
        >
          A multi currency e-wallet that allows you to exchange,
          <br />
          spend and send money at the best possible rates
        </p>
      </div>

      <div
        className="feature-container"
        data-aos="fade-up"
        data-aos-once={true}
        data-aos-duration="3000"
      >
        <div className="features-grid1">
          <div className="card card1">
            <div className="card-display">
              <lottie-player
                ref={myRefs.current[0]}
                id="card1"
                mode="normal"
                src="https://lottie.host/852ffd13-430c-4f99-a2e3-07aa477e4a46/utRaMPeqma.json"
              ></lottie-player>
            </div>
            <h1 className="card-heading">Fast Payments</h1>
            <p className="card-description">
              Move money across town, across Africa or across continents
              hassle-free.
            </p>
          </div>
          <div className="card card2">
            <div className="card-display">
              <lottie-player
                ref={myRefs.current[1]}
                id="card2"
                mode="normal"
                src="https://lottie.host/5b7eec15-d10d-4409-8512-f900c9af4906/3Luh8nLhgJ.json"
              ></lottie-player>
            </div>
            <h1 className="card-heading">Virtual Cards</h1>
            <p className="card-description">
              Shop, subscribe, and pay your bills without hassle. Easy!
            </p>
          </div>
          <div className="card card3">
            <div className="card-display">
              <lottie-player
                ref={myRefs.current[2]}
                id="card3"
                mode="normal"
                src="https://lottie.host/40cc45a0-15b4-410f-a2a8-6ad15639ad1f/Bxk2cUQetG.json"
              ></lottie-player>
            </div>
            <h1 className="card-heading">Bill Payments</h1>
            <p className="card-description">
              Send airtime to anyone across Africa, and get up to 3% cashback
            </p>
          </div>
        </div>
        <div
          className="features-grid2"
          data-aos="fade-up"
          data-aos-once={true}
          data-aos-duration="3000"
        >
          <div className="card card4">
            <div className="card-display">
              <lottie-player
                ref={myRefs.current[3]}
                id="card4"
                mode="normal"
                src="https://lottie.host/83fd6af1-ff2e-4e03-8f7b-06d11241c693/EmawxUkQJG.json"
              ></lottie-player>
            </div>
            <h1 className="card-heading">Multicurrency Wallets</h1>
            <p className="card-description">
              Receive, hold, and exchange money in more than 20 currencies for
              free.
            </p>
          </div>
          <div className="card card5">
            <div className="card-display">
              <lottie-player
                ref={myRefs.current[4]}
                id="card5"
                mode="normal"
                src="https://lottie.host/cc5fc6ea-dd48-44d1-9930-d1662c74440d/DMueMnGax5.json"
              ></lottie-player>
            </div>
            <h1 className="card-heading">Exchange Currency</h1>
            <p className="card-description">
              Swap your currency at great rates with more than 20+ currencies
              available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
