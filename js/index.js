// Obtener el elemento del menú hamburguesa
var hamburgerMenu = document.getElementById('hamburger-menu');

// Obtener el contenedor de los enlaces de navegación
var navLinks = document.getElementById('nav-links');

// Agregar un event listener al menú hamburguesa
hamburgerMenu.addEventListener('click', function() {
    // Alternar la clase 'active' en el contenedor de enlaces de navegación
    navLinks.classList.toggle('active');
});

