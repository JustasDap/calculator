
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(ope, a, b){
    if(ope === '+'){
        return add(a, b);
    } else if(ope === '-'){
        return subtract(a, b);
    } else if(ope === '*'){
        return multiply(a, b);
    } else if(ope === '/'){
        return divide(a, b);
    }
}
const screen = document.getElementById('results');

let displayValue = '';

function show(char){
    displayValue += char;
    screen.innerHTML = displayValue;
}

function clear() {
    displayValue = '';
    screen.innerHTML = '';
}

function backspace() {
    displayValue = displayValue.substring(0, displayValue.length - 1);
    show('');
}