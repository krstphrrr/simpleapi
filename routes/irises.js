const express = require('express')
const router = express.Router()
const db = require('../config/database');
const Iris = require('../models/Iris')

router.get('/', (req, res, next) =>{ //findAll Promise/array/model
    Iris.findAll({
        attributes: {exclude: ['id', 'createdAt', 'updatedAt']}
    })
        .then(irises => {
            console.log(irises);
            res.status(200);
        })
        .catch(err => console.log(err))
});

module.exports = router;