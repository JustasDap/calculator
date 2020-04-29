
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

let numbers = [];

let operators = [];

let displayValue = '';

function show(char){
    if(displayValue.length < 9){
        displayValue += char;
        screen.innerHTML = displayValue;
    }
}

function clear() {
    displayValue = '';
    screen.innerHTML = '';
}

function clearMemory() {
    numbers = [];
    operators = [];
}

function backspace() {
    displayValue = displayValue.substring(0, displayValue.length - 1);
    show('');
}

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
    if(!displayValue.includes('.')){
        show('.');
    }
})

document.getElementById('equals').addEventListener('click', function(){
    savingToMemory();
    console.log('=');
    console.log(numbers);
    console.log(operators);
    calculate();
    console.log(numbers);
    console.log(operators);
})

document.getElementById('backspace').addEventListener('click', function(){
    backspace();
})

document.getElementById('clear').addEventListener('click', function(){
    clear();
    clearMemory();
})

document.getElementById('divide').addEventListener('click', function(){
    console.log('/');
    savingToMemory('/');
    clear();
})

document.getElementById('multiply').addEventListener('click', function(){
    console.log('*');
    savingToMemory('*');
    clear();
})

document.getElementById('minus').addEventListener('click', function(){
    console.log('-');
    savingToMemory('-');
    clear();
})

document.getElementById('plus').addEventListener('click', function(){
    console.log('+');
    savingToMemory('+');
    clear();
})

function savingToMemory(operator) {
    numbers[numbers.length] = displayValue;
    if(operator === undefined){
        return;
    } else {
        operators[operators.length] = operator;
    };
    
}

function calculate(){
    let number;
    for(let i = 0; i < numbers.length; i++){
        if(operators[i] === '*'){
            number = numbers[i] * numbers[i+1];
            numbers.splice(i, 2, number);
            operators.splice(i, 1);
            i--;
        }
        if(operators[i] === '/'){
            number = numbers[i]/numbers[i+1];
            numbers.splice(i, 2, number);
            operators.splice(i, 1);
            i--;
        }
    }
    for(let i = 0; i < numbers.length; i++){
        if(operators[i] === '+'){
            number = Number(numbers[i])+Number(numbers[i+1]);
            numbers.splice(i, 2, number);
            operators.splice(i, 1);
            i--;
        }
        if(operators[i] === '-'){
            number = numbers[i]-numbers[i+1];
            numbers.splice(i, 2, number);
            operators.splice(i, 1);
            i--;
        }
    }
    return console.log(numbers[0]);
}