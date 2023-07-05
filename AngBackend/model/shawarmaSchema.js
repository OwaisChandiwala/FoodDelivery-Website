const mongoose = require('mongoose') // mongoose is the library of Nodejs

const shawarmamodel= new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  ShawarmaName : String,
  QTY : Number,
  Price : Number,
  Image : String,
  CATEGORY: String

})
//shawarmamodel will hold all the schema data and it will pass it to model in next line when we export
module.exports = mongoose.model('shawarma', shawarmamodel) //
