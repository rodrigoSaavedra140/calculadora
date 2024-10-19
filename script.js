const formula = document.querySelector(".screen");
// const btns = document.querySelectorAll("button");
var fr = 0;
var c = '';

const btn1 = document.querySelector(".button-1");
const btn2 = document.querySelector(".button-2");
const btn3 = document.querySelector(".button-3");
const btn4 = document.querySelector(".button-4");
const btn5 = document.querySelector(".button-5");
const btn6 = document.querySelector(".button-6");
const btn7 = document.querySelector(".button-7");
const btn8 = document.querySelector(".button-8");
const btn9 = document.querySelector(".button-9");
const btn0 = document.querySelector(".button-0");
const btnSum = document.querySelector(".button-sum");
const btnMinus = document.querySelector(".button-minus");
const btnTimes = document.querySelector(".button-times");
const btnDivide = document.querySelector(".button-divide");
const btnDel = document.querySelector(".button-delete");
const btnEqual = document.querySelector(".button-equal");

btn1.addEventListener("click", () => {
    formula.innerText += "1";
})

btn2.addEventListener("click", () => {
    formula.innerText += "2";
})

btn3.addEventListener("click", () => {
    formula.innerText += "3";
})

btn4.addEventListener("click", () => {
    formula.innerText += "4";
})

btn5.addEventListener("click", () => {
    formula.innerText += "5";
})

btn6.addEventListener("click", () => {
    formula.innerText += "6";
})

btn7.addEventListener("click", () => {
    formula.innerText += "7";
})

btn8.addEventListener("click", () => {
    formula.innerText += "8";
})

btn9.addEventListener("click", () => {
    formula.innerText += "9";
})

btn0.addEventListener("click", () => {
    formula.innerText += "0";
})

btnSum.addEventListener("click", () => {
    fr = parseInt(formula.textContent);
    formula.innerText = "";
    c = '+';
})

btnMinus.addEventListener("click", () => {
    fr = parseInt(formula.textContent);
    formula.innerText = "";
    c = '-';
})

btnTimes.addEventListener("click", () => {
    fr = parseInt(formula.textContent);
    formula.innerText = "";
    c = '*';
})

btnDivide.addEventListener("click", () => {
    fr = parseInt(formula.textContent);
    formula.innerText = "";
    c = '/';
})

btnDel.addEventListener("click", () => {
    formula.innerText = "";
    fr = 0;
})

btnEqual.addEventListener("click", () => {  
    // const aux = formula.innerText.split("");

    if (c === '+') {
        formula.innerText = `${fr + parseInt(formula.textContent)}`;
        // console.log(aux);
    }
    if (c === '-'){
        formula.innerText = `${fr - parseInt(formula.textContent)}`;
    }
    if (c === '*'){
        formula.innerText = `${fr * parseInt(formula.textContent)}`;
    }
    if (c === '/'){
        formula.innerText = `${fr / parseInt(formula.textContent)}`;
    }
})

