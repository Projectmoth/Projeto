function checkPassword() {
    var passwordInput = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    // Substitua "suaSenha" pela senha desejada
    var senhaCorreta = "c0m3t0u5";
    if (passwordInput === senhaCorreta) {
        // Redirecionar para scratch
        window.location.href = "https://drive.google.com/file/d/1TF3mxntdMeWaoafySZFfIVxBzMyivfvz/view?usp=drivesdk";
    } else {
        errorMessage.textContent = "Senha incorreta. Tente novamente.";
    }
}
