
// const sum =(a,b) =>{
//     console.log(a+b);
// }

// const cube = (n) => {
//     return n*n*n;
// }

// const  power = (a,b) =>{
//     return a**b;
// }

// const hello =() => {
//     console.log("hello world");

// }


// Arrow function 
// implicit return
// const mul = (a,b) => (
//     a*b
// );

// this with Arrow function

//prectice Question
//write an arrow function  that returns the squre of a number 'n
const squre = (n) => 
    n*n
    console.log(squre(4))
    // prectice Question 2
// write a function that print "hello world " 5 times at interval of 2s each.
let id = setInterval(() => {
    console.log("Hello world");
},2000);

setTimeout(() => {
    clearInterval(id);
    console.log("interval cleared");
    },10000);