const mongoose = require('mongoose')

const candidateSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})

const Candidate = model("Candidate", candidateSchema)

module.exports = Candidate;