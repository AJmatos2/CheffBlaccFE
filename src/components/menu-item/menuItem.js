import React, { Component } from "react";
import axios from "axios";

export default class menuItem extends Component {
  constructor(props) {
    super(props);

    this.handleFilter = this.handleFilter.bind(this);
  }

  // handleFilter(filter) {
  //   if (filter === "") {
  //     this.getMenuItems();
  //   } else {
  //     this.getMenuItems(filter);
  //   }filter = nul
  // }

  componentDidMount() {
    axios
      .get("http://127.0.0.1:5000/get")
      .then((response) => {
        console.log("responese from getMenuItem", response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderMenu() {
    return console.log();
  }

  render() {
    return <div>menuItem</div>;
  }
}
