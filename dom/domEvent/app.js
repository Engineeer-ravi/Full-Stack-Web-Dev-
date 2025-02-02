
let btns = document.querySelectorAll("button");

for( btn of btns){
    // btn.onclick = sayHello;
    btn.onmouseenter = function (){
        console.log("Mouse entered");
    }
    // console.dir(btns);
}

// btn.onclick = function(){
//     alert("Button was clicked");
// };

// function sayHello(){
//     alert("hello");
// }
