// Function to show service details in a popup
function showDetails(service) {
    let details = '';
    switch(service) {
        case 'Chequeos Médicos':
            details = 'Nuestros chequeos médicos incluyen exámenes físicos, análisis de sangre y más.';
            break;
        case 'Estética Felina':
            details = 'Ofrecemos servicios de baño, corte de pelo y cuidado de uñas para mantener a tu gato limpio y saludable.';
            break;
        case 'Hospedaje':
            details = 'Nuestro servicio de hospedaje proporciona un ambiente seguro y cómodo para tu gato mientras estás fuera.';
            break;
        case 'Vacunación':
            details = 'Ofrecemos servicios de vacunación para proteger a tu gato de enfermedades comunes.';
            break;
        case 'Desparasitación':
            details = 'Realizamos desparasitaciones para asegurar la salud de tu gato.';
            break;
        case 'Emergencias':
            details = 'Atención de emergencia para tu gato en situaciones críticas.';
            break;
    }

    // Create a popup div
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
        <h5>${service}</h5>
        <p>${details}</p>
        <button onclick="closePopup()">Cerrar</button>
    `;
    document.body.appendChild(popup);

    // Center the popup
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = document.body.classList.contains('dark-mode') ? '#333' : 'white';
    popup.style.color = document.body.classList.contains('dark-mode') ? 'white' : 'black';
    popup.style.border = '1px solid #ccc';
    popup.style.padding = '20px';
    popup.style.zIndex = '1000';
}

// Function to close the popup
function closePopup() {
    const popup = document.querySelector('.popup');
    if (popup) {
        document.body.removeChild(popup);
    }
}
