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

function populate(displayValue) {
    const display = document.querySelector(".display")
    display.textContent = `${displayValue}`
}

//Add events for the buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        return(button.id);
    });
});