// == igual | != diferente | < menor que e > maior que | <== >== maior e menor  ou igual
// === é igual o valor e o tipo | !== é diferente o valor e o tipo!

/*
let idade = number(prompt("Insira a sua idade"))

if(idade <= 10){
    console.log('você tem menos ou tem 10 anos')
}else{
    console.log('você tem mais que 10 anos')
}
*/

//DESAFIO DIA #4 1- JANTAR ESPECIAL

/*

//PEDINDO INFORMAÇÕES AO USUÁRIO
let temFome = prompt(("Você esta com fome?"))
let temDinheiro = prompt(("Você tem dinheiro?"))
let temRestaurante = prompt(("O Restaurente esta aberto?"))
let nao = 0
let sim = 0

//EXIBINDO MENSAGEM NO CONSOLE
if(temFome == "nao" || temDinheiro == "nao"){
    console.log("Hoje a janta será em casa")
}else if(temFome === "sim" && temDinheiro === "sim" || temRestaurante !== "nao"){
    console.log("Peça delivery")
}
if(temFome == "sim", temDinheiro == "sim" && temRestaurante == "sim" ){
    console.log("Hoje o jantar será no seu restaurante!")
}

*/

//DESAFIO DIA #4 2- MOTORISTA

//CRIANDO VARIÁVEIS!
let nome  
let idade  
let carta = false 
let carro = false

//PEDINDO INFORMAÇÕES AO USUÁRIO
nome = prompt("Qual o seu nome?")
idade = parseInt(prompt("Qual a sua idade?"))

let opcaoCarta = prompt("Você tem carta?(s/n)")
if(opcaoCarta == "s"){
    carta = true
}
let opcaoCarro = prompt("Você tem carro?(s/n)")
if(opcaoCarro == "s"){
    carro = true
}

//EXIBINDO MENSAGEM NO CONSOLE
if(idade >= 18 && carta == true && carro == true){
    console.log(nome + ", você será o motorista!")
}
else if(idade < 18 || carta == false){
    console.log(nome + ", você não pode dirigir")
}
else{
    console.log(nome + ", você pode dirigir mas não tem carro")
}