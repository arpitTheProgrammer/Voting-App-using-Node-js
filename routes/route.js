const express = require('express')
const User = require("../Models/user")
// const User = require("../Models/user")
const {HandleSaveUser, HandleLogin, HandleCandidateRegister, HandleCandidateLogin, HandleUpdateVote, HandleUpdateActiveStatus} = require('../controllers/controller')
// import User from '../Models/user.js'


const router = express.Router()
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/signup", HandleSaveUser);

router.post("/login", HandleLogin)

router.post("/candidate-register", HandleCandidateRegister)
router.get('/signup', (req, res)=> {
       return res.render('signup')
})

router.get('/login', (req, res)=> {
    return res.render('login')
})

router.get('/candidate-register', (req, res) => {
    return res.render('candidateRegister')
})

router.get('/candidate-login', (req, res) => {
    return res.render('candidateLogin')
})

router.post('/candidate-login', HandleCandidateLogin)

router.put('/api/candidate/:id', HandleUpdateVote)
router.put('/api/user', HandleUpdateActiveStatus)
module.exports = router;