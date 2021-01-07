const express = require('express');
const router = express.Router();

const auth = require('../auth');

// GET TOKEN
router.get('/username/:username', (req, res) => {
    const token = auth.generateAccessToken({ username: req.body.username });
    res.json(token);
});

module.exports = router;

