const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const productsRouter = require('./product.router');
const cartRouter = require('./cart.router');
const wishlistRouter = require('./wishlist.router');
const categoriesRouter = require('./categories.router');

const app = express();

app.use(cors())
app.use(bodyParser.json())

app.use('/products' , productsRouter)
app.use('/cart' , cartRouter)
app.use('/wishlist' , wishlistRouter)
app.use('/categories' , categoriesRouter)

app.get('/', (req, res) => {
  res.json({success : true , message : "Welocome to Product Central"})
});


app.listen(3000, () => {
  console.log('server started');
});
