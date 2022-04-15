const mongoose = require('mongoose');
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