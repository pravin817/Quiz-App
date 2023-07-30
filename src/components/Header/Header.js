import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    // <div className="header">
    //   <Link to="/" className="title">
    //     Quizz
    //   </Link>
    //   <hr className="divider" />
    // </div>

    <div className="navbar container">
      <div className="nav-left">
        <h1>
          <NavLink to="/">
            <span className="nav-header">Q</span>uizz
          </NavLink>
        </h1>
      </div>
      <div className="nav-right">
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <li>
            <button className="btn">
              <NavLink to="/start">Get Started</NavLink>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
