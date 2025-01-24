//Exercio 1: DoDev School (While)

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


// Exercicio 2: Caixa eletronico DoDev (DOWHILE)

let saldo = 1000; // Inicializamos o saldo com um valor inicial
let maiorValorInserido = 0;
let somaValoresInseridos = 0;
let totalTransacoes = 0;
let continuar = false;

do {
    const nome = prompt("Digite seu nome:");
    const cpf = prompt("Digite seu CPF:");
    const valor = Number(prompt("Digite o valor da transação: "));
    const operacao = prompt("Qual operacao deseja fazer? S / D");

    if (valor < 0) {
        console.log("Valor inválido. A transação não foi realizada.");
    } else if (operacao == "S" && valor > saldo) {
        console.log("Saldo insuficiente. A transação não foi realizada");
    } else if (operacao == "S") {
        console.log(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`);
        saldo -= valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
    } else {
        console.log(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`);
        saldo += valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        console.log(`Transação realizada com sucesso. Seu saldo atual é R$${saldo}.`);
    }

    const opcao = prompt("Deseja continuar? (1 para continuar, 2 para parar):");
    if (opcao === "1") {
        continuar = true;
    } else if (opcao === "2") {
        continuar = false;
    } else {
        console.log("Opção inválida. Programa encerrado.");
        continuar = false;
    }
} while (continuar);

console.log(`Saldo final: R$${saldo}`);
console.log(`Maior valor inserido: R$${maiorValorInserido}`);
console.log(`Média dos valores inseridos: R$${somaValoresInseridos / totalTransacoes}`);
