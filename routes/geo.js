const express = require('express')
const path = require('path')

const geoController = require('../controllers/geonote')

const router = express.Router()

router.get("/geo",geoController.getGeonote)
// adding a note
router.post("/add-geo", geoController.postaddGeonote)
router.get("/add-geo", geoController.getaddGeonote)
// getting index
router.get("/", geoController.getIndex)
//getting a single note
router.get("/geo/:id", geoController.getGeo);
// editing a note
router.get("/edit-geo/:id", geoController.editGeo)
router.post("/edit-geo", geoController.posteditGeo)

// deleting a note
router.post('/delete-geo', geoController.postDeleteGeo)

module.exports = router