const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello world from the server router.js');
});

router.post('/register', (req, res) => {
    console.log(req.body);
    // res.json({ message: req.body });
    // res.send("My registration form");
})


// {
//     "name":"vinod",
//     "email":"vinod@gmail.com",
//     "phone":4545313,
//     "work":"Web Developer",
//     "password":"vinod123",
//     "cpassword":"vnod123"
// }

module.exports = router;