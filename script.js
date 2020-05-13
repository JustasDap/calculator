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

const screen = document.getElementById('results'); //lower calculator screen displaying current number
//screen.innerHTML = '0';

const opeScreen = document.getElementById('currentInput'); //top calculator screen displaying currently inputed operations
//opeScreen.innerHTML = '0';

let numbers = [];

let operators = [];

let changingNumber = 0;

//let currentValue = '0'; 

//let opeScreen.innerHTML = '0';

function show(char){
    //checks if displayValue is not too long
    if(opeScreen.innerHTML.length > 24){
        opeScreen.innerHTML = opeScreen.innerHTML.substring(1); //deletes first character of displayValue string
    }
    /*if(currentValue.length < 9){ //allows to input numbers not longer than 9 symbols
        if(!isNaN(char) || char === '.'){ //checks if there was '.' in the current number before
            currentValue += char;
        }*/
    if(screen.innerHTML.length <9) {
        if(!isNaN(char) || char === '.'){
            screen.innerHTML += char;
        }
    }
        opeScreen.innerHTML += char;
        //screen.innerHTML = currentValue;
}

//checks if last input was an operator
function checkForDoubleOperators(){
    if(opeScreen.innerHTML.slice(-1) === '*' ||
        opeScreen.innerHTML.slice(-1) === '/' ||
        opeScreen.innerHTML.slice(-1) === '+' ||
        opeScreen.innerHTML.slice(-1) === '-') {
        return false;
    }
    else {
        return true;
    }
}

//clears
function clear() {
    opeScreen.innerHTML = '';
    screen.innerHTML = '';
    numbers = [];
    operators = [];
}

//deletes last inputed number
function backspace() {
    if(!(screen.innerHTML === '')){
        screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1);
        opeScreen.innerHTML = opeScreen.innerHTML.substring(0, opeScreen.innerHTML.length - 1);
        show('');
    }
}

function changeNumber() {
    if(changingNumber === 1) {
        screen.innerHTML = '';
        changingNumber = 0;
    }
}

document.getElementById('num1').addEventListener('click', function(){
    changeNumber();
    show('1');
})

document.getElementById('num2').addEventListener('click', function(){
    changeNumber();
    show('2');
})

document.getElementById('num3').addEventListener('click', function(){
    changeNumber();
    show('3');
})

document.getElementById('num4').addEventListener('click', function(){
    changeNumber();
    show('4');
})

document.getElementById('num5').addEventListener('click', function(){
    changeNumber();
    show('5');
})

document.getElementById('num6').addEventListener('click', function(){
    changeNumber();
    show('6');
})

document.getElementById('num7').addEventListener('click', function(){
    changeNumber();
    show('7');
})

document.getElementById('num8').addEventListener('click', function(){
    changeNumber();
    show('8');
})

document.getElementById('num9').addEventListener('click', function(){
    changeNumber();
    show('9');
})

document.getElementById('num0').addEventListener('click', function(){
    changeNumber();
    show('0');
})

document.getElementById('dot').addEventListener('click', function(){
    changeNumber();
    if(!screen.innerHTML.includes('.')){
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
        opeScreen.innerHTML = numbers[0];
        numbers.splice(0, 1);
        changingNumber = 1;
    }
                                        console.log(numbers);
                                        console.log(operators);
})

document.getElementById('backspace').addEventListener('click', function(){
    backspace();
})

document.getElementById('clear').addEventListener('click', function(){
    clear();
})

document.getElementById('divide').addEventListener('click', function(){
    if(checkForDoubleOperators()){
        savingToMemory('/');
        show('/');
    }
    changingNumber = 0;
})

document.getElementById('multiply').addEventListener('click', function(){
    if(checkForDoubleOperators()){
        savingToMemory('*');
        show('*');
    }
    changingNumber = 0;
})

document.getElementById('minus').addEventListener('click', function(){
    if(checkForDoubleOperators()){
        savingToMemory('-');
        show('-');
    }
    changingNumber = 0;
})

document.getElementById('plus').addEventListener('click', function(){
    if(checkForDoubleOperators()){
        savingToMemory('+');    
        show('+');
    }
    changingNumber = 0;
})

//saves currentValue to numbers[] and operator to operators[] so they can later be evaluated.
function savingToMemory(operator) {
    numbers[numbers.length] = screen.innerHTML;
    screen.innerHTML  = '';
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