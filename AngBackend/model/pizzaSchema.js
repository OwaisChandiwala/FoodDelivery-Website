const mongoose = require('mongoose') // mongoose is the library of Nodejs

const pizzamodel= new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  PizzaName : String,
  QTY : Number,
  Price : Number,
  Image : String,
  CATEGORY: String

})
//pizzamodel will hold all the schema data and it will pass it to model in next line when we export
module.exports = mongoose.model('pizzas', pizzamodel) //
