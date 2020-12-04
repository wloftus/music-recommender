const express = require('express');
const router = express.Router();

const db = require('../db');
const auth = require('../auth');

// CREATE NEW USER (SIGNUP)
// No authentication required because we need a user to before we get a token.
router.post('/signup/username/:username/type/:type', (req, res) => {
    db.query('INSERT INTO users(username, type) VALUES($1, $2)', [req.params.username, req.params.type], (err, results) => {
        if (err) {
            res.status(409).send(err);
        } else {
            db.query('SELECT id FROM users WHERE username = $1', [req.params.username], (err, results) => {
                if (err) {
                    res.sendStatus(404);
                } else {
                    let result = results.rows[0];

                    if (result) {
                        res.status(201).send(result);
                    } else {
                        res.sendStatus(404);
                    }
                }
            });
        }
    });
});

// GET USER (LOGIN) by id
// No authentication required because we need a user to before we get a token.
router.get('/id/:id', (req, res) => {
    db.query('SELECT * FROM users WHERE id = $1', [req.params.id], (err, results) => {
        if (err) {
            res.sendStatus(404);
        } else {
            let result = results.rows[0];

            if (result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        }
    });
});

// GET USER (LOGIN) by name
// No authentication required because we need a user to before we get a token.
router.get('/username/:username', (req, res) => {
    db.query('SELECT id FROM users WHERE username = $1', [req.params.username], (err, results) => {
        if (err) {
            res.sendStatus(404);
        } else {
            let result = results.rows[0];

            if (result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        }
    });
});

// UPDATE USER PROFILE IMG
router.patch('/id/:id/profile_img/:profile_img', auth.authenticateToken, (req, res) => {
    db.query('UPDATE users SET profile_img = $2 WHERE id = $1', [req.params.id, req.params.profile_img], (err, results) => {
        if (err) {
            res.sendStatus(404);
        } else {
            if (results.rowCount === 0) {
                res.sendStatus(404);
            } else {
                res.sendStatus(200);
            }
        }
    });
});

// DELETE USER
router.delete('/id/:id', auth.authenticateToken, (req, res) => {
    db.query('DELETE FROM users WHERE id = $1', [req.params.id], (err, results) => {
        if (err) {
            res.sendStatus(404);
        } else {
            if (results.rowCount === 0) {
                res.sendStatus(404);
            } else {
                res.sendStatus(200);
            }
        }
    });
});

module.exports = router;
