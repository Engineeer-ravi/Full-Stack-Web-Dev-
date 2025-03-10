
const express = require("express");
const app = express();
const path = require("path");



const port = 8080;



app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.get("/",(req,res) => {
    res.render("home.ejs");
});
//instagram Ejs use

app.get("/ig/:username",(req,res) => {
    const followers =["mithlesh","raviranjan","deepak","rohit","payal"];
    let {username} = req.params;
    res.render("instagram.ejs",{username, followers});
});

//random number Ejs use

app.get("/rolldice",(req,res) => {
    let diceVal = Math.floor(Math.random()*6) +1;
    res.render("rolldice.ejs", { diceVal });
});




app.listen(port,() =>{
    console.log(`Listing on port ${port}`);
});