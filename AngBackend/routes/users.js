const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

//GET API

router.get('/', (req,res)=>{
  usersmodel.find().then((mongodbData)=>{
    res.send(mongodbData)
    console.log(mongodbData)
  }).catch((err=>{
    console.log(err)
  }))
})

//GET API BY NAME

router.get('/:name', (req,res)=>{
  usersmodel.find({name:req.params.name}).then((mongodbData)=>{
    res.send(mongodbData)
    console.log(mongodbData)
  }).catch((err=>{
    console.log(err)
  }))
})

//GET API BY Mobile number

router.get('/:mobile', (req,res)=>{
  usersmodel.find(req.params.mobile).then((mongodbData)=>{
    res.send(mongodbData)
    console.log(mongodbData)
  }).catch((err=>{
    console.log(err)
  }))
})
