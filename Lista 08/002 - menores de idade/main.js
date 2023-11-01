//Declaração de variáveis globais
var nomes = []
var idades = []
var nomesMenorDeIdade = []
var btCadastrar = document.getElementById("idBtCadastrar")
var btRelatorio = document.getElementById("idBtRelatorio")
var saida = document.getElementById("idOut")

// CADASTRAR
btCadastrar.onclick = function () {

    adquirirDadosTela()

    //Limpa Tela
    document.getElementById("idNome").value = ""
    document.getElementById("idIdade").value = ""

    console.log(nomes);
    console.log(idades);
}

// DESCOBRIR MENORES DE IDADE
btRelatorio.onclick = function () {
    nomesMenorDeIdade = nomes.filter((nome, index) => {
        return idades[index] < 18
    })

    saida.value = "Menores de Idade: " + nomesMenorDeIdade.toString()
}


// PEGAR INFORMAÇÕES DA TELA
function adquirirDadosTela() {
    let nome = document.getElementById("idNome").value
    let isNomeValido = consistirNome(nome)

    if (isNomeValido) {
        saida.value = ""
        saida.classList.remove("alerta")

        let idade = document.getElementById("idIdade").value
        let isIdadeValida = consistirIdade(idade)
        if (isIdadeValida) {
            idades.push(idade)
            nomes.push(nome)
            saida.value = ""
            saida.classList.remove("alerta")
        }
    }

}

// CONSISTÊNCIA DE DADOS - NOME
function consistirNome(nome) {
    if (nome == "" || nome == " ") {
        saida.value = "Preenchimento obrigatório: Campo Nome"
        saida.classList.add("alerta")
        document.getElementById("idNome").focus()
        return false
    }
    return true
}

// CONSISTÊNCIA DE DADOS - IDADE
function consistirIdade(idade) {
    if (idade < 0 || idade > 130 || idade == "") {
        saida.value = "Idade inválida"
        saida.classList.add("alerta")
        document.getElementById("idNome").focus()
        return false
    }
    return true
}
