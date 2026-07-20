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
    bouteilles[prev].style.opacity = '1';

    bouteilles[current].classList.add('actif');
    bouteilles[current].style.order = '2';
    bouteilles[current].style.opacity = '1';

    bouteilles[next].classList.add('suivant');
    bouteilles[next].style.order = '3';
    bouteilles[next].style.opacity = '1';

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
   
// Changer la couleur du boutons et des flèches
    boutons.forEach(b => b.style.backgroundColor = couleur);
    label.style.backgroundColor = couleur;
}

// === Gestion du swipe à la souris sur les bouteilles ===
const piste = document.querySelector('.bouteilles_piste');
let startX = 0;
let isDragging = false;
const seuilSwipe = 50; // distance minimale en pixels pour valider un swipe

// Clic enfoncé : début du glissement
piste.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    isDragging = true;
});

// Relâchement du clic : fin du glissement
piste.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    isDragging = false;

    const endX = e.clientX;
    const distance = endX - startX;

    if (distance > seuilSwipe) {
        // Glissement vers la droite : bouteille précédente
        current = getPrev(current);
        updateSlider();
    } else if (distance < -seuilSwipe) {
        // Glissement vers la gauche : bouteille suivante
        current = getNext(current);
        updateSlider();
    }
});

// Si la souris sort de la zone pendant le clic, on annule
piste.addEventListener('mouseleave', () => {
    isDragging = false;
});


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

// === Utilisation du clavier au clavier ===
document.addEventListener('keydown', (e) => {
    
    // Flèche gauche : bouteille précédente
    if (e.key === 'ArrowLeft') {
        current = getPrev(current);
        updateSlider();
    }
    
    // Flèche droite : bouteille suivante
    if (e.key === 'ArrowRight') {
        current = getNext(current);
        updateSlider();
    }
    
    // Touche Entrée : déclencher le bouton "DÉCOUVRIR LA CUVÉE"
    if (e.key === 'Enter') {
        document.querySelector('.decouverte_cuvee a').click();
    }
});
