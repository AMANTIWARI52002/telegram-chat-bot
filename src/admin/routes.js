const express = require('express');
const { authenticateAdmin } = require('./middlewares');
const User = require('../bot/models/user');

const router = express.Router();

// Middleware for admin authentication
router.use(authenticateAdmin);

router.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

router.post('/delete_user', async (req, res) => {
    const { chatId } = req.body;
    await User.deleteOne({ chatId });
    res.send('User deleted');
});

router.post('/update_settings', (req, res) => {
    // Update settings logic here
    res.send('Settings updated');
});

module.exports = router;
