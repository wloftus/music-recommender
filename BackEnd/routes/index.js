const express = require('express');
const router = express.Router();

const token = require('./token');
const users = require('./users');

router.use('/token', token);
router.use('/users', users);

module.exports = router;