
const resultdiv = document.getElementById("resultDiv");
var equation = "";

function addNumber(number) {
    equation += number;
    resultdiv.innerText = equation; 
}

function divid() {
    
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