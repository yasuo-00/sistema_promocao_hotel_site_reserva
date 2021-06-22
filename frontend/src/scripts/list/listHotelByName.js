window.addEventListener('load', listHotelByName)

function listHotelByName() {
    const form = document.getElementById('searchForm');
    form.addEventListener('submit', function (e){submitQuery()})
}
function submitQuery() {
    const url = 'http://localhost:3333/hotel/listByName';
    const options = {
        method: 'POST',
        body: JSON.stringify({query: document.getElementById('searchInput').value}),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(url, options)
        .then(res => res.json().then(jsonData => ({ status: res.status, data: jsonData })))
        .then(data => {
            console.log(data);
            if (data.status == 200) {
                document.getElementById('hotelList').innerHTML = `
                        ${data.data.hotelList.map(function (hotel) {
                    return `
                        <div class="hotelCard">
                            <div class="hotelImg"></div>
                            <div class="hotelInfo">
                                <p class="hotelName">
                                    ${hotel.name}
                            </p>
                                <p class="hotelDescription">
                                    ${hotel.description}
                            </p>
                                <p class="hotelPrice">
                                    R$ ${hotel.daily_rate} por noite
                            </p>
                            </div>
                        </div>
                        `
                }).join('')}`;
                window.stop();
            } else {
                alert('Erro ao listar hotéis, tente mais tarde');
            }
        });

}