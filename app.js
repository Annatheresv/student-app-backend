const express = require("express")
const mongoose = require("mongoose")
const cors=require("cors")
const student=require("./models/student")

const app=express()
app.use(cors())
app.use(express.json())
  app.post("/add",(req,res)=>{
    let input = req.body
    console.log(input)
    res.send("test")
  })
app.listen(8080,()=>{
    console.log("server started")
     })