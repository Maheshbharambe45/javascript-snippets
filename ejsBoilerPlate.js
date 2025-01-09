const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.set("view engine","ejs"); // to require ejs , cerate view folder and inside ejs files
app.set("views" , path.join(__dirname , "/views")); // run from root folder


app.get("/",(req,res)=>{
    res.render("home");
})

app.get("*",(req,res)=>{
    res.send("Page not found");
})

app.listen(port,()=>{
    console.log("Listining from port 3000");
})