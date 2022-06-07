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
        //Send an error message if we try to divide by 0
        if (a == 0) {
            return "Error"
        } else return b/a
    }
}

function clear() {
    const display = document.querySelector(".display")
    display.textContent = ``
}

function populate(valueToAdd) {
    //First of all, let's clear the display and the saved operator if we click AC
    if (valueToAdd == "AC") {
        displayValue = 0;
        operator = ''

        //We need to make sure that the display doesn't show numbers like 04 or 07
    } else if (displayValue == 0) {
        displayValue = valueToAdd;
        currentNumber = valueToAdd;
        
    } else if (valueToAdd == "+" || valueToAdd == "-" || valueToAdd == "/" || valueToAdd == "*") {
    /* We keep the currentNumber in firstNumber in case
    the user's choice is an operator. We also keep the operator. We then set
    the currentNumber back to 0 */

        /*We first check if there already was a previous operation in hold. 
        If so, we use the operate function to save the result as the new firstNumber */
        if (operator) {
            firstNumber = operate(currentNumber,firstNumber)
            operator = valueToAdd
            displayValue = firstNumber + valueToAdd
            currentNumber = 0
        } else {
            operator = valueToAdd
            firstNumber = currentNumber
            displayValue = displayValue + valueToAdd;
            currentNumber = 0
        }
    /* If we want the result, we use the operate function. We then reset firstNumber and the operator.
    We keed the result as the currentNumber in case the user want to do some extra operations from this point */
    } else if (valueToAdd == "=") {
        //We round the number 
        displayValue = operate(currentNumber, firstNumber).toFixed(3)
        currentNumber = displayValue
        firstNumber = 0
        operator = ''
    }
    //We add numbers to the display and to currentNumber as they are provided
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



