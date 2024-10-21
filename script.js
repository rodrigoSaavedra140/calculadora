const screen = document.querySelector(".screen");
const hist = document.querySelector(".historial");
var parenthesis = '';

function appendToScreen(input){
    screen.value += input; 
}
// function appendToScreenParenthesis() {
//     if (parenthesis === '(' ){
//         screen.value += ')'
//         parenthesis = ')';
//     }else {
//         screen.value += '('
//         parenthesis = '(';
//     }
// }

function equal(){
    try {
        hist.innerText = screen.value;
        screen.value = eval(screen.value);
    }
    catch(error){
        screen.value = "Error";
        hist.innerText = "";
    }
}

function clearScreen() {
    screen.value = "";
    hist.innerText = "";
}
function delScreen (){
    screen.value = screen.value.slice(0,-1);
}