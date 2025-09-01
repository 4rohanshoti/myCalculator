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
        display.value = value;
    });
}