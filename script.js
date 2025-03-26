// Esperar a que el documento cargue completamente
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleccionar el botón de llamada a la acción
    const ctaButton = document.getElementById("cta-button");

    // Función para manejar el clic en el botón
    function handleButtonClick() {
        // Mostrar un mensaje de bienvenida al hacer clic en el botón
        alert("¡Gracias por tu interés! Pronto descubrirás más sobre nosotros.");

        // Puedes redirigir al usuario a otra página
        // Ejemplo: window.location.href = "https://www.ejemplo.com";

        // O mostrar una sección oculta con más información
        // Ejemplo: document.getElementById("informacion-adicional").style.display = "block";
    }

    // Asociar la función al evento de clic en el botón
    ctaButton.addEventListener("click", handleButtonClick);

    // Agregar transiciones y efectos para interacciones
    ctaButton.addEventListener("mousedown", () => {
        ctaButton.style.transform = "scale(0.98)";  // Efecto de presionar el botón
    });

    ctaButton.addEventListener("mouseup", () => {
        ctaButton.style.transform = "scale(1)";  // Restaurar el tamaño original
    });

    ctaButton.addEventListener("mouseleave", () => {
        ctaButton.style.transform = "scale(1)";  // Restaurar el tamaño si el cursor sale del botón
    });

    // Animación para el encabezado (hero)
    const heroHeader = document.querySelector(".hero h1");
    const heroParagraph = document.querySelector(".hero p");

    // Función para animar los textos
    function animateHeroText() {
        heroHeader.style.opacity = 1;
        heroParagraph.style.opacity = 1;
    }

    // Usar un tiempo de espera para dar una animación
    setTimeout(animateHeroText, 500);

    // Animación de aparición suave para el contenido
    const sectionContent = document.querySelector("section");

    // Hacer que la sección se muestre con opacidad
    function showSectionContent() {
        sectionContent.style.opacity = 1;
        sectionContent.style.transition = "opacity 1s ease-in-out";
    }

    // Mostrar contenido después de un pequeño retraso
    setTimeout(showSectionContent, 1000);

    // Cambiar el color de fondo al pasar el ratón por encima de la sección
    sectionContent.addEventListener("mouseenter", () => {
        sectionContent.style.backgroundColor = "#e9ecef";  // Cambio de color
    });

    sectionContent.addEventListener("mouseleave", () => {
        sectionContent.style.backgroundColor = "";  // Restaurar color
    });
});
