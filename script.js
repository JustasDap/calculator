
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
    if(b === '0'){
        alert('To Infinity and Beyond');
        clear();
    } else {
        return a / b;
    }
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

const operationsScreen = document.getElementById('currentInput');

let numbers = [];

let operators = [];

let currentValue = '';

let displayValue = '';

function show(char){
    //checks if displayValue is not too long
    if(displayValue.length > 24){
        displayValue = displayValue.substring(1);//deletes first character of displayValue string
    }
    if(currentValue.length < 9){
        if(!isNaN(char) || char === '.'){
            currentValue += char;
        }
        displayValue += char;
        operationsScreen.innerHTML = displayValue;
        screen.innerHTML = currentValue;
    }
}

//checks if last input was an operator
function checkForDoubleOperators(){
    if(displayValue.slice(-1) === '*' ||
        displayValue.slice(-1) === '/' ||
        displayValue.slice(-1) === '+' ||
        displayValue.slice(-1) === '-') {
        return true;
    }
    else {
        return false;
    }
}

//clears
function clear() {
    displayValue = '';
    currentValue = '';
    screen.innerHTML = '';
    numbers = [];
    operators = [];
    operationsScreen.innerHTML = '';
}

//deletes last input
/*function backspace() {
    currentValue = currentValue.substring(0, currentValue.length - 1);
    displayValue = displayValue.substring(0, displayValue.length - 1);
    show('');
}*/

document.getElementById('num1').addEventListener('click', function(){
    show('1');
})

document.getElementById('num2').addEventListener('click', function(){
    show('2');
})

document.getElementById('num3').addEventListener('click', function(){
    show('3');
})

document.getElementById('num4').addEventListener('click', function(){
    show('4');
})

document.getElementById('num5').addEventListener('click', function(){
    show('5');
})

document.getElementById('num6').addEventListener('click', function(){
    show('6');
})

document.getElementById('num7').addEventListener('click', function(){
    show('7');
})

document.getElementById('num8').addEventListener('click', function(){
    show('8');
})

document.getElementById('num9').addEventListener('click', function(){
    show('9');
})

document.getElementById('num0').addEventListener('click', function(){
    show('0');
})

document.getElementById('dot').addEventListener('click', function(){
    if(!currentValue.includes('.')){
        show('.');
    }
})

document.getElementById('equals').addEventListener('click', function(){
    savingToMemory();
                                        console.log('=');
                                        console.log(numbers);
                                        console.log(operators);
    if(numbers[numbers.length-1] === ''){
        numbers.splice(numbers.length-1 , 1)
    } else {
        calculate();
        screen.innerHTML = numbers[0];
        operationsScreen.innerHTML = displayValue;
        displayValue = '';
    }
                                        console.log(numbers);
                                        console.log(operators);
    //numbers.splice(0, 1);
})
/*
document.getElementById('backspace').addEventListener('click', function(){
    backspace();
})*/

document.getElementById('clear').addEventListener('click', function(){
    clear();
})

document.getElementById('divide').addEventListener('click', function(){
    if(!checkForDoubleOperators()){
        savingToMemory('/');
        show('/');
    }
})

document.getElementById('multiply').addEventListener('click', function(){
    if(!checkForDoubleOperators()){
        savingToMemory('*');
        show('*');
    }
})

document.getElementById('minus').addEventListener('click', function(){
    if(!checkForDoubleOperators()){
        savingToMemory('-');
        show('-');
    }
})

document.getElementById('plus').addEventListener('click', function(){
    if(!checkForDoubleOperators()){
        savingToMemory('+');    
        show('+');
    }
})

//saves currentValue to numbers[] and operator to operators[] so they can later be evaluated.
function savingToMemory(operator) {
    numbers[numbers.length] = currentValue;
    currentValue = '';
    if(operator === undefined){
        return;
    } else {
        operators[operators.length] = operator;
    };

}

//calculates result using numbers[] and operators[];
function calculate(){
    for(let i = 0; i < numbers.length; i++){
        if(operators[i] === '*'){
            numbers.splice(i, 2, operate('*', numbers[i], numbers[i+1]));
            operators.splice(i, 1);
            i--;
        }
        if(operators[i] === '/'){
            numbers.splice(i, 2, operate('/', numbers[i], numbers[i+1]));
            operators.splice(i, 1);
            i--;
        }
    }
    for(let i = 0; i < numbers.length; i++){
        if(operators[i] === '+'){
            numbers.splice(i, 2, operate('+', Number(numbers[i]), Number(numbers[i+1])));
            operators.splice(i, 1);
            i--;
        }
        if(operators[i] === '-'){
            numbers.splice(i, 2, operate('-', numbers[i], numbers[i+1]));
            operators.splice(i, 1);
            i--;
        }
    }
    if(!(numbers[0] % 1 === 0)){
        let string = numbers[0].toString();
        numbers[0] = Number(numbers[0]);
        console.log(string);
        console.log(string.slice(-1));
        if(string.slice(-2, -1) == '.'){
            numbers[0] = numbers[0].toFixed(1);
        } else if (string.slice(-3, -2) == '.') {
            numbers[0] = numbers[0].toFixed(2);
        } else {
            numbers[0] = numbers[0].toFixed(3);
        }
    }
}