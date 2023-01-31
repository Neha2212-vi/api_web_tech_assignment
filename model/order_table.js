const mongoose = require('mongoose');

const orderShcema = new mongoose.Schema({
    // customer_id, inventory_id,item_name, quantity
    customer_id : {type:String, required:true},
    inventory_id : {type:String, required:true},
    item_name : {type:String, required:true},
    quantity : {type:Number,require:true}
})

const orderModel = mongoose.model('order_table', orderShcema);
module.exports = orderModel;