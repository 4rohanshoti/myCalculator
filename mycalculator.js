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
let A = null;
let B = null;
let numbers = [];
console.log(numbers[0] = "hello");
let operators = [];


for(let i = 0; i<buttonValues.length; i++){
    const display = document.getElementById("display");
    const button = document.createElement("button");
    button.innerText = buttonValues[i];
    mainButton.appendChild(button);
    console.log("Getting called again");
    let value = buttonValues[i];
    console.dir(value);
    if(value == "0"){
        button.style.width = "150px";
        button.style.gridColumn = "span 2";
    }
        let numberIndex = 0;

    let operatorIndex = 0;
    button.addEventListener("click", ()=>{
        display.value = value;
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
        if(numberIndex == 5){
            console.log("Index is: " + numberIndex);
            loopFunc();
        }
    });
}

const loopFunc = ()=>{
    console.log("Inside function");
    numbers.forEach(value => console.log(value));
}