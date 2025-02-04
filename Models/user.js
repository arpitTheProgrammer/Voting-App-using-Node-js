const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true 
    },
    age: {
        type: Number,
        required: true
    },
    isVoted: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

module.exports = User;
