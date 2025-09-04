const buttonValues = [
    "AC", "+/-", "%", "÷", 
    "7", "8", "9", "×",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
];
const rightSymbols = ["÷", "×", "-", "+", "="];
const topSymbols = ["AC", "+/-", "%"];
const mainButton = document.getElementById("buttons");
let A = 0;
let B = 0;
let numbers = [];
let operators = [];
let operator = 0;
let numberIndex = 0; 
let operatorIndex = 0;

for(let i = 0; i<buttonValues.length; i++){
    const display = document.getElementById("display");
    const button = document.createElement("button");
    button.innerText = buttonValues[i];
    mainButton.appendChild(button);
    let value = buttonValues[i];
    console.dir(value);
    if(value == "0"){
        button.style.width = "150px";
        button.style.gridColumn = "span 2";
    }

    button.addEventListener("click", ()=>{
        display.value += value;
        if(rightSymbols.includes(value) || topSymbols.includes(value)){
            console.log("I am not a numbe");
            operators[operatorIndex] = value;
            operatorIndex++;
        }
        else {
            numbers[numberIndex] = value;
            numberIndex++;
            console.log(numberIndex);
        }

        if(value === "="){
            loopFunc(value);
        }

    });
}

const loopFunc = (calculationValue)=>{
    console.log("Inside function");
    numbers.forEach(value => console.log(value));
    operators.forEach(value => console.log(value));
    


    for(let i = 0; i<numbers.length; i++){
        numbers[i] = Number(numbers[i]);
    }

    A = numbers[0];
    for(let i = 0; i<operators.length; i++){
        B = numbers[i+1]
        operator = operators[i];
        if(calculationValue === "="){
            if(operator === "+"){
                A+=B;
                console.log("Add result is: " + A);
            }
            if(operator === "-"){
                console.log("After the add result: " + A);
                console.log("B is: " + B);
                A-=B;
            }
        }
    }
    console.log("The calculation is: " + A);

    /*for * we will have a * b and then for second operation + (a*b)+b "b will change throughout index increment"
    So we will access different numbers every new index. So We can think of it like this: A will hold the calculation and B Will hold next value
    we will store every calculation inside of A and compute next number with different operation for different number which will be store in B
    */

}