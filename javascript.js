let equation = {
    firstNum: '',
    secondNum: '',
    operator: '',
};
const display = document.getElementById("display");
let answer;

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
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
    if (operator === '+') {
        return add(num1, num2);
    }
    if (operator === '-') {
        return subtract(num1, num2);
    }
    if (operator === 'x') {
        return multiply(num1, num2);
    }
    if (operator === '÷') {
        return divide(num1, num2);
    }
}

function changeDisplay() {
    if (display.textContent.length === 12) {
        return;
    }
    if (equation.operator === '' && equation.secondNum === '') {
        display.textContent = equation.firstNum;
    } else {
        display.textContent = equation.secondNum;
    }
}

function updateEquation(num) {
    if (equation.operator === '') {
        equation.firstNum += num;
    } else if (equation.operator != '') {
        equation.secondNum += num;
    }
}

const numberButton = document.querySelectorAll('.numberButton');
numberButton.forEach(button => {
    button.addEventListener('click', () => {
        updateEquation(button.textContent);
        changeDisplay();
    }, false);
});

const operatorButton = document.querySelectorAll('.operatorButton');
operatorButton.forEach(button => {
    button.addEventListener('click', () => {
        equation.operator = button.textContent;
    }, false);
});

const equalButton = document.querySelector('#equals');
equalButton.addEventListener('click', () => {
    answer = operate(equation.operator, equation.firstNum, equation.secondNum);
    display.textContent = answer;
});

/*  to-do:
    fix the equals sign button so that it doesn't mess up if there's missing number or operators.
    make it so that pressing the operators also runs the equation if there is firstNum, secondNum, and Operators
    round numbers so they don't overflow
    add a clear function
    error message when divide by zero is attempted
*/