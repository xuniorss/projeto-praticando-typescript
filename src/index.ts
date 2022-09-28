const input1 = document.getElementById('num1') as HTMLInputElement
const input2 = document.getElementById('num2') as HTMLInputElement
const btnSomar = document.getElementById('btnSomar') as HTMLElement
const btnSubtrair = document.getElementById('btnSubtrair') as HTMLElement

const somar = (a: number, b: number): number => { return a + b }
const subtrair = (a: number, b: number): number => { return a - b }

btnSomar.addEventListener('click', function() {
    const result = somar(Number(input1.value), Number(input2.value))
    console.log(result)
})

btnSubtrair.addEventListener('click', function() {
    const result = subtrair(Number(input1.value), Number(input2.value))
    console.log(result)
})