//DESAFIO #5 1- CALCULADORA

/*
//CRIANDO AS VARIÁVEIS E PEDINDO AS INFORMAÇÕES AO USUÁRIO
let num1 = Number(prompt('Digite um numero: '));
let num2 = Number(prompt('Digite um outro numero: '));
let opcao = prompt("Escolha uma operação matematica: ");

//EXIBINDO MENSAGEM NO CONSOLE
switch(opcao){
    case "+":
        console.log(num1 + num2)
        break
}
switch(opcao){
    case "-":
        console.log(num1 - num2)
        break
}
switch(opcao){
    case "x":
        console.log(num1 * num2)
        break
}
switch(opcao){
    case "/":
        console.log(num1 / num2)
        break
}
*/

//DESAFIO #5 2- GAS STATION

//CRIANDO AS VARIÁVEIS E PEDINDO AS INFORMAÇÕES AO USUÁRIO

let quantidade
let valor
let pergunta = prompt("Bom dia, o que o senhor(a) deseja: " + "\n1 = Gasolina; \n2 = Álcool; \n3 = Calibrar")


//CRIANDO SWITCHCASE 
switch(pergunta){
    case "1":
        valor = prompt("Qual o valor desejado para abastecer: ")
        quantidade = valor / 5
        console.log("Foram abastecidos " + quantidade, "litros de gasolina para o senhor(a)!")
        break;     
}
switch(pergunta){
    case "2":
        valor = prompt("Qual o valor desejado para abastecer: ")
        quantidade = valor / 3
        console.log("Foram abastecidos " + quantidade, "litros de álcool para o senhor(a)!")
        break;
default:
    console.log("Pneus calibrados com sucesso!")
    break;
}


