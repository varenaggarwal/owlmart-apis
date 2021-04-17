const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  products: [
    { productID: Number, quantity: Number, active: Boolean }
  ],
})
const Cart = mongoose.model("Cart", CartSchema)

module.exports = { Cart }