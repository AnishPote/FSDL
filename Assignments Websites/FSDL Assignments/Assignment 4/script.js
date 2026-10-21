document.addEventListener("DOMContentLoaded", () => {
    const datetimeDisplay = document.getElementById('datetimeDisplay');
    const locationDisplay = document.querySelector('#locationDisplay span');
    const locationInput = document.getElementById('locationInput');
    const searchBtn = document.getElementById('searchBtn');

    function updateDateTime() {
        const now = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        
        datetimeDisplay.textContent = now.toLocaleDateString('en-US', options);
    }

    setInterval(updateDateTime, 1000);
    updateDateTime(); 

    function getNext7Days() {
        const days = [];
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let todayIdx = new Date().getDay();

        for (let i = 0; i < 7; i++) {
            days.push(dayNames[(todayIdx + i) % 7]);
        }
        return days;
    }

    const dynamicDaysOfWeek = getNext7Days();

    let temperatureData = [22, 24, 21, 26, 28, 25, 23];
    let humidityData = [60, 65, 55, 70, 75, 65, 60];
    let windSpeedData = [15, 12, 18, 10, 8, 14, 22];


    const tempCanvas = document.getElementById('temperatureChart');
    const tempChart = new Chart(tempCanvas, {
        type: 'line',
        data: {
            labels: dynamicDaysOfWeek,
            datasets: [{
                label: 'Temperature (°C)',
                data: temperatureData,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                pointRadius: 5,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            scales: { y: { suggestedMin: 0, suggestedMax: 40 } },
            plugins: { legend: { position: 'top' } }
        }
    });

    const humidityCanvas = document.getElementById('humidityChart');
    const humChart = new Chart(humidityCanvas, {
        type: 'bar',
        data: {
            labels: dynamicDaysOfWeek,
            datasets: [{
                label: 'Humidity (%)',
                data: humidityData,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1, borderRadius: 4
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            scales: { y: { beginAtZero: true, max: 100 } },
            plugins: { legend: { position: 'top' } }
        }
    });

    const windCanvas = document.getElementById('windSpeedChart');
    const windChart = new Chart(windCanvas, {
        type: 'pie',
        data: {
            labels: dynamicDaysOfWeek,
            datasets: [{
                label: 'Wind Speed (km/h)',
                data: windSpeedData,
                backgroundColor: [
                    'rgba(255, 159, 64, 0.7)', 'rgba(255, 205, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)', 'rgba(153, 102, 255, 0.7)',
                    'rgba(201, 203, 207, 0.7)', 'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)'
                ],
                borderColor: '#ffffff', borderWidth: 2
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom' } }
        }
    });

    function generateRandomData(min, max, count) {
        return Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    }


    searchBtn.addEventListener('click', () => {
        const newLocation = locationInput.value.trim();

        if (newLocation) {
            locationDisplay.textContent = newLocation;

            const newTemp = generateRandomData(5, 40, 7);    
            const newHum = generateRandomData(30, 95, 7);    
            const newWind = generateRandomData(5, 35, 7);    

            tempChart.data.datasets[0].data = newTemp;
            humChart.data.datasets[0].data = newHum;
            windChart.data.datasets[0].data = newWind;

            tempChart.update();
            humChart.update();
            windChart.update();
        }
    });

    locationInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
});
