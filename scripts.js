
let numberOne = prompt('Digite o primeiro número: ')
let numberTwo = prompt('Digite o segundo número: ')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo


alert("A soma dos número é: " + sum)
alert("A subtração dos número é: " + sub)
alert("A multiplicação dos número é: " + multi)
alert("A divisão dos número é: " + div)
alert("O resto da divisão dos número é: " + restDiv)

let newCalculate = ((numberOne + numberTwo) % 2)

if(newCalculate != 1) {
    alert(`O resultado da soma é um número par. ${sum}`)
} else {
    alert(`O resultado da soma é um número ímpar. ${sum}`)
}

if(numberOne === numberTwo) {
    alert(`Os números digitados são iguais, e os números digitados foram ${numberOne} e ${numberTwo}.`)
} else {
    alert(`Os números digitados são diferentes, e os números digitados foram ${numberOne} e ${numberTwo}.`)
}

