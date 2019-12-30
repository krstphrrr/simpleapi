const express = require('express')
const path = require('path')

const geoController = require('../controllers/geonote')

const router = express.Router()

router.get("/geo",geoController.getGeonote)
router.post("/", geoController.addGeonote)
router.get("/", geoController.getIndex)
router.get("/geo/:id", geoController.getGeo);
module.exports = router