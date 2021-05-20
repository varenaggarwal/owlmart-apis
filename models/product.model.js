const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Cannot enter a product without name, please enter product name",
  },
  price: {
    type: Number,
    required: "Cannot enter a product without price, please enter the price",
  },
  desc: {
    type: String,
    required: "Cannot enter a product without description, please enter the description"
  },
  category: {
    type: String,
    required: "Cannot enter a product without category, please enter the category"
  },
  img : {
    type : String,
    required: "Cannot enter a product without image, please enter the image"
  },
  rating : {
    type : Number,
  },
  offers : {
    type : Number,
  },
  type : {
    type : String,
    required: "Cannot enter a product without type, please enter the type"
  },
  ageCategory : {
    type : String,
    required: "Cannot enter a product without ageCategory, please enter the ageCategory"
  },
  inStock : {
    type : Boolean,
     required: "Cannot enter a product without inStock, please enter the inStock"
  },
  avlQuantity : {
    type : Number,
    required: "Cannot enter a product without avlQuantity, please enter the avlQuantity"
  },
  fastDelivery : {
    type : Boolean,
    required: "Cannot enter a product without fastDelivery, please enter the fastDelivery"
  }
}, {
  timestamps: true,
})
const Product = mongoose.model("Product", ProductSchema)

module.exports = { Product }