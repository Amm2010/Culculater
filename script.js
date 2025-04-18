
const resultdiv = document.getElementById("resultDiv");
var equation = "";

function addNumber(number) {
    equation += number;
    resultdiv.innerText = equation; 
    var displayText = equation.replace( '*' , "×");
    equation = displayText;
}




function calculate() {
    result = eval(equation);
    equation = result;
    resultdiv.innerText = result;

}

function deletAll() {
    equation = "";
    resultdiv.innerText = 0;
}

function deletLast() {
    equation = equation.slice(0, -1);
    resultdiv.innerText = equation || "0";
    var displayText = equation.replace( '*' , "×");
    equation = displayText;
}