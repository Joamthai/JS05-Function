console.log('anonymous');

//#1
//Named fn, FN Declaration
//function add () {}



//#2 : Anonymous

//IIFE : Intermediate Invoke Function Expression

// (function (x, y) {
//     console.log(x + y);    return 5;
// })(10, 5);

// console.log(
//     (function (x, y) {
//         return x + y;
//     })(10, 5)
// );

// let a = (function (x, y) {
//     return x + y;
//     })(10, 5);
// console.log(a);

//#2B
//VARIABLE = EXPRESSION
// let myVar = ((5 * 2 * 20) / 2) % 7;

// //VARIABLE = FN (FN == EXPRESSION)

// //ASSIGN anonymous FN to VARIABLE
// const myFunc = function (x, y) {
//     return x + y;
//     };
// console.log(myFunc(5, 10));

// //ASSIGN named FN to VARIABLE
// let a = console.log;
// a('Hi');

