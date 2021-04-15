const faker = require('faker');
const express = require('express')
const router = express.Router()
const {productsData} = require('../data')
const {Product} = require('../models/product.model')

router.route('/')
.get(async (req , res) => {
  try{
    const products = await Product.find({});
    res.json({success: true, products})
  }catch(err){
    res.status(500).json({success : false , message: "unable to get products" , errorMessage : err.message})
  }
})
.post( async (req ,res) => {
  try{
    const product = req.body;
    const newProduct = new Product(product);
    const savedProduct =  await newProduct.save();
    res.json({success : true , savedProduct})
  }catch(err){
    res.json({success: false , message : "unable to add products" , errorMessage : err.message})
  }
})

router.route('/:id')
.get((req , res) => {
  const {id} = req.params
  const product = productsData.find((product) => product.id == id)
  res.json({ success: true , product})
})

module.exports = router