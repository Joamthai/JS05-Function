# Function (9ข้อ)

- Write Reusable JavaScript with Functions
- Passing Values to Functions with Arguments
- Global Scope and Functions
- Local Scope and Functions
- Global vs. Local Scope in Functions
- Return a Value from a Function with Return
- Understanding Undefined Value returned from a Function
- Assignment with a Returned Value
- Stand in Line

# Basic
[1.Write Reusable JavaScript with Functions](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/write-reusable-javascript-with-functions)
```js
// Finish and Paste your solution here

function reusableFunction() {
  console.log('Hi World');
};

reusableFunction()


```
[2.Passing Values to Functions with Arguments](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/passing-values-to-functions-with-arguments)
```js
// Finish and Paste your solution here

function functionWithArgs(num1, num2) {
  console.log(num1 + num2);
};

functionWithArgs(1, 2);
functionWithArgs(7, 9);


```

# Scope
[1.Global Scope and FunctionsPassed](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-scope-and-functions)
```js
// Finish and Paste your solution here

// Declare the myGlobal variable below this line


function fun1() {
oopsGlobal = 5;  // Assign 5 to oopsGlobal here

}
let myGlobal = 10;
// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


```

[2.Local Scope and FunctionsPassed](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/local-scope-and-functions)
```js
// Finish and Paste your solution here

function myLocalScope() {
  // Only change code below this line
var myVar ='inside myLocalScope';
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log(myVar);


```

[3.Global vs. Local Scope in FunctionsPassed](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-vs--local-scope-in-functions)
```js
// Finish and Paste your solution here

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();


```

# Return
[1.Return a Value from a Function with Return](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/return-a-value-from-a-function-with-return)
```js
// Finish and Paste your solution here

function timesFive(num) {
  return num * 5
};

timesFive(5);
timesFive(2);
timesFive(0);


```

[2.Understanding Undefined Value returned from a FunctionPassed](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-undefined-value-returned-from-a-function)
```js
// Finish and Paste your solution here

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();


```

[3.Assignment with a Returned Value](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/assignment-with-a-returned-value)
```js
// Finish and Paste your solution here

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);


```

# Application 
[1.Stand in Line](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript) __(ใช้ความรู้เรื่อง Array)__
```js
// Finish and Paste your solution here




```