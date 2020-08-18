import React, { Component } from "react";
import CoverPage from "../styles/CoverPage.module.css";

class Cover extends Component {
  constructor(props) {
    super(props);
    console.log(props.state);
    this.state = {};
  }

  isEmpty = () => {
    const keys = Object.keys(this.props.dataFromParent);
    const empty = keys.filter(
      (item) => this.props.dataFromParent[item] === false
    );
    console.log(empty);
    return empty.length === 4;
  };

  render() {
    return (
      <div
        className={this.isEmpty() ? CoverPage.container : CoverPage.hide}
        id="containerCover"
      >
        <div className={CoverPage.title}>Cookbook</div>
        {/* <img
          src={require("../images/coverPhoto.png")}
          className={CoverPage.img}
          alt=""
        />
        <a href="https://www.vecteezy.com/free-vector/food-app-icon"></a> */}
      </div>
    );
  }
}

export default Cover;
