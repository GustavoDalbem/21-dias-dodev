// Exercicio 1: Calculadora  DoDev

let num1 = Number(prompt("Digite um numero: "))
let num2 = Number(prompt("Digite outro numero: "))
let ope = prompt("Escolha a operação: ")

switch (ope) {
    case "*":
        console.log(num1 * num2)
        break
    case "/":
        console.log(num1 / num2)
        break
    case "+":
        console.log(num1 + num2)
        break
    case "-":
        console.log(num1 - num2)
        break
}
