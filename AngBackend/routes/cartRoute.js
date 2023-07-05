const express = require ('express')
const router = express.Router() // express k liye router declaration
const mongoose = require('mongoose')
const cartmodel = require('../model/cartSchema')


//GET API -- Read all the data
router.get('/',(req,res)=>{
  cartmodel.find().then((mongodbData)=>{
    res.send(mongodbData)
    console.log(mongodbData)
  }).catch((err)=>{
    console.log(err)
  })
})


// //  POST API
// router.post('/addproduct', (req,res)=>{
//   cartmodel.replaceOne({name:req.body.name},
//     {name:req.body.name,
//     price:req.body.price,
//     category: req.body.category},{ upsert: true }).then((data)=>{
//       res.send(data)
//     }).catch(err=>{
//       console.log(err)
//     })
// })



//  POST API
router.post('/addproduct', (req,res)=>{

  cartmodel.replaceOne({name:req.body.name,},{name:req.body.name,
    price:req.body.price,
    category: req.body.category},{ upsert: true })
  addProduct = new cartmodel({
    _id: new mongoose.Types.ObjectId,
    name:req.body.name,
    price:req.body.price,
    category: req.body.category
  })

  addProduct.save().then(()=>{
    res.send("Data added to MongoDB!")
    console.log("Data added to MongoDB!")
  }).catch((err)=>{
    console.log(err)
  })
})

router.delete('/remove',(req,res)=>{
  cartmodel.deleteMany({}).then((mongodbData)=>{
    res.send(mongodbData)
    console.log(mongodbData)
  }).catch((err)=>{
    console.log(err)
  })
})


module.exports = router
