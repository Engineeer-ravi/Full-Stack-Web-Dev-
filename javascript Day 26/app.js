


// async function greet(){
//     throw"some random error";
//     return "hello";
// }
// greet()
// .then(()=>{
//     console.log("this will be resolved");
// })
// .catch((err)=>{
//     console.log("this will rejected");
// });


// JSON
//.JSON,parse(data) methode
// JSON.stringify(json)methode

// let jsonRes=
//    '{"fact":"Cats are North America\u2019s most popular pets: there are 73 million cats compared to 63 million dogs. Over 30% of households in North America own a cat.","length":149}'
//   let validRes = JSON.parse(jsonRes);
//   console.log(validRes.fact);
//    let student ={
//       name:"ravi",
//       marks:60,
//    };



// Ajax
// Asynchronous javascript and xml



//our First API Request
//using Fetch
// let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((res) => {
//    console.log(res);
//     return res.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log("Error-",err)
// });  

// console.log("i am happy");


// async await
let url = "https://catfact.ninja/fact";
async function getFacts() {
    try {
    let res = await fetch (url);
    let data = await res.json();
    console.log(data.fact);  
    } catch (err) {
        console.log("Error-",err);
}
}
console.log(" byyyyyyy")