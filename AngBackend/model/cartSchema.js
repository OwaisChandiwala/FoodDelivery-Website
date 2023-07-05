const mongoose = require('mongoose') // mongoose is the library of Nodejs

const cartModel= new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name:String,
  price:Number,
  category: String

})
//shawarmamodel will hold all the schema data and it will pass it to model in next line when we export
module.exports = mongoose.model('carts', cartModel) //
