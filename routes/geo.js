const express = require('express')
const path = require('path')

const geoController = require('../controllers/geonote')
const isAuth = require('../middleware/is-auth')
const isAdm = require('../middleware/is-admin')
const router = express.Router()
// no auth
router.get("/geo",geoController.getGeonote)
// adding a note
router.post("/add-geo",isAuth, geoController.postaddGeonote)
router.get("/add-geo",isAuth, geoController.getaddGeonote)
// getting index -- no auth
router.get("/", geoController.getIndex)
//getting a single note - noauth
router.get("/geo/:id", geoController.getGeo);
// editing a note
router.get("/edit-geo/:id",isAuth, geoController.editGeo)
router.post("/edit-geo",isAuth, geoController.posteditGeo)

// deleting a note
router.post('/delete-geo',isAuth, geoController.postDeleteGeo)

// admin panel 
router.get('/adm', [isAuth, isAdm], geoController.getPanel)

// mapsubmit 

router.post('/mapsubmitnote', isAuth, geoController.postMapNote)
// router.post('/delete-geo',isAuth, geoController.postMapNote)

module.exports = router