import React from "react";

const CardSection = () => {
  return (
    <section className="card-section">
      <div className="card-container">
        <h1
          className="cards-heading"
          data-aos="fade-up"
          data-aos-once={true}
          data-aos-duration="3000"
        >
          Get a card that <br />
          matches your style
        </h1>
        <p
          className="cards-description"
          data-aos="fade-up"
          data-aos-once={true}
          data-aos-duration="2000"
        >
          Select your style and enjoy a card <br />
          you can brag about.
        </p>

        <div className="card-img">
          <img className="cards1" src="./images/card-1.svg" alt="" />
          <img className="cards2" src="./images/card-2.svg" alt="" />
          <img className="cards3" src="./images/card-3.svg" alt="" />
          <img className="cards4" src="./images/card-4.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default CardSection;
