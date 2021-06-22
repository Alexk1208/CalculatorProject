let displayValue = [];
let currentOperator = [];
let mathValue = [];
let output = document.getElementById('output');
let number = document.querySelectorAll('.number');
let operator = document.querySelectorAll('.operator')
let currentTotal;
let firstVal;
function addition(x, y){
    return x + y;
};

function subtraction(x, y){
    return x - y;
};

function multiplication(x, y){
    return x * y;
};

function division(x, y){
    return x / y;
};

function percentage(x){
    return x / 100;
};

function operate(x, y, operatorVal){
    return operatorVal === '+' ? addition(x, y)
         : operatorVal === '-' ? subtraction(x, y)
         : operatorVal === 'x' ? multiplication(x, y)
         : operatorVal === '/' ? division(x, y)
         : operatorVal === '%' ? percentage(x)
         : x && y === 0 ? 'You can\'t divide by 0'
         : output.textContent = 'ERROR';
};

function clear(){
    displayValue.splice(0, displayValue.length);
    currentOperator.splice(0, currentOperator.length);
    mathValue.splice(0, mathValue.length);
    document.getElementById('period').disabled = false;
};

document.getElementById('period').addEventListener('click', () =>{
    document.getElementById('period').disabled = true;
});

number.forEach(element => element.addEventListener('click', e => {
    let currentValue = e.target.textContent;
    displayValue.push(currentValue);
    output.textContent = displayValue.join('');
    mathValue[0] = parseFloat(displayValue.join(''));
    console.table(mathValue);
}));

operator.forEach(element => element.addEventListener('click', e => {
    displayValue.splice(0, displayValue.length);
    firstVal = mathValue[0];
    let operatorValue = String(e.target.textContent);
    output.textContent = operatorValue;
    currentOperator.push(operatorValue);
    mathValue.splice(0, mathValue.length);
}));

document.getElementById('clear').addEventListener('click', () => {
    clear();
    output.textContent = 0;
});

document.getElementById('equalSign').addEventListener('click', () =>{
        currentTotal = operate(firstVal, mathValue[0], String(currentOperator[0]))
        if(isNaN(currentTotal)){
            return output.textContent = 'ERROR';
        }
        output.textContent = currentTotal.toFixed(2);
            clear();
})
