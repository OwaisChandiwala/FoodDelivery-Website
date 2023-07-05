const express = require ('express')
const router = express.Router() // express k liye router declaration
const mongoose = require('mongoose')
const burgersmodel = require('../model/burgerSchema')


//GET API -- Read all the data
router.get('/',(req,res)=>{
  burgersmodel.find().then((mongodbData)=>{
    res.send(mongodbData)
    console.log(mongodbData)
  }).catch((err)=>{
    console.log(err)
  })
})

// GET API -- Search particular data
router.get('/:id', (req,res)=>{
  burgersmodel.find({_id:req.params.id}).then((mongodbData)=>{
    res.send(mongodbData)
    console.log(mongodbData)
  }).catch(err=>{
    console.log(err)
  })
})



// //GET API -- Search particular data
// router.get('name/:name', (req,res)=>{
//   burgersmodel.find({BurgerName:{$in:[req.params.name]}}).then((mongodbData)=>{
//     res.send(mongodbData)
//     console.log(mongodbData)
//   }).catch(err=>{
//     console.log(err)
//   })
// })




//  POST API
router.post('/addproduct', (req,res)=>{
  addProduct = new burgersmodel({
    _id: new mongoose.Types.ObjectId,
  BurgerName : req.body.prodName,
  QTY : req.body.prodQty,
  PRICE : req.body.prodPrice,
  IMAGE : req.body.prodImg,
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
  burgersmodel.deleteOne({_id: req.params.id}).then((data)=>{
    res.status(200).json({message:"Data Deleted!"})
  }).catch((err)=>{
    res.status(404).json("data not exist!")
    console.log(err)
  })
})



//PUT API --- UPDATE
router.put("/updateProd/:id",(req,res)=>{
  burgersmodel.updateOne({_id:req.params.id},{$set:{
    QTY : req.body.prodQty,
    PRICE : req.body.prodPrice,
    IMAGE : req.body.prodImg
  }}).then((data)=>{
    res.status(202).json({message:"Product Updated!"})
    console.log(data)
  }).catch((err)=>{
    res.status(404).json({message:err})
    console.log(err)
  })
})



module.exports = router; // exporting this data to router so that in order to import all these data in index.js which is our main file..
// module.exports will carry all the data of this particular file and will store into = router and we will implement this by using use() method in our main file.
