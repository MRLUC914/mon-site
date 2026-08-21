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

bouton.addEventListener("click", voire);

const formulaire = document.querySelector("#formConnexion");
const message = document.querySelector("#message");
const nami = document.querySelector("#nami");

formulaire.addEventListener("submit", function (event) {
    event.preventDefault(); // on bloque toujours d'abord, puis on redirige nous-mêmes si c'est bon

    const identifiant = nami.value.trim();
    const password = contenue.value.trim();

    if (identifiant === "" || password === "") {
        message.textContent = "Entrez un identifiant et un mot de passe";
        message.style.color = "red";
        return;
    }

    if (identifiant.toLowerCase() === "luc" && password === "luc") {
        message.textContent = "";
        window.location.href = "../tableau_de_bord/index.html";
    } else {
        message.textContent = "Identifiant ou mot de passe incorrect valide";
        message.style.color = "red";
    }
});