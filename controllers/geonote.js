const Geonote = require('../models/geonote')
const geoJSON = require('geojson')
// get all the notes in db

exports.getGeonote = (req, res, next) => {
    req.user
        .getGeonotes()
    // Geonote.findAll()
        .then(geonote =>{
            res.render('geo',{
                items: geonote,
                // latlong: geonote[0].dataValues.geom.coordinates,
                pageTitle: 'GEO!!', 
                path:'/geo',
                isAuthenticated: req.isLoggedIn
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
        path: "/geodetail",
        isAuthenticated: req.isLoggedIn
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
        editing:false,
        isAuthenticated: req.isLoggedIn
    })
}

// actually ADD the new note to db

exports.postaddGeonote = (req, res, next)=>{
    const geom = req.body.geom;
    const txt = req.body.txt;
    const username = req.body.username
    const rest = (...args)=>{return `${args}`}
    const point = {type: 'Point', coordinates:rest(geom).split(",")};
    // const point = { type: 'Point', coordinates: [req.body.long, req.body.lat] };
    // ^^^could work but needs update in pug: individual inputforms that reference lat & long
    // console.log(req.user)
    req.user.createGeonote({ //create an associated note (associated w a user)
      geom: point,
      txt: txt,
      username: username
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
  req.user.getGeonotes({where:{nid:geoId}})//brings an array
//   Geonote.findByPk(geoId)
    .then(geonotes => {
    // console.log(geonotes) //darn array
    // console.log(geonotes[0]) 
    const geonote = geonotes[0] 
    if (!geonotes) {
        console.log("segunda salida")
        return res.redirect('/')
    }
      res.render("edit-geo", {
        items: geonote,
        pageTitle: "GEO!!",
        path: "/edit-geo",
        editing: true,
        geoId: geoId,
        isAuthenticated: req.isLoggedIn
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
  const updatedusername = req.body.username;
  const rest = (...args) => {
    return `${args}`;
  };
  const point = { type: "Point", coordinates: rest(updatedgeom).split(",") };
  //if a user is the one finding the note..

  Geonote.findByPk(geoId)
    .then(geonote => {
      
      geonote.geom = point
      geonote.txt = updatedtxt;
      geonote.username = updatedusername
      return geonote.save()
    })
    .then(result => {
      console.log("updatedddd");
      res.redirect("/geo");
    })
    .catch(err => {
      console.log(err);
      ;
    });
};

exports.postDeleteGeo = (req, res, next)=>{
    const geoId = req.body.nid
    // res.user.
    Geonote.findByPk(geoId)
      .then(geonote=>{
        return geonote.destroy()
      })
      .then(results =>{
        console.log('destroyeddd')
        res.redirect("/geo");
      })
      .catch(err => console.log(err))
}


exports.getIndex = (req, res, next) =>{
    // console.log(req.user)
    // const isLoggedIn = req.get("Cookie").split("=")[1];
    req.user
        .getGeonotes()
    // Geonote.findAll()
        .then(geonote =>{
         const data = JSON.stringify(geonote)
         const geodata= JSON.parse(data)
         const gd = geoJSON.parse(geodata,{GeoJSON: 'geom'})
         console.log(gd)
         res.render('index',{
                items: JSON.stringify(gd),
                editing:false
                // isAuthenticated:isLoggedIn
            
        })
    })
        .catch(err=>console.log(err))
}