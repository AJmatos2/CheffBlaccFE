import React from "react";
import { NavLink } from "react-router-dom";

import NavigationContainer from "../navigation/navigation-container";
import SkewedPic from "../../../static/images/entree.jpg";

import Appetizer from "../../../static/images/App.jpg";
import Entree from "../../../static/images/maindish.jpg";
import Sidedish from "../../../static/images/sidedish.jpg";
import Dessert from "../../../static/images/Dessert.jpg";

export default function menu() {
  return (
    <div className="menuPage">
      <NavigationContainer isMenu={true} />
      <div className="skewed-header">
        <div
          className="header-bg"
          style={{
            backgroundImage: `url(${SkewedPic})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="skewed-header-wrapper">
          <div className="skewed-header-content">
            <div className="heading-wrapper">
              <h1>Blacc's Kitchen Experience</h1>
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
              <NavLink
                className="navbar-link"
                activeClassName="selected"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className="navbar-link"
                activeClassName="selected"
                to="/contact"
              >
                Contact
              </NavLink>
              <NavLink
                className="navbar-link"
                activeClassName="selected"
                to="/menu"
              >
                Menu
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="squares-wrapper">
        <div className="squares">
          <div className="square">
            <div className="img-wrapper">
              <img src={Appetizer} alt="fries-sq-1" />
            </div>

            <div className="square-text-wrapper">
              <a href="#Appetizer" name="Appetizer" className="anchor-link">
                <h1>Appetizers</h1>
              </a>

              <ul>
                <li>Fried Plantains (regular or Sweet)</li>
                <li>
                  Mofonguito (<em> fried plantain cups</em>) served w/ Jalapeno
                  relish and avacado crema
                </li>
                <li>
                  Haitian Patties <em>chicken/beef/salt fish</em>
                </li>
                <li>Haitian Meatballs</li>
                <li>Malanga Fritters</li>
                <li>Carribean Mac and cheese balls</li>
                <li>Mini Crab Cakes</li>
              </ul>
            </div>
          </div>

          <div className="square">
            <div className="square-text-wrapper">
              <a href="#Entree" name="Entree" className="anchor-link">
                <h1>Entree</h1>
              </a>

              <ul>
                <p>
                  <em>
                    All items on the list are prepared in a traditional Haitian
                    style.
                  </em>
                </p>
                <li>Haitian Baked Chicken</li>
                <li>Stewed Chicken</li>
                <li>Stewed Red Snapper</li>
                <li>stewed goat</li>
                <p>
                  <em>
                    The Fallowing are prepare in a traditional Jamaican style
                  </em>
                </p>
                <li>Curry Chicken</li>
                <li>Salmon</li>
                <li>shrimp</li>
                <li>Chicken</li>
                <br />
                <li>Stewed Oxtail</li>
                <li>Steak Tips</li>
              </ul>
            </div>

            <div className="img-wrapper">
              <img src={Entree} alt="Entree" />
            </div>
          </div>
          <div className="square">
            <div className="img-wrapper">
              <img src={Sidedish} alt="fries-sq-3" />
            </div>

            <div className="square-text-wrapper">
              <a href="#Sides" name="Sides" className="anchor-link">
                <h1>Sides</h1>
              </a>
              <ul>
                <li>White rice</li>
                <li>Rice and peas</li>
                <li>
                  Diri JonJon <em>Mushroom Rice</em>
                </li>
                <li>Coconut Rice</li>
                <li>Haitian Mac and Cheese</li>
                <li>Beet potato salad</li>
                <li>Macaroni Salad</li>
                <li>Roasted Garlic Mashed Yuca</li>
                <li>Loaded Cabbage</li>
                <li>Grilled Asparagus</li>
                <li>Cesar Salad</li>
                <li>Cranberry Walnut Salad</li>
                <li>Garden Salad</li>
              </ul>
            </div>
          </div>

          <div className="square">
            <div className="square-text-wrapper">
              <a href="#Dessert" name="Dessert" className="anchor-link">
                <h1>Dessert</h1>
              </a>
              <ul>
                <li>Mini Dulce de Leche cheesecake</li>
                <li>Tres Leche Cake</li>
                <li>chocolate Truffle bread pudding</li>
                <li>chocolate biscoff lava cake</li>
                <li>Creme Brulee</li>
                <li>Chocolate Mousse</li>
              </ul>
            </div>

            <div className="img-wrapper">
              <img src={Dessert} alt="Dessert" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
