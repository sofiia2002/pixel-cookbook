import React, { Component, useState, useRef } from "react";
import NewRecipePage from "../styles/NewRecipePage.module.css";
import Button from "../styles/Button.module.css";
import axios from "axios";

function AddElement({ index, element, removeElement, editText }) {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(element);
  const editableRef = useRef();

  return (
    <div>
      <div>{index + 1}</div>
      <div
        contentEditable={edit ? "true" : "false"}
        ref={editableRef}
        onPaste={(e) => {
          e.preventDefault();
          const text = e.clipboardData.getData("text");
          editableRef.current.innerText = editableRef.current.innerText + text;
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            setEdit(false);
            if (text!==""){
              editText(text, index);
            } else {
              setText(element);
            }
          }
        }}
        onKeyUp={(e)=>{
          setText(e.currentTarget.textContent)
        }}
      >
        {element}
      </div>
      <div
        onClick={() => {
          if ((edit)&&(text!=="")) {
            editText(text, index);
          } else if((edit)&&(text==="")) {
            setText(element);
          }
          setEdit(!edit);
        }}
        className={edit ? "fa fa-save" : "fa fa-pencil"}
      ></div>
      <div
        onClick={() => {
          if (edit) {
            editableRef.current.innerText = element;
            setText(element);
            setEdit(false);
          } else {
          removeElement(index);
          }
        }}
        className={edit ? "fa fa-times-circle" : "fa fa-trash"}
      ></div>
    </div>
  );
}

class NewRecipe extends Component {
  state = {
    title: "",
    description: "",
    ingredient: "",
    ingredients: [],
    direction: "",
    directions: [],
    prep: "",
    cook: "",
    hint: "one",
    showHint: "true",
  };

  removeDirection = (index) => {
    const newDirections = this.state.directions;
    newDirections.splice(index, 1);
    this.setState({ directions: newDirections });
  };

  removeIngredient = (index) => {
    const newIngredients = this.state.ingredients;
    newIngredients.splice(index, 1);
    this.setState({ ingredients: newIngredients });
  };

  editIngredient = (text, index) => {
    let newIngredients = this.state.ingredients;
    newIngredients[index] = text;
    this.setState({ ingredients: newIngredients });
  };

  editDirection = (text, index) => {
    let newDirections = this.state.directions;
    newDirections[index] = text;
    this.setState({ directions: newDirections });
  };

  render() {
    return (
      <div
        className={
          this.props.show
            ? ` ${NewRecipePage.container} ${NewRecipePage.toTop} `
            : NewRecipePage.container
        }
      >
        <div
          className={
            this.props.show
              ? ` ${NewRecipePage.nav} ${NewRecipePage.selected}`
              : NewRecipePage.nav
          }
          onClick={this.props.action}
        >
          <img
            src={require("../images/feather.png")}
            className={NewRecipePage.img}
            alt=""
          />
        </div>

        <div className={NewRecipePage.bodyContainer}>
          <div className={NewRecipePage.pageBlock}>
            <div className={NewRecipePage.header}>Recipe</div>
            <div
              className={
                this.state.showHint
                  ? ` ${NewRecipePage.hint} ${NewRecipePage.show}`
                  : ` ${NewRecipePage.hint} ${NewRecipePage.hide}`
              }
            >
              <div
                className={
                  this.state.showHint
                    ? NewRecipePage.showHint
                    : NewRecipePage.hideHint
                }
                onClick={() => {
                  this.setState({ showHint: !this.state.showHint });
                }}
              ></div>
              <div
                className={
                  this.state.hint === "one"
                    ? NewRecipePage.one
                    : this.state.hint === "two"
                    ? NewRecipePage.two
                    : NewRecipePage.three
                }
              >
                <div>Here you can add new recipe to your cookbook.</div>
                <div>
                  To be able to submit the recipe you MUST enter the title, add
                  some directions and ingredients.
                </div>
                <div>
                  After clicking "Add recipe", new recipe will automaticly
                  appear in your Cookbook.
                </div>
              </div>
              <div>
                <div
                  className={
                    this.state.hint === "one"
                      ? NewRecipePage.unclicable
                      : NewRecipePage.clicable
                  }
                  onClick={() => {
                    if (this.state.hint === "two") {
                      this.setState({ hint: "one" });
                    } else if (this.state.hint === "three") {
                      this.setState({ hint: "two" });
                    }
                  }}
                >
                  <i className="fa fa-angle-left"></i>
                </div>
                <div
                  className={
                    this.state.hint === "three"
                      ? NewRecipePage.unclicable
                      : NewRecipePage.clicable
                  }
                  onClick={() => {
                    if (this.state.hint === "one") {
                      this.setState({ hint: "two" });
                    } else if (this.state.hint === "two") {
                      this.setState({ hint: "three" });
                    }
                  }}
                >
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
            </div>
            <div className={NewRecipePage.fields}>
              <div>
                <div>Recipe title</div>
                <input
                  value={this.state.title}
                  onChange={(e) => {
                    this.setState({ title: e.target.value });
                  }}
                  placeholder="Write a title of recipe"
                />
              </div>

              <div>
                <div>Description</div>
                <textarea
                  placeholder="Write a discription of recipe"
                  value={this.state.description}
                  onChange={(e) => {
                    this.setState({ description: e.target.value });
                  }}
                />
              </div>

              <div>
                <div>Ingredients</div>
                <div className={NewRecipePage.elements}>
                  {this.state.ingredients.map((element, index) => (
                    <AddElement
                      key={index}
                      element={element}
                      index={index}
                      removeElement={this.removeIngredient}
                      editText={this.editIngredient}
                    />
                  ))}
                </div>
                <input
                  placeholder="Write an ingredient and press Enter"
                  type="text"
                  value={this.state.ingredient}
                  onChange={(e) => {
                    this.setState({ ingredient: e.target.value });
                  }}
                  onKeyDown={(e) => {
                    if (
                      e.keyCode === 13 &&
                      this.state.ingredient.replace(/ /g, "") !== ""
                    ) {
                      this.state.ingredients.push(this.state.ingredient);
                      this.setState({ ingredient: "" });
                    }
                  }}
                />
              </div>

              <div>
                <div>Directions</div>
                <div className={NewRecipePage.elements}>
                  {this.state.directions.map((element, index) => (
                    <AddElement
                      key={index}
                      element={element}
                      index={index}
                      removeElement={this.removeDirection}
                      editText={this.editDirection}
                    />
                  ))}
                </div>
                <input
                  placeholder="Write a direction and press Enter"
                  type="text"
                  value={this.state.direction}
                  onChange={(e) => {
                    this.setState({ direction: e.target.value });
                  }}
                  onKeyDown={(e) => {
                    if (
                      e.keyCode === 13 &&
                      this.state.direction.replace(/ /g, "") !== ""
                    ) {
                      this.state.directions.push(this.state.direction);
                      this.setState({ direction: "" });
                    }
                  }}
                />
              </div>

              <div className={NewRecipePage.timeFields}>
                <div>
                  <div>Prep time</div>
                  <div>
                    <input
                      type="text"
                      placeholder="0"
                      value={this.state.prep}
                      onChange={(e) => {
                        const check = /^[0-9\b]+$/;
                        if (
                          e.target.value === "" ||
                          check.test(e.target.value)
                        ) {
                          this.setState({ prep: e.target.value });
                        }
                      }}
                    />
                    <div>min</div>
                  </div>
                </div>

                <div>
                  <div>Cook time</div>
                  <div>
                    <input
                      type="text"
                      placeholder="0"
                      value={this.state.cook}
                      onChange={(e) => {
                        const check = /^[0-9\b]+$/;
                        if (
                          e.target.value === "" ||
                          check.test(e.target.value)
                        ) {
                          this.setState({ cook: e.target.value });
                        }
                      }}
                    />
                    <div>min</div>
                  </div>
                </div>
              </div>

              <div className={Button.buttons}>
                <div
                  className={
                    this.state.title.replace(/ /g, "") !== "" &&
                    this.state.ingredients.length !== 0 &&
                    this.state.directions.length !== 0
                      ? Button.able
                      : Button.disable
                  }
                  onClick={() => {
                    if (
                      this.state.title.replace(/ /g, "") !== "" &&
                      this.state.ingredients.length !== 0 &&
                      this.state.directions.length !== 0
                    ) {
                      const recipe = {
                        title: this.state.title,
                        description: this.state.description,
                        ingredients: this.state.ingredients,
                        directions: this.state.directions,
                        prep: this.state.prep,
                        cook: this.state.cook,
                      };
                      axios
                        .post("http://localhost:80/recipes/add", recipe)
                        .then((res) => console.log(res.data));
                      this.props.addRecipes(recipe);
                      this.setState({
                        title: "",
                        description: "",
                        ingredient: "",
                        ingredients: [],
                        direction: "",
                        directions: [],
                        prep: "",
                        cook: "",
                        hint: "one",
                      });
                    }
                  }}
                >
                  Add recipe
                </div>

                <div
                  className={NewRecipePage.able}
                  onClick={() => {
                    this.setState({
                      title: "",
                      description: "",
                      ingredient: "",
                      ingredients: [],
                      direction: "",
                      directions: [],
                      prep: "",
                      cook: "",
                      hint: "one",
                    });
                  }}
                >
                  Clear
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewRecipe;
