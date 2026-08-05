
const contenue = document.querySelector("#password");
const bouton = document.querySelector("#oeil");

function voire() {
    if (contenue.type === "password") {
        contenue.type = "text";
        bouton.classList.remove("fa-eye");
        bouton.classList.add("fa-eye-slash");
    } else {
        contenue.type = "password";
        bouton.classList.remove("fa-eye-slash");
        bouton.classList.add("fa-eye");
    }
}

const formulaire = document.querySelector("#formConnexion");
const message = document.querySelector("#message");

formulaire.addEventListener("submit", function (event) {
    let password = document.querySelector("#password").value;

    if (password.trim() === "") {
        event.preventDefault(); 
        message.textContent = "Entrez un mot de passe";
        message.style.color = "red";
    }
});