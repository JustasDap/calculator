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
        add(a, b)
    } else if(ope === '-'){
        subtract(a, b);
    } else if(ope === '*'){
        multiply(a, b);
    } else if(ope === '/'){
        divide(a, b);
    }
}