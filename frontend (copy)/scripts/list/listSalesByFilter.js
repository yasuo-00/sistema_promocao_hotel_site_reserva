window.addEventListener('load', listSalesByFilter);

function listSalesByFilter() {
    const form = document.getElementById('filterForm');
    form.addEventListener('submit', function () { submitQuery() });
}

function submitQuery() {
    const url = 'http://localhost:3333/sales/listByFilter';
    const startDate = new Date(document.getElementById('startDate').value)
    const endDate = new Date(document.getElementById('endDate').value)
    if (startDate > endDate | isNaN(startDate) && !isNaN(endDate)) {
        alert('Datas inválidas. Por favor, colocar uma data de início anterior à data final');
    } else {
        data = {
            destination: document.getElementById('destination').value,
            start_date: document.getElementById('startDate').value,
            end_date: document.getElementById('endDate').value
        }
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(url, options)
            .then(res => res.json().then(jsonData => ({ status: res.status, data: jsonData })))
            .then(data => {
                console.log(data);
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
                    window.stop();
                } else {
                    alert('Erro ao listar hotéis, tente mais tarde');
                }
            })
    }
}