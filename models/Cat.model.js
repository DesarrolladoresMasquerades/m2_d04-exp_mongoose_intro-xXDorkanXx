const mongoose = require('mongoose');


const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    color: String,
    photoUrl: String
});

const Cat = mongoose.model("Cat", catSchema);
module.exports = Cat;
// module.exports = mongoose.module("Cat", catSchema);
