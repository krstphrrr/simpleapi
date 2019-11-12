const express = require('express');
const uuid = require('uuid')
const items = require('../../Items.js')
const itemsRouter = express.Router();


// single json or array ?

// get all
itemsRouter.get('/', (req, res, next)=>{
    const allitems = req.params;
    if (allitems){
        res.send(items)
    } else {
        res.status(404).send()
    }
})

// get req single file using id
itemsRouter.get('/:id', (req,res,next)=>{
    const found = items.some(items =>items.id===parseInt(req.params.id));
    if (found){
        res.json(items.filter(items => items.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg:`no item with the id of ${req.params.id} found`});
    }
});

// post req
itemsRouter.post('/',(req,res,next)=>{
    const newItem = {
        id:uuid.v4(),
        name: req.body.name
    }
    if(!newItem.name){
        res.status(400).json({ msg:"please send new name"})
    } else{
        items.push(newItem);
        res.json(items);
    }

})


module.exports = itemsRouter;