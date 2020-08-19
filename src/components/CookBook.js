import React, { Component } from "react";
import CookbookPage from "../styles/CookbookPage.module.css";

function AddRecipe ({ element }){
  return (
    <div className={CookbookPage.recipe}>
      <div className={CookbookPage.title}>{element.title}</div>
      <div className={CookbookPage.description}>{element.description}</div>
    </div>
  )
}

class Cookbook extends Component {
  state = {
    recipes: this.props.recipes
  };

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
        <div className={CookbookPage.bookmark} onClick={() => 
            console.log(this.state.recipes)}></div>
        <div className={CookbookPage.bodyContainer}>
          <div className={CookbookPage.header}>Cookbook</div>

          <div className={Cookbook.recipes}>
            {this.state.recipes.map((element, index) => (
              <AddRecipe key={index} element={element} index={index}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Cookbook;
