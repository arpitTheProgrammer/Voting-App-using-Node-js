const User = require('../Models/user')

const HandleSaveUser = async(req, res) =>{
    try {
        const { fullName, email, password, age } = req.body;
            console.log((req.body))
        const newUser = await User.create({
          fullName: fullName,
          email: email,
          password: password,
          age: age
        })
        const savedUser = await newUser.save();
        console.log(savedUser);
        return res.status(201).json({ msg: "SUCCESS" });
    } catch (err) {
        console.error('Error creating user:', err);
        return res.status(500).json({ msg: "Failed to create user", error: err.message });
    }
        // return res.redirect('/')
    }

    const HandleLogin = async(req, res) => {
        const {email, password} = req.body;
        console.log(email, password)
        const user = await User.findOne({email})
        if(!user){
            return res.json({message: "USER NOT EXISTS"})
        }
        if(user.password !== password){
            return res.json({message: "Invalid Password"})
        }
            user.isLoggedin =  true;
        return res.json({message: "LOGIN SUCCESSFUL"})
    }

module.exports = {
    HandleSaveUser,
    HandleLogin
}
    