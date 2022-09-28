"use strict";
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const btnSomar = document.getElementById('btnSomar');
const btnSubtrair = document.getElementById('btnSubtrair');
const somar = (a, b) => { return a + b; };
const subtrair = (a, b) => { return a - b; };
btnSomar.addEventListener('click', function () {
    const result = somar(Number(input1.value), Number(input2.value));
    console.log(result);
});
btnSubtrair.addEventListener('click', function () {
    const result = subtrair(Number(input1.value), Number(input2.value));
    console.log(result);
});
