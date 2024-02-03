/* FUNCTIONS */

/* Function Declaration - Addition Feature */
function add(number1, number2) {
    return number1 + number2;
}

/* Function Declaration - Add Numbers */
function addNumbers() {
    // Get values from HTML form controls
    const num1 = parseFloat(document.getElementById("add1").value);
    const num2 = parseFloat(document.getElementById("add2").value);

    // Call add function and assign the result to the sum element
    document.getElementById("sum").value = add(num1, num2);
}

// Add click event listener to the button
document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtraction Feature */
const subtract = function (number1, number2) {
    return number1 - number2;
};

/* Function Expression - Subtract Numbers */
const subtractNumbers = function () {
    const num1 = parseFloat(document.getElementById("subtract1").value);
    const num2 = parseFloat(document.getElementById("subtract2").value);

    document.getElementById("difference").value = subtract(num1, num2);
};

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiplication Feature */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    const num1 = parseFloat(document.getElementById("factor1").value);
    const num2 = parseFloat(document.getElementById("factor2").value);

    document.getElementById("product").value = multiply(num1, num2);
};

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Your Choice - Division Feature */
function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers() {
    const num1 = parseFloat(document.getElementById("dividend").value);
    const num2 = parseFloat(document.getElementById("divisor").value);

    document.getElementById("quotient").value = divide(num1, num2);
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Selection Structures */

document.getElementById("getTotal").addEventListener("click", function () {
    // Declare and instantiate a variable for the numeric value entered by the user
    const subtotal = parseFloat(document.getElementById("subtotal").value);

    // Check if the membership checkbox is checked
    const isMember = document.getElementById("member").checked;

    // Apply a 20% discount if the user is a member
    const total = isMember ? subtotal * 0.8 : subtotal;

    // Output the total to the total span with two decimals
    document.getElementById("total").innerText = `$${total.toFixed(2)}`;
});

/* Array Methods - Functional Programming */

// Declare and instantiate an array variable to hold the numbers 1 through 13
const numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);

// Assign the value of the array variable to the HTML element with an ID of array
document.getElementById("array").innerText = numbersArray.join(", ");

// Use the filter() array method to find all odd numbers and assign the result
document.getElementById("odds").innerText = numbersArray.filter(num => num % 2 !== 0).join(", ");

// Use the filter() array method to find all even numbers and assign the result
document.getElementById("evens").innerText = numbersArray.filter(num => num % 2 === 0).join(", ");

// Use the reduce() array method to sum the array elements and assign the result
document.getElementById("sumOfArray").innerText = numbersArray.reduce((acc, num) => acc + num, 0);

// Use the map() array method to multiply each element by 2 and assign the result
document.getElementById("multiplied").innerText = numbersArray.map(num => num * 2).join(", ");

// Use the map() and reduce() array methods to sum the array elements after multiplying by two
document.getElementById("sumOfMultiplied").innerText = numbersArray.map(num => num * 2).reduce((acc, num) => acc + num, 0);
