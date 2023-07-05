const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const shawarmamodel = require('../model/shawarmaSchema')

// get api for all data

router.get('/', (req,res)=>{
shawarmamodel.find().then((mongodbData)=>{
  res.send(mongodbData)
  console.log(mongodbData)
}).catch((err)=>{
  console.log(err)
})
})

//GET API BY ID search
router.get('/:id',(req,res)=>{
  shawarmamodel.find({_id:req.params.id}).then((mongodbData)=>{
    res.send(mongodbData)
    console.log(mongodbData)
  }).catch((err)=>{
    res.send(err)
    console.log(err)
  })
})



// //GET API BY ID search
// router.get('/:name',(req,res)=>{
//   shawarmamodel.find({ShawarmaName:{$in:req.params.name}}).then((mongodbData)=>{
//     res.send(mongodbData)
//     console.log(mongodbData)
//   }).catch((err)=>{
//     res.send(err)
//     console.log(err)
//   })
// })

//  POST API
router.post('/addproduct', (req,res)=>{
  addProduct = new shawarmamodel({
    _id: new mongoose.Types.ObjectId,
  ShawarmaName : req.body.prodName,
  QTY : req.body.prodQty,
  Price : req.body.prodPrice,
  Image : req.body.prodImg,
  CATEGORY: req.body.category
  })

  addProduct.save().then(()=>{
    res.send("Data added to MongoDB!")
    console.log("Data added to MongoDB!")
  }).catch((err)=>{
    console.log(err)
  })
})



//Delete API
router.delete('/deleteProd/:id',(req,res)=>{
  shawarmamodel.deleteOne({_id: req.params.id}).then((data)=>{
    res.status(200).json({message:"Data Deleted!"})
  }).catch((err)=>{
    res.status(404).json("data not exist!")
    console.log(err)
  })
})



//PUT API --- UPDATE
router.put("/updateProd/:id",(req,res)=>{
  shawarmamodel.updateOne({_id:req.params.id},{$set:{
    QTY : req.body.prodQty,
    Price : req.body.prodPrice,
    Image : req.body.prodImg
  }}).then((data)=>{
    res.status(202).json({message:"Product Updated!"})
    console.log(data)
  }).catch((err)=>{
    res.status(404).json({message:err})
    console.log(err)
  })
})


module.exports = router;
