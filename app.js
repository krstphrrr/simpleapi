// modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars')
const Sequelize = require('sequelize');
const session = require('express-session')
const pgDBstore = require('connect-session-sequelize')(session.Store)
const csrf = require('csurf')
const flash = require('connect-flash')

// database
const db = require('./config/database');

const errorController = require("./controllers/error");
const Geonote = require('./models/geonote')
const User = require('./models/user')
const Data = require('./models/data')



// test db
db.authenticate()
    .then(() => console.log('database connected...'))
    .catch(err => console.log('error:'+err))

// apps
const app = express();
const csrfProtect = csrf()

//view engine 

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
app.use(csrfProtect)
app.use(flash())

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

app.use((req, res, next)=>{
  res.locals.isAdm = req.session.isAdm
  res.locals.isAuthenticated = req.session.isLoggedIn
  res.locals.csrfToken = req.csrfToken()
  next()
})

const geoRoutes = require('./routes/geo')
const authRoutes = require('./routes/auth')
app.use(geoRoutes)
app.use(authRoutes)

Geonote.belongsTo(User)
User.hasMany(Geonote, {as:'Geonotes'})
User.hasMany(Data)

app.use(errorController.get404);

db
  .sync({logging:true}) //force in dev
  .then(result =>{
    
    app.listen(process.env.PORT || 5000)
    })
  .catch(err =>{
    console.log(err)
  })





