
const resultdiv = document.getElementById("resultDiv");

var equation = "";

function addNumber(number) {
    equation += number;
    resultdiv.innerText = equation; 
}




function calculate() {
    equation = equation.replaceAll( "×" ,"*" )
    equation = equation.replaceAll( "÷" , "/" )
    result = eval(equation);
    equation = result;
    resultdiv.innerText = result;
}

function deletAll() {
    equation = "";
    resultdiv.innerText = 0;
}

function deletLast() {
    equation = String(equation)
    equation = equation.slice(0, -1);
    resultdiv.innerText = equation || "0";
}