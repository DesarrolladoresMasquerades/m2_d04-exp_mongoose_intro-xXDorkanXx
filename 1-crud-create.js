// import/require the model

// CONNECT YOUR APP TO THE MONGODB
require('./configs/database.config');

// ****************************************************************************************************
// ****************************************************************************************************
// Create new cats (insert document in the DB (uses insertOne() and insertMany()))
// ----------------------------------------------------------------------------

// .create() is a mongoose method and under the hood uses insertOne and insertMany

// create one document in the cats collection
Cat

// create multiple documents in the cats collection

Cat.create({
    name: "Garfield",
    age: 5,
    color: "orange",
    friends: ["marco", "carol", "carlos", "yin"]
    // THis will break the schema BUT mongo will not complain
    // It's YOUR responsability to adhere to the schema
    //enemies: ["marco", "carol", "carlos"]
});