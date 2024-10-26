//Function Statement or function Declaration
// function a(){
//     console.log("a called");
// }
// a();
// //Function Expression
// var b = function () {
//     console.log("b called");
// }
// b();

//Anonymous Function
// function (){

// };

//named function expression
// var c = function abc() {
//     console.log("c called");
//     console.log(abc);
    
// }
// c();
// abc();

//Difference between Parameters & Arguments

//First Class Function

//Arrow Function



//Higher Order Functions


const radius = [3,1,2,4];

const calculateArea = function(radius){
    const output = [];
    for(let i = 0;i<radius.length;i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}
console.log(calculateArea(radius));


const calculateCircumference = function(radius){
    const output = [];
    for(let i = 0;i<radius.length;i++){
        output.push(2*Math.PI * radius[i]);
    }
    return output;
}
console.log(calculateCircumference(radius));
