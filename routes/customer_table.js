const express = require('express');
const route = express.Router();
const customerModel = require('../model/customer_table');

route.post('/createCustomer', async(req, res)=>{
    const data = await customerModel.create(req.body);
    res.send(data);
})
route.get('/customerDetails', async(req, res)=>{
    const data = await customerModel.find();
    res.send(data)
})
module.exports = route;