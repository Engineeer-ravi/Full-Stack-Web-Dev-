let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;


    let delBTN = document.createElement("button");
    delBTN.innerText ="delete"
    delBTN.classList.add("delete")
    item.appendChild(delBTN);
    ul.appendChild(item);
    console.log(inp.value);
    inp.value="";
})

ul.addEventListener("click",function(event){
  if(event.target.nodeName == "BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
  }
})


// let delBTNS = document.querySelectorAll(".delete");
// for(delBTNS of delBTNS){
//     delBTNS.addEventListener("click" ,function(){
//         console.log("del btn was click");
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }


