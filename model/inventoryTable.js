const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    // inventory_id, inventory_type, item_name, available_quantity
    invertory_id : {type:String, required:true},
    inventory_type : {type:String, required:true},
    item_name : {type:String, required:true},
    available_quantity : {type:Number, required:true}
});

const tablemodel = mongoose.model('inventory_table', tableSchema);
module.exports = tablemodel;