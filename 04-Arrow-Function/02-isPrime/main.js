let isPrime = n => {
    let isPrime = true;
    for(let divider = 2; divider < n; divider++) {
        if(n % divider === 0) {
            isPrime = false;
            break;
        };
    };
    return isPrime;
};

console.log(isPrime(5));
console.log(isPrime(10));
console.log(isPrime(17));