const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = 80;
const recipeRoutes = express.Router();

const app = express();
const cors = require("cors");

let Recipe = require("./recipe.model.js");

app.use(cors());
app.use(bodyParser.json());
app.use("/recipes", recipeRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/pixelbook", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once("open", function() {
    console.log("MongoDB database connection estabilished successfully")
});

recipeRoutes.route("/").get(function(req,res) {
    Recipe.find(function(err, recipes) {
        if (err) {
            console.log(err);
        } else {
            res.json(recipes);
        }
    });
});

recipeRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Recipe.findById(id, function(err, todo) {
        res.json(todo);
    });
});

recipeRoutes.route("/add").post(function(req,res) {
    let recipe = new Recipe(req.body);
    recipe.save()
    .then(recipe => {
        res.status(200).json({"recipe" : "recipe added successfully "})
    })
    .catch(err => {
        res.status(400).send("adding new todo failed")
    })
})

app.listen(PORT, function() {
    console.log("Server is running on Port: "+PORT);
});