// Obtener el contenedor del carrusel
const carousel = document.querySelector('.carousel');

// Establecer la velocidad del desplazamiento (en milisegundos)
const scrollSpeed = 3000; // 3 segundos

// Función para desplazar el carrusel automáticamente
function autoScroll() {
    carousel.scrollBy({
        left: carousel.offsetWidth, // Desplazar el ancho del carrusel
        behavior: 'smooth' // Efecto suave al desplazar
    });
}

// Iniciar el desplazamiento automático
setInterval(autoScroll, scrollSpeed);
