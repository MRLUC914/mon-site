document.querySelectorAll('.btn-soumettre').forEach(bouton => {
    bouton.addEventListener('click', function (e) {
        e.preventDefault();

        const destination = this.getAttribute('data-href');
        const overlay = document.getElementById('overlayLoading');
        const icon = document.getElementById('overlayIcon');
        const text = document.getElementById('overlayText');

        this.classList.add('chargement');
        overlay.classList.add('actif');

        // Étape 1 : chargement (1.1s)
        setTimeout(() => {
            icon.className = 'fa-solid fa-circle-check overlay-icon succes';
            text.textContent = 'Demande envoyée avec succès !';

            // Étape 2 : redirection après avoir vu le check (1.2s de plus)
            setTimeout(() => {
                window.location.href = destination;
            }, 1200);
        }, 1100);
    });
});
