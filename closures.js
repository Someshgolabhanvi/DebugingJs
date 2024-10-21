// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);

// z();

function x(){
    var i =1;
    setTimeout(function(){
        console.log(i);
        
    },5000)
    console.log("Hi");
    
}
x();