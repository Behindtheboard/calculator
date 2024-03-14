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
            result = divide(firstNumInput, secNumInput);
            display.textContent = `${result}`;
            console.log(`result is ${divide(firstNumInput, secNumInput)}`);
        break;

        case 'x':
            result = multiply(firstNumInput, secNumInput);
            display.textContent = `${result}`;
            console.log(`result is ${multiply(firstNumInput, secNumInput)}`);
        break;

        case '-':
            result = minus(firstNumInput, secNumInput);
            display.textContent = `${result}`;
            console.log(`result is ${minus(firstNumInput, secNumInput)}`);
        break;
        
        case '+':
            result = add(firstNumInput, secNumInput);
            display.textContent = `${result}`;
            console.log(`result is ${add(firstNumInput, secNumInput)}`);
        break;
    }
};

const display = document.querySelector('#display');
const buttons = document.querySelector('#calculator');

const numArr = [];

const clearArrays = function() {
    numArr.splice(0, numArr.length);
}

const combineInputs = function(num) {
    numArr.push(num);
    return numArr.join('');
}

const displayInput = function(input){
    display.textContent = `${input}`;
}

const numInputs = function(num) {
    if (operator === undefined) {
        firstNumInput = Number(combineInputs(num));
        displayInput(firstNumInput);
        console.log(`first is ${firstNumInput}`);
    } else {
        secNumInput = Number(combineInputs(num));
        displayInput(secNumInput);
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
            if (operator === undefined) {
                if (firstNumInput > 0) {
                    firstNumInput = -firstNumInput;
                    displayInput(firstNumInput);
                } else if (firstNumInput < 0) {
                    firstNumInput = Number(firstNumInput
                        .toString()
                        .slice(1,firstNumInput.length));
                    displayInput(firstNumInput);
                }
            } else {
                if (secNumInput > 0) {
                    secNumInput = -secNumInput;
                    displayInput(secNumInput);
                } else if (secNumInput < 0) {
                    secNumInput = Number(secNumInput
                        .toString()
                        .slice(1,secNumInput.length));
                    displayInput(secNumInput);
                }
            }    
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


