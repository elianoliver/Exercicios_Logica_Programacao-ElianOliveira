// Crie um programa que preencha automaticamente (usando lógica, não apenas atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
// 5 3 5 3 5 3 5 3 5 3
// 0 1 2 3 4 5 6 7 8 9

let vetor = [];

for (let i = 0; i < 10; i++) {
    // se i for par, preenche com 5, senão, preenche com 3
    vetor.push(i % 2 == 0 ? 5 : 3);
}

console.log(vetor);