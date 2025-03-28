// Carrusel automático
let index = 0;  // Índice de la imagen que se está mostrando
const images = document.querySelectorAll('.carousel img');  // Selecciona todas las imágenes del carrusel
const totalImages = images.length;  // Número total de imágenes

function changeImage() {
    // Ocultar la imagen actual
    images[index].style.display = 'none';

    // Incrementar el índice y hacer que vuelva al inicio si llegamos al final
    index = (index + 1) % totalImages;

    // Mostrar la siguiente imagen
    images[index].style.display = 'block';
}

// Inicializar el carrusel: Mostrar solo la primera imagen
images.forEach((img, i) => {
    if (i !== 0) {
        img.style.display = 'none';
    }
});

// Cambiar imagen cada 3 segundos (ajusta el tiempo según lo que necesites)
setInterval(changeImage, 3000);
