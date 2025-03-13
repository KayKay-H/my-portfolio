buttons.forEach(button => {
    button.addEventListener("click", function () {
        const details = this.parentElement.querySelector(".details");
        details.classList.toggle("hidden");
        this.textContent = details.classList.contains("hidden") ? "Show Details" : "Hide Details";
    });
});
