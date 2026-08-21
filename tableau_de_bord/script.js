document.addEventListener('DOMContentLoaded', function() {

    const lienTableauBord = document.getElementById('lien-tableau-bord');
    const lienDemandes = document.getElementById('lien-demandes');
    const lienConge = document.getElementById('lien-conge');

    const sectionTableauBord = document.getElementById('div1');
    const sectionDemandes = document.getElementById('section-demandes');
    const sectionConge = document.getElementById('section-conge');

    const nav1bar = document.querySelector(".secondiv");
    const nav2bar = document.querySelector(".thirtdiv");
    const nav3bar = document.querySelector(".fourdiv");

    function cacherToutesLesSections() {
        sectionTableauBord.style.display = 'none';
        sectionDemandes.style.display = 'none';
        sectionConge.style.display = 'none';
    }

    function reinitialiserStylesNav() {
        [nav1bar, nav2bar, nav3bar].forEach(el => {
            if (el) {
                el.style.backgroundColor = "";
                el.style.borderTopLeftRadius = "";
                el.style.borderLeft = "";
            }
        });
    }

    function appliquerStyleActif(navbar) {
        if (navbar) {
            navbar.style.backgroundColor = "#e1dcdc";
            navbar.style.borderTopLeftRadius = "10px";
            navbar.style.borderLeft = "4px solid #835500";
        }
    }

    function afficherSection(nomSection) {
        cacherToutesLesSections();
        reinitialiserStylesNav();

        if (nomSection === 'tableau-bord') {
            sectionTableauBord.style.display = 'block';
            appliquerStyleActif(nav1bar);
        } else if (nomSection === 'demandes') {
            sectionDemandes.style.display = 'block';
            appliquerStyleActif(nav2bar);
        } else if (nomSection === 'conge') {
            sectionConge.style.display = 'block';
            appliquerStyleActif(nav3bar);
        }

        localStorage.setItem('sectionActive', nomSection);
    }

    lienTableauBord.addEventListener('click', function(e) {
        e.preventDefault();
        afficherSection('tableau-bord');
    });

    lienDemandes.addEventListener('click', function(e) {
        e.preventDefault();
        afficherSection('demandes');
    });

    lienConge.addEventListener('click', function(e) {
        e.preventDefault();
        afficherSection('conge');
    });

    const derniereSection = localStorage.getItem('sectionActive');
    afficherSection(derniereSection || 'tableau-bord');

});

document.querySelectorAll('.lien-loading').forEach(lien => {
    lien.addEventListener('click', function (e) {
        e.preventDefault(); // on bloque la redirection immédiate

        const destination = this.getAttribute('href');
        const bouton = this.querySelector('.btn-loading');
        const overlay = document.getElementById('overlayLoading');

        // 1. Le bouton passe en mode "chargement" (spinner dedans)
        bouton.classList.add('chargement');

        // 2. L'overlay plein écran apparaît
        overlay.classList.add('actif');

        // 3. Après un petit délai (le temps de voir l'animation), on redirige
        setTimeout(() => {
            window.location.href = destination;
        }, 1100); // 800ms = temps d'affichage du loading
    });
});