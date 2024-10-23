//What is callback function JS
// setTimeout(function(){
//     console.log("Timer");
    
// },5000)
// function x(y){
//     console.log("x");
//     y();
// }
// x(function y(){
//  console.log("y");
 
// })
function attachEventListeners(){
    let count = 0;
document.getElementById('click-me').addEventListener("click",function x(){
    console.log("clicked",++count);
})}
attachEventListeners();