import React, { Component } from "react";
import AboutPage from "../styles/AboutPage.module.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div
        className={
          this.props.show
            ? ` ${AboutPage.container} ${AboutPage.toTop} `
            : AboutPage.container
        }
      >
        <div
          className={
            this.props.show
              ? ` ${AboutPage.nav} ${AboutPage.selected}`
              : AboutPage.nav
          }
          onClick={this.props.action}
        >
          <img
            src={require("../images/author.png")}
            className={AboutPage.img}
            alt=""
          />
        </div>
        <div className={AboutPage.bookmark} onClick={this.props.close}></div>
      </div>
    );
  }
}

export default About;
