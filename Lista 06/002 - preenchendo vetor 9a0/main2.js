// Crie um programa que preencha automaticamente (usando lógica, não apenas atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
// 9 8 7 6 5 4 3 2 1 0
// 0 1 2 3 4 5 6 7 8 9

let vetor = [];

for (let i = 0; i < 10; i++) {
    vetor.push(9 - i);
}

console.log(vetor);