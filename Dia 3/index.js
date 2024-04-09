//let and const

/*
let myName = "Gustavo Dalbem"
console.log(myName)
myName = 'Gustavo Carvalho'
console.log(myName)

console.log('xxxxxxxxxxxx Constante xxxxxxxxxxxx')

const a = "Gustavo Dalbem"
console.log(a)
*/

/*
let numOne = 1;
let numTwo = 2;

let sum = numUm + numDois;
console.log(sum)
*/

/*
let userInput = prompt();
console.log(userInput)
let userInputInInt = parseInt(userInput)
console.log(userInputInInt)


let userInput = prompt();
console.log(userInput)
let userInputInInt = parseInt(userInput)
console.log(userInputInInt)
*/

//Variaveis e solicitação das informaçoes do usuario 
let userName = prompt("What is your name?");
let userAge = prompt("How old are you?");
let userHeight = prompt("What is your height");
let userWeight = prompt("What is your weight");

//Calculando o ano que a pessoa nasceu e o IMC

let birth = (2024 - userAge)
let IMC = (userWeight / (userHeight * userHeight))

//Exibindo as informaçoes no console
console.log("Olá, " + userName, ", você tem " + userAge, "anos, nasceu em " + birth, ", tem " + userHeight, "pesa " + userWeight, "kg seu IMC é " + IMC, " kg/m2")








