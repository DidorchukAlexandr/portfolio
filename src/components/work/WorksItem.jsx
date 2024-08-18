import React from "react";
import loader from "../../assets/simpson-homer.gif";

const WorksItem = ({ item, isLoaded }) => {
  return (
    <div className="work__card" key={item.id}>
      <img
        src={isLoaded ? loader : item.image}
        alt={item.title}
        className="work__img"
      />
      <h3 className="work__title">{item.title}</h3>
      <a href={item.link} className="work__button" target="_blanc">
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorksItem;
