const mongoose = require('mongoose')

const childSchema = new mongoose.Schema()

childSchema.add({
  title: { type: String, required: true },
  hierarchy: { type: String, required: false },
  data: [],
  child: [childSchema],
})

const dataSchema = new mongoose.Schema({
  balancesheet: [childSchema],
  dates:[]
})

const Data = new mongoose.model('Data', dataSchema)

module.exports = Data
