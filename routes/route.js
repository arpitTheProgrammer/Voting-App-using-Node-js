const express = require('express')
const User = require("../Models/user")
// const User = require("../Models/user")
const {HandleSaveUser, HandleLogin} = require('../controllers/controller')
// import User from '../Models/user.js'

const router = express.Router()
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/signup", HandleSaveUser);

router.post("/login", HandleLogin, (req, res) => {
    if(LoggedIn){
        return res.render()
    }
})

router.get('/signup', (req, res)=> {
    return res.render('signup')
})

router.get('/login', (req, res)=> {
    return res.render('login')
})

module.exports = router;