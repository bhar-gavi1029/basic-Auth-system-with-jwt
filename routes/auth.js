const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const secret = process.env.JWT_SECRET || 'secret';

// Signup
router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword });
    res.send('User created');
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(400).send('Invalid credentials');
    }

    const token = jwt.sign({ id: user._id }, secret);
    res.json({ token });
});

// Profile (Protected)
router.get('/profile', (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; // Expecting "Bearer <token>"
        const decoded = jwt.verify(token, secret);
        res.send(`Welcome User ${decoded.id}`);
    } catch (e) {
        res.status(401).send('Unauthorized');
    }
});

module.exports = router;
