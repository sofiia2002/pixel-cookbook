const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Recipe = new Schema ({
    title: {
        type: String
    },
    description: {
        type: String
    },
    ingredients: {
        type: Array
    },
    directions: {
        type: Array
    },
    prep: {
        type: String
    },
    cook: {
        type: String
    }
})

module.exports = mongoose.model("Recipe", Recipe)