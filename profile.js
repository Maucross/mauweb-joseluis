function goBack() {
    window.history.back();
}

function showInstructions() {
    document.getElementById('instructions').style.display = 'block';
}
function downloadImage() {
    const link = document.createElement('a');
    link.href = 'images/profile-qr.jpg';
    link.download = 'images/profile-qr.jpg';
    link.click();
}

function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: 'Jose Luis Cahua',
            text: '¡Dale un vistazo a mi sitio web ^^',
            url: window.location.href
        }).then(() => {
            console.log('¡Página compartida con éxito!');
        }).catch((error) => {
            console.error('Error al compartir:', error);
        });
    } else {
        alert('La API de Web Share no es compatible con este navegador.');
    }
}