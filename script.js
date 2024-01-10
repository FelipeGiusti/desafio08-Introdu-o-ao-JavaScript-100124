/*
  Capturar dois números e fazer todas as operações matematicas com eles;
  Soma, subtração, divisão, multiplicação e resto da divisão
*/

let n1 = prompt("Digite o primeiro número:")
let n2 = prompt("Digite o segundo número:")

alert(`A soma é: ${Number(n1) + Number(n2)}`)
alert(`A subtração é: ${Number(n1) - Number(n2)}`)
alert(`A multiplicação é: ${Number(n1) * Number(n2)}`)
alert(`A divisão é: ${Number(n1) / Number(n2)}`)
alert(`O resto da divisão é: ${Number(n1) % Number(n2)}`)

if (((Number(n1) + Number(n2)) % 2 == 0)) {
  alert(`A soma dos dois números da um resultado par`)
} else {
  alert(`A soma dos dois números da um resultado ímpar`)
}

if (Number(n1) == Number(n2)) {
  alert(`Os dois números inseridos são iguais`)
} else {
  alert(`Os dois números inseridos são diferentes`)
}