const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
    console.log('Connection Successful');
}).catch((err) => console.log(err));


// mongoose.connect(DB, {
//     useNewUrParser: true,
//     useCreateIndex: true,
//     useunifiedTropology: true,
//     useFindAndModify: false
// }).then(() => {
//     console.log('Connection Successful');
// }).catch((err) => console.log(err));


// MiddleWare
const middleware = (req, res, next) => {
    console.log(`Hello middelware`);
    next();
}

app.get('/', (req, res) => {
    res.send(`Hello World From The Server`);
});

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

app.listen(3000, () => {
    console.log('The server is running at port 3000');
})