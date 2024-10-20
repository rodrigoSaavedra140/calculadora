const formula = document.querySelector(".screen");
const hist = document.querySelector(".historial");

const btnDel = document.querySelector(".button-delete");
const btnEqual = document.querySelector(".button-equal");

const opButtons = document.querySelectorAll(".operator");   //operator buttons
const nButtons = document.querySelectorAll(".number");      //number buttons
const opRegex = /\+|\-|\*|\//;

var aux = "";
var arr = [];

for (let btn of opButtons){
    btn.addEventListener("click", () => {

        if (aux === "") {
            console.log("doble ingreso de operador");
        } else {
            formula.innerText += btn.innerText;
    
            arr[arr.length] = parseInt(aux);
            arr[arr.length] = btn.value;
    
            aux = "";
        }
    })
}

for (let nBtn of nButtons){
    nBtn.addEventListener("click", () => {
        formula.innerText += nBtn.innerText;
        aux += nBtn.innerText;
    })
}

btnEqual.addEventListener("click", () => {  
    
    if (aux === "") {
        console.log("falta otro numero para operar");
        arr.pop();
        aux = arr[arr.length -1];
        formula.innerText = formula.innerText.slice(0,-1);
        arr.pop();
    } else {
        arr[arr.length] = parseInt(aux);
        console.log(arr)
        hist.innerText = arr.toString().replaceAll(",", " ");
        
        formula.innerText = equal(arr, arr.length-1);
        
        arr = [];
        aux = parseInt(formula.innerText);
    }
})

const equal = (arr, i) => {
    switch (arr[i-1]){
        case "+":
            return equal(arr, i-2) + arr[i];
            break;
        case "-":
            return equal(arr, i-2) - arr[i];
            break;
        case "*":
            arr[i-2] *= arr[i];
            return equal(arr, i-2);
            break;
        case "/":
            arr[i-2] /= arr[i];
            return equal(arr, i-2);
            break;
        default:
            console.log("termino");
            return arr[i];
            break;
    }
}

btnDel.addEventListener("click", () => {
    formula.innerText = "";
    hist.innerText = "";
    arr = [];
    aux = "";
})