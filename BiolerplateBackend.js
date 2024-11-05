const express = require('express');
const app = express();
const path = require("path");
const fs = require("fs");

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    fs.readdir(`./files`,(err,files)=>{
        res.render("index.ejs",{files:files});
    })
});

app.get("/file/:fileName",(req,res)=>{
   fs.readFile(`./files/${req.params.fileName}`,"utf-8",(err,fileData)=>{
    res.render("show",{fileName:req.params.fileName,fileData:fileData})
   })   
});

app.post("/create",(req,res)=>{
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.detail,function(err){
        res.redirect("/")
    });
});
app.listen(3000);
