// modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars')
const Sequelize = require('sequelize');

// database
const db = require('./config/database');

// test db
db.authenticate()
    .then(() => console.log('database connected...'))
    .catch(err => console.log('error:'+err))

// apps
const app = express();


// load view engine 

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'pug')


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}))
const geoRoutes = require('./routes/geo')

app.use(geoRoutes)

db
  .sync()
  .then(result =>{
    // console.log(result)
  })
  .catch(err =>{
    console.log(err)
  })


// listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`escuchando en..${PORT}`);
})






