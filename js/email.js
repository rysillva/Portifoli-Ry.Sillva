const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const button = form.querySelector("button");

    button.innerHTML = "Enviando...";
    button.disabled = true;

    emailjs.sendForm(
        "SEU_SERVICE_ID",
        "SEU_TEMPLATE_ID",
        this
    )

    .then(function () {

        button.innerHTML = "Mensagem Enviada!";

        alert("Mensagem enviada com sucesso!");

        form.reset();

        setTimeout(() => {

            button.innerHTML = "Enviar Mensagem";
            button.disabled = false;

        },2000);

    })

    .catch(function (error) {

        console.log(error);

        alert("Erro ao enviar a mensagem.");

        button.innerHTML = "Enviar Mensagem";

        button.disabled = false;

    });

});
