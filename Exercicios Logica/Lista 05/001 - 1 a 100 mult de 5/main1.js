// Crie um algoritmo que mostre na tela todos os números entre 1 e 100 que sejam múltiplos de 3 ou 5.

let msg = ""

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        msg += i + " ";
    }
}

console.log(msg);