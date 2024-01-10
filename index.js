function checkPassword() {
    var passwordInput = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    // Substitua "suaSenha" pela senha desejada
    var senhaCorreta = "04012024";
    if (passwordInput === senhaCorreta) {
        // Redirecionar para scratch
        window.location.href = "https://youtube.com/shorts/rxKhtJaBtQA?si=tAAEvNeAjHrYwBRT";
    } else {
        errorMessage.textContent = "Senha incorreta. Tente novamente.";
    }
}
