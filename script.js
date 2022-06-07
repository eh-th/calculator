const display = document.querySelector(".display")
let displayValue = 0
let firstNumber = 0
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
        return (a - b)
    } else if (operator == "*") {
        return multiply(a,b)
    } else if (operator == "/") {
        return a / b
    }
}

function clear() {
    const display = document.querySelector(".display")
    display.textContent = ``
}

function populate(valueToAdd) {
    if (valueToAdd == "AC") {
        displayValue = 0;
    } else if (displayValue == 0) {
        displayValue = valueToAdd;
    } else if (valueToAdd == "+" || valueToAdd == "-" || valueToAdd == "/" || valueToAdd == "*") {
    /* We keep the currentNumber in firstNumber in case
    the user's choice is an operator. We also keep the operator */
        firstNumber = currentNumber
        operator = valueToAdd
        displayValue = displayValue + valueToAdd;
    } else if (valueToAdd == "=") {
        displayValue = operate(currentNumber, firstNumber)
    }
    else {
        displayValue = displayValue + valueToAdd;
    }
    display.textContent = `${displayValue}`
    // We update the current number
    currentNumber = displayValue
}

/*When the user clicks on a number, it uses the populate function
 to display the number*/
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        populate(button.innerText);
    });
});



