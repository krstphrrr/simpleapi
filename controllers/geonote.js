const Geonote = require('../models/geonote')

exports.getGeonote = (req, res, next) => {
    // const point = { type: 'Point', coordinates: [req.body.long, req.body.lat] }
    Geonote.findAll()
        .then(geonote =>{
            console.log(geonote[0].dataValues.geom)
            res.render('geo',{
                items: geonote,
                latlong: geonote[0].dataValues.geom.coordinates,
                pageTitle: 'GEO!!', 
                path:'/geo'
            })
        })
        .catch(err =>{
            console.log(err)
        })
}

exports.getGeo = (req, res, next) => {
  const geoId = req.params.id
  Geonote.findByPk(geoId)
    .then(geonote => {
      res.render("geodetail", {
        items: geonote,
        pageTitle: "GEO!!",
        path: "/geodetail"
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.addGeonote = (req, res, next)=>{
    const geom = req.body.geom;
    const txt = req.body.txt;
    const userid = req.body.userid
    // const rest = (...args)=>{return `${args}`}
    // const point = {type: 'Point', coordinates:rest(geom).split(",")};
    const point = { type: 'Point', coordinates: [req.body.long, req.body.lat] };
    Geonote.create({
         geom: point,
         txt: txt,
         userid: userid
    })
        .then(result=>{
            console.log("Created geonote!")
            res.redirect("/geo")
        })
        .catch(err=>{
        console.log(err)

    })
}

exports.getIndex = (req, res, next) =>{
    res.render('index')
        
}