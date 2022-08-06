import React from "react";
import { NavLink } from "react-router-dom";
import NavigationContainer from "../navigation/navigation-container";

import CenterPic from "../../../static/images/center-pic.jpg";

export default function home() {
  return (
    <div className="home-container">
      <NavigationContainer />
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${CenterPic})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="top-heading">
          <h2 text-align="center">
            Bringing the caribbean flavor to your every occasion
          </h2>
        </div>

        <div className="bottom-heading">
          <button className="button">
            <NavLink
              className="navbar-link"
              activeClassName="selected"
              to="/contact"
            >
              Book Now
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}
