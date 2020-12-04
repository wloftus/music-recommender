const express = require('express');
const router = express.Router();

const token = require('./token');
const users = require('./users');
const songs = require('./songs');

router.use('/token', token);
router.use('/users', users);
router.use('/songs', songs);

module.exports = router;