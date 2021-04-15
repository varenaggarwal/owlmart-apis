const express = require('express')
const router = express.Router()
const {cart} = require('../data')

router.route('/')
.get((req,res) => {
  res.json({success: true , cart})
})
.post((req , res) => {
  res.json({success : true , cart})
})

module.exports = router