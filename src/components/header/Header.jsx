import React, { useState } from "react";
import "./header.css";
import UseScrollPosition from "../../hooks/UseScrollPosition";
import NavList from "./navList/NavList";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const scrollIsShow = UseScrollPosition() < 80;

  return (
    <header className={scrollIsShow ? "header" : "header scroll-header"}>
      <nav className="nav container">
        {!toggleMenu && (
          <a href="index.html" className="nav__logo">
            Oleksandr
          </a>
        )}

        <div className={toggleMenu ? "nav__menu show-menu" : "nav__menu"}>
          <NavList />

          <i
            className="uil uil-times nav__close"
            onClick={() => setToggleMenu(!toggleMenu)}
          ></i>
        </div>

        {!toggleMenu && (
          <div
            className="nav__toggle"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <i className="uil uil-apps"></i>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
