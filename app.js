const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

const db=require('./mongodb')
const studentRoute = require('./routes/studentroute')
app.listen(3000,()=>{
    console.log("Listening to port 3000")
});

app.use('/api',studentRoute)
