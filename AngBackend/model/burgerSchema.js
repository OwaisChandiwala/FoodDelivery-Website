const mongoose = require('mongoose') // mongoose is the library of Nodejs

const burgersmodel= new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  BurgerName : String,
  QTY : Number,
  PRICE : Number,
  IMAGE : String,
  CATEGORY: String
})
//burgermodel will hold all the schema data and it will pass it to model in next line when we export
module.exports = mongoose.model('burgers', burgersmodel) //
