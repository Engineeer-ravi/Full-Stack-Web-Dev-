
//Axios-Librery to make HTTP requests


//catfact API Call

// let btn =document.querySelector("button");
//  btn.addEventListener("click" ,async() =>{
//     let fact = await getFacts();
//     // console.log(fact)
//     let p =document.querySelector("#result");
//     p.innerText = fact;

//  });
// let url = "https://catfact.ninja/fact";

// async function getFacts(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;

//     }catch(e){
//         console.log("error",e);
//         return "No Result Found"
//     }
// }

//Random dog Image API Call

// let btn2 = document.querySelector("button");
// btn2.addEventListener("click", async () => {
//     let link = await getImage();
//     // console.log(link);
//     let img = document.querySelector("#result");
//     img.setAttribute("src",link);
//     });
// let url2= "https://dog.ceo/api/breeds/image/random";
// async function getImage(){
//     try{
//         let res = await axios.get(url2);
//         // console.log(res.data.message);
//         return res.data.message;
//     }catch (e){
//         console.log("error",e);
//         return " No Result Found";
//     }
// }


//Axios -Sending Headers
// const url =  "https://icanhazdadjoke.com/";
// async function getJokes(){
//     try{
//         const config ={ headers: {Accept:"application/json"}};
//         let res = await axios.get(url.config);
//         console.log(res.data);
//     }catch (err){
//         console.log("error",err);

//     }
// }

//Axios - updating Query String
// let url ="http://universities.hipolabs.com/search?name=";
// let btn =document.querySelector("button");

// btn.addEventListener("click",async () => {
//     let country = document.querySelector("input") .value;
//     console.log(country);
//      let colArr = await getColleges(country);
//      show(colArr);
// });
// let country ="nepal";

// function show(colArr){
//     let list = document.querySelector("#list");
//     list.innerText = "";
//     for(col of colArr){
//         console.log(col.name);

//         let li = document.createElement("li");
//         li.innerText =col.name;
//         list.appendChild(li);
//     }

// }
// async function getColleges(country){
//     try{
//         let res = await axios.get(url+country);
//         return res.data;
//         }catch (err){
//             console.log("error",err);
//             return [];
//     }
// }



console.log("Git Push")
console.log("DAY28 Terminal");