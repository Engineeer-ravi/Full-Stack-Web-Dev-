
const mongoose = require('mongoose');

//ise bhi use kar sakte hai mongodb database se connec  karne ke liye
// mongoose.connect("mongodb://127.0.0.1:27017/test");

//we are trying  to connect to the  same database
main().
then(() =>{
    console.log("connected to database");

})

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//Schema- Schema dedfnes  the shape of the docuuments within that collecttion
const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    city:String,
    age:Number
});
//Models- models in mongoose is a class with which we construct documents

const User= mongoose.model("User", userSchema);
// const Employee  = mongoose.model("Employee", userSchema);
// insert single document
// const user1 = new User({
//     name:"Ravi",
//     email:"ravi@gmail.com",
//     password:"12345",
//     age:21,
// });
// const user2 = new User({
//     name:"Suraj",
//     email:"Suraj@gmail.com",
//     age:24,
// });
// // user1.save()
// user2
// .save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });   

//insert multiple documents
// User.insertMany([
//     {name:"Sudhakar  Pathak", email:"sudhakar@gmail,com", age:50},
//     {name:"Shivam  Pathak", email:"shivam@gmail,com", age:20},
//     {name:"Shivendra  Pathak", email:"shivendra@gmail,com", age:22},
//     {name:"Rajesh  Pathak", email:"rajesh@gmail,com", age:25},
//     {name:"Ravi  Pathak", email:"ravi@gmail,com", age:21},
//     {name:"Suraj  Pathak", email:"suraj@gmail,com", age:24},
//     {name:"Manoj  Pathak", email:"manoj@gmail,com", age:23},
// ]).then((res) => {
//     console.log(res);
// });



//find all documents
// User.find({})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

//conditional Statments
User.find({age:{$gt:40}}) 
.then((res) => {
    console.log(res[0].name);
})
.catch((err) => {
    console.log(err);
});