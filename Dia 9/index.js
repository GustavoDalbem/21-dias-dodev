//Exercio 1: Conhecendo o usuario

// pedindo informações
let nome = prompt("Informe seu nome")
let idade = prompt("Informe sua idade")
let peso = prompt("Informe seu peso")
let altura = prompt("Informe sua altura")
let profissao = prompt("Informe sua profissão")

// exibindo as Informações
console.log("Olá " + nome + ", você tem " + idade + ", é " + profissao + ", tem " + altura + " de altura e pesa " + peso + "kg.")

// verificando idade
if(idade >= 18) {
    console.log("Está liberado para tomar umas geladas.")
} else {
    console.log("Sem gelada para você.")
}

// exibindo idade fracionada
dias = 365 * idade
semana = 52 * idade
meses = 12 * idade

console.log("Sua idade em meses: " + meses)
console.log("Sua idade em semanas: " + semana)
console.log("Sua idade em dias: " + dias)

//

let imc = peso / (altura * altura)

if(imc < 18.5) {
    console.log("Magreza")
} else if (imc >= 18.5 && imc < 24.9) {
    console.log("Normal")    
} else if (imc >= 24.9 && imc < 30) {
    console.log("Sobrepeso")    
} else {
    console.log("Obesidade")    
}

// DESCOBRINDO O ANO DE NASCIMENTO
let anoAtual = 2023
let anoNasc = anoAtual - idade
console.log("Você nasceu no ano de " + anoNasc)

// EXIBINDO ANOS E IDADES
let anoVivido = anoNasc
let idadeAtual = 0

for (let anoVivido = anoNasc; anoVivido <= anoAtual; anoVivido++) {
    console.log(anoVivido + " - " + idadeAtual + " anos de idade");
    idadeAtual++
}

// LOOP DO-WHILE
do {
    // INSERIR A LÓGICA ANTERIOR
    let continuar = prompt("Deseja inserir os dados novamente? (s/n)");
} while (continuar == "s")


// Exercicios 2: RH DoDev

//CRIANDO VARIÁVEIS/LOOP
let confirmar = "n"
while (confirmar != "s") {
    let nome = prompt("Digite seu nome")
    let idade = parseInt(prompt("Digite sua idade"))
    let salarioAtual = parseFloat(prompt("Digite seu salário atual"))
    console.log("Nome: " + nome + ", idade: " + idade + ", salário atual: " + salarioAtual)
    confirmar = prompt("As informações estão corretas? (s/n)")
}

//FAZENDO A PREVISÃO DO SALÁRIO
let aumento = 0.015
console.log("Previsão salarial para os próximos 10 anos:")

for (let ano = 1; ano <= 10; ano++) {
    salarioAtual += salarioAtual * aumento
    aumento *= 2

    console.log((2023 + ano) + " = R$ " + salarioAtual)
}


