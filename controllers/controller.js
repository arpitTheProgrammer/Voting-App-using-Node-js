const User = require('../Models/user')

const HandleSaveUser = async(req, res) =>{
    try {
        const body = req.body;
            console.log((req.body))
        const newUser = await User.create({
          fullName: body.Fullname,
          email: body.user_email,
          password: body.user_pass,
          age: body.user_age
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

module.exports = {
    HandleSaveUser
}
    