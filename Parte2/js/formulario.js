document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Validate form fields
    const nombre = document.getElementById('nombre').value.trim();
    const edad = document.getElementById('edad').value;
    const raza = document.getElementById('raza').value;
    const ultimaVisita = document.getElementById('ultima-visita').value;
    const vacunas = document.querySelector('input[name="vacunas"]:checked');
    const telefono = document.getElementById('telefono').value.trim();
    const direccion = document.getElementById('direccion').value.trim();

    if (!nombre) {
        alert("Por favor, ingresa el nombre de tu gato.");
        return;
    }
    if (!edad || edad <= 0) {
        alert("Por favor, ingresa una edad válida.");
        return;
    }
    if (!raza) {
        alert("Por favor, selecciona una raza.");
        return;
    }
    if (raza === 'Otra' && !document.getElementById('customBreedInput')) {
        alert("Por favor, especifica la raza.");
        return;
    }
    if (!ultimaVisita) {
        alert("Por favor, ingresa la fecha de última visita.");
        return;
    }
    if (!vacunas) {
        alert("Por favor, selecciona si tiene todas las vacunas.");
        return;
    }
    if (!telefono) {
        alert("Por favor, ingresa tu número de teléfono.");
        return;
    }
    if (!direccion) {
        alert("Por favor, ingresa tu dirección.");
        return;
    }

    // Save the cat data to local storage
    const gatos = JSON.parse(localStorage.getItem('gatos')) || [];
    gatos.push({ nombre, edad, raza, ultimaVisita, vacunas: vacunas.value, telefono, direccion });
    localStorage.setItem('gatos', JSON.stringify(gatos));

    // Save the address to local storage
    localStorage.setItem('lastAddress', direccion);

    // Show a success message
    const toastBody = document.getElementById('toastBody');
    toastBody.innerText = 'Registro exitoso!';
    const toast = new bootstrap.Toast(document.getElementById('toastMessage'));
    toast.show();

    // Clear the form
    this.reset();
});

// Handle custom breed input
document.getElementById('raza').addEventListener('change', function() {
    const customBreedInput = document.getElementById('customBreedInput');
    if (this.value === 'Otra') {
        if (!customBreedInput) {
            const input = document.createElement('input');
            input.type = 'text';
            input.id = 'customBreedInput';
            input.className = 'form-control mt-2';
            input.placeholder = 'Escribe la raza';
            this.parentNode.appendChild(input);
        }
    } else {
        const customBreedInput = document.getElementById('customBreedInput');
        if (customBreedInput) {
            customBreedInput.remove();
        }
    }
});
