async function greet(){
    throw"some random error";
    return "hello";
}
greet()
.then(()=>{
    console.log("this will be resolved");
})
.catch((err)=>{
    console.log("this will rejected");
});