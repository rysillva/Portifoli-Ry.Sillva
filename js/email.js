const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const nome = form.from_name.value;
    const email = form.from_email.value;
    const assunto = form.subject.value;
    const mensagem = form.message.value;

    const texto =
`Olá Ryan!

Recebi seu portfólio e gostaria de entrar em contato.

👤 Nome: ${nome}

📧 Email: ${email}

📝 Assunto: ${assunto}

💬 Mensagem:
${mensagem}`;

    const numero = "5511968751538"; // Seu WhatsApp

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");

    form.reset();

});
