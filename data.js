const faker = require('faker');

const productsData = [...Array(25)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  img: faker.image.image(),
  date: "",
  location: "Online",
  price: faker.commerce.price(),
  wishlist: false,
  cartQty: 0,
  inStock: faker.datatype.boolean(),
  fastDelivery: faker.datatype.boolean(),
}));

const cart = [];
const wishlist = [];
const categories = [];

const data = { cart, wishlist, categories, productsData }

module.exports = data
