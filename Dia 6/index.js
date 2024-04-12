//DESAFIO DIA #6: Lista de exercícios

/*

//EXERCÍCIO 1

let valor = parseInt(prompt("Digite um número: "))

for(valor = 0; valor <= 5; valor++){
    console.log(valor)
}

*/

/*

//EXERCÍCIO 2

let contagem = parseInt(prompt("Digite um número: "))

for(contagem = 0; contagem <= 50; contagem += 5){
    console.log(contagem)
}

*/

/*

//EXERCÍCIO 3

let contagem = parseInt(prompt("Digite um número: "))

for(contagem = 50; contagem >= 0; contagem -= 5){
    console.log(contagem)
}

*/

//EXERCÍCIO 4

let numero = parseInt(prompt("Digite um número inteiro e positivo: "))
for(let i = numero; i <= numero + 2; i++){
    console.log("tabuada do número: " + i)
    for(let j = 0; j <= 10; j++){
        console.log(i + " x " + j + " = " + (i * j))
    }
}


