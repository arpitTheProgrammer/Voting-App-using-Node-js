const express = require('express')
const {fullName, email, password, age} = require("../Models/user")
const User = require("../Models/user")
// import User from '../Models/user.js'

const router = express.Router()

router.post('/signup', async(req, res) => {
    try {
    const {fullName, email, password, age} = req.body;
        console.log((req.body))
    if(!fullName || !email || !password || !age){
        return res.status(400).json('All fields are required')
    }
    const newUser = await User.create({
      fullName,
      email,
      password,
      age,
    })
    await newUser.save();
} catch(error){
    console.log("ERROR:- ", error)
}
    return res.redirect('/')
})

module.exports = router;