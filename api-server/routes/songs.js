const express = require('express');
const router = express.Router();

const db = require('../db');
const auth = require('../auth');

// CREATE NEW SONG
router.post('/name/:name/song_link/:song_link/user_id/:user_id/img/:img/album_name/:album_name', auth.authenticateToken, (req, res) => {
    db.query('INSERT INTO songs(name, song_link, user_id, img, album_name) VALUES($1, $2, $3, $4, $5)', [req.params.name, req.params.song_link, req.params.user_id, req.params.img, req.params.album_name], (err, results) => {
        if (err) {
            res.status(409).send(err);
        } else {
            db.query('SELECT id FROM songs WHERE name = $1', [req.params.name], (err, results) => {
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

// GET ALL SONGS
router.get('/', auth.authenticateToken, (req, res) => {
    db.query('SELECT * FROM songs', (err, results) => {
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

// UPDATE SONG PUT
router.put('/id/:id/song/:song', auth.authenticateToken, (req, res) => {
    let query = 'UPDATE songs SET ';
    let song = JSON.parse(req.params.song);
    let update_list = [];
    
    for (const field in song) {
        // user_id is a int and should not be surrounded by quotes
        if (field === "user_id") {
            update_list.push(field + '=' + song[field]);
        } else {
            update_list.push(field + '=' + "'" + song[field] + "'");
        }
    }

    for (let i = 0; i < update_list.length - 1; i++) {
        query += update_list[i] + ', ';
    }
    query += update_list[update_list.length - 1];
    query += ' WHERE id=' + req.params.id;

    db.query(query, (err, results) => {
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

// DELETE SONG
router.delete('/id/:id', auth.authenticateToken, (req, res) => {
    db.query('DELETE FROM songs WHERE id = $1', [req.params.id], (err, results) => {
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
