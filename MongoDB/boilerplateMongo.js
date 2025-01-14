const mongoose = require('mongoose');


main()
.then(()=>{console.log("Connection Sucessful"); // resolve connection
})
.catch(err => console.log(err)); // catch err

async function main() {   // connection
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


const userSchema = new mongoose.Schema({  // for declaring a schema
    name:String, 
    email:String,
    age:Number
})

const User = mongoose.model("User" , userSchema); // for creating a model

const user1 = new User({  // to insert data
name:"Mahesh",
email:"bharambemahesh7@gmail.com",
age:21
});

user1.save();  // to save data