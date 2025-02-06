const express = require('express')
const User = require("../Models/user")
// const User = require("../Models/user")
const {HandleSaveUser} = require('../controllers/controller')
// import User from '../Models/user.js'

const router = express.Router()
router.use(express.json());

router.post("/signup", HandleSaveUser);


module.exports = router;