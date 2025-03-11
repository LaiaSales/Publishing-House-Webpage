const fileInput = document.getElementById('fileInput');
const filePreview = document.getElementById('filePreview');
const fileNameDisplay = document.getElementById('fileName');

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (file) {
        // Mostrar el nombre del archivo
        fileNameDisplay.textContent = `Archivo seleccionado: ${file.name}`;
    } else {
        fileNameDisplay.textContent = '';
    }
});
