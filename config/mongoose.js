const mongoose = require('mongoose');
const url = "mongodb+srv://chandanguptabasadhi318:chandan@cluster0.h9ypa2z.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect('url') 
mongoose.connect(url);
const db=mongoose.connection;

//If any Error then Getting this Line
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));   


db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")
});

module.exports=db;  //Exports db

