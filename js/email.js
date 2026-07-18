const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const button = form.querySelector("button");

    const originalText = button.innerHTML;

    button.innerHTML = "Enviando...";
    button.disabled = true;

    emailjs.sendForm(
        "service_kd4apob",
        "template_pc3pubb",
        this
    )
    .then(() => {

        button.innerHTML = "Mensagem enviada!";

        setTimeout(() => {

            button.innerHTML = originalText;
            button.disabled = false;

        }, 2500);

        form.reset();

    })
    .catch((error) => {

        console.error(error);

        alert("Ocorreu um erro ao enviar a mensagem.");

        button.innerHTML = originalText;
        button.disabled = false;

    });

});
