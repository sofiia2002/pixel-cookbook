import React, { Component } from "react";
import CoverBackPage from "../styles/CoverBackPage.module.css"

class CoverBack extends Component {
  state = {};
  render() {
    return (
    <div className={CoverBackPage.container}>
        <div className={CoverBackPage.pageOne}></div>
        <div className={CoverBackPage.pageTwo}></div>
    </div>
    );
  }
}

export default CoverBack;