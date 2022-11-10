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


    if (equation.operator === '' || equation.secondNum === '') {
        return num1;
    }

    num1 = Number(num1);
    num2 = Number(num2);

    let sum;


    if (operator === '+') {
        sum = add(num1, num2);
        sum = sum.toFixed(2);
        sum = sum.replace(/\.00$/, '');
        return sum;
    }
    if (operator === '-') {
        sum = subtract(num1, num2);
        sum = sum.toFixed(2);
        sum = sum.replace(/\.00$/, '');
        return sum;
    }
    if (operator === '*') {
        sum = multiply(num1, num2);
        sum = sum.toFixed(2);
        sum = sum.replace(/\.00$/, '');
        return sum;
    }
    if (operator === '/') {
        if (num2 === 0) {
            return "You can't divide by zero!";
        } else {
            sum = divide(num1, num2);
            sum = sum.toFixed(2);
            sum = sum.replace(/\.00$/, '');
            return sum;
        }
    }
}

function equalize() {
    if (equation.operator === '' || equation.secondNum === '') {
        answer = equation.firstNum;
    } else {
        answer = operate(equation.operator, equation.firstNum, equation.secondNum);

        if (answer === "You can't divide by zero!") {

            equation.firstNum = '';
        } else {
            equation.firstNum = answer;
        }
        equation.operator = '';
        equation.secondNum = '';
    }
    display.textContent = answer;
}

function operatorPress(operator) {
    if (equation.firstNum === '' && equation.secondNum === '') {
        return;
    }

    if (equation.firstNum != '' && equation.secondNum != '' && equation.operator != '') {
        answer = operate(equation.operator, equation.firstNum, equation.secondNum);
        display.textContent = answer;
        equation.firstNum = display.textContent;
        equation.secondNum = '';
        equation.operator = '';
    }

    equation.operator = operator;
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
        operatorPress(button.textContent);
    }, false);
});

const equalButton = document.querySelector('#equals');
equalButton.addEventListener('click', () => {
    equalize();
});


const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    clear();
});

function clear() {
    equation.firstNum = '';
    equation.secondNum = '';
    equation.operator = '';
    answer = '';
    display.textContent = '';
}

function decimal() {
    if (display.textContent.indexOf('.') !== -1) {
        return;
    } else {
        updateEquation('.');
        changeDisplay();
    }
}

function plusMinus() {
    if (equation.firstNum === '') {
        return;
    }

    if (equation.firstNum != '' && equation.operator === '' || equation.operator === '=') {
        equation.firstNum = equation.firstNum * -1;
        display.textContent = equation.firstNum;
    } else if (equation.firstNum != '' && equation.operator != '' && equation.secondNum != '') {
        equation.secondNum = equation.secondNum * -1;
        display.textContent = equation.secondNum;
    }
}

function back() {
    if (equation.operator === '') {
        equation.firstNum = equation.firstNum.substring(0, equation.firstNum.length - 1);
    } else if (equation.operator != '') {
        equation.secondNum = equation.secondNum.substring(0, equation.secondNum.length - 1);
    }
    changeDisplay();
}


const plusMinusButton = document.querySelector('#plusMinus');
plusMinusButton.addEventListener('click', () => {
    plusMinus();
});

const decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click', () => {
    decimal();
});


const backButton = document.querySelector('#back');
backButton.addEventListener('click', () => {

    back();
});

//keyboard support goes here
document.addEventListener('keydown', (event) => {
    if (event.key >= 0 && event.key < 10) {
        updateEquation(event.key);
        changeDisplay();
    }
    if (event.key === '=' || event.key === 'Enter') {
        equalize();
    }

    if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        operatorPress(event.key);
    }
    if (event.key === '.') {
        decimal();
    }
    if (event.key === 'Backspace') {
        back();
    }
    if (event.key === 'Delete') {
        clear();
    }
});



/*  to-do:
    fix the equals sign button so that it doesn't mess up if there's missing number or operators. -- FINISHED
    make it so that pressing the operators also runs the equation if there is firstNum, secondNum, and Operators -- FINISHED
    round numbers so they don't overflow -- FINISHED
    add a clear function -- FINISHED
    error message when divide by zero is attempted -- FINISHED
*/

/* to-do 2:
add decimal input and a check for decimals already in the display. -- FINISHED
make it look nice. -- FINISHED
make a backspace button to delete the last entry if a mistake is made. -- FINISHED
add keyboard support. -- FINISHED
*/