const express = require('express')
const mongoose = require('mongoose')
const User = require('./Models/user')
const userRoutes = require('./routes/route')
const path = require('path')
const Candidate = require('./Models/candidate')

const app = express()
const PORT = 8000;

mongoose.connect("mongodb://127.0.0.1:27017/voting").then(()=>{
    console.log("MONGODB IS CONNECTED")
})

app.set('view engine', 'ejs')
app.set('views', path.resolve("./views"))

app.use('/', userRoutes)
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.get('/', (req, res)=>{
    return res.render('home')
})

app.get('/api/candidate', async(req, res)=>{
    const candidates = await Candidate.find()
    res.json(candidates)
})

app.get('/api/user', async(req, res) => {
    const user = await User.find();
    res.json(user)
})
app.listen(PORT, () => {
    console.log(`Serve at port:- ${PORT}`)
})