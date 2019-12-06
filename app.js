// modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars')
const Sequelize = require('sequelize');

// const Client = require('pg');

// database
const db = require('./config/database');

// test db
db.authenticate()
    .then(() => console.log('database connected...'))
    .catch(err => console.log('error:'+err))

// apps
const app = express();


// load view engine 
// app.engine('handlebars', exphbs({
//     defaultLayout: 'main'
// }));
// app.set('view engine', 'handlebars')

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'pug')


app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
// app.use('/iris', require('./routes/irises'))
// app.use('/', (req, res, next) =>{
//     res.render('index',{
//         title:'hi'
//     })
// })

const testquery = "SELECT row_to_json(fc) FROM(	SELECT 'FeatureCollection' AS type, array_to_json(array_agg(f)) as features FROM (		SELECT 'Feature' as type, ST_AsGeoJSON(gi.wkb_geometry)::json as geometry,		row_to_json((\"EcologicalSiteId\",\"PlotKey\")) as properties FROM \"geoIndicators\" as gi) as f) as fc"

// app.use("/data", (req,res,next) =>{
//     res.render('data', {title:"datatest"});
// })
// app.use('/iris', require('./routes/irises'))
const geoModel = require('./models/geoIndicators')
const Geo = geoModel(db,Sequelize)


app.use('/map', (req, res, next)=>{
    res.render('data')
})



// app.use('/data', (req, res, next) =>{
//     fun1Promise = fun1();
//     fun1Promise.then(function(result){
//         res.render('data',{
//             result})

//     })
    
//     function fun1(){
//         return Geo.findAll({attributes: {exclude: ['id', 'createdAt', 'updatedAt']},
//         where: {ogcFid: 3}
//     })
//     }
//  })



// listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`escuchando en..${PORT}`);
})






