const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

// @route post: /users/register
exports.registerUser = async (req, res) => {
    let username = req.body.username.trim();
    let email = req.body.email.trim();
    let password = req.body.password.trim();
    try {
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'All fields are required.' });
        }
        const result = await userModel.isUser(email);
        if (result.length > 0) {
            return res.status(400).json({ error: 'Email already exists' });
        }
        const hashedPass = await bcrypt.hash(password, parseInt(process.env.SALTROUNDS));

        await userModel.registerUser(username, email, hashedPass);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error('Register error:', err);
        res.status(500).json({ error: 'Server error during registration' });
    }
}

// @route post: /users/login
exports.loginUser = async (req, res) => {
    let email = req.body.email.trim();
    let password = req.body.password.trim();
    try {
        if (!email || !password) {
            return res.status(400).json({ error: 'All fields are required.' });
        }
        const result = await userModel.isUser(email);
        const user = result[0];
        if (!user) {
            return res.status(401).json({ error: 'Invalid email' });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        res.status(200).json({
            message: 'Login successful',
            user: { id: user.id, username: user.username, email: user.email }
        });

    } catch (err) {
        console.error('Login error:', err.message);
        res.status(500).json({ error: 'Server error during login' });
    }
};
