
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
// changeColor("red",100,()=>{
//     changeColor("green",5000  ,()=>{
//         changeColor("blue",2000,)
//     });
// });


// setTimeout(()=>{
//     h1.style.color ="red" 
// },5000); 

// setTimeout(()=>{
//     h1.style.color ="green" 
// },10000); 

// setTimeout(()=>{
//     h1.style.color ="blue" 
// },15000); 



//ptomise - the promise object  reparsents the eventual completion(or faliure )of an asynchonus opneration and its resulting value

// function savetoDb(data,success,faliure){
//     let internetSpeed = Math.floor(Math.random() *10)+1;
//     if(internetSpeed>4){
//         success();
   

        
//     }else{
//        faliure();
//     }
// }  
// savetoDb("ravvi pathak",()=>{
//     console.log("YOUR DATA WAS SAVED");
//     savetoDb("hello world",()=>{
//         console.log("success2: data to savedd")
//     }  ,()=>{
//         console.log("faliure2:weak connection")
//     });

//  },
//  ()=>{
//     console.log("waeak connection data was not saved");
//  }
// );

//promise 
//resolve & reeject


// promise
//then() & catch()
let request =savetoDbPromise("web developmwent");
request
.then(()=>{
    console.log("promise resolve");
})
.catch(()=>{
    console.log("promise rejected");

});









