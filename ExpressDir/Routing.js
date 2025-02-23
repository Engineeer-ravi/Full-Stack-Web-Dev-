
// Routing--it is process of selecting a path for traffic in a network or between or  across multiple networks

const express = require("express");
const app = express();

// console.dir(app);

let port = 3000; //8080

app.listen(port, () => {
   console.log(`app is  listen on port ${port}`);

} );
  

  app.get("/apple", (req,res) => {
    res.send("you contacted apple path");
  });

  app.get("/orange", (req,res) => {
    res.send("you contacted orange path");
  });

  app.get("*", (req,res) => {
    res.send("this path does not exists");
  });

  //app.post methode

  app.post("/", (req,res) => {
    res.send("you sent a post request to root");
  });

  //NodeMon-- to autometically restart server with code chage