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


//CAÇA BUGS - CONDICIONAIS

// BUGS NAO RESOLVIDO
let iniciar = prompt("Deseja iniciar o programa? s/n")

if (iniciar == "s") {
    alert("Programa encerrado!")
} else {
    alert("Programa iniciado!")
    let opcao = prompt("Escolha uma ação a ser feita -> 1 - Mensagem motivacional; 2 - Mensagem desmotivacional; 3 - nada")
    switch (iniciar) {
        case 1:
            alert("Você NÃO VAI conseguir, desista!")
        case 2:
            alert("Continue tentando, você VAI conseguir!")
        case 3:
            alert("Opção inválida selecione um número de 1 a 3.")
        default:
            alert("...")
    }
}

// BUGS RESOLVIDO 
let iniciar = prompt("Deseja iniciar o programa? s/n")

if (iniciar == "n") {
    alert("Programa encerrado!")
} else {
    alert("Programa iniciado!")
    let opcao = prompt("Escolha uma ação a ser feita -> 1 - Mensagem motivacional; 2 - Mensagem desmotivacional; 3 - nada")
    switch (opcao) {
        case "1":
            alert("Continue tentando, você VAI conseguir!")
            break
        case "2":
            alert("Você NÃO VAI conseguir, desista!")
            break
        case "3":
            alert("...")
            break
        default:
            alert("Opção inválida selecione um número de 1 a 3.")
    }       
}