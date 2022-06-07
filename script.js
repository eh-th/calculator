const display = document.querySelector(".display")
let displayValue = 0
let firstNumber = 0
let currentNumber = 0
let operator = ""

//We first define our operations
function add(a,b) {
    return a+b
}

function substract(a,b) {
    return a-b
}

function multiply(a,b) {
    return a*b
}

function divide(a,b) {
    return a/b
}

/* When the user clicks on =, the operate function 
calculates the result */
function operate(a, b) {
    a = parseFloat(a)
    b = parseFloat(b)
    if (operator == "+") {
        return a+b
    } else if (operator == "-") {
        return (b - a)
    } else if (operator == "*") {
        return multiply(a,b)
    } else if (operator == "/") {
        return b / a
    }
}

function clear() {
    const display = document.querySelector(".display")
    display.textContent = ``
}

function populate(valueToAdd) {
    //First of all, let's clear the display if we click AC
    if (valueToAdd == "AC") {
        displayValue = 0;
        //We need to be sure the display doesn't show numbers like 04 or 07
    } else if (displayValue == 0) {
        displayValue = valueToAdd;
        currentNumber = valueToAdd;
        
    } else if (valueToAdd == "+" || valueToAdd == "-" || valueToAdd == "/" || valueToAdd == "*") {
    /* We keep the currentNumber in firstNumber in case
    the user's choice is an operator. We also keep the operator. We then set
    the currentNumber back to 0 */
        firstNumber = currentNumber
        operator = valueToAdd
        displayValue = displayValue + valueToAdd;
        currentNumber = 0
    //If we want the result, we use the operate function. We then reset currentNumber and firstNumber
    } else if (valueToAdd == "=") {
        displayValue = operate(currentNumber, firstNumber)
        currentNumber = 0
        firstNumber = 0
    }
    //We add numbers
    else {
        displayValue = displayValue + valueToAdd;
        currentNumber = currentNumber + valueToAdd;
    }
    //We update the display
    display.textContent = `${displayValue}`
}

/*When the user clicks on a number, it uses the populate function
 to display the number*/
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        populate(button.innerText);
    });
});



