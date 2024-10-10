// /js/index.js

// Función para cargar contenido HTML dinámico
function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data)
        .catch(error => console.error('Error al cargar', error));
}

// Cargar secciones en el index.html
loadHTML('header', 'sections/header.html');
loadHTML('section1', 'sections/section1.html');
