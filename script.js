<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    
    // Mueve el carrusel hacia la izquierda automáticamente cada 3 segundos
    setInterval(() => {
        carousel.scrollBy({left: 300, behavior: 'smooth'});  // Desplazará 300px hacia la izquierda
    }, 3000);
});
=======
// script.js

// Esperamos que el contenido de la página esté cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {

    // Carrousel de imágenes (si tienes una serie de imágenes que se deben mover)
    let currentIndex = 0; // Índice actual de la imagen
    const images = document.querySelectorAll('.carousel img'); // Seleccionamos las imágenes dentro del carrusel

    // Función para cambiar las imágenes
    function showNextImage() {
        images[currentIndex].style.display = 'none'; // Ocultamos la imagen actual
        currentIndex = (currentIndex + 1) % images.length; // Calculamos el índice de la siguiente imagen
        images[currentIndex].style.display = 'block'; // Mostramos la siguiente imagen
    }

    // Mostramos la primera imagen al cargar la página
    images.forEach(image => image.style.display = 'none');
    if (images.length > 0) images[0].style.display = 'block';

    // Configuramos el intervalo para cambiar de imagen cada 3 segundos
    setInterval(showNextImage, 3000); // Cambia la imagen cada 3 segundos (3000 ms)

    // Si tienes algún video, puedes hacer que se reproduzca automáticamente
    const video = document.querySelector('#myVideo'); // Asegúrate de que tu video tenga id="myVideo"
    if (video) {
        video.autoplay = true;  // Reproduce el video automáticamente
        video.loop = true;      // Hace que el video se repita
    }

});
>>>>>>> 77729f95603c72935bf1a1aeb53cd11beb03b4e5
