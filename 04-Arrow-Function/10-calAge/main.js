
// let calYear = 0;
let calMonth = 0;
// let year = 1995;
// let month = 1;
// let day = 1;

let calAge = (day, month, year) => {
    for(let y = year; y <= 2020; y++){
        if((y % 4 == 0 ) && (y % 100 != 0 ) || (y % 400 == 0)){
            for(let m = month; m <= 12; m++){
                if(m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12){
                    calMonth += 31;
                } else if(m == 4 || m == 6 || m == 9 || m == 11) {
                    calMonth += 30;
                } else if(m == 2){
                    calMonth += 29;
                };
            };
        } else {
            for(let m = month; m <= 12; m++){
                if(m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12){
                    calMonth += 31;
                } else if(m == 4 || m == 6 || m == 9 || m == 11) {
                    calMonth += 30;
                } else if(m == 2){
                    calMonth += 28;
                };
            };
        };
    };
    return calMonth - day;
};

console.log(calAge(1, 1, 1995));






// for(let m = month; m <= 12; m++){
//     if(m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12){
//         calMonth += 31;
//     } else if(m == 4 || m == 6 || m == 9 || m == 11) {
//         calMonth += 30;
//     } else if(m == 2){
//         calMonth += 28;
//     };
//     console.log(calMonth);
// };
