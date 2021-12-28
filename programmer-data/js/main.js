let getDataBtn = document.getElementById('get-data');

const getData = () => {
    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .then(res => res.json())
        .then(data => {
            console.log(data);

            let div = document.createElement('div');
            div.setAttribute('id', 'dane-programisty');
            div.innerHTML = `<p>Imię: ${data.imie}</p>
                             <p>Nazwisko: ${data.nazwisko}</p>
                             <p>Zawód: ${data.zawod}</p>
                             <p>Firma: ${data.firma}</p>`
            document.body.appendChild(div);
        })
}

getDataBtn.addEventListener('click', getData) 