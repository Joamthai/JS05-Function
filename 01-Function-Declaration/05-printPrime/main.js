
function printPrime(inputNumber) {
    for(let n = 2; n <= inputNumber; n++){
        let printPrime = true;
        for(let divider = 2; divider < n; divider++){      
            if (n % divider == 0) printPrime = false;
            break;                                          
        };                                                 
        if(printPrime) console.log(n);                        
    };
};



printPrime();