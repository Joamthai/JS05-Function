//#1 ใช้ if แต่ห้ามใช้ else
function checkAge(age) {
    if (age <= 18) {
      return confirm("Did parents allow you?");
    }
  };


//#2 ใช้ ? แทน if
function checkAge(age) {
  age <= 18 ? confirm("Did parents allow you?") : true
};

//#3 ใช้ || แทน if
function checkAge(age) {
  (age > 18) || (confirm("Did parents allow you?"))
};




// checkAge(15);
// checkAge(18);
checkAge(24);

