window.addEventListener('load', registerHotel)

function registerHotel() {
    const form = document.getElementById('registerForm');
    form.addEventListener('submit', function () { submitHotelRegister() })
}

function submitHotelRegister() {
    const url = 'http://localhost:3333/hotel/register';
    const data = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        name: document.getElementById('hotelName').value,
        cnpj: document.getElementById('cnpj').value,
        city: document.getElementById('city').value,
        daily_rate:document.getElementById('dailyRate').value,

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
            if (data.status == 200) {
                window.location.replace('http://localhost:3333/userHome');
            } else {
                alert('Email ou senha incorretos');
            }
        });

}