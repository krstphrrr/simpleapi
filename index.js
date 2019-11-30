// modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const { Client } = require('pg');

// database
const db = require('./config/database');

// test db
db.authenticate()
    .then(() => console.log('database connected...'))
    .catch(err => console.log('error:'+err))

// apps
const app = express();
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars')

app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.use('/iris', require('./routes/irises'))



// listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`escuchando en..${PORT}`);
})






// // MIDDLEw
// // body parser - middleware
// app.use(express.json());
// app.use(express.urlencoded({extended: false}))

// set static folder


// app.use('/', (req,res,next)=>{
//     res.status(200).send('ok')
// })


// // app.use('/api/items', require('./routes/api/items'));
// // // items router to modularize the whole thing
// // const itemsRouter = express.Router()
// // app.use('/items', itemsRouter)


// const client = new Client(conf.connStr())

// client.connect()

// client.query('SELECT * FROM iris', (err,res)=>{
//     console.log(err,res)
//     client.end()
// })
