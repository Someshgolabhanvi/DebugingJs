// Block is also known as compund statement
// Shadowing in JavaScript
//Illegal shadowing
var a =100;
{
    var a = 10;
    let b =30;
    const c =40;
    console.log(a);
    console.log(b);
    console.log(c);
    
}
// console.log(a);
//     console.log(b);
//     console.log(c);

