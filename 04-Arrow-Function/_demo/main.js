let a = function(x) {
    return x**2;
};

//A : Shortest
let b = (x, y) => x + y;

//B: Bracket
let c = (x, y) => {
    let result = x + y;
    return result;
};


console.log(a(3));
console.log(b(3, 5));