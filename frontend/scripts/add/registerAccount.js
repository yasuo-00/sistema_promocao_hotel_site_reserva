window.addEventListener('load', registerAccount)

function registerAccount() {
    const form = document.getElementById('registerForm');
    form.addEventListener('submit', function () { submitAccountRegister() })
}

function submitAccountRegister() {
    const error = validateFields();
    if (error.length === 0) {
        const accType = document.getElementById('accountType').value;
        if (accType === 'hotel') {
            submitHotel();
        } else if (accType === 'booking_site') {
            submitBookingSite();
        }
    } else {
        var errorString = '';
        error.forEach(err => {
            errorString += err + ', ';
        })
        alert(errorString);
    }
}

function submitBookingSite() {
    const url = 'http://localhost:3333/bookingSite/register';
    const data = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        url: document.getElementById('url').value,

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
                window.location.replace('http://localhost:3333/login');
            } else {
                alert('Erro ao cadastrar, verifique os campos e tente novamente');
            }
        });
}

function submitHotel() {
    const url = 'http://localhost:3333/hotel/register';
    const data = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        name: document.getElementById('name').value,
        cnpj: document.getElementById('cnpj').value,
        city: document.getElementById('city').value,
        daily_rate: document.getElementById('dailyRate').value,

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
                window.location.replace('http://localhost:3333/login');
            } else {
                alert('Erro ao cadastrar, verifique os campos e tente novamente');
            }
        });

}


function validateFields() {
    const fields={

    };
    return [];
}