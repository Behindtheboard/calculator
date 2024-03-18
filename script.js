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
            result = subtract(firstNumInput, secNumInput);
            display.textContent = `${result}`;
            console.log(`result is ${subtract(firstNumInput, secNumInput)}`);
        break;
        
        case '+':
            result = add(firstNumInput, secNumInput);
            display.textContent = `${result}`;
            console.log(`result is ${add(firstNumInput, secNumInput)}`);
        break;
    }
};

const display = document.querySelector('#display');

const numArr = [];

const clearArrays = function() {
    numArr.splice(0, numArr.length);
}

const combineInputs = function(num) {
    numArr.push(num)
    numArr.splice(9,1);
    if (Number(numArr.join('')) === NaN) {
        console.log(hit);
        numArr.splice(numArr.length, 1);
        return numArr.join('');
    } else {
        return numArr.join('');
    }
}

const numInputs = function(num) {
    if (result !== undefined) {
        firstNumInput = result;
        secNumInput = undefined;
        secNumInput = Number(combineInputs(num));
        displayInput(secNumInput);
        console.log(`sec is ${secNumInput}`);
    } else if (operator === undefined) {
        firstNumInput = Number(combineInputs(num));
        displayInput(firstNumInput);
        console.log(`first is ${firstNumInput}`);
    } else {
        secNumInput = Number(combineInputs(num));
        displayInput(secNumInput);
        console.log(`sec is ${secNumInput}`);
    }    
}

const buttons = document.querySelector('#calculator');

const buttonOptions = function(event) {
    let aim;
    if (event.key === undefined) {
        aim = event.target.id;
    } else {
        aim = event.key;
    }
    console.log(event.key);
    console.log(event.target.id);
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
        case '0':
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
            operatorCalculation('/');
            console.log(operator);
        break;
        case 'x': case '*':
            operatorCalculation('x');
            console.log(operator);
        break;
        case '-':
            operatorCalculation('-');
            console.log(operator);
        break;
        case '+':
            operatorCalculation('+');
            console.log(operator);
        break;
        case '.':
            numInputs('.');
        break;
        case '=':
            operate(firstNumInput, secNumInput, operator);
        break;
    }
}

buttons.addEventListener('click', buttonOptions);

const body = document.querySelector('body');
body.addEventListener('keypress', buttonOptions);

const operatorCalculation = function(op) {
    if (firstNumInput !== undefined && secNumInput !== undefined){
        operate(firstNumInput, secNumInput, operator);
        operator = op;
        clearArrays();
    } else if (result !== undefined) {
        operate(firstNumInput, secNumInput, operator);
        operator = op;
        clearArrays();
    } else {
        operator = op;
        clearArrays();
    }
}

const displayInput = function(input){
    display.textContent = `${input}`;
    console.log(`display input ${input}`);
    console.log(`display input typeof ${typeof input}`);
}
