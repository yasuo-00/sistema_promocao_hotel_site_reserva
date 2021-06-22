window.addEventListener('load', hotelList)
function hotelList() {
    const url = 'http://localhost:3333/hotel/listAll';

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
            } else {
                alert('Erro ao listar hotéis, tente mais tarde');
            }
        });

}