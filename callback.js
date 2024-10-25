// console.log("Start");
// setTimeout(function ab(){
//     console.log("Callback");
// },5000)
// console.log("End");


// console.log("Start");
// document.getElementById("click-me").addEventListener("click",function ab(){
//     console.log("Callback");
    
// })
// console.log("End");


// console.log("start");
// setTimeout(function cbT(){
//     console.log("CB SetTimeout");
    
// },5000);
// fetch("https://www.netflix.com/in/").then(function cbF(){
//     console.log("CB Netflix");
// });
// console.log("End");

//Trust Issues with setTimeout()
//Concercy model


console.log("Start");
setTimeout(function ab(){
    console.log("Callback");
},5000)
console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate<=startDate + 10000) {
    endDate = new Date().getTime();
}

console.log("While expires");


