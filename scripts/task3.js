/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// Step 2: In the function, return the sum of the parameters number1 and number2
function add(number1, number2) {
    return number1 + number2;
}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers() {
    let addend1 = document.querySelector('#addend1').value*1;
    let addend2 = document.querySelector('#addend2').value*1;
    document.querySelector('#sum').value = add(addend1, addend2);
}
// Step 4: Assign the return value to an HTML form element with an ID of sum


// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
const addButton = document.getElementById('addNumbers');
addButton.addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
let subtract = function(number1, number2) {
    return number1 - number2;
}

let subtractNumbers = function() {
    let minuend = document.querySelector("#minuend").value*1;
    let subtrahend = document.querySelector("#subtrahend").value*1;
    document.querySelector('#difference').value = subtract(minuend, subtrahend);
}
const subtractButton = document.getElementById("subtractNumbers");
subtractButton.addEventListener("click", subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
const multiply = (number1, number2) => {
    return number1 * number2;
}

const multiplyNumbers = () => {
    let factor1 = document.querySelector('#factor1').value*1;
    let factor2 = document.querySelector('#factor2').value*1;
    document.querySelector('#product').value = multiply(factor1, factor2);
}
const multiplyButton = document.getElementById("multiplyNumbers");
multiplyButton.addEventListener("click", multiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
const divide = (number1, number2) => {
    return number1 / number2;
}

const divideNumbers = () => {
    let dividend = document.querySelector('#dividend').value*1;
    let divisor = document.querySelector('#divisor').value*1;
    document.querySelector('#quotient').value = divide(dividend, divisor);
}
const divideButton = document.getElementById('divideNumbers');
divideButton.addEventListener("click", divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let currentDate = Date();

// Step 2: Declare a variable to hold the current year
let currentYear;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currentYear = currentDate.prototype.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector('#year').innerHTML = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector('#array').innerHTML = numbers;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
let oddNumbers = numbers.filter(number => number % 2 !== 0);
document.getElementById('odds').innerHTML = oddNumbers;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
let evenNumbers = numbers.filter(number => number % 2 === 0);
document.getElementById('evens').innerHTML = evenNumbers;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
let sumOfNumbers = numbers.reduce((accumulator, number) => accumulator += number,0);
document.getElementById('sumOfArray').innerHTML = sumOfNumbers;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
let doubledNumbers = numbers.map(number => number *2);
document.getElementById('multiplied').innerHTML = doubledNumbers;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
let sumDoubledNumbers = doubledNumbers.reduce((accumulator, number) => accumulator += number,0);
document.getElementById('sumOfMultiplied').innerHTML = sumDoubledNumbers;