// Cargar contenido inicial
cargarContenido('inicio.html');

// Función para cargar contenido dinámicamente
function cargarContenido(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.querySelector('.contenido').innerHTML = html;
        })
        .catch(error => {
            console.error('Error al cargar el contenido:', error);
        });
}
