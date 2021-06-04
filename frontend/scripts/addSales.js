window.addEventListener('load', salesForm)

function salesForm() {
    const form = document.getElementById('salesForm');
    form.addEventListener('submit', function () { addSales() })
}

function addSales() {
    const url = 'http://localhost:3333/addSales';
    const data = {
        booking_site_id: document.getElementById('bookingSite').value,
        hotel_id: document.getElementById('hotel').value,
        price: document.getElementById('priceInput').value,
        initial_date: new Date(document.getElementById('initialDate').value).toISOString(),
        final_date: new Date(document.getElementById('finalDate').value).toISOString()
    }
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(url, options)
        .then(res =>{
            if (res.status == 200) {
                alert('Promoção adicionada com sucesso');
            } else {
                alert('Falha ao adicionar promoção, tente novamente');
            }
        });
}