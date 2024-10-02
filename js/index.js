// Obtener el elemento del menú hamburguesa
var hamburgerMenu = document.getElementById('hamburger-menu');

// Obtener el contenedor de los enlaces de navegación
var navLinks = document.getElementById('nav-links');

// Agregar un event listener al menú hamburguesa
hamburgerMenu.addEventListener('click', function() {
    // Alternar la clase 'active' en el contenedor de enlaces de navegación
    navLinks.classList.toggle('active');
});

// Funcionalidad para desplegar/ocultar los dropdowns
var dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener('click', function(event) {
        // Evitar que el clic en el texto cierre el menú
        event.stopPropagation();

        // Alternar la clase 'active' en el contenido del dropdown
        var dropdownContent = this.querySelector('.dropdown-content');
        dropdownContent.classList.toggle('active');
        
        // Cerrar otros dropdowns si están abiertos
        dropdowns.forEach(function(otherDropdown) {
            if (otherDropdown !== dropdown) {
                otherDropdown.querySelector('.dropdown-content').classList.remove('active');
            }
        });
    });
});

// Cerrar dropdowns al hacer clic fuera de ellos
document.addEventListener('click', function() {
    dropdowns.forEach(function(dropdown) {
        dropdown.querySelector('.dropdown-content').classList.remove('active');
    });
});
