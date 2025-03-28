document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    let index = 0;

    function moveCarousel() {
        index++;
        if (index > 2) {
            index = 0;
        }
        carousel.style.transform = `translateX(${-index * 100}%)`;
    }

    setInterval(moveCarousel, 3000); // Cambia cada 3 segundos
});
