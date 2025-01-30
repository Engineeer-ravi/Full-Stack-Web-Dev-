//forEach
// let arr=[1,2,3,4,5];
// arr.forEach(function(el){
//     console.log(el);
// })
// let print = function (el){
//     console.log(el);
// }
// arr.forEach(print);   

//map 
//let newArr = arr.map(some function definition or name)
// let num =[1,2,3,4];
// let double =num.map(function(el){
//     return el*2;
// });

// let student = [
// {
//     name:"ravi",
//     marks:95,

// },
// {
//     name:"shourav",
//     marks:80,

// },
// {
//     name:"mannu",
//     marks:70,

// },
// ];
// let gpa =student.map((el) =>{
//     return el.marks /10
// });

//filter
//let newArr =arr.filter(some function definition or name)
//   let num = [2,3,4,5,6,7,8,9];
//   let  ans = num.filter((el) => {
//     // return el%2 == 0;
//        return el%2 != 0;
//   });

//every methode
//arr.every(some function definition or name)
   


//reduce methode
 let nums =[1,2,3,4];
 let finelVal = nums.reduce((res,el) => res + el);
 console.log(finelVal)