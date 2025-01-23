
// Cargar gatos desde localStorage al cargar la página
window.onload = function () {
    const gatos = JSON.parse(localStorage.getItem('gatos')) || [];
    const catTableBody = document.getElementById('catTableBody');

    gatos.forEach(gato => {
        const newRow = catTableBody.insertRow();
        newRow.innerHTML = `
    <td>${gato.nombre}</td>
    <td>${gato.raza}</td>
    <td>${gato.edad} años</td>
    <td>${gato.ultimaVisita}</td>
    <td><i class="bi bi-star icon"></i><i class="bi bi-star icon"></i></td>
    `;
    });
};