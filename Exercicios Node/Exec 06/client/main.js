// Comentário: Esta função confirma o voto e reseta a urna.
function confirmarVoto() {
    alert("Voto confirmado!");
    resetUrna();
}

// Comentário: Esta função cancela o voto e reseta a urna.
function cancelarVoto() {
    alert("Voto cancelado!");
    resetUrna();
}

// Comentário: Esta função registra um voto em branco e reseta a urna.
function votoBranco() {
    alert("Voto em branco!");
    resetUrna();
}

// Comentário: Esta função valida os campos e atualiza o estado do botão.
function validateFields() {
    const campoValido = isCampoValido();
    elemento = document.querySelectorAll(".btn");
    
    elemento.forEach(element => {
        element.disabled = !campoValido;
    });
}

// Comentário: Esta função verifica se o campo de entrada é válido.
function isCampoValido() {
    const numeroInput = document.querySelector("#numeroInput").value;

    // Verifica se o campo está vazio.
    if (numeroInput.trim() === "") {
        return false;
    }

    return true;
}

// Esta função reseta o campo de entrada.
function resetUrna() {
    document.getElementById("numeroInput").value = "";
}
