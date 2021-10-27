let numContainer = document.getElementById("num");
let value = 0;

let btnInc = document.querySelector(".inc");
let btnDec = document.querySelector(".dec");
let btnReset = document.querySelector(".reset");

function countIncrease() {
    value++;
    numContainer.textContent = value;
};

function countDecrease() {
    value--;
    numContainer.textContent = value;
};

function countReset() {
    value = 0;
    numContainer.textContent = value;
};