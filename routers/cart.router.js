const express = require('express')
const router = express.Router()
const { Cart } = require('../models/product.model')

router.route('/')
  .get(async (req, res) => {
    try {
      const cart = await Cart.find({})
      res.json({ success: true, cart })
    } catch (err) {
      res.status(500).json({ success: false, message: "unable to get cart", errorMessage: err.message })
    }

  })
  .post((req, res) => {
    res.json({ success: true, cart })
  })

module.exports = router


router.route('/')
  .get(async (req, res) => {
    try {
      const products = await Product.find({});
      res.json({ success: true, products })
    } catch (err) {
      res.status(500).json({ success: false, message: "unable to get products", errorMessage: err.message })
    }
  })
  .post(async (req, res) => {
    try {
      const product = req.body;
      const newProduct = new Product(product);
      const savedProduct = await newProduct.save();
      res.json({ success: true, savedProduct })
    } catch (err) {
      res.status(500).json({ success: false, message: "unable to add products", errorMessage: err.message })
    }
  })