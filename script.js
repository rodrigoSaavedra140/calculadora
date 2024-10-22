const screen = document.querySelector(".screen");
const hist = document.querySelector(".historial");
var parenthesis = '';

function appendToScreen(input){
    screen.value += input; 
}
function appendToScreenParenthesis() {
    if (parenthesis === '(' ){
        screen.value += ')'
        parenthesis = ')';
    }else {
        if(isNaN(screen.value[-1])){
            screen.value += '*';
        }
        screen.value += '('
        parenthesis = '(';
    }
}

function equal(){
    console.log(screen.value[screen.value.length -1]);
    if(isNaN(screen.value[-1]) && (screen.value[-1] !== ')')){
        delScreen();
    }
    hist.innerText = screen.value;
    screen.value = eval(screen.value);
}

function clearScreen() {
    screen.value = "";
    hist.innerText = "";
}
function delScreen (){
    screen.value = screen.value.slice(0,-1);
}