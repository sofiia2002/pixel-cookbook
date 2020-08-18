import React, { Component } from 'react';
import './App.css';
import Cover from "./components/Cover";
import Home from "./components/Home";
import NewRecipe from "./components/NewRecipe";
import Cookbook from "./components/CookBook";
import About from "./components/About";
import CoverBack from "./components/CoverBack";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      homeClick: false,
      newRecipeClick: false,
      cookbookClick: false,
      aboutClick: false,
    }
  }

  handlerHome = () => {
    this.setState({ 
        homeClick: true,
        newRecipeClick: false,
        cookbookClick: false,
        aboutClick: false,
      });
  }  

  handlerNewRecipe= () => {
    this.setState({ 
        homeClick: false,
        newRecipeClick: true,
        cookbookClick: false,
        aboutClick: false,
      });
  }  

  handlerCookbook = () => {
    this.setState({ 
        homeClick: false,
        newRecipeClick: false,
        cookbookClick: true,
        aboutClick: false,
      });
  }  

  handlerAbout = () => {
    this.setState({ 
        homeClick: false,
        newRecipeClick: false,
        cookbookClick: false,
        aboutClick: true,
      });
  }  

  closeBook = () => {
    this.setState({ 
      homeClick: false,
      newRecipeClick: false,
      cookbookClick: false,
      aboutClick: false,
    });
  }


  render() { 
    return (
      <div className="wrapper">
        <Cover 
          dataFromParent = {this.state}
        />
        <Home 
          action={this.handlerHome} 
          show = {this.state.homeClick}
          toCreateRecipe = {this.handlerNewRecipe}
        />
        <NewRecipe 
          action={this.handlerNewRecipe} 
          show = {this.state.newRecipeClick}
        />
        <Cookbook 
          action={this.handlerCookbook}
          show = {this.state.cookbookClick}
        />
        <About 
          action={this.handlerAbout} 
          show = {this.state.aboutClick}
          close = {this.closeBook}
        />
        <CoverBack />
      </div>
    );
  }
}
 
export default App;
