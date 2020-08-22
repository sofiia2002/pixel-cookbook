import React, { Component } from "react";
import CoverPage from "../styles/CoverPage.module.css";

class Cover extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  isEmpty = () => {
    const keys = Object.keys(this.props.dataFromParent);
    const empty = keys.filter(
      (item) => this.props.dataFromParent[item] === false
    );
    return empty.length === 4;
  };

  render() {
    return (
      <div
        className={this.isEmpty() ? CoverPage.container : CoverPage.hide}
        id="containerCover"
      >
        <div className={CoverPage.title}>Cookbook</div>
      </div>
    );
  }
}

export default Cover;
