// Sélection de tous les slides
const slides = document.querySelectorAll('.slide, .slide_active');
let current = 0;

// Fonction pour afficher le slide souhaité
function showSlide(index) {
    // Cacher le slide actuel
    slides[current].classList.remove('slide_active');
    slides[current].classList.add('slide');

    // Calculer le nouvel index (boucle)
    current = (index + slides.length) % slides.length;

    // Afficher le nouveau slide
    slides[current].classList.remove('slide');
    slides[current].classList.add('slide_active');
}

// Bouton précédent
document.getElementById('bouton_precedent').addEventListener('click', () => {
    showSlide(current - 1);
});

// Bouton suivant
document.getElementById('bouton_suivant').addEventListener('click', () => {
    showSlide(current + 1);
});