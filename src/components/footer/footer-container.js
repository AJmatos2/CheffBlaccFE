import React from "react";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";

import Logo from "../../../static/images/cheff-black-Logo.jpg";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="banner-image">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="footer-phone-hours">
        <div className="phone">555-555-5555</div>
        <div className="hours">10am-midnight</div>
      </div>

      <div className="link-wrapper">
        <NavLink
          exact
          className="navbar-link"
          activeClassName="selected"
          to="/"
        >
          Home
        </NavLink>
        <NavLink className="navbar-link" activeClassName="selected" to="/about">
          About
        </NavLink>
        <NavLink
          className="navbar-link"
          activeClassName="selected"
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink className="navbar-link" activeClassName="selected" to="/menu">
          Menu
        </NavLink>
      </div>

      <div className="social-media-icons">
        <a href="https://www.instagram.com/chef_blacc/" target="_black">
          <FaInstagramSquare className="icon" />
        </a>
        <a href="https://twitter.com/i/flow/login" target="_blank">
          <FaTwitter className="icon" />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <FaFacebookSquare className="icon" />
        </a>
      </div>
      <div className="copy-right-wrapper">
        &copy; Cheff Blacc Kitchen &#124; All rights reserved
      </div>
    </div>
  );
}
