
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

function clear(){

};

function operate(operatorVal, x, y){
    return operatorVal = '+' ? addition(x, y)
         : operatorVal = '-' ? subtraction(x, y)
         : operatorVal = 'x' ? multiplication(x, y)
         : operatorVal = '/' ? division(x, y)
         : operatorVal = '%' ? percentage(x)
         : currentValue;
};


function display(){
    let newValue = 0
    document.querySelectorAll('.number').forEach(element => element.addEventListener('click', e => {
        newValue = parseInt(e.target.textContent);
        currentValue = newValue;
        document.getElementById('output').textContent = newValue;
    }));
    document.querySelectorAll('.operator').forEach(element => element.addEventListener('click', e => {
        newValue = e.target.textContent;
        document.getElementById('output').textContent = newValue;
    }));
}
display();
