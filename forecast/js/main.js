
// let d = document;
// let body = document.body;
// let wrapper = d.querySelector('.wrapper');



// fetch('https://danepubliczne.imgw.pl/api/data/synop')
//     .then(res => res.json())
//     .then(data => {

//         let weatherStations = data;
//         console.log(data)

//         const addItem = () => {
//             let cover = d.createElement('div');
//             cover.classList.toggle('cover')
//             body.appendChild(cover);

//             let additionalDiv = d.createElement('div');
//             additionalDiv.classList.add('div-additional');
//             cover.appendChild(additionalDiv);
//         }

//         weatherStations.forEach(station => {

//             //creating div
//             let divContainer = d.createElement('div');
//             divContainer.classList.add('container');
//             wrapper.appendChild(divContainer);

//             //creating city h1
//             let city = d.createElement('h1');
//             city.textContent = `${station.stacja}`;
//             divContainer.appendChild(city);

//             //creating div with data
//             let divData = d.createElement('div');
//             divData.classList.add('data');
//             divData.innerHTML = `<p>Temperatura: <span id="temp">${station.temperatura}°C</span> </p><p>Wilgotność: <span class="humidity">${station.wilgotnosc_wzgledna}</span></p><p>Ciśnienie: <span class="pressure">${station.cisnienie}</span></p>`;
//             divContainer.appendChild(divData);

//             //creating date and time info
//             // let dateAndTime = d.createElement('p');
//             // dateAndTime.classList.add('time');
//             // dateAndTime.textContent = `Data: ${station.data_pomiaru} Godzina: ${station.godzina_pomiaru}:00`;
//             // divContainer.appendChild(dateAndTime)

//             if (station.temperatura.includes('-')) {
//                 divContainer.style.backgroundColor = '#BEDDF7';

//                 let snowFlake = d.createElement('img');
//                 snowFlake.setAttribute('src', 'img/snowflake-svgrepo-com.svg');
//                 snowFlake.classList.add('snow-flake');
//                 divContainer.appendChild(snowFlake)
//             }

//             divContainer.addEventListener('click', addItem)
//         })

//     })


// let obietnica = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // console.log('obietnica niespełniona');
//         reject(new Error('odrzucono'))
//     }, 4000)
//     setTimeout(() => {
//         // console.log('obietnica spełniona');
//         resolve({ msg: 'obietnica spełniona' });
//     }, 3000)
//     // resolve('obietnica spełniona')
// })

// setTimeout(() => {
//     console.log(obietnica);
// }, 5000)

// console.log(obietnica);

// obietnica
//     .then((result) => {
//         console.log(result);
//         return result.msg
//     })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log('finally finished')
//     })

async function obiecam() {
    let res = await new Promise((res, rej) => {
        res('10')
    })
    return res;
}

obiecam().then(res => {
    console.log(res)
})

let present = obiecam();

console.log(present)