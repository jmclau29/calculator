//mathematical functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

//operation function
function operate(operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    }
    if (operator === '-') {
        return subtract(num1, num2);
    }
    if (operator === '*') {
        return multiply(num1, num2);
    }
    if (operator === '/') {
        return divide(num1, num2);
    }
}

function modifyFirst(newText) {

    const firstNumber = document.getElementById("firstNumber");

    if (firstNumber.textContent.length === 12) {
        return;
    }
    if (firstNumber.textContent != '') {
        firstNumber.textContent += newText;
    } else {
        firstNumber.textContent = newText;
    }
}

function modifySecond(newText) {
    const secondNumber = document.getElementById("secondNumber");

    if (secondNumber.textContent.length === 12) {
        return;
    }
    if (secondNumber.textContent != '') {
        secondNumber.textContent += newText;
    } else {
        secondNumber.textContent = newText;
    }
}

function addOperator(operatorText) {
    const operatorDiv = document.getElementById("operator");

    operatorDiv.textContent = operatorText;
}

const numberButton = document.querySelectorAll('.numberButton');
numberButton.forEach(button => {
    button.addEventListener('click', () => { modifyFirst(button.textContent); }, false);
});

const operatorButton = document.querySelectorAll('.operatorButton');
operatorButton.forEach(button => {
    button.addEventListener('click', () => { addOperator(button.textContent); }, false);
});