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
      recipes: []
      // recipes: [
      //   {
      //     title: "Scrambled Eggs",
      //     description: "These light and fluffy scrambled eggs are a snap to put together for a big crowd. I usually make 2 pans for our Christmas Brunch, and I never have much left over!",
      //     ingredients: ["1 tbs of melted butter", "4 eggs", "1/4 tsp salt", "2/5 cup milk"],
      //     directions: ["Preheat the oven to 350 degrees F (175 degrees C)", "Pour melted butter into a glass 9x13 inch baking dish. In a large bowl, whisk together eggs and salt until well blended. Gradually whisk in milk. Pour egg mixture into the baking dish", "Bake uncovered for 10 minutes, then stir, and bake an additional 10 to 15 minutes, or until eggs are set. Serve immediately."],
      //     prep: 10,
      //     cook: 25,
      //   },
      //   {
      //     title: "Fluffy French Toast",
      //     description: "This French toast recipe is different because it uses flour. I have given it to some friends and they've all liked it better than the French toast they usually make!",
      //     ingredients: ["¼ cup all-purpose flour", "1 cup milk", "1 pinch salt", "3 large eggs", "½ teaspoon ground cinnamon", "1 teaspoon vanilla extract", "1 tablespoon white sugar", "12 thick slices bread"],
      //     directions: ["Measure flour into a large mixing bowl. Slowly whisk in the milk. Whisk in the salt, eggs, cinnamon, vanilla extract and sugar until smooth.", "Heat a lightly oiled griddle or frying pan over medium heat.", "Soak bread slices in mixture until saturated. Cook bread on each side until golden brown. Serve hot."],
      //     prep: 10,
      //     cook: 20,
      //   },
      //   {
      //     title: "Buckwheat Pancakes",
      //     description: "I decided to make buckwheat pancakes for a few reasons: I get lots of requests for anything breakfast, I'm trying to cook with more whole grains, and I heard someone say it's almost impossible to make a great pancake using 100% buckwheat flour.",
      //     ingredients: ["1 cup buckwheat flour", "1 ½ teaspoons white sugar", "1  teaspoon baking powder", "¼ teaspoon salt", "¼ teaspoon baking soda", "1 ¼ cups buttermilk", "1 large egg, beaten", "¼ teaspoon vanilla extract", "1 tablespoon unsalted butter"],
      //     directions: ["Whisk buckwheat flour, sugar, baking powder, salt, and baking soda together in a bowl.", "Beat buttermilk, egg, and vanilla extract together in another bowl. Pour flour mixture into buttermilk mixture; whisk until batter is thick and smooth. Let batter rest for 5 minutes until bubbles form and batter relaxes.", "Melt butter on a griddle over medium heat. Drop batter by large spoonfuls onto the griddle and cook until bubbles form and the edges are dry, 3 to 4 minutes. Flip and cook until browned on the other side, 2 to 3 minutes. Repeat with remaining batter."],
      //     prep: 10,
      //     cook: 10,
      //   },
      // ],
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

  handleAddingRecipes = (recipe) => {
    let newRecipes = this.state.recipes;
    newRecipes.push(recipe);
    this.setState({recipes: newRecipes});
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
        />
        <NewRecipe 
          action={this.handlerNewRecipe} 
          show = {this.state.newRecipeClick}
          addRecipes={this.handleAddingRecipes}
        />
        <Cookbook 
          action={this.handlerCookbook}
          show = {this.state.cookbookClick}
          recipes={this.state.recipes}
        />
        <About 
          action = {this.handlerAbout}
          show = {this.state.aboutClick}
          close = {this.closeBook}
        />
        <CoverBack />
      </div>
    );
  }
}
 
export default App;
