"use strict";
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const btnSomar = document.getElementById('btnSomar');
const btnSubtrair = document.getElementById('btnSubtrair');
const operacao = ({ tipo, a, b }) => {
    if (tipo === 'SOMAR') {
        return a + b;
    }
    else {
        return a - b;
    }
};
btnSomar.addEventListener('click', function () {
    const result = operacao({
        tipo: 'SOMAR',
        a: Number(input1.value),
        b: Number(input2.value),
    });
    console.log(result);
});
btnSubtrair.addEventListener('click', function () {
    const result = operacao({
        tipo: 'SUBTRARIR',
        a: Number(input1.value),
        b: Number(input2.value),
    });
    console.log(result);
});
