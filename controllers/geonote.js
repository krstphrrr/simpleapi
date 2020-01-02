const Geonote = require('../models/geonote')
const geoJSON = require('geojson')
// get all the notes in db

exports.getGeonote = (req, res, next) => {
  if(!req.user){
    Geonote.findAll({ where: { public: true } })
      .then(geonote => {
        res.render("geo", {
          items: geonote,
          pageTitle: "GEO!!",
          path: "/geo"
        });
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    req.user
        .getGeonotes()
    // Geonote.findAll()
        .then(geonote =>{
            res.render('geo',{
                items: geonote,
                // latlong: geonote[0].dataValues.geom.coordinates,
                pageTitle: 'GEO!!', 
                path:'/geo',
                isAuthenticated: req.session.isLoggedIn
            })
        })
        .catch(err =>{
            console.log(err)
        })
    }
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
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// get page to ADD a new note to db 

exports.getaddGeonote = (req, res, next)=>{
  // if (!req.session.isLoggedIn){
  //   return res.redirect('/login')
  // } else {
    res.render('edit-geo', {
        pageTitle:'add note',
        editing:false,
        isAuthenticated: req.session.isLoggedIn
    })
  // }
}

// actually ADD the new note to db

exports.postaddGeonote = (req, res, next)=>{
    const geom = req.body.geom;
    const txt = req.body.txt;
    const username = req.user.email
    let public = false
    const switchval = req.body.switch1
    if(!switchval){
      public = false
    } else {
      public = true
    }
    const rest = (...args)=>{return `${args}`}
    const point = {type: 'Point', coordinates:rest(geom).split(",")};
    req.user.createGeonote({ 

      geom: point,
      txt: txt,
      email: username,
      userId: req.user.id,
      public: public
    }).then({
      function(instance){
        instance.update(req.body,{
          returning:true,
          plain: true
        })
      }
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
  const preauth = req.session.isLoggedIn
  if(!editMode){
    //   console.log(req)
      return res.redirect('/')
  }
  if(preauth===true){
    req.user
      .getGeonotes({ where: { nid: geoId } }) //brings an array
      //   Geonote.findByPk(geoId)
      .then(geonotes => {
        // console.log(geonotes) //darn array
        // console.log(geonotes[0])
        const geonote = geonotes[0];
        if (!geonotes) {
          console.log("segunda salida");
          return res.redirect("/");
        }
        res.render("edit-geo", {
          items: geonote,
          pageTitle: "GEO!!",
          path: "/edit-geo",
          editing: true,
          geoId: geoId,
          isAuthenticated: req.session.isLoggedIn
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  
};

// actually POST updated geonote to db

exports.posteditGeo = (req, res, next) => {
  const geoId = req.body.nid
  const updatedgeom = req.body.geom;
  const updatedtxt = req.body.txt;
  const username = req.user.email;
  let updatedpublic = false;
  const switchval = req.body.switch1;
  if (!switchval) {
    updatedpublic = false;
  } else {
    updatedpublic = true;
  }
  const rest = (...args) => {
    return `${args}`;
  };
  const point = { type: "Point", coordinates: rest(updatedgeom).split(",") };
  //if a user is the one finding the note..

  Geonote.findByPk(geoId)
    .then(geonote => {
      
      geonote.geom = point
      geonote.txt = updatedtxt;
      geonote.email = username
      geonote.public = updatedpublic
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
  if(!req.user){
    Geonote.findAll({where:{public:true}})
      .then(publicgeo=>{
        if (!publicgeo){
          res.redirect('/404')
        }
        const unparsed = JSON.stringify(publicgeo)
        const parsed = JSON.parse(unparsed)
        const ready = geoJSON.parse(parsed, {GeoJSON:'geom'})
        res.render('index',{
          items: JSON.stringify(ready),
          editing:false,
          isAuthenticated: req.session.isLoggedIn
        })
      })
      .catch(err=>console.log(err))
  } else {
    req.user
      .getGeonotes()
      .then(geonote =>{
        if (!geonote){
          res.redirect('/404')
        }
        const unparsed = JSON.stringify(geonote)
        const parsed = JSON.parse(unparsed)
        const ready = geoJSON.parse(parsed,{GeoJSON: 'geom'})
        res.render('index',{
          items: JSON.stringify(ready),
          editing:false,
          isAuthenticated: req.session.isLoggedIn
        })
    })
      .catch(err=>console.log(err))
  }
}