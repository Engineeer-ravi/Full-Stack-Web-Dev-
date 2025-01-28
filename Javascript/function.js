//   function hello(){
//     console.log("hello");
//   }
//     hello();
//     hello();
//     hello();

//     function printName(){
//         console.log("John Doe");
//         console.log("Ravi Pathak");
//     }
//     printName();

//     function  print1to5(){
//         for(let i=1; i<=5; i++){
//             console.log(i);
//         }
//     }
//     print1to5();


// prectice question

// function poem(){
//     console.log("twinkle twinkle little star how are wonder what you are up above the world so high like a diamond in th sky");
// }
// poem();

// prectice question 2

//  let rand = Math.floor(Math.random()*6)+1;
//     console.log(rand);

// function rolDice(){
//     let rand = Math.floor(Math.random()*6)+1;
//     console.log(rand);
// }
// rolDice();


// Function with arguments
// value we pass to the function is called arguments

  // function printInfo(name,age){
  //   console.log(`${name}'S age is ${age}.`);
  // }
  // printInfo("Ravi Pathak",21);

  // Prectice Question
  // function calcAvg(a,b,c){
  //   let avg = (a+b+c)/3;
  //   console.log(avg);
  // }  
  // calcAvg(3,6,6);

  // precticeQuestion 
  // create a function that prints the multiplication table of a number.

// function printTable(n){
//   for(let i=n; i<=n*10; i+=n){
//     console.log(i);
//   }
// }
// printTable(2);


// Return Keyword 
// return keyword ids used to return a some value from the function
//  function sum(a,b){
//   return a+b;
//  }
//  console.log(sum(2,3));


// function isAdult(age){
//   if(age>=18){
//     return "adult";
//   }
//   return "not  adult";
// }
// console.log(isAdult(13));

// prectice question
// create a function that  returns the sum of  number from 1 to n

// function getSum(n){
//   let sum  =0;
//   for(let i=1; i<=n; i++){
//     sum += i;
//   }
//   return sum;
// }
// getSum(4);

// prectice question
// create a function that returns the concatention of all strings in an array
let str=["hello","world","how","are","you"];
function concat(str){
  let result = "";
  for(let i=0; i<str.length; i++){
    result +=  str[i];
  }
  return result;

}