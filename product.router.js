const faker = require('faker');
const express = require('express')
const router = express.Router()
const {productsData} = require('./data')

router.route('/')
.get((req , res) => {
  res.json({ success: true , productsData})
})
.post((req ,res) => {
  const newProduct = req.body;
  const newProductWithID = { id: faker.datatype.uuid() , ...newProduct}
  productsData.push(newProductWithID)
  res.json({success : true , newProductWithID})
})

router.route('/:id')
.get((req , res) => {
  const {id} = req.params
  const product = productsData.find((product) => product.id == id)
  res.json({ success: true , product})
})

module.exports = router