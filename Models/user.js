const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password: {
        type:String,
        requere: true
    },
    age: {
        type: Number,
        require: true
    },
    role: {
        type: String,
        enum: ['voter', ' admin'],
        default: voter
    },
    isVoted:{
        type: Boolean,
        default: false
    }
})

const User = model("User", userSchema)

module.exports = User;