// Sélection des fonds et des bouteilles séparément
const fonds = document.querySelectorAll('.fond');
const bouteilles = document.querySelectorAll('.bouteille');
let current = 0;
const total = fonds.length;

// Index précédent avec boucle
function getPrev(index) {
    return (index - 1 + total) % total;
}

// Index suivant avec boucle
function getNext(index) {
    return (index + 1) % total;
}

// Mise à jour des fonds
function updateFond() {
    fonds.forEach(fond => fond.classList.remove('actif'));
    fonds[current].classList.add('actif');
}

// Mise à jour des bouteilles : carrousel avec glissement
function updateBouteilles() {
    bouteilles.forEach((b, i) => {
        b.classList.remove('actif', 'precedent', 'suivant');
        b.style.opacity = '0';
        b.style.order = '99';
    });

    const prev = getPrev(current);
    const next = getNext(current);

    bouteilles[prev].classList.add('precedent');
    bouteilles[prev].style.order = '1';
    bouteilles[prev].style.opacity = '0.6';

    bouteilles[current].classList.add('actif');
    bouteilles[current].style.order = '2';
    bouteilles[current].style.opacity = '1';

    bouteilles[next].classList.add('suivant');
    bouteilles[next].style.order = '3';
    bouteilles[next].style.opacity = '0.6';

    const piste = document.querySelector('.bouteilles_piste');
    piste.style.transform = 'translateX(0%)';
}

// Couleurs de navigation par slide
const couleurs = ['#161B4B', '#E8941A', '#107D81', '#E9453F'];

// Mise à jour de la couleur de navigation
function updateNavigation() {
    const boutons = document.querySelectorAll('.bouton_navigation');
    const label = document.querySelector('.decouverte_cuvee');
    const couleur = couleurs[current];
    
    boutons.forEach(b => b.style.backgroundColor = couleur);
    label.style.backgroundColor = couleur;
}

// Fonction principale
function updateSlider() {
    updateFond();
    updateBouteilles();
    updateNavigation();
}

// Bouton précédent
document.getElementById('bouton_precedent').addEventListener('click', () => {
    current = getPrev(current);
    updateSlider();
});

// Bouton suivant
document.getElementById('bouton_suivant').addEventListener('click', () => {
    current = getNext(current);
    updateSlider();
});

// Initialisation au chargement
updateSlider();


