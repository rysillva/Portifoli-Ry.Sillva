// Inicializa o EmailJS
emailjs.init({
    publicKey: "ADy5LsNIzq_g4nx4_"
});

const form = document.getElementById("contact-form");

function showToast(message, success = true) {

    const toast = document.getElementById("toast");
    const text = document.getElementById("toast-text");

    text.textContent = message;

    toast.style.background = success ? "#16a34a" : "#dc2626";

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3500);

}

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const button = form.querySelector("button[type='submit']");
    const originalText = button.innerHTML;

    button.disabled = true;
    button.innerHTML = "⏳ Enviando...";

    try {

        // Envia para você
        await emailjs.sendForm(
            "service_kd4apob",
            "template_pc3pubb",
            form
        );

        // Envia resposta automática
        await emailjs.send(
            "service_kd4apob",
            "template_0s5lnj6",
            {
                from_name: form.from_name.value,
                from_email: form.from_email.value,
                subject: form.subject.value,
                message: form.message.value
            }
        );

        button.innerHTML = "✅ Enviado";

        showToast("Mensagem enviada com sucesso!");

        form.reset();

        setTimeout(() => {

            button.innerHTML = originalText;
            button.disabled = false;

        }, 2500);

    } catch (error) {

        console.error(error);

        button.innerHTML = originalText;
        button.disabled = false;

        showToast("Erro ao enviar a mensagem.", false);

    }

});
