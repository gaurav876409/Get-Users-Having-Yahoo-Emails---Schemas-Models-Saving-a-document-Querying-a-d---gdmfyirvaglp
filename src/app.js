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
    const Users = await users.find({
        email: {
          $regex: '^.*@yahoo.com$',
          $options: 'i',
        },
      });
    
      const ids = [];
      for (const user of Users) {
        ids.push(user._id);
      }
    
      res.send( ids );

    //Complete Your code here


});

module.exports = app;
