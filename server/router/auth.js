const express = require('express');
const { exists } = require('../model/userSchema');
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send('Hello world from the server router.js');
});

// Using Promises
// router.post('/register',(req, res) => {
//     const { name, email, phone, work, password, cpassword } = req.body;
//     //Validation
//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).json({ error: "Please Fill All The Fields Properly!" });
//     }

//     // Check If User is already exist using promises
//     User.findOne({ email: email })
//         // User.findOne({email from database:email from user field})
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "Email Already Exist!" });
//             }

//             const user = new User({ name, email, phone, work, password, cpassword });

//             // To Save new user data in database using promises
//             user.save().then(() => {
//                 res.status(201).json({ message: "User Registered Successfully" });
//             }).catch((err) => res.status(500).json({ error: "Failed To Register" }));


//         }).catch(err => { console.log(err); });

// });


//Using Async-Await
router.post('/register', async(req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    //Validation
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please Fill All The Fields Properly!" });
    }
    try {
        // Check If User is already exist using promises
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email Already Exist!" });
        }
        const user = new User({ name, email, phone, work, password, cpassword });

        await user.save();

        if (userRegister) {
            res.status(201).json({ message: "User Registered Successfully" });
        } else {
            res.status(500).json({ error: "Failed To Register" });
        }
    } catch (err) {
        console.log(err);
    }
});


module.exports = router;