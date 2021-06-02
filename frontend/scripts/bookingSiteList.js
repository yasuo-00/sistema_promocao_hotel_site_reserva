window.addEventListener('load', bookingSiteList)
function bookingSiteList() {
    const url = 'http://localhost:3333/bookingSite/listAll';

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(url, options)
        .then(res => res.json().then(jsonData => ({ status: res.status, data: jsonData })))
        .then(data => {
            if (data.status == 200) {
                document.getElementById('bookingSiteList').innerHTML = `
                        ${data.data.bookingSiteList.map(function (bookingSite) {
                    return `
                        <div class="bookingSiteCard">
                            <div class="bookingSiteImg"></div>
                            <div class="bookingSiteInfo">
                                <p class="bookingSiteName">
                                    ${bookingSite.name}
                            </p>
                                <p class="bookingSiteDescription">
                                    ${bookingSite.url}
                            </p>
                            </div>
                        </div>
                        `
                }).join('')}`;
            } else {
                alert('Erro ao listar hotéis, tente mais tarde');
            }
        });

}