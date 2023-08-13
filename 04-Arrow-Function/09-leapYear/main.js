let leapYear = year => {
    if((year % 4 == 0 ) && (year % 100 != 0 ) || (year % 400 == 0)) {
        return true;
    } else {
        return false;
    };
};

console.log(leapYear(1800));
console.log(leapYear(1995));
console.log(leapYear(2000));
console.log(leapYear(2020));