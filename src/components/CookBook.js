import React, { Component } from "react";
import CookbookPage from "../styles/CookbookPage.module.css";

class Cookbook extends Component {
  state = {};

  render() {
    return (
      <div
        className={
          this.props.show
            ? ` ${CookbookPage.container} ${CookbookPage.toTop} `
            : CookbookPage.container
        }
      >
        <div className={
            this.props.show
              ? ` ${CookbookPage.nav} ${CookbookPage.selected}`
              : CookbookPage.nav
          } onClick={this.props.action}>
          <img
            src={require("../images/cookbook.png")}
            className={CookbookPage.img}
            alt=""
          />
        </div>
        <div className={CookbookPage.bookmark}></div>
      </div>
    );
  }
}

export default Cookbook;
