const mongoose = require('mongoose')
const CompanySchema = new mongoose.Schema(
  {
    NameOfCompany: { type: String, required: true },
    CompanyId: { type: Number, required: true },
  },
  {
    timestamp: true,
    versionKey: false,
  },
)

module.exports = mongoose.model('CompanyData', CompanySchema)