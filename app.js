// modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars')
const Sequelize = require('sequelize');
const session = require('express-session')
const pgDBstore = require('connect-session-sequelize')(session.Store)

// database
const db = require('./config/database');

const errorController = require("./controllers/error");
const Geonote = require('./models/geonote')
const User = require('./models/user')

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
app.use(
  session({
    secret: "merecabron",
    store: new pgDBstore({db: db}),
    resave: false,
    saveUninitialized: false
  })
);
app.use((req, res, next)=>{
  if(!req.session.user){
    return next()
  } 
  User.findByPk(req.session.user.id)
  .then(user =>{
    req.user = user
    next()
  })
  .catch(err =>console.log(err))
})

const geoRoutes = require('./routes/geo')
const authRoutes = require('./routes/auth')
app.use(geoRoutes)
app.use(authRoutes)

Geonote.belongsTo(User)
User.hasMany(Geonote, {as:'Geonotes'})

app.use(errorController.get404);

db
  .sync() //force in dev
  .then(result =>{
    
    app.listen(5000)
    })
  .catch(err =>{
    console.log(err)
  })


// listening
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`escuchando en..${PORT}`);
// })






