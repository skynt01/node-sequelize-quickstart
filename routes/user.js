const express = require('express');
const router = express.Router();
const db = require('../models');
const User = db.User;

router.get('/', (req, res) => {
    User.findAll()
        .then(user => {
            res.json(user[0]);
            res.status(200);
        })
        .catch(err => res.json('error', { error: err }));
});

router.post('/', (req, res) => {
    User.findOrCreate({ where: { firstName: 'test' } })
        .then(([user, created]) => {
            res.json(created);
            res.status(200);
        })
        .catch(err => res.json('error', { error: err }));
});

module.exports = router;