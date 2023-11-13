// script.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contact-form form");
    const errorMessage = document.querySelector(".error-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = form.querySelector("#name").value.trim();
        const email = form.querySelector("#email").value.trim();
        const phone = form.querySelector("#phone").value.trim();
        const message = form.querySelector("#message").value.trim();

        if (name === "" || email === "" || phone === "" || message === "") {
            errorMessage.textContent = "Por favor, preencha todos os campos.";
        } else {
            const formData = { name, email, phone, message };
            // Substitua o código de simulação pelo envio real do formulário
            // e a lógica de envio para o email desejado.
            console.log("Dados do formulário:", formData);
            errorMessage.textContent = "Formulário enviado com sucesso!";
            form.reset();
        }
    });
});

