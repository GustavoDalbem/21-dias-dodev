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


// Exercicio 2: DoDev thru

let ope = prompt("Bom dia, você deseja abaster com gasolina, alcool ou calibrar os pneus?")
let gasolina = 5 
let alcool = 3

switch (ope) {
    case "gasolina":
        let valor1 = prompt("Qual vai ser o valor: ")
        console.log("Foi abastecido: " + valor1 / gasolina + " Litros" )
        break
    case "alcool":
        let valor2 = prompt("Qual o vai ser o valor: ")
        console.log("Foi abastecido: " + valor2 / alcool + " Litros")
        break
    case "calibrar":
        console.log("pneus calibrados com sucesso")
        break
}