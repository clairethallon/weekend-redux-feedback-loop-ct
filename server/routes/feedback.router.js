const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET all submissions
router.get('/', (req, res) => {
    console.log('in GET');
    let queryString = `SELECT * FROM feedback ORDER BY id DESC`;
    pool.query(queryString).then((results) => {
        res.send(results.rows);
    }).catch((err) => {
        alert('uhoh in GET');
        res.sendStatus(err);
    })
})

// POST feedback 
router.post('/', (req, res) => {
    console.log('in POST,', req.body);
    let queryString = 'INSERT INTO "feedback" (feeling, understanding, support, comments) VALUES($1, $2, $3, $4)';
    let values = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments];
    pool.query(queryString, values).then((results) => {
        res.sendStatus(201);
    }).catch((err) => {
        console.log('error in PUT', err);
        res.sendStatus(500);
    })
});// END POST Route

// DELETE route 
router.delete('/:id', (req, res) => {
    console.log('in DELETE,', req.params.id);
    const queryString = `DELETE FROM "feedback" WHERE id='${req.params.id}';`;
    pool.query(queryString).then((results) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log('error in DELETE', err);
        res.sendStatus(500);
    })
});// DELETE Route

module.exports = router;