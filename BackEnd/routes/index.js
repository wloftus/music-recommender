const express = require('express');
const router = express.Router();

const token = require('./token');
const users = require('./users');
const songs = require('./songs');
const vibes = require('./vibes');

router.use('/token', token);
router.use('/users', users);
router.use('/songs', songs);
router.use('/vibes', vibes);

module.exports = router;