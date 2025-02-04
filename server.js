const express = require('express')
const mongoose = require('mongoose')
const User = require('./Models/user')
const userRoutes = require('./routes/route')

const app = express()
const PORT = 8000;

mongoose.connect("mongodb://127.0.0.1:27017/voting").then(()=>{
    console.log("MONGODB IS CONNECTED")
})

app.use('/', userRoutes)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.get('/', (req, res)=> {
//     return res.send("Hay")
// })

app.listen(PORT, () => {
    console.log(`Serve at port:- ${PORT}`)
})