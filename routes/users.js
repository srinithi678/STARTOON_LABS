const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route to add a new user
router.post('/add', async (req, res) => {
    const { name, email, password, gender } = req.body;

    try {
        const newUser = new User({ name, email, password, gender });
        await newUser.save();
        res.status(201).json({ message: 'User added successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email === user.email && password === user.password) {
        res.status(200).json({ message: 'Login successful', user });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});
// Route to fetch all users
router.get('/all', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


// Route to fetch a user by email
router.get('/:email', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email });
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
