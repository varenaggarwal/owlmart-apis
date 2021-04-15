const express = require('express');
const router = express.Router();
const {categories} = require('../data')

router.route('/')
.get((req,res) => {
  res.json({categories})
})

module.exports = router