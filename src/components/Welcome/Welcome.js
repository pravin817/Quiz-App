import React from "react";
import "./Welcome.css";
import { NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome">
      <NavLink to="/">
        <h1>
          Welcome to <span>Q</span>uizz
        </h1>
      </NavLink>
    </div>
  );
};

export default Welcome;
