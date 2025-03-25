startCalculator();



function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;    
}

function operation(operator, num1, num2){
    switch (operator){
        case '+':
            return add(num1,num2);            
        case '-':
            return subtract(num1,num2);         
        case 'x':
            return multiply(num1,num2);
        case '/':
            return divide(num1,num2);
    }
}

function startCalculator(){
    const buttons = document.querySelector("#keyboard");
    for (let i=0; i<=9;i++){
        let btn = document.createElement("button");
        btn.textContent = i;
        buttons.appendChild(btn);
    }
}

