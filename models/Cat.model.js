const mongoose = require('mongoose');


const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 0,
        max: 15
    },
    color: {
        type: String,
        minlength: 3,
        maxlength: 60
    },
    photoUrl: {
        type: String,
        default: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

        // You can create some criterias for the string
        //match: /^[A-Z][a-z][0-9]$/
    },
    friends: [{type: String, minlength: 3, maxlength: 20}]
});

const Cat = mongoose.model("Cat", catSchema);
module.exports = Cat;
// module.exports = mongoose.module("Cat", catSchema);
