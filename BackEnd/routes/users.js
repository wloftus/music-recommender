const express = require('express');
const router = express.Router();

const db = require('../db');
const auth = require('../auth');

// CREATE NEW USER (SIGNUP)
// No authentication required because we need a user to before we get a token.
router.post('/signup/username/:username/type/:type', (req, res) => {

});

// GET USER (LOGIN)
// No authentication required because we need a user to before we get a token.
router.get('/id/:id', (req, res) => {
    db.query('SELECT * FROM users WHERE id = $1', [req.params.id], (err, res) => {
        if (err) {
          return next(err);
        }
        res.send(res.rows[0]);
    });
});

// UPDATE USER
router.patch('/:user', auth.authenticateToken, (req, res) => {

});

// DELETE USER
router.delete('/id/:id', auth.authenticateToken, (req, res) => {

});

module.exports = router;

