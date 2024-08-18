import React from "react";
import { getAge } from "../../helpers/getAge";
import { ReactComponent as Send } from "../../assets/send.svg";
import { ReactComponent as Hand } from "../../assets/hand.svg";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Oleksandr Didorchuk
        <Hand />
      </h1>
      <h3 className="home__subtitle">Full-stack developer</h3>
      <p className="home__description">
        I am a promising developer with {getAge()}+ years of experience in IT
      </p>

      <a href="#contact" className="button button--flex">
        Send Message
        <Send />
      </a>
    </div>
  );
};

export default Data;
