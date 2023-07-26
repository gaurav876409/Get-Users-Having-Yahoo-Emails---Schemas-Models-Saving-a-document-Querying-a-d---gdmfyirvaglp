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

    // ids = [];
    try{
        const userWithYahooMail = await users.find({email: {$regex: "\w+([-+.]\w+)*@yahoo.com"}}, {_id: 0});
        const ids = userWithYahooMail.map(user => user._id);
        res.send(ids);
    } catch (error){
        res.status(500).send("Error");
    }

    //Complete Your code here


});

module.exports = app;
