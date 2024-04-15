function checkPassword() {
    var passwordInput = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    // Substitua "suaSenha" pela senha desejada
    var senhaCorreta = "orangetrump";
    if (passwordInput === senhaCorreta) {
        // Redirecionar para scratch
        window.location.href = "https://youtu.be/xvFZjo5PgG0?si=F0tfx8D1hQCbVwzT";
    } else {
        errorMessage.textContent = "Senha incorreta. Tente novamente.";
    }
}
