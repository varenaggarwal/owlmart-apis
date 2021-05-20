const express = require('express');
const router = express.Router();
// const { wishlist } = require('../data')

router.route('/')
  .get((req, res) => {
    res.json({ success: true })
  })

module.exports = router