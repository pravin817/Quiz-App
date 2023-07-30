import React from "react";
import "./Hero.css";
import Header from "../Header/Header";

const Hero = () => {
  return (
    <>
      <Header />
      <div className="hero container">
        <div className="hero-section">
          <h1 className="hero-heading">It matters how you ask</h1>
          <div className="hero-details">
            <p className="home-hero-paragraph">
              Assessment, instruction, and practice that motivate every learner{" "}
              <br /> to mastery
            </p>
            <div className="actions">
              <button className="btn">Get Started</button>
              <button className="btn">Know More</button>
            </div>

            <div className="hero-slogan">
              Slogan - Lorem ipsum dolor sit amet consectetur
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
