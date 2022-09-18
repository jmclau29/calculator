let equation = {};

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
    if (operator === 'x') {
        return multiply(num1, num2);
    }
    if (operator === '÷') {
        return divide(num1, num2);
    }
}

function newEquation(answer) {
    equation.firstNum = answer;
    modifyFirst(answer);
    equation.secondNum = parseInt('');
    modifySecond('');
    equation.operator = '';
    addOperator('');
}

function modifyFirst(newText) {

    const firstNumber = document.getElementById("firstNumber");
    const answerDiv = document.getElementById('answer');

    if (firstNumber.textContent.length === 12) {
        return;
    }
    if (firstNumber.textContent != '' && !answerDiv) {
        firstNumber.textContent += newText;
        equation.firstNum += parseInt(newText);
    } else {
        firstNumber.textContent = newText;
        equation.firstNum = parseInt(newText);
    }
    
}

function modifySecond(newText) {
    const secondNumber = document.getElementById("secondNumber");

    if (secondNumber.textContent.length === 12) {
        return;
    }
    if (secondNumber.textContent != '') {
        secondNumber.textContent += newText;
        equation.secondNum += parseInt(newText);
    } else {
        secondNumber.textContent = newText;
        equation.secondNum = parseInt(newText);
    }
}

function addOperator(operatorText) {
    const operatorDiv = document.getElementById("operator");
    const firstNumber = document.getElementById("firstNumber");

    if (firstNumber.textContent === '') {
        return;
    } else {
        operatorDiv.textContent = operatorText;
        equation.operator = operatorText;
    }
}




const numberButton = document.querySelectorAll('.numberButton');
numberButton.forEach(button => {
    button.addEventListener('click', () => {
        if (operator.textContent === '') {
            modifyFirst(button.textContent);
        } else {
            modifySecond(button.textContent);
        };
    }, false);
});

const operatorButton = document.querySelectorAll('.operatorButton');
operatorButton.forEach(button => {
    button.addEventListener('click', () => { addOperator(button.textContent); }, false);
});

const equalButton = document.querySelector('#equals');
equalButton.addEventListener('click', () => {
    let answer = operate(equation.operator, equation.firstNum, equation.secondNum);

    const answerDiv = document.getElementById('answer');
    answerDiv.textContent = answer.toString();

    newEquation(answer);
    console.log(answer);
});
