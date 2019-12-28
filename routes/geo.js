const express = require('express')
const path = require('path')

const geoController = require('../controllers/geonote')

const router = express.Router()

router.get("/geo",geoController.getGeonote)

module.exports = router