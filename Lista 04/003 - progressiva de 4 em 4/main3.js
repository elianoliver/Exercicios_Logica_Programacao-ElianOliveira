// Crie um aplicativo que mostre na tela a seguinte contagem:
// "Inicio 0 4 8 12 16 20 Acabou!"

// ==================UTILIZANDO FOR ===============================
console.log("=========Utilizando FOR=========")
let msg = "Inicio ";

for(let i = 0; i <= 20; i += 4){
    msg += i + " ";
}

msg += "Acabou!";
console.log(msg);

// ==================UTILIZANDO WHILE ===============================
console.log("\n=========Utilizando WHILE=========")
let i = 0;
msg = "Inicio ";

while (i <= 20) {
    msg += i + " ";
    i += 4;
}
msg += "Acabou!";
console.log(msg);
