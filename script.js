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
    const numbers = document.createElement("div");
    numbers.id = "numbers";

    for (let i=0; i<=9;i++){
        if(i===0){
            let btn = document.createElement("button");
            btn.textContent = 'AC';                               
            numbers.appendChild(btn);

            btn = document.createElement("button");
            btn.classList.add("number")
            btn.textContent = i;
            numbers.appendChild(btn);

            btn = document.createElement("button");
            btn.textContent = '.';        
            numbers.appendChild(btn);

        }else{
            let btn = document.createElement("button");
            btn.textContent = i;
            numbers.appendChild(btn);
        }     
    }

    buttons.appendChild(numbers);

    //create div operatores
    const op = ["/", "*", "-", "+","="];
    const operators = document.createElement("div");
    operators.id = "allOperators";

    op.forEach(item =>{
        const btn = document.createElement("button");
        btn.textContent = item;
        btn.classList.add("operator");
        operators.appendChild(btn);

    })

    buttons.appendChild(operators);


}

