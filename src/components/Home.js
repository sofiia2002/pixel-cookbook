import React, { Component } from "react";
import HomePage from "../styles//HomePage.module.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div
        className={
          this.props.show
            ? ` ${HomePage.container} ${HomePage.toTop} `
            : HomePage.container
        }
      >
        <div className={
            this.props.show
              ? ` ${HomePage.nav} ${HomePage.selected}`
              : HomePage.nav
          } onClick={this.props.action}>
          <img
            src={require("../images/home.png")}
            className={HomePage.img}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Home;
