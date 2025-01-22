//Exercio 1: DoDev School (While)
/*
let continuar = true;
let somaNotas = 0;
let totalAlunos = 0;
let totalHomens = 0;
let mulheresNotaAlta = 0;
let maiorNotaHomens = 0;

while (continuar) {
  // Solicitar dados
  let nota = parseFloat(prompt("Digite a nota do aluno: "));
  let sexo = prompt("Digite o sexo do aluno (m/f): ").toLowerCase();

  // Atualizar contadores
  totalAlunos++;
  somaNotas += nota;

  if (sexo === "m") {
    totalHomens++;
    if (nota > maiorNotaHomens) {
      maiorNotaHomens = nota;
    }
  } else if (sexo === "f" && nota > 7) {
    mulheresNotaAlta++;
  }

  // Perguntar se deseja continuar
  continuar = prompt("Deseja cadastrar outro aluno? (s/n): ").toLowerCase() === "s";
}

// Calcular a média geral
let mediaGeral = somaNotas / totalAlunos;

// Mostrar os resultados
console.log(`Média geral: ${mediaGeral}`);
console.log(`Total de homens: ${totalHomens}`);
console.log(`Mulheres com nota acima de 7: ${mulheresNotaAlta}`);
console.log(`Maior nota entre os homens: ${maiorNotaHomens}`);

*/

// Exercicio 2: Caixa eletronico DoDev (DOWHILE)

do {
    const nome = prompt("Digite o seu nome: ")
    const cpf = prompt("Digite seu CPF: ")
    const valor = Number(prompt("Digite o valor da transição: "))
    const opcao = prompt("Qual operacao voce deseja realizar? (S / D) ")

    if(valor < 0) {
        console.log("Valor invalido, A transação nao foi realiazda")
    } else if (opcao === "s" && valor > saldo) {
        

    }
}