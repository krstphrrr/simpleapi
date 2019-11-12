const express = require('express');
const path = require('path');
const app = express();




// MIDDLEWAREZ
// body parser - middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// set static folder
app.use(express.static(path.join(__dirname, 'public')));



const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`escuchando en..${PORT}`);
})


app.use('/api/items', require('./routes/api/items'));