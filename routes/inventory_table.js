const express = require('express');
const route = express.Router();
const tablemodel = require('../model/inventoryTable')


route.post('/createInventory', async (req, res) => {
    console.log(req.body);
    const data = await tablemodel.create(req.body);
    res.send(data);
})
route.get('/inventory', async (req, res) => {
    const data = await tablemodel.find()
    res.send(data);
})
route.get('/inventory/:inventoryType', async (req, res) => {
    //console.log(req.params.inventoryType)
    const data = await tablemodel.find(
        {
            "$or": [
                { "inventory_type": { $regex: req.params.inventoryType } }
            ]
        }
    )
    res.send(data);
});
route.put('/:itemName/availableQuantity', async(req, res)=>{
    let result = await tablemodel.updateOne(
        {item_name : req.params.itemName},
        {$set:{
            available_quantity : 80
        }
        }
    )
    res.send(result);
})
module.exports = route;