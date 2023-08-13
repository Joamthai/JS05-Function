// {
//     // GLOBAL SCOPE
//     let message = 'Hi';

//     function sayHi() {
//         //FUNCTION SCOPE
//         let message = 'Hello';
//         console.log(`## ${message}`);
//     };

//     sayHi();
//     console.log(message);
// }


//variable : message = identifier
let message = 'h';
// let message = 'a'; //has already been declared

//function : sayHi == identifier
function sayHi(m) {
    let message = 'a'
    console.log(message);
}


{
    let message = 'Hello';
    console.log(message); // 'Hello'
}

{
    let message = 'Goodbye';
    console.log(message); // 'Goodbye'
}
   