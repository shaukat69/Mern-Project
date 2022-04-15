const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// This is used to connect the config.env file which hides the database and port information
dotenv.config({ path: './config.env' })


// This is used to conect database connectio file
require('./db/conn');
// const User = require('./model/userSchema');


// This is used to convert string to json in express
app.use(express.json());

// we link the router files to make our route easy
app.use(require('./router/auth'));


const PORT = process.env.PORT;

// MiddleWare
const middleware = (req, res, next) => {
    console.log(`Hello middelware`);
    next();
}

// app.get('/', (req, res) => {
//     res.send(`Hello World From The Server qpp.js`);
// });

app.get('/about', middleware, (req, res) => {
    console.log(`Hello About`);
    res.send(`Hello About World From The Server`);
});

app.get('/contact', (req, res) => {
    res.send(`Hello Contact World From The Server`);
});

app.get('/oredr', (req, res) => {
    res.send(`Hello order`);
})

app.get('/signin', (req, res) => {
    res.send(`Hello Login World From The Server`);
});

app.get('/signup', (req, res) => {
    res.send(`Hello Registration World From The Server`);
});

app.listen(PORT, () => {
    console.log(`The server is running at ${PORT}`);
})