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
let result;
const operate = function(firstNumInput, secNumInput, operator) {
    switch (operator) {
        case '/':
            display.textContent = `${divide(firstNumInput, secNumInput)}`;
            console.log(`result is ${divide(firstNumInput, secNumInput)}`);
        break;

        case 'x':
            display.textContent = `${multiply(firstNumInput, secNumInput)}`;
            console.log(`result is ${multiply(firstNumInput, secNumInput)}`);
        break;

        case '-':
            display.textContent = `${minus(firstNumInput, secNumInput)}`;
            console.log(`result is ${minus(firstNumInput, secNumInput)}`);
        break;
        
        case '+':
            display.textContent = `${add(firstNumInput, secNumInput)}`;
            console.log(`result is ${add(firstNumInput, secNumInput)}`);
        break;
    }
};

const display = document.querySelector('#display');
const buttons = document.querySelector('#calculator');

const screenArr = [];
const numArr = [];

const clearArrays = function() {
    screenArr.splice(0, screenArr.length);
    numArr.splice(0, numArr.length);
}

const displayInputs = function(num) {
    screenArr.push(num);
    display.textContent = `${screenArr.join('')}`;
}

const combineInputs = function(num) {
    numArr.push(num);
    return numArr.join('');
}

const numInputs = function(num) {
    if (operator === undefined) {
        firstNumInput = Number(combineInputs(num));
        displayInputs(num);
        console.log(`first is ${firstNumInput}`);
    } else {
        secNumInput = Number(combineInputs(num));
        displayInputs(num);
        console.log(`sec is ${secNumInput}`);
    }    
}

buttons.addEventListener('click', (event) => {
    let target = event.target;
    
    switch(target.id) {
        case 'one':
            numInputs(1);
        break;
        case 'two':
            numInputs(2);
        break;
        case 'three':
            numInputs(3);
        break;
        case 'four':
            numInputs(4);
        break;
        case 'five':
            numInputs(5);
        break;
        case 'six':
            numInputs(6);
        break;
        case 'seven':
            numInputs(7);
        break;
        case 'eight':
            numInputs(8);
        break;
        case 'nine':
            numInputs(9);
        break;
        case 'zero':
            numInputs(0);
        break;
        case 'C':
            clearArrays();
            display.textContent = '';
            operator = undefined;
            firstNumInput = undefined;
            secNumInput = undefined;
        break;
        case 'plusMinus':
        break;
        case 'percentage':
        break;
        case 'divide':
            operator = '/';
            clearArrays();
        break;
        case 'multiply':
            operator = 'x';
            clearArrays();
        break;
        case 'minus':
            operator = '-';
            clearArrays();
        break;
        case 'plus':
            operator = '+';
            clearArrays();
        break;
        case 'point':
            numInputs('.');
        break;
        case 'equals':
            operate(firstNumInput, secNumInput, operator);
        break;
    }
})


