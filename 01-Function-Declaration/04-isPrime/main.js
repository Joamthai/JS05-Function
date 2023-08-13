function isPrime(n) {
    let isPrime = true;
    for(let divider = 2; divider < n; divider++) {
        if(n % divider === 0) {
            isPrime = false;
            break;
        };
    };
    if(isPrime) {console.log(`Number ${n} is prime number`);
    } else {console.log(`Number ${n} is not prime number`);};
};

isPrime(4);
isPrime(17);
isPrime(7);
isPrime(8);
isPrime(5);
isPrime(60);