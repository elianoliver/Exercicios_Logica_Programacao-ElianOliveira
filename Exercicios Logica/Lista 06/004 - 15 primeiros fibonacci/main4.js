// Crie um programa que preencha automaticamente (usando lógica, não apenas atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos da sequência de Fibonacci:
// 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610
// 0 1 2 3 4 5  6  7  8  9  10 11  12  13  14

let vetor = [];

for (let i = 0; i < 15; i++) {
    if (i < 2) {
        vetor.push(1);
    } else {
        vetor.push(vetor[i - 2] + vetor[i - 1]);
    }
}

console.log(vetor);