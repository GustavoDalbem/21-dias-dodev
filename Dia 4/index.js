// == igual | != diferente | < menor que | > maior que | <= maior ou igual | >= maior ou igual
// === é igual o valor e o tipo | !== é diferente o valor e o tipo!

// Desafio dia #4

// Exercício 1: Jantar especial


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


// Exercício 2: Motorista

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


// Exercício 3: Sistema de Avaliação de Emprestimo

let nome = prompt("Informe seu nome: ")
let idade = Number(prompt("Infome seu sua idade: "))
let rendamensal = Number(prompt("Informe sua renda mensal: "))
let temDividas = prompt("Tem alguma divida (sim/nao): ")

if (idade < 18) {
    console.log(nome + ", você nao tem idade o suficiente parar solicitar um empréstimo")
} 

else if (rendamensal < 2000 || temDividas === "sim") {
    console.log(nome + ", infelizmente sua solicitação de empréstimo foi negada")
}

else if (rendamensal >= 2000 && temDividas === "nao") {
    console.log(nome + ", sua solicitação de empréstimo foi aprovada")
}



//Exercício 4: Sistema de Seleção de Curso

let nome = prompt("Informe seu nome: ")
let idade = Number(prompt("Informse sua idade: "))
let graduacao = prompt("Possui graduação (sim/nao):")
let area = prompt("Área de interrese: ")

if (idade < 18) {
    console.log(nome + ", você ainda está no começo de sua jornada de aprendizagem! Explore todas as áreas de interesse.")
}

else if(graduacao === "sim" && area === "tecnologia") {
    console.log(nome + ", que tal se aprofundar em um curso de Pós-Graduação em Inteligência Artificial?")
}

else if(graduacao === "sim" && area === "saude") {
    console.log(nome + ", que tal se aprofundar em um curso de Pós-Graduação em Saúde Pública?")
}

else if(graduacao === "sim" && area === "artes") {
    console.log(nome + ", que tal se aprofundar em um curso de Pós-Graduação em Belas Artes?")
}

else if(graduacao === "nao") {
    console.log(nome + ", você pode começar com um curso de Graduação em " + area + "!")
}