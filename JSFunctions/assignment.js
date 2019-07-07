//Write a JavaScript program that declares a function but calls it before it is declared. Because of function hoisting this will work in JavaScript. Go prove it!

console.log(sum(2, 3));

function sum(x, y) {
return x + y;
}

//Also write a function which is assigned to a variable. Call it before it is assigned and prove that this does not work.

console.log(sum(2, 3));

var sum=function sum(x, y) {
return x + y;
}

//If I move, the function call to after the definition, it works fine

 
