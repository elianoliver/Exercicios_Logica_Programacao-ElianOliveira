//Declaração de variáveis globais
const salarioMinimo = 1212.00
var nomes = []
var sexos = []
var salarios = []
var btCadastrar
var btRelatorio
var saida

inicializar()

// CADASTRO DE FUNCIONÁRIOS
btCadastrar.onclick = function () {
    let isTelaValida = consistirTela()
    if (isTelaValida) {
        cadastrar()
        limparTela()
    }
}

// MAPEIA FUNCIONARIAS QUE RECEBEM MAIS DE 5K
btRelatorio.onclick = function () {

    let funcionariosFiltrados = nomes.map((nome, index) => {
        if (sexos[index] = "F" && salarios[index] > 5000) {
            return index
        }
    }).filter(value => value != undefined).map(value => {
        return {
            nome: nomes[value],
            sexo: sexos[value],
            salario: salarios[value]
        }
    })

    //Gerar Relatório iterando o array de funcionariosFiltrados
    saida.value = "Mulheres com salários acima de R$5K: "

    funcionariosFiltrados.forEach(funcionario => {
        saida.value = saida.value + "(" + funcionario.nome + "; " + funcionario.sexo + "; " + funcionario.salario + ")"
    });
}


// INICIALIZA VARIAVEIS GLOBAIS NA TELA
function inicializar() {
    btCadastrar = document.getElementById("idBtCadastrar")
    btRelatorio = document.getElementById("idBtRelatorio")
    saida = document.getElementById("idOut")
    limparTela()
}

// CONSISTÊNCIA DE DADOS - TELA
function consistirTela() {
    let nome = document.getElementById("idNome").value
    let salario = document.getElementById("idSalario").value

    //Consistencia campo Nome
    if (nome == "" || nome == " ") {
        saida.value = "Campo Nome, preenchimento obrigatório"
        saida.classList.add("alerta")
        document.getElementById("idNome").focus()
        return false
    }

    //Consistencia campo Salario
    if (salario == "" || salario == " ") {
        saida.value = "Campo Salario, preenchimento obrigatório"
        saida.classList.add("alerta")
        document.getElementById("idSalario").focus()
        return false
    }

    //Consistencia campo Salario
    if (Number(salario) < salarioMinimo) {
        saida.value = "Salario abaixo do salário mínimo"
        saida.classList.add("alerta")
        document.getElementById("idSalario").focus()
        return false
    }

    saida.classList.remove("alerta")
    return true
}

// LIMPA OS CAMPOS DA TELA
function limparTela() {
    document.getElementById("idNome").value = ""
    document.getElementById("idSalario").value = ""
    document.getElementById("idFem").checked = true
}

// RECEBE OS DADOS E OS ARMZAENA NOS VETORES
function cadastrar() {
    nomes.push(document.getElementById("idNome").value)
    salarios.push(Number(document.getElementById("idSalario").value))
    sexos.push(document.querySelector('input[name="nmGenero"]:checked').value)
    saida.value = "Cadastro Realizado com sucesso!"
    console.log(nomes);
    console.log(salarios);
    console.log(sexos);
}
