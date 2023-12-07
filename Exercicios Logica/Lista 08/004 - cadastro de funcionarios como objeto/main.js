//Declaração de variáveis globais
const salarioMinimo = 1212.00
var funcionarios = []
var btCadastrar
var btRelatorio
var saida

inicializar()

// CADASTRAR FUNCIONÁRIOS
btCadastrar.onclick = function () {
    let isTelaValida = consistirTela()
    if (isTelaValida) {
        cadastrar()
        limparTela()
    }
}

// FILTRO DE FUNCIONÁRIAS QUE RECEBEM MAIS DE 5K
btRelatorio.onclick = function () {

    let funcionariosFiltrados = funcionarios.filter(funcionario => {
        return (funcionario.sexo == "F" && funcionario.salario > 5000)
    })

    //Gerar Relatório iterando o array de funcionariosFiltrados
    saida.value = "Mulheres com salários acima de R$5K: "
    funcionariosFiltrados.forEach(funcionario => {
        saida.innerText = saida.value + "(" + funcionario.nome + "; " + funcionario.sexo + "; " + funcionario.salario + ")\n"
    });
}


//  INICIALIZA VARIAVEIS GLOBAIS NA TELA
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

// LIMPAR TELA
function limparTela() {
    document.getElementById("idNome").value = ""
    document.getElementById("idSalario").value = ""
    document.getElementById("idFem").checked = true
}

// RECEBE DADOS, CRIA OBJETO E ADICIONA AO VETOR
function cadastrar() {
    let formulario = document.getElementById("idForm")

    let funcionario = {
        nome: formulario.nmNome.value,
        sexo: formulario.nmGenero.value,
        salario: Number(formulario.nmSalario.value)
    }
    
    funcionarios.push(funcionario)
    saida.value = "Cadastro Realizado com sucesso!"
    console.log(funcionarios);
}
