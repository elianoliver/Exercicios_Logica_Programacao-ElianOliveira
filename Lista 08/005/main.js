//--------------> Inicialização <----------------//
var num = []

var btIncluir = document.getElementById("idIncluir")
var btOrdemCres = document.getElementById("idOrdemCres")
var btOrdemDecres = document.getElementById("idOrdemDecres")
var btOrdemCresSort = document.getElementById("idOrdemCresSort")
var btOrdemDecresSort = document.getElementById("idOrdemDecresSort")

var saida = document.getElementById("idOut")

//--------------> Tratamento de Eventos <----------------//

// CAPTURA NUMERO E ADICIONA AO ARRAY
btIncluir.onclick = function () {
    let numero = document.querySelector("#idNum")
    num.push(Number(numero.value))
    numero.innerHTML = ""
    console.table(num)
}

/*
    Ordena em ordem crescente pelo algoritmo "Método da bolha"
    usando lógica discreta
*/
btOrdemCres.onclick = function () {

    //num    = [2, 3, 20, 35]
    //index     0  1   2  3
    //aux    = 20
    //i      = 3
    //i + 1  = 4
    //num.length = 4
    //trocou = false
    var trocou = true
    while (trocou) {
        trocou = false
        for (let i = 0; i < (num.length - 1); i++) {
            if (num[i] > num[i + 1]) {
                let aux = num[i]
                num[i] = num[i + 1]
                num[i + 1] = aux
                trocou = true
            }
        }
    }

    saida.value = num.toString()

}

/*
    Ordena em ordem decrescente pelo algoritmo "Método da bolha"
    usando lógica discreta
*/
btOrdemDecres.onclick = function () {
    var trocou = true
    while (trocou) {
        trocou = false
        for (let i = 0; i < (num.length - 1); i++) {
            if (num[i] < num[i + 1]) {
                let aux = num[i]
                num[i] = num[i + 1]
                num[i + 1] = aux
                trocou = true
            }
        }
    }

    saida.value = num.toString()
}

/*
    Ordena em ordem crescente usando o médoto Array.sort()
*/
btOrdemCresSort.onclick = function () {
    //num = num.sort()
    //console.log(num);
    saida.value = num.sort(function (a, b) {
        if (a > b) {
            return 1
        }
        if (a < b) {
            return -1
        }
        return 0
    }).toString()
}

/*
    Ordena em ordem decrescente usando o médoto Array.sort()
*/
btOrdemDecresSort.onclick = function () {
    //num = num.reverse()
    //console.log(num);
    // num = num.sort()
    // saida.value = num.reverse().toString()
    saida.value = num.sort(function (a, b) {
        if (a < b) {
            return 1
        }
        if (a > b) {
            return -1
        }
        return 0
    }).toString()
}