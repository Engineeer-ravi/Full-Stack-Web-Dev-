
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");
// ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

app.use(express.urlencoded({ extended : true}));
app.use(methodOverride("_method"));
app.use(express.json());



app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id:uuidv4() ,
        username : "codebyravi",
        content : "I Love coding!"
    },
    {
        id:uuidv4() ,
        username : "ravipathak",
        content : "Hardwork is important to achive a success"
    },
    {
        id:uuidv4() ,
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
    let id= uuidv4();
    posts.push({ id, username, content });
    // res.send("Post request to /posts");
    res.redirect("/posts");
   
});
// show a id
app.get("/posts/:id", (req, res) => {
    let {id}= req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
    // res.send("request is working");
});

// edit a post
//patch request
app.patch("/posts/:id", (req,res) => {
    let {id}= req.params;
    let newContent =req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    
    console.log(id);
    // res.send("patch request to /posts/:id");
    res.redirect("/posts");
});  

app.get("/posts/:id/edit", (req,res) => {
    let {id}= req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs",{ post });


});

//delete a post
app.delete("/posts/:id", (req,res) => {
    let {id}= req.params;
    posts = posts.filter((p) => p.id !== id);
    res.redirect("/posts");
    // res.send("delete request to /posts/:

});
    
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

