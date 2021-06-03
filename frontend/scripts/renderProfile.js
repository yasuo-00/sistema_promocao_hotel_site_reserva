window.addEventListener('load', renderProfile);

function renderProfile() {
    const user = JSON.parse(sessionStorage.getItem('user')).user;
    console.log(user.type);
    if (user.type === 'hotel') {
        const url = 'http://localhost:3333/hotel/getById';
        const data = {id:user.id_user};
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
            console.log(data.data)
            document.getElementById('profileForm').innerHTML=`
                        <div class="profileProps">
                            <p class="profilePropName">Nome:</p>
                            <input class="profilePropValue" value="${data.data.hotel.name}">
                        </div>
                        <div class="profileProps">
                            <p class="profilePropName">CNPJ:</p>
                            <p class="profilePropValue">${data.data.hotel.cnpj}</p>
                        </div>
                        <div class="profileProps">
                            <p class="profilePropName">Email:</p>
                            <input class="profilePropValue" value="${data.data.hotel.email}">
                        </div>
                        <div class="profileProps">
                            <p class="profilePropName">Cidade:</p>
                            <input class="profilePropValue" value="${data.data.hotel.city}">
                        </div>
                        <div class="profileProps">
                            <p class="profilePropName">Descrição:</p>
                            <input class="profilePropValue" value="Descrição hotel">
                        </div>
            `
        });
    } else if (user.type === 'booking_site') {
        const url = 'http://localhost:3333/bookingSite/getById';
        const data = {id:user.id_user};
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
            document.getElementById('profileForm').innerHTML=`
                        <div class="profileProps">
                            <p class="profilePropName">Nome:</p>
                            <input class="profilePropValue" value="${data.data.bookingSite.name}">
                        </div>
                        <div class="profileProps">
                            <p class="profilePropName">URL</p>
                            <p class="profilePropValue">${data.data.bookingSite.url}</p>
                        </div>
                        <div class="profileProps">
                            <p class="profilePropName">Email:</p>
                            <input class="profilePropValue" value="${data.data.bookingSite.email}">
                        </div>
            `
        });

    } else if (user.type === 'admin') {
        document.getElementById('profileForm').innerHTML=`
                        <div class="profileProps">
                            <p class="profilePropName">Email:</p>
                            <input class="profilePropValue" value="${user.email}">
                        </div>
        `
    } else {
        alert('Um erro ocorreu, favor recarregar a página');
    }
}