const express = require('express');

const items = require('../../Items.js')
const itemsRouter = express.Router();


// single json or array ?
itemsRouter.get('/:id', (req,res,next)=>{
    const found = items.some(items =>items.id===parseInt(req.params.id));
    if (found){
        res.json(items.filter(items => items.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg:`no item with the id of ${req.params.id} found`});
    }
});


module.exports = itemsRouter;