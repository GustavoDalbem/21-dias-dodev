// == igual | != diferente | < menor que | > maior que | <= maior ou igual | >= maior ou igual
// === é igual o valor e o tipo | !== é diferente o valor e o tipo!

// Desafio dia #4

// 1- Jantar especial?


let fome = prompt("Você está com fome?")
let dinheiro = prompt("Você tem dinheiro?")
let restaurante = prompt("Rstaurante está aberto?")

if (fome === "nao" && dinheiro === "nao") {
    console.log("Hoje a janta será em casa")
} else if(fome && dinheiro === "sim" && restaurante === "nao") {
    console.log("Peça delivery")
} else {
    console.log("Hoje a janta será no restaurante!")
}


// 2- MOtorista

let nome = prompt("Qual o seu nome?")
let idade = prompt("Qual a sua idade?")
let temCNH = prompt("Possui carteira de motorista?")
let temCarro = prompt("Possui carro?") 

if(idade < 18 || temCNH === "nao") {
    console.log(nome + ", você não pode dirigir")
} else if(idade >= 18 && temCNH === "sim" && temCarro === "nao") {
    console.log(nome + ", você pode dirigir, mas não tem carro")
} else{
    console.log(nome + (", você será o motorista"))
}
