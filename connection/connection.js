const mongoose = require('mongoose');
const dotenv = require('dotenv').config();


const url = process.env.url;
mongoose.set('strictQuery', true)
mongoose.connect(url, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("Connected"))
.catch(()=>console.log("Can not connect"))