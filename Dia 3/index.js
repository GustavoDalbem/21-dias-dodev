//Conhecendo o usuário IMC

//Pedindo as informações do usuário
let nome = prompt("Digite seu nome: ")
let idade = parseInt(prompt("Digite sua idade: "))
let altura = parseFloat(prompt("Digite sua altura: "))
let peso = prompt("Digite seu peso: ")

//Calculo IMC
let anoNasceu = 2024 - idade 
let imc = peso / (altura * altura)

//Exibindo as informações 
console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + anoNasceu + ", tem " + altura + " de altura, pesa " + peso + " kg seu IMC é " + imc + " Kg/m2")