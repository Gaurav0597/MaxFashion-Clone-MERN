const router = require('express').Router()

const User=require("../models/auth.model.js")
const MensPageSchema = require('../models/Mens.model.js')

router.get("/:id/:product" , async (req, res) => {
    try{
   await User.findOneAndUpdate({_id: req.params.id}, {$addToSet: {Cart : {$each:[req.params.product]}}},{
        new: true
    })
    res.send({message : 'Success'})
    }catch(err){
        res.send({message: "product all ready add"})
    }
})

router.get("/product/men/:id", async (req, res) => {
    if(req.params.id === undefined){
     return res.send("user is not logged in")
    }
  
    try{
      const user = await User.findOne({_id: req.params.id});
  
      const allproduct = await MensPageSchema.find({ '_id': { $in:  user.Cart } });
  
      res.send(allproduct)
      
    }catch(err){
      console.log(err)
    }
  
  })

module.exports = router