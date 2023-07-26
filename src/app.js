const express = require('express');
const app = express();
const mongoose = require('mongoose');
var users   =require("../models/user.js");


// const url = process.env.DATABASE_URL || "mongodb://localhost/users";
// mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
//     console.log('connected to DB')
// })

//Router Middlewares
app.use(express.json());

//complet the Route that return the object id of all the user which email is of type @yahoo.com.
//it should be Case insensitive

app.get("/",async function(req,res){

    ids = [];

    //Complete Your code here

    res.send(ids);

});

module.exports = app;
