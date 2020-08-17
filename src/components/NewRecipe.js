import React, { Component } from "react";
import NewRecipePage from "../styles//NewRecipePage.module.css";

class NewRecipe extends Component {
  state = {};
  render() {
    return (
      <div
        className={
          this.props.show
            ? ` ${NewRecipePage.container} ${NewRecipePage.toTop} `
            : NewRecipePage.container
        }
      >
        <div className={
            this.props.show
              ? ` ${NewRecipePage.nav} ${NewRecipePage.selected}`
              : NewRecipePage.nav
          } onClick={this.props.action}>
          <img
            src={require("../images/feather.png")}
            className={NewRecipePage.img}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default NewRecipe;
