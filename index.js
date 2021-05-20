const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const requestLogger = require('./middlewares/requestLogger.middleware');
const fallback404Middleware = require('./middlewares/fallback404.middleware')
const errorHandler = require('./middlewares/errorHandler.middleware')

const productsRouter = require('./routers/product.router');
const cartRouter = require('./routers/cart.router');
const wishlistRouter = require('./routers/wishlist.router');


const initializeDBConnection = require('./db/db.connect')

const PORT = 3000;
const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(requestLogger)

// called before any route handler
initializeDBConnection()

app.use('/products', productsRouter)
app.use('/cart', cartRouter)
app.use('/wishlist', wishlistRouter)


app.get('/', (req, res) => {
  res.json({ success: true, message: "Welocome to Owl Mart" })
});

/**
 * 404 Route Handler
 * Note: DO not MOVE. This should be the last route
 */
app.use(fallback404Middleware)

/*
 * Erorr Handler
 * DO NOT MOVE
 */
app.use(errorHandler)

app.listen(PORT, () => {
  console.log('server started');
});