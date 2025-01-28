// Scope
// scope detrmines the accessibility of 
// variable , objects and functions from  diffrent parts of the  code
// .Function
// .Block
// .Lexical

//function scope
// let sum =54; //global scope
// function calSum(a,b){
//     let sum =a+b;    //function scope 
//     console.log(sum)

// }
// calSum(2,3);

// block scope-  variables declared inside a{} block canot be accessed from outside the block
// block scope cannot be apply to var keyword only this  let and const keyword apply
{
    let sum = 54; //block scope
}
console.log(a); //error