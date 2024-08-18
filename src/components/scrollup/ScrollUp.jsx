import React from "react";
import "./scrollup.css";
import UseScrollPosition from "../../hooks/UseScrollPosition";

const ScrollUp = () => {
  const scrollIsShow = UseScrollPosition() >= 560;

  return (
    <a href="# " className={scrollIsShow ? "scrollup show-scroll" : "scrollup"}>
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
