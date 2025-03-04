
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended : true}));



app.set("view engine", "ejs");
app.set("view", path.join(__dirname,"views"));

app.set(express.static(path.join(__dirname, "public")));

let post = [
    {
        username : "codebyravi",
        content : "I Love coding!"
    },
    {
        username : "ravipathak",
        content : "Hardwork is important to achive a success"
    },
    {
        username : "iamravi_pathak",
        content : "I got selected for my 1st intership"
    },
];



app.get("/posts", (req, res) => {
    res.render("index.ejs");
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

