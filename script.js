const screen = document.querySelector(".screen");
const hist = document.querySelector(".historial");


function appendToScreen(input){
    screen.value += input; 
}

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