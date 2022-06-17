const express = require('express')

const router = express.Router()
const MensPageSchema = require('../models/Mens.model.js')
router.get('/', async (req, res) => {
  try {
    const data = await MensPageSchema.find({}).lean().exec()

    res.status(200).send(data)
  } catch (err) {
    console.log(err)
  }
})

router.post('', async (req, res) => {
  try {
    const data = await MensPageSchema.create(req.body)
    res.send(data)
  } catch (error) {
    return res.status(500).send(err.message)
  }
})

router.post('/filter', async (req, res) => {
  try {
    const { filters } = req.body

    console.log('Filtering by: ' + filters)

    const filteredData = await MensPageSchema.find({
      size: filters.Size || '',
      color: filters.ColorOrder || '',
      Type: filters.Type || '',
      Price: { $lte: filters.Prize || Number.MAX_SAFE_INTEGER },
    })

    res.send(filteredData)
  } catch (error) {
    res.send('An Error Occured: ' + error.message)
  }
})

module.exports = router
