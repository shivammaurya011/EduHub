const User = require("../models/user.model")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const signup = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        const userPresent = await User.findOne({ email });
        if (userPresent) {
            return res.status(400).json({ error: 'User with this email already exists' });
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            fullName,
            email,
            password: hashPassword,
            avatar: {
                public_id: email,
                public_url: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
            }
        });
        if (!user) {
            return res.status(500).json({ error: 'User registration failed' });
        }

        res.status(201).json({ message: 'User registered successfully', userId: user._id, email: user.email });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }        
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            console.log(`Password does not match for user: ${user.email}`);
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.cookie("token", token, { httpOnly: true });
        res.status(200).json({ message: 'Signin successful', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const signout = (req, res) =>{
    try {
        res.clearCookie('token');
        res.status(200).json({ message: 'Signout successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

const profile = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'Profile retrieved successfully', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
module.exports = {
    signup,
    signin,
    signout,
    profile
}