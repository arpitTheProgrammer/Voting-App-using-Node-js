    const User = require('../Models/user')
    const Candidate = require('../Models/candidate')
    const {setUser, getUser} = require('../service/auth')

    const HandleSaveUser = async (req, res) => {
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


    const HandleCandidateRegister = async (req, res) => {
        try {
            const { fullName, party, password, age } = req.body;
            console.log(req.body)
            const newCandidate = await Candidate.create({
                fullName: fullName,
                party: party,
                password: password,
                age: age
            })
            const saveCandidate = newCandidate.save()
            console.log(saveCandidate)
            return res.json({ message: "SUCCESS" })
        } catch (error) {
            return res.json({ msg: "Failed To create Candidate" })
        }
    }
    const HandleLogin = async (req, res) => {
        const { email, password, isVoted, fullName  } = req.body;
        console.log(email, password)
        const user = await User.findOne({ email })
        if (!user) {
            return res.json({ message: "USER NOT EXISTS" })
        }
        // const isCorrectPass = await bcrypt.compare(password, user.password)
        if (password != user.password) {
            return res.json({ message: "INVALID PASSWORD" })
        }
        user.isLoggedin = true;
        await user.save()

        const token = setUser(user)
        res.cookie("uid", token)
        return res.render('candidateList')
    }

    const HandleCandidateLogin = async (req, res) => {
        const { party, password } = req.body;
        console.log(party, password);
        const candidates = await Candidate.findOne({ party })
        if (!candidates) {
            return res.json({ message: "Candidate Not exist" })
        }
        if (password != candidates.password) {
            return res.json({ message: "INCORRECT PASSWORD" })
        }
        candidates.isLoggedIn = true;
        return res.json({ message: "LOGIN SUCCESS" })
    }

    const HandleUpdateVote = async (req, res) => {
        try{
            const {voteCount} = req.body;
            const candidate = await Candidate.findByIdAndUpdate(
                req.params.id,
                {voteCount },
                {new: true}
            )
            if(!candidate){
                return res.json({message: "Candidate Not Exists"})
            }
            return res.json(candidate)
        } catch(error) {
            console.error(error)
            return res.json({message: "Server error"})
        }
    }

    const HandleUpdateActiveStatus = async(req, res) => {
        try{
            const {isLoggedin} = req.body
            const user = await User.updateMany(
            {isLoggedin: true},
            {$set: {isLoggedin: false}}
            )
        } catch(error) {
            return res.json({message: "USER NOT UPDATE"})
        }
    }


    module.exports = {
        HandleSaveUser,
        HandleLogin,
        HandleCandidateRegister,
        HandleCandidateLogin,
        HandleUpdateVote,
        HandleUpdateActiveStatus
    }
