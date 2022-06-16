const mongoose = require('mongoose')

const connect = () => {
  return mongoose.connect(
    'mongodb+srv://gauravMaxFashion:MaxFashion@cluster0.gpjmj.mongodb.net/MaxFashion',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log('DB connected')
    },
  )
}
module.exports=connect