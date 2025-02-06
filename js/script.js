const arrowRight = document.querySelector('.projets-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.projets-box .navigation .arrow-left');

let index = 0; // Commence à 0

const activeProjets = () => {
    const imgSlide = document.querySelector('.projets-carousel .img-slide');
    const projetsDetails = document.querySelectorAll('.projets-detail');

    // Déplace les images du carousel en fonction de l'index
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    // Réinitialise l'affichage des détails du portfolio et active celui à l'index actuel
    projetsDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    projetsDetails[index].classList.add('active');

    // Désactive la flèche gauche si on est sur le premier élément
    if (index === 0) {
        arrowLeft.classList.add('disabled');
    } else {
        arrowLeft.classList.remove('disabled');
    }

    // Désactive la flèche droite si on est sur le dernier élément
    if (index === projetsDetails.length - 1) {
        arrowRight.classList.add('disabled');
    } else {
        arrowRight.classList.remove('disabled');
    }
};

// Clic sur la flèche droite
arrowRight.addEventListener('click', () => {
    if (index < document.querySelectorAll('.projets-detail').length - 1) {
        index++;
    }
    activeProjets();
});

// Clic sur la flèche gauche
arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
    }
    activeProjets();
});

// Initialisation au chargement
activeProjets();
