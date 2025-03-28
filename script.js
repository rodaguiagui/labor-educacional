// Script para el carrusel de imágenes
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel img");
    let index = 0;
    const intervalTime = 3000; // 3 segundos para el desplazamiento automático

    // Función para mover el carrusel
    function moveCarousel() {
        // Desplazar a la siguiente imagen
        index = (index + 1) % images.length; // Mantiene el índice dentro del rango de las imágenes
        carousel.scrollTo({
            left: images[index].offsetLeft,
            behavior: 'smooth'
        });
    }

    // Mueve el carrusel cada 3 segundos
    setInterval(moveCarousel, intervalTime);
});
