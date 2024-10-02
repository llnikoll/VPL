document.getElementById('buscar-btn').addEventListener('click', function() {
    const cin = document.getElementById('cin').value;
    const tipoPadron = document.querySelector('input[name="padron"]:checked').value;
    const resultadoCard = document.getElementById('resultado-card');
    const resultadoTexto = document.getElementById('resultado-texto');

    // Aquí puedes realizar la consulta a la API del padrón electoral
    // Este es solo un ejemplo de cómo podrías estructurar la llamada
    if (cin) {
        resultadoTexto.innerText = `Buscando información para: ${cin} (${tipoPadron})...`;
        resultadoCard.style.display = 'block';
        
        // Simulación de respuesta (reemplaza esto con la llamada a la API)
        setTimeout(() => {
            resultadoTexto.innerText = `Información encontrada para: ${cin}.`;
            // Aquí puedes agregar más detalles según la respuesta de la API
        }, 2000);
    } else {
        resultadoTexto.innerText = 'Por favor, ingrese su CIN.';
        resultadoCard.style.display = 'block';
    }
});
