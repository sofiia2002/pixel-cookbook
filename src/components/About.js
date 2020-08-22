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
        <div className={AboutPage.bodyContainer}>
          <div className={AboutPage.header}>About</div>
          <div className={AboutPage.body}>
            <div>Thank you for using this app, we really appreciate it.</div>
            <img
              src={require("../images/photoOne.png")}
              className={AboutPage.image}
              alt=""
            />
            <div>
              This app was created by Levchenko Sonya and dedicated to all of
              the people who are not sure what they want to do and looking for
              their passion in this moment.
            </div>
            <div> Copyright © 2020 by LevDream, Levchenko Sofiia</div>
          </div>
        </div>
        <div className={AboutPage.pageBlock}></div>
      </div>
    );
  }
}

export default About;
