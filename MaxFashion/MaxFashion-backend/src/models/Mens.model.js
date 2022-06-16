const mongoose = require('mongoose')
const MensPageSchema = new mongoose.Schema(
  {
    image1: { type: String, required: true },
    image2: { type: String, required: true },
    image3: { type: String, required: true },
    image4: { type: String, required: true },
    ProductName: { type: String, required: true },
    Price: { type: Number, required: true },
    size: { type: Number, required: true },
    color: { type: String, required: true },
    Type: { type: String, required: true },

  },
  {
    timestamp: true,
    versionKey: false,
  },
)

module.exports = mongoose.model('MensData', MensPageSchema)