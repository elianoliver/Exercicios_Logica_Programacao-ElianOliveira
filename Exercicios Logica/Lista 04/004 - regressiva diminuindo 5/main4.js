// Desenvolva um programa que mostre na tela a seguinte contagem: "Inicio 100 95 90 85 80 ... 0 Acabou!"

// ==================UTILIZANDO FOR ===============================
console.log("===========================Utilizando FOR===========================")
msg = "Inicio ";

for(let i = 100; i >= 0; i -= 5){
    msg += i + " ";
}
msg += "Acabou!";
console.log(msg);

// ==================UTILIZANDO WHILE ===============================
console.log("\n===========================Utilizando WHILE=========================")
let i = 100;
msg = "Inicio ";

while (i >= 0) {
    msg += i + " ";
    i -= 5;
}

msg += "Acabou!";
console.log(msg);