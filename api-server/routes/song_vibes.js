const express = require('express');
const router = express.Router();

const db = require('../db');
const auth = require('../auth');


// CREATE NEW SONG VIBE
router.post('/song_id/:song_id/vibe_id/:vibe_id/user_id/:user_id', auth.authenticateToken, (req, res) => {
    db.query('INSERT INTO song_vibes(song_id, vibe_id, user_id) VALUES($1, $2, $3)', [req.params.song_id, req.params.vibe_id, req.params.user_id], (err, results) => {
        if (err) {
            res.status(409).send(err);
        } else {
            res.sendStatus(201);
        }
    });
});

// GET SONGS BY VIBES
router.get('/score/:score', auth.authenticateToken, (req, res) => {
    db.query('SELECT sv.id AS song_vibe_id, sv.user_id AS user_id, s.id AS song_id, s.name AS song_name, s.song_link, s.img, s.album_name, v.id AS vibe_id, v.name AS vibe_name, v.score FROM song_vibes sv JOIN songs s ON sv.song_id = s.id JOIN vibes v ON sv.vibe_id = v.id WHERE v.score = $1', [req.params.score], (err, results) => {
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
