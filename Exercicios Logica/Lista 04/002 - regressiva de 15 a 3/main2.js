// Faça um algoritmo que mostre na tela a seguinte contagem:
// "Inicio 15 14 13 12 11 10 9 8 7 6 5 4 3 Acabou!"

// ==================UTILIZANDO FOR ===============================
console.log("==================Utilizando FOR==================")
let msg = "Inicio ";

for(let i = 15; i >= 3; i--){
    msg += i + " ";
}

msg += "Acabou!";
console.log(msg);

// ==================UTILIZANDO WHILE ===============================
console.log("\n==================Utilizando WHILE==================")
let i = 15;
msg = "Inicio ";

while (i >= 3) {
    msg += i + " ";
    i--;
}

msg += "Acabou!";
console.log(msg);