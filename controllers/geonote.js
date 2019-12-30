const Geonote = require('../models/geonote')

// get all the notes in db

exports.getGeonote = (req, res, next) => {
    Geonote.findAll()
        .then(geonote =>{
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

//get a single note from db

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

// get page to ADD a new note to db 

exports.getaddGeonote = (req, res, next)=>{
    res.render('edit-geo', {
        pageTitle:'add note',
        editing:false
    })
}

// actually ADD the new note to db

exports.postaddGeonote = (req, res, next)=>{
    const geom = req.body.geom;
    const txt = req.body.txt;
    const userid = req.body.userid
    const rest = (...args)=>{return `${args}`}
    const point = {type: 'Point', coordinates:rest(geom).split(",")};
    // const point = { type: 'Point', coordinates: [req.body.long, req.body.lat] };
    // ^^^could work but needs update in pug: individual inputforms that reference lat & long
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

// get page to UPDATE a particular note in db

exports.editGeo = (req, res, next) => {
  const geoId = req.params.id;
  const editMode = req.query.edit
  if(!editMode){
      console.log(req)
      return res.redirect('/')
  }
  
  Geonote.findByPk(geoId)
    .then(geonote => {
    if (!geonote) {
        console.log("segunda salida")
        return res.redirect('/')
    }
      res.render("edit-geo", {
        items: geonote,
        pageTitle: "GEO!!",
        path: "/edit-geo",
        editing: true,
        geoId: geoId
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// actually POST updated geonote to db

exports.posteditGeo = (req, res, next) => {
  const geoId = req.body.nid
  const updatedgeom = req.body.geom;
  const updatedtxt = req.body.txt;
  const updateduserid = req.body.userid;
  const rest = (...args) => {
    return `${args}`;
  };
  const point = { type: "Point", coordinates: rest(updatedgeom).split(",") };
  Geonote.findByPk(geoId)
    .then(geonote => {
      geonote.geom = point
      geonote.txt = updatedtxt;
      geonote.userid = updateduserid
      return geonote.save()
    })
    .then(result => {
      console.log("updatedddd");
      res.redirect("/geo");
    })
    .catch(err => {
      console.log(err);
      res.redirect("/geo");
    });
};


exports.getIndex = (req, res, next) =>{
    res.render('index', {
        editing: false
    })
        
}