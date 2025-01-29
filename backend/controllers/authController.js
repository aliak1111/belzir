const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendVerificationEmail = require("../utils/mailer");
require("dotenv").config();

// Register User
exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit code

        user = new User({ name, email, password: hashedPassword, verificationCode });
        await user.save();

        await sendVerificationEmail(email, verificationCode);

        res.status(201).json({ msg: "User registered. Check email for verification code" });
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
};

// Verify Email
exports.verifyEmail = async (req, res) => {
    try {
        const { email, code } = req.body;
        const user = await User.findOne({ email });

        if (!user || user.verificationCode !== code) {
            return res.status(400).json({ msg: "Invalid code" });
        }

        user.isVerified = true;
        user.verificationCode = null;
        await user.save();

        res.status(200).json({ msg: "Email verified successfully" });
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
};

// Login User
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(400).json({ msg: "User not found" });
        if (!user.isVerified) return res.status(400).json({ msg: "Email not verified" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ token, user });
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
};
