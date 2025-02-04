window.onload = function () {
    // Fetch Random Cat Fact
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            document.getElementById('catFact').innerText = data.fact;
        })
        .catch(error => console.error('Error fetching cat fact:', error));

    // Fetch Random Cat Images for Carousel
    const catImageCount = 3; // Number of images to fetch
    const catCarouselInner = document.getElementById('catCarouselInner');

    for (let i = 0; i < catImageCount; i++) {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
            .then(data => {
                const isActive = i === 0 ? 'active' : '';
                const newItem = document.createElement('div');
                newItem.className = `carousel-item ${isActive}`;
                newItem.innerHTML = `<img src="${data[0].url}" class="d-block w-100" alt="Random Cat">`;
                catCarouselInner.appendChild(newItem);
            })
            .catch(error => console.error('Error fetching cat image:', error));
    }

    // Populate Cat Data from Local Storage
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

    // Fetch Weather Data
    document.getElementById('fetchWeather').addEventListener('click', function() {
        const city = document.getElementById('cityInput').value;
        const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    const weatherDescription = data.weather[0].description;
                    const temperature = data.main.temp;
                    document.getElementById('weatherInfo').innerText = `El clima en ${city} es ${weatherDescription} con una temperatura de ${temperature}°C.`;
                } else {
                    document.getElementById('weatherInfo').innerText = 'Ciudad no encontrada.';
                }
            })
            .catch(error => console.error('Error fetching weather data:', error));
    });

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
