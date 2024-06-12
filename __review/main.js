//###การเขียนฟังก์ชันมี 2 แบบหลักๆ
//1.Function Declaration / Named Function
//2.Function Expression / มักเขียนในรูปของ Anonymous Function


// การใช้งานฟังก์ชันต้อง
// 1.ประกาศฟังก์ชัน => กำหนดชื่อ, Input
// 2.เรียกใช้งาน


// 1.Define
// function SayHi(name, lastname) {
//     console.log(`Hello ${name} ${lastname}`);
// };


// 2.Call
// SayHi('John', 'Doe');

//RETURN VALUE ผลลัพธ์จากการ run function จนเสร็จ

function add(x, y) {
    // 0 sec
    let result = x + y;
    // 5 sec
    return result;
};

// console.log(add(5, 6)); //DONE : result = 11

// let r = add(5, 6);
// console.log(r); // reusable result

// console.log(add(5, 6)); // one time use

// function isEven(n) {
//     if( n % 2 == 0) {
//         return true;
//     } else {
//         return false;
//         console.log("Done"); // No effect
//     };
// };

// ******************************
// function isEven(n) {
//     return n % 2 == 0;
// };
// ******************************

// console.log(isEven(5));
// console.log(isEven(8));

//CheckPoint
//Declare : ประกาศเป็น
//Params : รับ Input
//return : เข้าใจฟังก์ชัน
//Call : รันฟังก์ชัน

//### FN EXPRESSION

// let a = 5 * 2 + 7; // variable = expression

// expression
// -single value : 7
// -combine expression : 7 + 2
// -FN result : add(7, 2)

let myFunc = add; // variable = FN Expression
console.log(myFunc(5, 2));

let z = console.log;
z('Hi');


//Anonymous FN
const sayHello = function(name) {
    console.log('Hi ' + name);
};

sayHello("Uncle");

//ARROW FN
const minus = (a, b) => a - b;
console.log(minus(6, 2));

const minusTwo = a => a - 2;
console.log(minusTwo(9));
