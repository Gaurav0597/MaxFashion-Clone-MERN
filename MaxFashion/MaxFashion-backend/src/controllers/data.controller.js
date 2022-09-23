const express = require('express')
const router = express.Router()
const dataSchema = require('../models/data.model.js')

//FetchData
router.get('/', async (req, res) => {
  try {
    const data = await dataSchema.find({}).lean().exec()

    res.status(200).json(data)
  } catch (err) {
    console.log(err)
  }
})

router.post('/data', async (req, res) => {
  try {
    const data = await dataSchema.create(req.body)
    res.send(data)
  } catch (error) {
    return res.status(500).send(err.message)
  }
})

module.exports = router
