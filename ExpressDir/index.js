
const express = require("express");
const app = express();

// console.dir(app);

let port = 3000; //8080

app.listen(port, () => {
   console.log(`app is  listen on port ${port}`);

} );
 
//handling request


// app.use((req,res) => {
//    // console.log(req);
//    console.log("request recived");

   
  app.get("/", (req,res) => {
   res.send("Hello i am root ravi pathak");
 });

 app.get("/:username/:id", (req,res) => {
   // console.log(req.params);
   let{username,id} = req.params;
   //Html send 
   let htmlStr =`<h1>welcome to the page of @${username}</h1>`;
   res.send(htmlStr);
   // res.send(`welcome to the page of @${username}`);
 });


   // // res.send("this is a basic respond");

   // //object respond
   // res.send({
   //    name:"apple",
   //    color:"red",
   // });

   //html respond
//    let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>orange</li></ul>";
//    res.send(code);

// });
//Query String
app.get("/search", (req,res) => {
   // console.log(req.query)
   let {q} = req.query;
   if(!q){
      res.send("<h1>nothing searched</h1>");
   }

   res.send(`<h1>search result for query : ${q}</h1>`);
});