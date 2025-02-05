
//  //call stack
//  function hello(){
//     console.log("inside the hello fnx");
//     console.log("hello");
//  }
 
//  function demo(){
//     console.log("calling Hello fnx");
//     hello();
//  } 
//  console.log("calling demo fnx");
//  demo();
//  console.log("done bye");

//visualizing the call stack
// function one(){
//     return 1;
// }

// function two(){
//     return 2;
// }

// function three(){
//     let ans = two()+ one();
//     console.log(ans);
// }
// three();



//js is single threaded 
// setTimeout(()=>{
//     console.log("Ravi pathak");
// },2000);
// console.log("Ravi pathak is good");

//call back hell
let h1 = document.querySelector("h1");

function changeColor(color ,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    },delay);
   
}
//callbacks nesting -> callback hell
changeColor("red",100,()=>{
    changeColor("green",5000  ,()=>{
        changeColor("blue",2000,)
    });
});







// setTimeout(()=>{
//     h1.style.color ="red" 
// },5000); 

// setTimeout(()=>{
//     h1.style.color ="green" 
// },10000); 

// setTimeout(()=>{
//     h1.style.color ="blue" 
// },15000); 







