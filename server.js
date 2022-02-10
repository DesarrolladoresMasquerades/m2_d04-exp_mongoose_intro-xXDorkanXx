require("./configs/database.config");

const Cat = require("./models/Cat.model");

Cat.create({
    name: "Garfield",
    age: 13,
    color: "orange"
    // THis will break the schema BUT mongo will not complain
    // It's YOUR responsability to adhere to the schema
    //friends: ["marco", "carol", "carlos"]
});