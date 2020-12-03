const express = require('express');
const router = express.Router();

const db = require('../db');
const auth = require('../auth');

// CREATE NEW USER (SIGNUP)
// No authentication required because we need a user to before we get a token.
router.post('/signup/username/:username/type/:type', (req, res) => {
    db.query('INSERT INTO users(username, type) VALUES($1, $2)', [req.params.username, req.params.type], (err, results) => {
        if (err) {
          return next(err);
        }
        res.send(results.rows[0]);
    });
});

// GET USER (LOGIN)
// No authentication required because we need a user to before we get a token.
router.get('/id/:id', (req, res) => {
    db.query('SELECT * FROM users WHERE id = $1', [req.params.id], (err, results) => {
        if (err) {
          return next(err);
        }
        res.send(results.rows[0]);
    });
});

// UPDATE USER PROFILE IMG
router.patch('/id/:id/profile_img/:profile_img', auth.authenticateToken, (req, res) => {
    db.query('UPDATE users SET profile_img = $2 WHERE id = $1', [req.params.id, req.params.profile_img], (err, results) => {
        if (err) {
          return next(err);
        }
        res.send(results.rows[0]);
    });
});

// DELETE USER
router.delete('/id/:id', auth.authenticateToken, (req, res) => {
    db.query('DELETE FROM users WHERE id = $1', [req.params.id], (err, results) => {
        if (err) {
          return next(err);
        }
        res.send(results.rows[0]);
    });
});

module.exports = router;

