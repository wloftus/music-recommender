const express = require('express');
const router = express.Router();

const token = require('./token');
const users = require('./users');
const songs = require('./songs');
const vibes = require('./vibes');
const song_vibes = require('./song_vibes');

router.use('/token', token);
router.use('/users', users);
router.use('/songs', songs);
router.use('/vibes', vibes);
router.use('/song_vibes', song_vibes);

module.exports = router;