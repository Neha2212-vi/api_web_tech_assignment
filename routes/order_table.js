const express = require('express');
const route = express.Router();
const orderModel = require('../model/order_table');
const inventoryTable = require('../routes/inventory_table');

route.post('/createOrders', async(req, res)=>{
    const data = await orderModel.create(req.body);
    res.send(data);
})
route.get('/orders', async(req, res)=>{
    const data = await orderModel.find();
    res.send(data);
})
module.exports = route;