const express = require('express')

const router = express.Router()
const MensPageSchema = require('../models/Mens.model.js')

//FetchData
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

//add to cart

router.get("/sort/asc",async(req,res)=>{
  try {
    const data = await MensPageSchema.find().sort({Price:1}).lean().exec()
    res.send(data)
  } catch (error) {
    return res.status(500).send(err.message)
  }
})
router.get("/sort/desc",async(req,res)=>{
  try {
    const data = await MensPageSchema.find().sort({Price:-1}).lean().exec()
    res.send(data)
  } catch (error) {
    return res.status(500).send(err.message)
  }
})
router.get("/filter/color/:value",async(req,res)=>{
 
  try {
    const data = await MensPageSchema.find({color:req.params.value})
    res.status(200).json(data)
  } catch (error) {
    return res.status(500).send(error.message)
  }
})
router.get("/filter/type/:value",async(req,res)=>{
 
  try {
    const data = await MensPageSchema.find({Type:req.params.value})
    res.status(200).json(data)
  } catch (error) {
    return res.status(500).send(error.message)
  }
})
router.get("/filter/size/:value",async(req,res)=>{
 
  try {
    const data = await MensPageSchema.find({size:req.params.value})
    res.status(200).json(data)
  } catch (error) {
    return res.status(500).send(error.message)
  }
})
    

module.exports = router
