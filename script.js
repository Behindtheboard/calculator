const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const divide = function (a, b) {
    return a / b;
}

const sum = function(arr) {
  let sum1 = arr.reduce((total, num) => {
    return total + num;
  }, 0);
  return sum1;
};

const multiply = function(arr) {
  let mult1 = arr.reduce((total, num) => {
    return total * num;
  }, 1);
  return mult1;
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

const display = document.querySelector('#display');
const screen = [];
display.textContent = screen;
const row = document.querySelector('.row');

row.addEventListener('click', (event) => {
    let target = event.target;
    
    switch(target.id) {
        case 'one':
        break;
        case 'two':
        break;
        case 'three':
        break;
        case 'four':
        break;
        case 'five':
        break;
        case 'six':
        break;
        case 'seven':
        break;
        case 'eight':
        break;
        case 'nine':
        break;
        case 'zero':
        break;
        case 'C':
            display.textContent = '';
        break;
        case 'plusMinus':
        break;
        case 'percentage':
        break;
        case 'divide':
            operator = /;
        break;
        case 'multiply':
            operator = *;
        break;
        case 'minus':
            operator = -;
        break;
        case 'plus':
            operator = +;
        break;
        case 'point':
            operator = /;
        break;
        case 'equals':
            return operate(firstNumInput,secNumInput, operator);
        break;
    }
})