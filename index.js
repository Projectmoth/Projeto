function checkPassword() {
    var passwordInput = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    // Substitua "suaSenha" pela senha desejada
    var senhaCorreta = "c0m3t0u5";
    if (passwordInput === senhaCorreta) {
        // Redirecionar para a área restrita
        window.location.href = "area_restrita.html";
    } else {
        errorMessage.textContent = "Senha incorreta. Tente novamente.";
    }
}