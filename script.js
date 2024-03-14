const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const divide = function (a, b) {
    return a / b;
}

const multiply = function(a, b) {
    return a * b;
};


let firstNumInput;
let secNumInput;
let operator;

const operate = function(firstNumInput, secNumInput, operator) {
    switch (operator) {
        case '/':
            return divide(firstNumInput, secNumInput);
        break;

        case 'x':
            return multiply(firstNumInput,secNumInput);
        break;

        case '-':
            return minus(firstNumInput, secNumInput);
        break;
        
        case '+':
            return add(firstNumInput, secNumInput);
        break;
    }
};


const firstOrSecondInput = function(num) {
    if (!firstNumInput) {
        firstNumInput = num;
    } else {
        secNumInput = num;
    }
}

const display = document.querySelector('#display');
const buttons = document.querySelector('#calculator');

const screen = [];

const displayInputs = function(num) {
    screen.push(num);
    display.textContent = `${screen.join('')}`;
}

buttons.addEventListener('click', (event) => {
    let target = event.target;
    
    switch(target.id) {
        case 'one':
            displayInputs(1);
        break;
        case 'two':
            displayInputs(2);
        break;
        case 'three':
            displayInputs(3);
        break;
        case 'four':
            displayInputs(4);
        break;
        case 'five':
            displayInputs(5);
        break;
        case 'six':
            displayInputs(6);
        break;
        case 'seven':
            displayInputs(7);
        break;
        case 'eight':
            displayInputs(8);
        break;
        case 'nine':
            displayInputs(9);
        break;
        case 'zero':
            displayInputs(0);
        break;
        case 'C':
            screen.splice(0, screen.length);
            display.textContent = '';
        break;
        case 'plusMinus':
        break;
        case 'percentage':
        break;
        case 'divide':
            operator = '/';
        break;
        case 'multiply':
            operator = '*';
        break;
        case 'minus':
            operator = '-';
        break;
        case 'plus':
            operator = '+';
        break;
        case 'point':
            operator = '/';
        break;
        case 'equals':
            return operate(firstNumInput,secNumInput, operator);
        break;
    }
})


