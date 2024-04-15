function checkPassword() {
    var passwordInput = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    // Substitua "suaSenha" pela senha desejada
    var senhaCorreta = "orangetrump";
    if (passwordInput === senhaCorreta) {
        // Redirecionar para scratch
        window.location.href = "  ";
    } else {
        errorMessage.textContent = "Senha incorreta. Tente novamente.";
    }
}