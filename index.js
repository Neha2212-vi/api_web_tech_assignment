const express = require('express');
const app = express();
require('./connection/connection');
const createInventory = require('./routes/inventory_table');
const customerDetails = require('./routes/customer_table');
const orderDetail = require('./routes/order_table');

app.use(express.json());

app.use(createInventory);
app.use(customerDetails);
app.use(orderDetail);

const port = process.env.port || 3005;
app.listen(port, console.log(`Server is up att port ${port}`))