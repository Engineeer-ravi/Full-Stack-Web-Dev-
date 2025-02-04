
// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//    let h3 = document.querySelector("h3");
//    let randomColor = getRandomColor();
//    h3.innerText= randomColor;

//    let div = document.querySelector("div");
//    div.style.backgroundColor = randomColor;


//    console.log("color updated");
// });

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);


//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }






// let p = document.querySelector("p");
//   p.addEventListener("click", function(){
//     console.log("para was clicked");
//   })
  

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function(){
//   console.log("mouse inside the box");
// });






// this in event listeners 
// when 'this' is used in a callback of event handeler of something it refers to that something
// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor ="red";
    
// }

// btn.addEventListener("click",changeColor)

// p.addEventListener("click",changeColor)


// h1.addEventListener("click",changeColor)

// h3.addEventListener("click",changeColor)





//keybord Events
let btn = document.querySelector("button");

// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("button was clicked");
// });

// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("button was clicked");
// })  ;
  
// let input = document.querySelector("input")

// input.addEventListener("keydown",function(event){
//     console.log(event);
//     console.log("key was pressed");
// }); 

// input.addEventListener("keyup",function(){
//     console.log("key was relesed");
// }); 


//form Event listener
let form = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    // alert ("form was submitted");

    let input = document.querySelector("input");
    console.log(input); 
    console.dir(input.innerText); 
    console.log(input.value)
});

//extracting data from form

//change event

 //??   