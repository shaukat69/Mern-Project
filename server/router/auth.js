const { Router } = require('express');
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
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Password Are Not Matching" });
        } else {
            const user = new User({ name, email, phone, work, password, cpassword });
        }

        // Here After Hashing The Password Save Method Will Run

        // Save Data In DB
        await user.save();

        res.status(201).json({ message: "User Registered Successfully" });

    } catch (err) {
        console.log(err);
    }
});


// Login Route
router.post('/signin', async(req, res) => {


    try {
        const { email, password } = req.body;

        // check fields are filled or not
        if (!email || !password) {
            res.status(400).json({ error: "Please Fill The Data" });
        }

        // check email is present in database or not
        const userLogin = await User.findOne({ email: email });
        console.log(userLogin);

        if (!userLogin) {
            res.status(400).json({ error: "User Error" });
        } else {
            res.json({ message: "User Sign In Successfully" });
        }



        // check password is correct or not

    } catch (err) {
        console.log(err);
    }
})





module.exports = router;