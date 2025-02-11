const numeroProcurado = parseInt(prompt("Digite o número a ser procurado:"));


const array = []
const indices = []
let contadorIndice = 0

for (let i = 0; i < 10; i++) {
    const elemento = parseInt(prompt(`Digite o elemetno ${i + 1}:`))
    array[i] = elemento; //armazena o numero na lista 

}

for (let i = 0; i < 10; i++) {
    if (array[i] === numeroProcurado) {
        indices[contadorIndice] = i;
        contadorIndice++
    }    
}

console.log(`O número ${numeroProcurado} foi encontrado nos índices: ${indices}`);
