import React from "react";
import { Link } from "react-scroll";

const navElements = [
  {
    to: "home",
    name: "Home",
    icon: "estate",
  },
  {
    to: "about",
    name: "About",
    icon: "user",
  },
  {
    to: "skills",
    name: "Skills",
    icon: "file-alt",
  },
  {
    to: "portfolio",
    name: "Portfolio",
    icon: "scenery",
  },
  {
    to: "contact",
    name: "Contact",
    icon: "message",
  },
];

const NavItem = () => {
  return (
    <>
      {navElements.map(({ to, name, icon }) => (
        <li className="nav__item" key={to}>
          <Link
            className="nav__link"
            activeClass="active-link"
            to={to}
            spy={true}
          >
            <i className={`uil uil-${icon} nav__icon`}></i>

            {name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavItem;
