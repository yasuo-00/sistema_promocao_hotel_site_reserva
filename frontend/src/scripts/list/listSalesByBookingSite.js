window.addEventListener('load', listSalesByBookingSite)
function listSalesByBookingSite() {
    const url = 'http://localhost:3333/sales/listByBookingSite';

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
                document.getElementById('salesList').innerHTML = `
                        ${data.data.salesList.map(function (sales) {
                    return `
                        <div class="hotelCard">
                            <div class="hotelImg"></div>
                            <div class="hotelInfo">
                                <p class="hotelName">
                                    ${sales.hotel_name}
                                </p>
                                <p class="bookingSiteUrl">
                                    ${sales.url}
                                </p>
                                <p class="hotelCity">
                                    ${sales.city}
                                </p>
                                <p class="hotelDescription">
                                    ${sales.description}
                                </p>
                                <p clas="salesStartDate">
                                    Data inicial: ${formatDate(sales.start_date)}
                                </p>
                                <p clas="salesEndDate">
                                    Data final: ${formatDate(sales.end_date)}
                                </p>
                                <p class="hotelPrice">
                                    R$ ${sales.daily_rate} por noite
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

function formatDate(date) {
    const formattedDate = new Date(date);
    return formattedDate.getDate() + '/' + (formattedDate.getMonth()+1)+'/' +formattedDate.getFullYear();
}