const faker = require('faker');
const express = require('express')
const router = express.Router()
const { Product } = require('../models/product.model')

const {
  getAllProductsFromDB,
  getProductByIdFromDB,
  sendProductDetails,
  createNewProduct
} = require('../controlers/products.controller')

router.route('/')
  .get(getAllProductsFromDB)
  .post(createNewProduct)

router.param("productId", getProductByIdFromDB)

router.route('/:productId')
  .get(sendProductDetails)

module.exports = router