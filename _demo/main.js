// function isPrime(n) {
    for(let divider = 2; divider < n; divider++) {
        if(n % divider === 0) {
            isPrime = false;
            break;
        };
    }
    console.log(n);
// };


// isPrime();