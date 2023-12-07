// Crie um programa que preencha automaticamente um vetor numérico com 20 números gerados aleatoriamente pelo computador e depois mostre os valores gerados na tela (console.log).
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13  14  15  16  17  18  19

let vetor = [];
let aleatorio;

for (let i = 0; i < 20; i++) {
    aleatorio = Math.floor(Math.random() * 101);
    vetor.push(aleatorio);
}

console.log(vetor);
