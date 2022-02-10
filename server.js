require("dotenv/config");
require("./configs/database.config")

const Cat = require("./models/Cat.model");

// Cat.findOneAndUpdate()
// Is dangerous because it will update if the filter b'object is "wrong"

Cat.findByIdAndUpdate(
    "6204fedb9d5d42bdfaae4db6",
    {$set: {name: "Sandra"}},
    {new: true})
.then((cat) => console.log(cat));