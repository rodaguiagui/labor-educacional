document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    
    // Mueve el carrusel hacia la izquierda automáticamente cada 3 segundos
    setInterval(() => {
        carousel.scrollBy({left: 300, behavior: 'smooth'});  // Desplazará 300px hacia la izquierda
    }, 3000);
});
