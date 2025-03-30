document.addEventListener("DOMContentLoaded", function () {
    const carruselContainer = document.querySelector(".carrusel-container");
    const imagenes = document.querySelectorAll(".carrusel-container img");
    let indiceActual = 0;

    function mostrarImagen(indice) {
        const anchoImagen = imagenes[0].clientWidth;
        carruselContainer.style.transform = `translateX(-${indice * anchoImagen}px)`;
    }

    // Botones de navegación
    const btnAnterior = document.createElement("button");
    btnAnterior.textContent = "Anterior";
    document.body.appendChild(btnAnterior);

    const btnSiguiente = document.createElement("button");
    btnSiguiente.textContent = "Siguiente";
    document.body.appendChild(btnSiguiente);

    // Eventos de los botones
    btnAnterior.addEventListener("click", function () {
        if (indiceActual > 0) {
            indiceActual--;
        } else {
            indiceActual = imagenes.length / 2 - 1;
        }
        mostrarImagen(indiceActual);
    });

    btnSiguiente.addEventListener("click", function () {
        if (indiceActual < imagenes.length / 2 - 1) {
            indiceActual++;
        } else {
            indiceActual = 0;
        }
        mostrarImagen(indiceActual);
    });

    // Inicializar el carrusel
    mostrarImagen(indiceActual);
});
