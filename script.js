let output = document.querySelector('#output');
let firstValue = '';
let secondValue = '';
let operationValue = '';
let currentTotal = '';

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

function operate(x, y, operator) {
    const operations = {
      '+': addition,
      '-': subtraction,
      'x': multiplication,
      '/': division
    }
    
    try {
      return operations[operator](x, y);
    } catch {
      return "error"
    }
};

function clear(){
    output.innerText = '';
    firstValue = '';
    secondValue = '';
    operationValue = '';
    document.getElementById('period').disabled = false;
};

function periodAppear(){
    document.getElementById('period').disabled = false;
};

function displayInfo(){
    output.innerHTML = '';
    const info = document.createElement('div');
    info.setAttribute('id', "outputText");
    info.innerText = firstValue + ' ' + operationValue + ' ' + secondValue;
    output.appendChild(info);
};

function allButton(event){
    const inputValue = event.target.value;
    if(inputValue === '+' || inputValue === '-' || inputValue === 'x' || inputValue === '/'){
        periodAppear();
        if(firstValue && secondValue){
            firstValue = operate(parseFloat(firstValue), parseFloat(secondValue), operationValue).toFixed(2);
            operationValue = inputValue;
            secondValue = '';
        }
        else if (firstValue){
            operationValue = inputValue;
        }
    }
    else if(inputValue === '='){
        periodAppear();
        if(!(secondValue)){
            firstValue = 'ERROR'
            operationValue = '';
        }
        if(firstValue && operationValue && secondValue){
            firstValue = operate(parseFloat(firstValue), parseFloat(secondValue), operationValue).toFixed(2);
            secondValue = '';
            operationValue = '';
        }
    }
    else if(inputValue === 'd'){
        if(firstValue && operationValue && !(secondValue)){
            operationValue = operationValue.slice(0, -1);
        }
        else if(firstValue && operationValue){
            secondValue = secondValue.slice(0, -1);
        }
        else{
            firstValue = firstValue.slice(0, -1);
        }
    }
    else if(firstValue && operationValue) {
        secondValue += inputValue;
    }
    else{
        firstValue += inputValue;
    }
    displayInfo();
};

document.getElementById('clear').addEventListener('click', clear);

document.getElementById('period').addEventListener('click', () =>{
    document.getElementById('period').disabled = true;
});

document.querySelectorAll('.equation').forEach(element => element.addEventListener('click', allButton));

