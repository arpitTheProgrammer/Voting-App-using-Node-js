const express = require('express')
const mongoose = require('mongoose')
const User = require('./Models/user')
const app = express()
const PORT = 8000;

mongoose.connect("mongodb://127.0.0.1:27017/voting").then(()=>{
    console.log("MONGODB IS CONNECTED")
})


app.listen(PORT, () => {
    console.log(`Serve at port:- ${PORT}`)
})