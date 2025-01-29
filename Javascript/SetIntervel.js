// set Iinterval(function,timeout)
//clearInterval(id)
let id = setInterval(() => {
    console.log("hello ravi pathak");
},5000);
console.log(id);

let id2 = setInterval(() => {
    console.log("hello world");
},3000);
console.log(id2);
clearInterval(id2);