const mongoose = require('mongoose')

const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    party: {
        type: String,
        require: true,
        unique: true
    },
    age: {
        type: String,
        require: true
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

const Candidate = model("Candidate", candidateSchema)

module.exports = Candidate;