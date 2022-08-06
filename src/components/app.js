import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Menu from "./pages/menu";
import NoMatch from "./pages/no-match";
import FootBar from "./footer/footer-container";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/menu" component={Menu} />

              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />

              <Route component={NoMatch} />
            </Switch>

            <FootBar />
          </div>
        </Router>
      </div>
    );
  }
}
