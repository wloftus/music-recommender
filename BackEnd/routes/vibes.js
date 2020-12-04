const express = require('express');
const router = express.Router();

const db = require('../db');
const auth = require('../auth');


// GET ALL VIBES
router.get('/', auth.authenticateToken, (req, res) => {
    db.query('SELECT * FROM vibes', (err, results) => {
        if (err) {
            res.sendStatus(404);
        } else {
            let result = results.rows;

            if (result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        }
    });
});

// GET VIBE BY SCORE
router.get('/score/:score', auth.authenticateToken, (req, res) => {
    db.query('SELECT * FROM vibes WHERE score = $1', [req.params.score], (err, results) => {
        if (err) {
            res.sendStatus(404);
        } else {
            let result = results.rows;

            if (result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        }
    });
});

module.exports = router;
