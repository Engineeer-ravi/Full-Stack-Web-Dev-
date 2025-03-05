
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended : true}));
app.use(express.json());



app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
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


//posts route API
app.get("/posts", (req, res) => {
    res.render("index.ejs",{ posts: posts });
});

// add a new post
app.get("/posts/new", (req,res) => {
    res.render("new.ejs");
});

app.post("/posts", (req,res) =>  {
    // console.log(req.body);
    
    let { username,content } = req.body;
    posts.push({ username, content });
    // res.send("Post request to /posts");
    res.redirect("/posts");
   
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

