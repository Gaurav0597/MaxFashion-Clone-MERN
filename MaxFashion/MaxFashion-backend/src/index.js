const express=require("express")
const connect=require("./configs/db")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

const mensProductController =require("./controllers/Mens.controller")
app.use("/menproducts", mensProductController)

const loginAuth=require("./controllers/auth.controller.js")
app.use("/",loginAuth)
const RegisterAuth=require("./controllers/auth.controller.js")
app.use("/",RegisterAuth)

const cart= require("./controllers/Cart.controller.js")
app.use("/cart",cart)

app.listen(1020,async function(){
    try {
        await connect()
           console.log("port 1020 is working properly")
    } catch (error) {
         console.log(error.message)
    }
})