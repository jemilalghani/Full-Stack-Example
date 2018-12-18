const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const couchesController = require('./couchesController');
const authController = require('./authController');
const userController = require('./userController');

const app = express();
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false
}))

massive(process.env.CONNECTION_STRING).then(database=>{
    app.set('db', database)
}).catch(error=>{
    console.log('error with massive', error)
})

app.get('/api/me', userController.getUserData);
app.post('/api/logout', authController.logout);
app.get('/auth/callback', authController.handleCallback);

app.get('/api/couches', couchesController.getCouches);
app.post('/api/couches', couchesController.postCouch);

const SERVER_PORT = 4000;
app.listen(SERVER_PORT, ()=>{
    console.log(`Tuning into Port ${SERVER_PORT} 📡`)
})