

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

//build the calculator adding buttons and setting classes
//make a estruct "keyboard = numbers + operators"
function startCalculator(){
    const keyboard = document.querySelector("#keyboard");
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

    keyboard.appendChild(numbers);

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

    keyboard.appendChild(operators);

    //adding eventLister to all buttons created
    const buttons = keyboard.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener('click', buttonPressed)
    } );

}

function buttonPressed(event){
    const btn = event.target;
    const digit = Number(btn.textContent);

    if(!isNaN(digit)){
        addNumberDisplay(digit);
    }

    if(btn.textContent ==="AC"){
        buttonClear();
    }

}

//get the number in the display, add the digit in the sequence and put back on the display
function addNumberDisplay(num){
    const display = document.querySelector("#display");
    let numDisplay = display.textContent;

    if (numDisplay === "0") {
        numDisplay = String(num);
    } else {
        numDisplay += String(num);
    }

    display.textContent = numDisplay; 

}

function buttonClear(){
    resetDisplay();

}

function resetDisplay(){
    display = document.querySelector("#display")
    display.textContent = "0";

}

