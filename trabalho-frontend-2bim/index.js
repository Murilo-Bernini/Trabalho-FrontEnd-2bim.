// Função para validar o formato do nome usando regex
function validarNome() {
    var nome = document.getElementById("nome").value;
    var regex = /^[a-zA-ZÀ-ú\s]+$/; // Permite letras maiúsculas, minúsculas, acentuadas e espaços

    if (!regex.test(nome)) {
        alert("Por favor, insira um nome válido contendo apenas letras.");
        return false;
    }
    return true;
}

// Função para validar o formato do telefone com DDD usando regex
function validarTelefone() {
    var telefone = document.getElementById("telefone").value;
    var regex = /^[0-9]{11}$/; // Formato: 11 dígitos

    if (!regex.test(telefone)) {
        alert("Por favor, insira um telefone válido com DDD (11 dígitos).");
        return false;
    }
    return true;
}

// Event listener para o envio do formulário
document.getElementById("formulario").addEventListener("submit", function(event) {
    if (!validarNome() || !validarTelefone()) {
        event.preventDefault(); // Impede o envio do formulário se a validação falhar
    }
});