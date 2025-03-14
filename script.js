buttons.forEach(button => {
    button.addEventListener("click", function () {
        const details = this.parentElement.querySelector(".details");
        details.classList.toggle("hidden");
        this.textContent = details.classList.contains("hidden") ? "Show Details" : "Hide Details";
    });
});


const form = document.getElementById("contact-form");
const errorMessages = document.querySelectorAll(".error-message");

form.addEventListener("submit", function (event) {
    let valid = true;
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    errorMessages.forEach(error => error.textContent = "");

    if (name.value.trim() === "") {
        errorMessages[0].textContent = "Name is required.";
        valid = false;
    }

    if (message.value.trim() === "") {
        errorMessages[2].textContent = "Message cannot be empty.";
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
});
