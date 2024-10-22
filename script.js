const screen = document.querySelector(".screen");
const hist = document.querySelector(".historial");
var parenthesis = '';

//funcion que agrega al final del input el caracter selecionado
function appendToScreen(input){
    //verifica si el string ya tiene un operador o signo que no sea un numero y los borra
    console.log(screen.value)
    if((screen.value === "Infinity")){
        clearScreen();
    }
    if(isNaN(screen.value[screen.value.length -1]) && (isNaN(input)) && (input !== 'p') && (input !== '-' || (screen.value[screen.value.length -1]=== '-'))){
        if(screen.value[screen.value.length -1] === '('){
            delScreen();
            parenthesis = '';
        }
        delScreen();
    }
    //condicion para agregar los parentesis o otro signo, dependiendo si ya se abrio o cerro anteriormente
    if(input === 'p'){
        if (parenthesis === '(' ){
            screen.value += ')';
            parenthesis = ')';
        }else {
            if(!isNaN(screen.value[screen.value.length -1])){
                screen.value += '*';
            }
            screen.value += '('
            parenthesis = '(';
        }
    }else{
        screen.value += input; 
    }
    
}
// funcion para procesar el string y devolver por pantalla el resultado del mismo
function equal(){
    //corrobora si el string termina en un operador o signo, sin contar al cierre de parentesis
    if(isNaN(screen.value[screen.value.length -1]) && (screen.value[screen.value.length -1] !== ')')){
        delScreen();
    }
    // cierra el parentesis, si no esta cerrado
    if (parenthesis === '('){
        screen.value += ')';
        parenthesis = ''; 
    }
    // muestra el resultado por pantalla y toda la operacion hecha anteriormente
    hist.innerText = screen.value;
    screen.value = eval(screen.value);
}
// limpia todo el input
function clearScreen() {
    screen.value = "";
    hist.innerText = "";
    parenthesis = '';
}
// limpia solo el ultimo caracter del input
function delScreen (){
    screen.value = screen.value.slice(0,-1);
}