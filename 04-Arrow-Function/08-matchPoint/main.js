// let matchPoint = result => {
//     if(result == "win") return 3;
//     if(result == "draw") return 1;
//     if(result == "lose") return 0;
// };

// console.log(matchPoint("win"));
// console.log(matchPoint("draw"));
// console.log(matchPoint("lose"));


let calMatchPoint = (win, draw) => win * 3 + draw;
console.log(calMatchPoint(4, 6));