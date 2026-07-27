
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