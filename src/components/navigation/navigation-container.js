import React from "react";
import { NavLink } from "react-router-dom";
import { FaPhoneVolume, FaMapMarkerAlt } from "react-icons/fa";

import Logo from "../../../static/images/cheff-black-Logo.jpg";

export default function Navbar(props) {
  return (
    <div className="navActive">
      {props.isMenu ? (
        <div className="menu"></div>
      ) : (
        <div className="navbar-wrapper">
          <div className="left-column">
            <div className="phone-icon">
              <FaPhoneVolume />
            </div>
            <div className="contact-hours">
              <div className="phone">123-456-7890</div>

              <div className="hours">10am - 6pm</div>
            </div>
          </div>

          <div className="center-column">
            <div className="banner-image">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="link-wrapper">
              <NavLink
                exact
                className="nav-link"
                activeClassName="selected"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="selected"
                to="/about"
              >
                About
              </NavLink>

              <NavLink
                className="nav-link"
                activeClassName="selected"
                to="/menu"
              >
                Menu
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="selected"
                to="/contact"
              >
                Contact
              </NavLink>
            </div>
          </div>

          <div className="right-column">
            <div className="address-wrapper">
              <a href="contact.html">Lawrence, Ma. 01841 </a>

              <div className="addy-icon">
                <a href="contact.html">
                  <FaMapMarkerAlt />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
