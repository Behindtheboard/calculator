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
const display = document.querySelector('#display');


const operate = function(firstNumInput, secNumInput, operator) {
    switch (operator) {
        case '/':
            result = divide(firstNumInput, secNumInput);
        break;

        case 'x':
            result = multiply(firstNumInput, secNumInput);
        break;

        case '-':
            result = subtract(firstNumInput, secNumInput);
        break;
        
        case '+':
            result = add(firstNumInput, secNumInput);
        break;
    }
    displayInput(`${result}`);
};

const numArr = [];

const clearArrays = function() {
    numArr.splice(0, numArr.length);
}

const combineInputs = function(input) {
    if (input === '.' && numArr.includes('.') === true) {
        return Number(numArr.join(''));
    } else if (input === 'Backspace'){
        numArr.splice((numArr.length-1),1);
        return Number(numArr.join('')); 
    } else {
        numArr.push(input)
        numArr.splice(12,1);
        return Number(numArr.join(''));
    }
}

const displayInput = function(input){
    if (input.toString().length > 13) {
        display.style.fontSize = '25px';
        display.textContent = `${input}`;
    } else {
        display.style.fontSize = '40px';
        display.textContent = `${input}`;
    }
}

const numInputs = function(num) {
    if (operator === undefined) {
        result = undefined;
        firstNumInput = combineInputs(num);
        displayInput(firstNumInput);
    } else if (result !== undefined) {
        firstNumInput = result;
        secNumInput = undefined;
        secNumInput = combineInputs(num);
        displayInput(secNumInput);
    } else {
        secNumInput = combineInputs(num);
        displayInput(secNumInput);
    }    
}

const operatorInput = function(op) {
    if (firstNumInput !== undefined && secNumInput !== undefined){
        operate(firstNumInput, secNumInput, operator);
        operator = op;
        clearArrays();
    } else if (result !== undefined) {
        operate(firstNumInput, secNumInput, operator);
        operator = op;
        clearArrays();
    } else if (op === operator) {
    } else {
        operator = op;
        clearArrays();
    }
}

const buttonOptions = function(event) {
    let aim;
    if (event.key === undefined) {
        aim = event.target.id;
    } else {
        aim = event.key;
    }
    switch(aim) {
        case '1':
            numInputs(1);
        break;
        case '2':
            numInputs(2);
        break;
        case '3':
            numInputs(3);
        break;
        case '4':
            numInputs(4);
        break;
        case '5':
            numInputs(5);
        break;
        case '6':
            numInputs(6);
        break;
        case '7':
            numInputs(7);
        break;
        case '8':
            numInputs(8);
        break;
        case '9':
            numInputs(9);
        break;
        case '0': case 'zero':
            numInputs(0);
        break;
        case 'c':
            clearArrays();
            display.textContent = '';
            operator = undefined;
            firstNumInput = undefined;
            secNumInput = undefined;
            result = undefined;
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
            } if (result !== undefined) {
                if (result > 0) {
                    result = -result;
                    displayInput(result);
                } else if (result < 0) {
                    result = Number(result
                        .toString()
                        .slice(1,result.length));
                    displayInput(result);
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
        case '%':
            if (operator === undefined) {
                firstNumInput *= .01;
                displayInput(firstNumInput);
            } else if (result !== undefined) {
                result *= .01;
                displayInput(result);
            } else {
                secNumInput *= .01;
                displayInput(secNumInput);
            }
        break;
        case '/':
            operatorInput('/');
        break;
        case 'x': case '*':
            operatorInput('x');
        break;
        case '-':
            operatorInput('-');
        break;
        case '+':
            operatorInput('+');
        break;
        case '.':
            displayInput(combineInputs('.'));
        break;
        case 'Backspace':
            displayInput(combineInputs('Backspace'));
        break;
        case '=': case 'Enter':
            if (secNumInput === undefined){
            } else {                
                operate(firstNumInput, secNumInput, operator);
                firstNumInput = undefined;
                secNumInput = undefined;
                operator = undefined;
                clearArrays();
            }
        break;
    }
}

const buttons = document.querySelector('#calculator');
buttons.addEventListener('click', buttonOptions);

const body = document.querySelector('body');
body.addEventListener('keydown', buttonOptions);
