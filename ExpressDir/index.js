
const express = require("express");
const app = express();

// console.dir(app);

let port = 3000; //8080

app.listen(port, () => {
   console.log(`app is  listen on port ${port}`);

} );
 
//handling request


app.use((req,res) => {
   // console.log(req);
   console.log("request recived");

   // // res.send("this is a basic respond");

   // //object respond
   // res.send({
   //    name:"apple",
   //    color:"red",
   // });

   //html respond
   let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>orange</li></ul>";
   res.send(code);

});