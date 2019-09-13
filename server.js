require('dotenv').config();
const express = require('express');
const mongoosee = require('mongoose');
const path = require('path');
const cors = require('cors');
const bodyparser = require('body-parser');
const passport = require('passport');

//intialize app with express
const app = express();
const Userroutes =require('./routes/users');
const Taskroutes =require('./routes/tasks');

//connect Data Base
mongoosee.connect(process.env.DATABASE, { useMongoClient:true} );

mongoosee.connection.on('connected', () => {
    console.log("connected to the data base");
})

mongoosee.connection.on('error', (err) => {
    console.log("failed to connect to the data base" + JSON.stringify(err,undefined,2));
})

 //---------------//
//cors
app.use(cors());

app.use(bodyparser.json());

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
 //--------------//

app.get('/',(req ,res ,next)=>{
    res.send('nothing can stop i am all the way up')
});

app.use('/users', Userroutes);
app.use('/tasks', Taskroutes);
 
//start the server

const _PORT = process.env.PORT

app.listen(_PORT , () => {
    console.log('server started');
})