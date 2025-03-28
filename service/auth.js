const jwt = require('jsonwebtoken')

const secret = 'Arpit@16112005'

function setUser(user){

    return jwt.sign({
        _id: user._id,
        email: user.email,
        isVoted: user.isVoted,
        isLoggedin: user.isLoggedin
    }, secret)
}

function getUser(id, user){
    if(!token) return null;
    return jwt.verify(token, secret)
}

module.exports = {
    setUser,
    getUser
}