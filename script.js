document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.querySelector(".carrusel-container");
    let posicion = 0;

    function moverCarrusel() {
        posicion -= 1;
        if (posicion < -33.33) {
            posicion = 0;
        }
        carrusel.style.transform = `translateX(${posicion}%)`;
    }

    setInterval(moverCarrusel, 50);
});
