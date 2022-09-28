const input1 = document.getElementById('num1') as HTMLInputElement
const input2 = document.getElementById('num2') as HTMLInputElement
const btnSomar = document.getElementById('btnSomar') as HTMLElement
const btnSubtrair = document.getElementById('btnSubtrair') as HTMLElement

type Operacoes = 'SOMAR' | 'SUBTRARIR'
interface Valores {
    tipo: Operacoes
    a: number
    b: number
}

const operacao = ({ tipo, a, b }: Valores): number => {
    if(tipo === 'SOMAR') { return a + b }
    else { return a - b }
}

btnSomar.addEventListener('click', function() {
    const result = operacao({
        tipo: 'SOMAR',
        a: Number(input1.value),
        b: Number(input2.value),
    })
    console.log(result)
})

btnSubtrair.addEventListener('click', function() {
    const result = operacao({
        tipo: 'SUBTRARIR',
        a: Number(input1.value),
        b: Number(input2.value),
    })
    console.log(result)
})