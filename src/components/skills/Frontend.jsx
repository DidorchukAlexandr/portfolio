import React from "react";
import { getSkills } from "../../services/Api";
import { nanoid } from "nanoid";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>
      <div className="skills__box">
        {getSkills("front").map(({ name, level }) => (
          <div className="skills__data" key={nanoid()}>
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">{name}</h3>
              <span className="skills__level">{level}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frontend;
