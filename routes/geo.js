const express = require('express')
const path = require('path')

const geoController = require('../controllers/geonote')

const router = express.Router()

router.get("/geo",geoController.getGeonote)
router.post("/add-geo", geoController.postaddGeonote)
router.get("/add-geo", geoController.getaddGeonote)
router.get("/", geoController.getIndex)
router.get("/geo/:id", geoController.getGeo);
router.get("/edit-geo/:id", geoController.editGeo)
router.post("/edit-geo", geoController.posteditGeo)

module.exports = router