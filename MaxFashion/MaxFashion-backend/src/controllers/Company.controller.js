const express = require('express')

const router = express.Router()
const CompanySchema = require('../models/Company.model.js')

router.get('/', async (req, res) => {
  try {
    const data = await CompanySchema.find({}).lean().exec()

    res.status(200).json(data)
  } catch (err) {
    console.log(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const data = await CompanySchema.create(req.body)
    res.send(data)
  } catch (error) {
    return res.status(500).send(err.message)
  }
})
module.exports = router