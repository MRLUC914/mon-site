
const lienTableauBord = document.getElementById('lien-tableau-bord');
const lienDemandes = document.getElementById('lien-demandes');
const lienConge = document.getElementById('lien-conge');


const sectionTableauBord = document.getElementById('div1');
const sectionDemandes = document.getElementById('section-demandes');
const sectionConge = document.getElementById('section-conge');


const nav1 = document.getElementById('card1');
const nav1bar= document.getElementById('element1');
const nav2 = document.getElementById('card2');
const nav2bar= document.getElementById('element2');
const nav3 = document.getElementById('card3');
const nav3bar= document.getElementById('element3');


function cacherToutesLesSections() {
    sectionTableauBord.style.display = 'none';
    sectionDemandes.style.display = 'none';
    sectionConge.style.display = 'none';
    n
}


lienTableauBord.addEventListener('click', function() {
    cacherToutesLesSections();
    nav1.style.color='green';
    sectionTableauBord.style.display = 'block';
});


lienDemandes.addEventListener('click', function(e) {
    e.preventDefault(); 
    cacherToutesLesSections();
    nav2.style.color ='red';
    sectionDemandes.style.display = 'block';
});


lienConge.addEventListener('click', function(e) {
    e.preventDefault(); 
    cacherToutesLesSections();
    nav3.style.color='blue';
    sectionConge.style.display = 'block';
});