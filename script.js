const op = ["/", "*", "-", "+","="]; //all operations
let actualOperation = ""; //start operation in the calculador with none
let memoryNum = null; //start number in the memory of the calculator
let lastBtn = ""; //last button pressed
let resetNextInput = false; // indicates if the next action restart the display


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
    if(num2 === 0){
        return null;
    }
    return num1/num2;    
}

function operation(operator, num1, num2){
    switch (operator){
        case '+':
            return add(num1,num2);            
        case '-':
            return subtract(num1,num2);         
        case '*':
            return multiply(num1,num2);
        case '/':
            return divide(num1,num2);
        default:
            return null;
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
            btn.id ="clear";                              
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
    const operators = document.createElement("div");
    operators.id = "allOperators";

    //["/", "*", "-", "+","="]
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
    const display = document.querySelector("#display");
    let result = "";
    

    if(!isNaN(digit)){
       
        if(resetNextInput)
        {
            resetDisplay();
            resetNextInput = false;
        }

        addNumberDisplay(digit);
    }else if (btn.textContent ==="AC") {
        buttonClear();     
    }else if(btn.textContent === "."){

        //if '.' whas pressed after a operator, restart display and starts the number with '0.'
        if (resetNextInput) {
            display.textContent = "0.";
            resetNextInput = false;
        }else if(!display.textContent.includes(".")){
            
            display.textContent += ".";
        }

    }else if(op.includes(btn.textContent)){
        let numInDisplay = parseFloat(getNumberDisplay());
        let operator = btn.textContent;

        //ignores if the last button pressed was a operator
        if (op.includes(lastBtn)) {
            actualOperation = operator; // just update the operation
            return;
        }

        
        //if there is a a actual and the user after enter with another number press a new operation
        //do the operation and update the number in the memory 
        if (operator !== "=" && actualOperation && memoryNum !== null){
            result = operation(actualOperation, memoryNum, numInDisplay);
            if(result !== null){
                memoryNum = result;
                display.textContent = String(result);
                actualOperation = operator;
                resetNextInput = true;
            }else{
                display.textContent = "ERROR!"
                resetNextInput = true;
            }
            
        
        //do the operation when press '=' only if there is a actual operator and two numbers (memory and display)
        }else if(operator === "=" && actualOperation !== "" && memoryNum !== null){
            //do the operation and reset display
            result = operation(actualOperation, memoryNum, numInDisplay);
            if(result !== null){
                memoryNum = result;
                display.textContent = String(result);
                actualOperation = "";
            }else{
                display.textContent = "ERROR!"
                resetNextInput = true;
            }
            
        //if operation is pressed with only 1 number in the memmory
        }else if(operator !== null){
            
            memoryNum = numInDisplay;
            actualOperation = operator;
            resetNextInput = true;     
        }
    }
    
    lastBtn = btn.textContent;
}

//get the number in the display, add the digit in the sequence and put back on the display
function addNumberDisplay(num){
      let numDisplay = String(getNumberDisplay());

    if (numDisplay === "0" || resetNextInput) {
        numDisplay = String(num);
    } else {
        numDisplay += String(num);
    }

    display.textContent = numDisplay;
}

function getNumberDisplay(){
    const display = document.querySelector("#display");
    return display.textContent;
}

function buttonClear(){
    resetDisplay();
    actualOperation = "";
    memoryNum = null;
    lastBtn = "";
}

function resetDisplay(){
    display = document.querySelector("#display")
    display.textContent = "0";
}