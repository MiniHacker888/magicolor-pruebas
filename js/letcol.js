// Función para verificar si el fondo es oscuro
function checkDarkBackground() {
    const navbar = document.querySelector('header'); // Seleccionamos la barra de navegación
    const backgroundColor = window.getComputedStyle(navbar).backgroundColor; // Obtenemos el color de fondo

    // Función para verificar si un color es oscuro
    function isDarkColor(color) {
        const rgb = color.match(/\d+/g); // Extraemos los valores RGB
        const r = parseInt(rgb[0]);
        const g = parseInt(rgb[1]);
        const b = parseInt(rgb[2]);

        // Usamos la fórmula de luminancia relativa para detectar colores oscuros
        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        return luminance < 128; // Si la luminancia es baja, el color es oscuro
    }

    // Si el fondo es oscuro, agregamos la clase 'dark-mode'
    if (isDarkColor(backgroundColor)) {
        navbar.classList.add('dark-mode');
    } else {
        navbar.classList.remove('dark-mode');
    }
}

// Llamamos a la función al cargar la página
window.addEventListener('load', checkDarkBackground);

// También podemos llamar a la función en caso de que el fondo cambie dinámicamente
window.addEventListener('scroll', checkDarkBackground);
