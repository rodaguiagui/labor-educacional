// Carrusel de imágenes: Manejar el desplazamiento automático de las imágenes
let carousel = document.querySelector('.carousel');
let images = document.querySelectorAll('.carousel img');
let currentIndex = 0;

// Función para cambiar la imagen en el carrusel
function showNextImage() {
    images[currentIndex].style.display = 'none'; // Oculta la imagen actual
    currentIndex = (currentIndex + 1) % images.length; // Siguiente imagen
    images[currentIndex].style.display = 'block'; // Muestra la siguiente imagen
}

// Inicializa el carrusel mostrando solo la primera imagen
images.forEach((img, index) => {
    if (index !== 0) {
        img.style.display = 'none'; // Oculta las imágenes que no sean la primera
    }
});

// Configura el carrusel para cambiar de imagen cada 3 segundos
setInterval(showNextImage, 3000);

// Botones de llamada a la acción (CTA)
const ctaButtons = document.querySelectorAll('.cta-btn');

ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        alert('¡Gracias por interesarte! Estamos en contacto.');
    });
});
