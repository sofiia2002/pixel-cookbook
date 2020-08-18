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
          <div className={HomePage.photoContainer}>
            <img
              src={require("../images/photoTwo.png")}
              alt=""
              className={HomePage.photo}
            />
          </div>
          <div class={HomePage.header}>Home</div>
          <div className={HomePage.titleText}>
            <div>Create</div>
            <div>great</div> 
            <div>memories</div>
            <div onClick={this.props.toCreateRecipe}>New recipe</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
