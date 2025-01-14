const mongoose = require('mongoose');


main()
.then(()=>{console.log("Connection Sucessful"); // resolve connection
})
.catch(err => console.log(err)); // catch err

async function main() {   // connection
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({ // proper fromat for schema 
title:{
    type:String,
    required:true  // validations
},
author:{
    type:String
},
email:{
    type:String,
    lowercase:true  // validation convert every char into lowercase
},
price:{
    type:Number,
    default:0  // validations
}
});

const Book = new mongoose.model("Book" , bookSchema);


let book4 = new Book({
    title:"NoWayHome",
    author:"Peter paker",
    email:"PETERPAKER8@GMAIL.COM",
    price:1000
})


book4.save()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});