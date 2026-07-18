// Inicializa o EmailJS
emailjs.init({
    publicKey: "ADy5LsNIzq_g4nx4_"
});

// Seleciona o formulário
const form = document.getElementById("contact-form");

// Evento de envio
form.addEventListener("submit", function (e) {

    e.preventDefault();

    const button = form.querySelector("button[type='submit']");
    const originalText = button.innerHTML;

    // Desabilita o botão enquanto envia
    button.disabled = true;
    button.innerHTML = "Enviando...";

    // Envia o formulário
    emailjs.sendForm(
        "service_kd4apob",
        "template_pc3pubb",
        form
    )
    .then(() => {

        button.innerHTML = "✅ Mensagem enviada!";

        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
        }, 2500);

        form.reset();

    })
    .catch((error) => {

        console.error("Erro ao enviar:", error);

        button.innerHTML = originalText;
        button.disabled = false;

        alert("❌ Não foi possível enviar a mensagem. Tente novamente.");

    });

});
