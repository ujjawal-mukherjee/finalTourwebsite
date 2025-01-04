const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const Booking = require('../models/Booking');

// Register a new user
router.post('/register', async (req, res) => {
    const { userName, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        // Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create and save the new user
        const newUser = new User({ userName, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully.' });
    } catch (error) {
        console.error('Error registering user:', error.message);
        res.status(500).json({ message: 'Server error.' });
    }
});

// Login a user
/*
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found!' });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ message: 'Invalid password!' });

        req.session.user = { userName: user.userName, email: user.email };
        res.status(200).json({ message: 'Login successful!' });
        console.log("data is", req.session.user);
        console.log("Session after login:", req.session);
    } catch (error) {
        console.error('Error during login:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Check login status
router.get('/check-login', (req, res) => {
    console.log("I am here");
    console.log(req.session.user);
    console.log(req.session);
    if (req.session && req.session.user) {
        res.status(200).json({ user: req.session.user });
    } else {
        res.status(401).json({ message: 'Not logged in' });
        console.log("here again");
    }
});
*/
// Book a trip
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found!' });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ message: 'Invalid password!' });

        req.session.user = { userName: user.userName, email: user.email };

        // Explicitly save the session
        req.session.save(err => {
            if (err) {
                console.error('Error saving session:', err);
                return res.status(500).json({ message: 'Session save error' });
            }
            console.log("Session after login:", req.session);
            res.status(200).json({ message: 'Login successful!', user: req.session.user });
        });
    } catch (error) {
        console.error('Error during login:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});
router.get('/check-login', (req, res) => {
    console.log("Session in /check-login:", req.session);
    if (req.session && req.session.user) {
        res.status(200).json({ user: req.session.user });
    } else {
        res.status(401).json({ message: 'Not logged in' });
    }
});

router.post('/bookings', async (req, res) => {
    try {
        if (!req.session || !req.session.user) {
            return res.status(401).json({ message: 'User not logged in!' });
        }
        console.log("Booking data received:", req.body);
        const { hotelName, price, numPersons, specialRequests } = req.body;
        const { userName, email } = req.session.user;

        const booking = new Booking({ userName, email, hotelName, price, numPersons, specialRequests });
        await booking.save();

        res.status(201).json({ message: 'Booking successful!' });
    } catch (error) {
        console.error('Error booking trip:', error.message);
        res.status(500).json({ message: 'Failed to book your trip.', error: error.message });
    }
});
router.post('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy((err) => {
            if (err) {
                console.error('Error destroying session:', err);
                return res.status(500).json({ message: 'Failed to log out.' });
            }
            res.clearCookie('connect.sid'); // Clear the session cookie
            return res.status(200).json({ message: 'Logout successful.' });
        });
    } else {
        res.status(400).json({ message: 'No active session to log out.' });
    }
});

module.exports = router;

