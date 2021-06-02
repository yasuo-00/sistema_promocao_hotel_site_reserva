window.addEventListener('load', registerBookingSite)

function registerBookingSite() {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', function () { submitBookingSiteRegister() })
}

function submitBookingSiteRegister() {
    const url = 'http://localhost:3333/registerBookingSite';
    const data = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        name: document.getElementById('bookingSiteName').value,
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
                window.location.replace('http://localhost:3333/userHome');
            } else {
                alert('Email ou senha incorretos');
            }
        });

}