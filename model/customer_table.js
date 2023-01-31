const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    // customer_id, customer_name,email
    customer_id : {type:String, required:true},
    customer_name : {type:String, required:true},
    email : {type:String, required:true, unique:true}
})

const customerModel = mongoose.model('customer_tble', customerSchema);
module.exports = customerModel;