const Geonote = require('../models/geonote')

exports.getGeonote = (req, res, next) => {
    Geonote.fetchAll()
    .then(([rows,fieldData])=>{
        res.render('geo', {
            items: rows,
            pageTitle: "geo",
            path: '/geo'
        })
    })
    .catch(err => console.log(err))
}