const display = document.querySelector(".display")
let displayValue = 0

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

function operate(operator, a, b) {
    if (operator = "+") {
        add(a,b)
    } else if (operator = "-") {
        substract(a,b)
    } else if (operator = "*") {
        multiply(a,b)
    } else if (operator = "/") {
        divide(a,b)
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
    } else {
        displayValue = displayValue + valueToAdd;
    }
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



