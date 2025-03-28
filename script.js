// Script para el carrusel de imágenes
const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
let currentIndex = 0;

function moveCarousel() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0; // Volver al inicio del carrusel
    }
    const offset = -currentIndex * (images[0].width + 10); // Desplazar el carrusel
    carousel.style.transform = `translateX(${offset}px)`;
}

// Mover el carrusel cada 3 segundos
setInterval(moveCarousel, 3000); // 3000ms = 3 segundos
