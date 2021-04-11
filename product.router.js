const express = require('express')
const router = express.Router()
const {productsData} = require('./data')

router.route('/')
.get((req , res) => {
  res.json({productsData})
})
.post((req ,res) => {
  const newProduct = req.body
  const product = { id: faker.datatype.uuid() , ...newProduct}
  productsData.push(product)
  res.json({success: true , product})
})

router.route('/:id')
.get((req , res) => {
  const {id} = req.params
  const product = productsData.find((product) => product.id == id)
  res.json({product})
})

module.exports = router