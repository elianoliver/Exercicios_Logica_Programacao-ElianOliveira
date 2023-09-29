// Escreva um programa que mostre na tela a seguinte contagem:
// "Inicio 5 6 7 8 9 10 11 12 Acabou!".

// ==================UTILIZANDO FOR ===============================
console.log("=========Utilizando FOR=========")
let msg = "Inicio ";

for(let i = 5; i <= 12; i++){
    msg += i + " ";
}

msg += "Acabou!";
console.log(msg);

// ==================UTILIZANDO WHILE ===============================
console.log("\n=========Utilizando WHILE=========")
let i = 5;
msg = "Inicio ";

while (i <= 12) {
    msg += i + " ";
    i++;
}

msg += "Acabou!";
console.log(msg);