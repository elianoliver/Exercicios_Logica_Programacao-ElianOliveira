// //     <!-- Crie um programa para gerenciar as notas dos alunos de uma escola.

// Crie um vetor para armazenar o nome dos alunos.
// Crie um vetor para armazenar o endereço dos alunos.
// Crie um vetor para armazenar o nome da mãe dos alunos.
// Crie um vetor para armazenar o nome do pai dos alunos.
// Crie um vetor para armazenar o telefone dos pais dos alunos.
// Crie 4 vetores para armazenar 4 notas por aluno.
// As informações nos vetores se relacionarão através dos indexadores dos vetores.
// Crie uma tela para cadastrar os alunos (nome, endereço, nome dos pais, telefone).
// Crie uma tela para cadastrar as notas dos alunos.
// Crie uma tela para consultar o cadastro e situação dos alunos.

// CADASTRO DE ALUNOS
var alunos = [];
var enderecos = [];
var nomeMaes = [];
var nomePais = [];
var telefones = [];

// NOTAS
var notas1 = [];
var notas2 = [];
var notas3 = [];
var notas4 = [];

function cadastrar() {
    let nome = document.querySelector("#idNome").value;
    let endereco = document.querySelector("#idEndereco").value;
    let nomeMae = document.querySelector("#idMae").value;
    let nomePai = document.querySelector("#idPai").value;
    let telefone = document.querySelector("#idTel").value;
    let output = document.querySelector("#outCadastro");

    output.innerHTML = ""; // LIMPAR OUTPUT

    // SE CAMPOS ESTIVEREM VAZIOS
    if (nome == "" || endereco == "" || nomeMae == "" || nomePai == "" || telefone == "") {
        output.innerHTML = "<div>Preencha todos os campos!</div>";
        return;
    }

    // INSERINDO NOS VETORES
    alunos.push(nome);
    enderecos.push(endereco);
    nomeMaes.push(nomeMae);
    nomePais.push(nomePai);
    telefones.push(telefone);

    // IR PARA CADASTRO DE NOTAS
    proximo();

    // LIMPAR CAMPOS
    document.querySelector("#idNome").value = "";
    document.querySelector("#idEndereco").value = "";
    document.querySelector("#idMae").value = "";
    document.querySelector("#idPai").value = "";
    document.querySelector("#idTel").value = "";
}

function cadastrarNotas() {
    let nota1 = Number(document.querySelector("#idNota1").value);
    let nota2 = Number(document.querySelector("#idNota2").value);
    let nota3 = Number(document.querySelector("#idNota3").value);
    let nota4 = Number(document.querySelector("#idNota4").value);
    let output = document.querySelector("#outCadastroNotas");

    output.innerHTML = ""; // LIMPAR OUTPUT

    // SE CAMPOS ESTIVEREM VAZIOS
    if (nota1 == "" || nota2 == "" || nota3 == "" || nota4 == "") {
        output.innerHTML = "<div>Preencha os campos de nota!</div>";
        return;
    }
    // SE NOTAS ESTIVEREM FORA DO INTERVALO 0 - 10
    else if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 > 10) {
        output.innerHTML = "<div>As notas devem estar entre 0 e 10!</div>";
        return;
    }

    // ADICIONANDO NOS VETORES
    notas1.push(nota1);
    notas2.push(nota2);
    notas3.push(nota3);
    notas4.push(nota4);

    // IR PARA CONSULTA
    proximo();

    // LIMPAR CAMPOS
    document.querySelector("#idNota1").value = "";
    document.querySelector("#idNota2").value = "";
    document.querySelector("#idNota3").value = "";
    document.querySelector("#idNota4").value = "";
}

function consultar() {
    let nome = document.querySelector("#idConsulta").value;
    let output = document.querySelector("#outConsulta");

    output.innerHTML = ""; // LIMPAR OUTPUT

    // SE CAMPO ESTIVER VAZIO
    if (nome == "") {
        output.innerHTML = "<div>Preencha o campo de consulta!</div>";
        return;
    }
    // SE NOME NÃO ESTIVER CADASTRADO
    else if (alunos.indexOf(nome) == -1) {
        output.innerHTML = "<div>Aluno não encontrado!</div>";
        return;
    }

    output.innerHTML = `
    <div>Nome: ${alunos[alunos.indexOf(nome)]} <br>
    nome da mãe: ${nomeMaes[alunos.indexOf(nome)]} <br>
    nome do pai: ${nomePais[alunos.indexOf(nome)]} <br>
    telefone: ${telefones[alunos.indexOf(nome)]} <br>
    endereço: ${enderecos[alunos.indexOf(nome)]} <br>
    nota 1: ${notas1[alunos.indexOf(nome)]} <br>
    nota 2: ${notas2[alunos.indexOf(nome)]} <br>
    nota 3: ${notas3[alunos.indexOf(nome)]} <br>
    nota 4: ${notas4[alunos.indexOf(nome)]} <br>
    </div>`;
}

function proximo() {
    let cadastroAlunos = document.querySelector(".cadastroAlunos");
    let cadastroNotas = document.querySelector(".cadastroNotas");
    let consultaAlunos = document.querySelector(".consultaAlunos");

    if (window.getComputedStyle(cadastroAlunos).display == "flex") {
        cadastroAlunos.style.display = "none";
        cadastroNotas.style.display = "flex";
    } else if (window.getComputedStyle(cadastroNotas).display == "flex") {
        cadastroNotas.style.display = "none";
        consultaAlunos.style.display = "flex";
    } else if (window.getComputedStyle(consultaAlunos).display == "flex") {
        consultaAlunos.style.display = "none";
        cadastroAlunos.style.display = "flex";
    }
}