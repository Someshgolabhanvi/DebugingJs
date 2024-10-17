// What happen when you run a JS code
// Everything in JS Happens inside the execution context

var n = 2;
function square(num){
    var ans = num*num;
    return ans;
}
var square2 = square(n);
var square4 = square(4);