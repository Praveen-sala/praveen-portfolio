const form = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");


form.addEventListener("submit", function(event) {

    event.preventDefault();

    formMessage.textContent =
        "Thank you! Your message has been received.";

    form.reset();

});