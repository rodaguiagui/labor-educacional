// JavaScript para carrusel de imágenes

let images = document.querySelectorAll('.carousel img');  // Selecciona todas las imágenes dentro del carrusel
let carousel = document.querySelector('.carousel');      // Selecciona el contenedor del carrusel
let currentIndex = 0;                                    // Índice inicial para las imágenes

// Función para mover el carrusel automáticamente
function moveCarousel() {
    // Comprobar si el índice es menor que el total de imágenes
    if (currentIndex < images.length - 1) {
        currentIndex++;  // Aumentar el índice
    } else {
        currentIndex = 0;  // Si es el último, volver al primero
    }

    // Mover el contenedor del carrusel hacia la imagen correspondiente
    carousel.scrollTo({
        left: images[0].offsetWidth * currentIndex,  // Mover al siguiente índice
        behavior: 'smooth',  // Desplazamiento suave
    });
}

// Llamar a la función `moveCarousel` cada 3 segundos (3000ms)
setInterval(moveCarousel, 3000);

// También puedes agregar controles manuales para el carrusel si lo deseas
// Botón para mover hacia la izquierda
document.querySelector('.prev-btn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;  // Disminuir el índice
    } else {
        currentIndex = images.length - 1;  // Si es el primero, ir al último
    }

    // Mover el contenedor hacia la imagen anterior
    carousel.scrollTo({
        left: images[0].offsetWidth * currentIndex,
        behavior: 'smooth',
    });
});

// Botón para mover hacia la derecha
document.querySelector('.next-btn').addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;  // Aumentar el índice
    } else {
        currentIndex = 0;  // Si es el último, volver al primero
    }

    // Mover el contenedor hacia la imagen siguiente
    carousel.scrollTo({
        left: images[0].offsetWidth * currentIndex,
        behavior: 'smooth',
    });
});
