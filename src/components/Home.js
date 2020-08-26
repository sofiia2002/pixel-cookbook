import React, { Component } from "react";
import HomePage from "../styles//HomePage.module.css";
import Photo from "../styles/Photo.module.css";

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
        <div
          className={
            this.props.show
              ? ` ${HomePage.nav} ${HomePage.selected}`
              : HomePage.nav
          }
          onClick={this.props.action}
        >
          <img
            src={require("../images/home.png")}
            className={HomePage.img}
            alt=""
          />
        </div>
        <div className={HomePage.bodyContainer}>
          <div className={HomePage.header}>Home</div>
          <div className={HomePage.pageBlock}>
            <div className={HomePage.headerText}>
              <div>Welcome</div>
            </div>
            <div className={Photo.photoContainer}>
              <img
                src={require("../images/photoTwo.png")}
                alt=""
                className={Photo.photo}
              />
            </div>
            <div className={HomePage.titleText}>
              <div>Let's</div>
              <div>Create</div>
              <div>great</div>
              <div>memories</div>
            </div>

            <div className={HomePage.bodyText}>
              <p>
                This cookbook was created special for those people who are in
                love with pixel games and cooking as much as we are. Maybe it
                doesn't have a lot of features and fancy minimalistic look, but
                it was created with love. <br /> <br />
                Here you can add recipes in "Add recipe" category add manage
                them in "Cookbook" category. Also here you can read a little bit
                about developers in "About" category. <br /> <br />
                We wish you to have a good time dealing with this
                authentic cookbook!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
