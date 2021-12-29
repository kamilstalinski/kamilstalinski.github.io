
let d = document;
let body = document.body;

fetch('https://danepubliczne.imgw.pl/api/data/synop')
    .then(res => res.json())
    .then(data => {

        let weatherStations = data;
        console.log(data)

        weatherStations.forEach(station => {
            //creating div
            let divContainer = d.createElement('div');
            divContainer.classList.add('container');
            body.appendChild(divContainer);

            //creating city h1
            let city = d.createElement('h1');
            city.textContent = `${station.stacja}`;
            divContainer.appendChild(city);

            //creating div with data
            let divData = d.createElement('div');
            divData.classList.add('data');
            divData.innerHTML = `<p>Temperatura: <span class="temp">${station.temperatura}°C</span> </p><p>Wilgotność: <span class="humidity">${station.wilgotnosc_wzgledna}</span></p><p>Ciśnienie: <span class="pressure">${station.cisnienie}</span></p>`;
            divContainer.appendChild(divData);

            //creating date and time info
            let dateAndTime = d.createElement('p');
            dateAndTime.classList.add('time');
            dateAndTime.textContent = `Data: ${station.data_pomiaru} Godzina: ${station.godzina_pomiaru}`;
            divContainer.appendChild(dateAndTime)

        })

    })