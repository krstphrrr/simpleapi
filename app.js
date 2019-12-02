// modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars')

const Client = require('pg');

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
app.use('/', (req, res, next) =>{
    res.render('index',{
        title:'hi'
    })
})







// listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`escuchando en..${PORT}`);
})
