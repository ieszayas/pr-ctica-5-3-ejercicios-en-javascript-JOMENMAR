document.getElementById('clearButton').addEventListener('click', function () {
    document.getElementById('registrationForm').reset();
    toast('Los campos han sido borrados.');
});

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Validaciones adicionales
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const ultimaVisita = document.getElementById('ultima-visita').value;
    const observaciones = document.getElementById('observaciones').value;
    const raza = document.getElementById('raza').value;
    const consentimiento = document.getElementById('consentimiento').checked;

    // Validar que el nombre no contenga números ni caracteres especiales
    const namePattern = /^[a-zA-Z\s]+$/;
    if (!namePattern.test(nombre)) {
        toast('El nombre solo debe contener letras.');
        return;
    }

    // Validar que la edad sea un número positivo
    if (edad <= 0) {
        toast('La edad debe ser un número positivo.');
        return;
    }

    // Validar que la fecha de última visita no sea futura
    const today = new Date();
    const visitDate = new Date(ultimaVisita);
    if (visitDate > today) {
        toast('La fecha de última visita no puede ser futura.');
        return;
    }

    // Verificar que al menos un checkbox esté seleccionado
    const vacunasSi = document.getElementById('vacunas-si').checked;
    const vacunasNo = document.getElementById('vacunas-no').checked;
    if (!vacunasSi && !vacunasNo) {
        toast('Debes seleccionar si tu gato tiene todas las vacunas.');
        return;
    }

    // Verificar consentimiento
    if (!consentimiento) {
        toast('Debes aceptar el consentimiento para registrar a tu gato.');
        return;
    }

    // Si todas las validaciones pasan, almacenar el gato en localStorage
    const gatos = JSON.parse(localStorage.getItem('gatos')) || [];
    const nuevoGato = {
        nombre: nombre,
        raza: raza,
        edad: edad,
        ultimaVisita: ultimaVisita,
        observaciones: observaciones
    };
    gatos.push(nuevoGato);
    localStorage.setItem('gatos', JSON.stringify(gatos));

    toast('El formulario se ha enviado correctamente.');
    document.getElementById('registrationForm').reset(); // Limpiar el formulario después de enviar
});

/**
 * Muestra un toast en el centro inferior de la pantalla.
 * @param {string} message - Mensaje a mostrar en el toast.
 */
function toast(message) {
    // Crear el contenedor del toast si no existe
    if (!document.querySelector('.toast-container')) {
        const container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    // Crear el elemento del toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;

    // Añadir el toast al contenedor
    const container = document.querySelector('.toast-container');
    container.appendChild(toast);

    // Mostrar el toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    // Ocultar el toast después de 4 segundos
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300); // Eliminar del DOM
    }, 4000);
}
