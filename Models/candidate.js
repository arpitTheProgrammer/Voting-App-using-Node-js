const mongoose = require('mongoose')

const candidateSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: true
    },
    party: {
        type: String,
        require: true,
        unique: true
    },
    age: {
        type: Number,
        require: true
    },
    password: {
        type: String,
        required: true
    },
    isLoggedIn: {
        type: Boolean,
        default: false
    },
    vote: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                require: true,
            },
            votedAt: {
                type: Date,
                default: Date.now()
            }
        },

    ],
    voteCount: {
        type:Number,
        default: 0
    }
})

const Candidate = mongoose.model("Candidate", candidateSchema)

module.exports = Candidate;