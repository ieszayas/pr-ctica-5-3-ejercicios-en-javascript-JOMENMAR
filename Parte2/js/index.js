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

    // Enlarge image function
    function enlargeImage(img) {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.onclick = function() {
            document.body.removeChild(modal);
        };
        const newImg = document.createElement('img');
        newImg.src = img.src;
        newImg.style.maxWidth = '90%';
        newImg.style.maxHeight = '90%';
        modal.appendChild(newImg);
        document.body.appendChild(modal);
    }

    // Change table color to selected color
    document.getElementById('colorSelector').addEventListener('input', function() {
        const color = this.value;
        const cells = document.querySelectorAll('#catTableBody td');
        cells.forEach(cell => {
            cell.style.backgroundColor = color;
        });
        
    });

    // Dynamic search
    document.getElementById('searchField').addEventListener('input', function() {
        const filter = this.value.toLowerCase();
        const rows = document.querySelectorAll('#catTableBody tr');
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(filter) ? '' : 'none';
        });
    });
};
