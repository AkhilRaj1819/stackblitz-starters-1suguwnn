const express = require('express');

const model = require('./schema');

const router = express.Router();

router.post('/menu',async(req,res)=>{
    try {
        
    
    const item = req.body;
    if(!item.name || !item.description || !item.price){
        return res.status(400).send({msg:"Enter all fields"});
    } 
    const newItem = new model(item);
    const savedItem = await newItem.save();
    return res.status(200).send({msg:"Created new MenuItem",data:savedItem});
} catch (error) {
    return res.status(500).send({msg:"something went wrong",error});
    }
})

router.get('/menu',async(req,res)=>{
    try {
    const items = await model.find();
    return res.status(200).send({msg:"MENU ITEMS",data:items});
} catch (error) {
    return res.status(500).send({msg:"something went wrong",error});
        
    }

})

module.exports =router;