const { Product } = require('../models/product.model');

const getAllProductsFromDB = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ success: true, products })
  } catch (err) {
    res.status(500).json({ success: false, message: "unable to get products", errorMessage: err.message })
  }
}

const getProductByIdFromDB = async (req, res, next, productId) => {
  try {
    const product = await Product.findById(productId)
    if (!product) {
      return res.json({ success: false, message: "Trouble finding the product" })
    }
    req.product = product;
    next();
  } catch (err) {
    res.status(400).json({ success: false, message: "Error while retriving the product" })
  }
}

const sendProductDetails = async (req, res) => {
  try {
    const { product } = req
    res.json({ success: true, product })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "unable to fetch the product",
      errorMessage: err.message,
    })
  }
}
const createNewProduct = async (req, res) => {
  try {
    const product = req.body;
    const newProduct = new Product(product);
    const savedProduct = await newProduct.save();
    res.json({ success: true, savedProduct })
  } catch (err) {
    res.status(500).json({ success: false, message: "unable to add products", errorMessage: err.message })
  }
}


module.exports = {
  getAllProductsFromDB,
  getProductByIdFromDB,
  sendProductDetails,
  createNewProduct
}