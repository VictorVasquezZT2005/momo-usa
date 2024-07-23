document.addEventListener('DOMContentLoaded', function() {
    // Añadir clase 'visible' a los elementos de la lista con animación
    const items = document.querySelectorAll('.item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, index * 100); // Añade un retraso para cada elemento
    });

    // Añadir la clase 'visible' al carrusel con animación
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        carousel.classList.add('visible');
    }
});
