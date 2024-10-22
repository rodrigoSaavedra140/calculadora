const screen = document.querySelector(".screen");
const hist = document.querySelector(".historial");
var parenthesis = '';

function appendToScreen(input){
    if(isNaN(screen.value[screen.value.length -1]) && (isNaN(input)) && (input !== '-')){
        if(screen.value[screen.value.length -1] === '('){
            delScreen();
            parenthesis = '';
        }
        delScreen();
    }
    if(input === 'p'){
        if (parenthesis === '(' ){
            screen.value += ')';
            parenthesis = ')';
        }else {
            if(isNaN(screen.value[-1])){
                screen.value += '*';
            }
            screen.value += '('
            parenthesis = '(';
        }
    }else{
        screen.value += input; 
    }
    
}

function equal(){
    
    if(isNaN(screen.value[screen.value.length -1]) && (screen.value[screen.value.length -1] !== ')')){
        delScreen();
    }
    if (parenthesis === '('){
        screen.value += ')';
        parenthesis = ''; 
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