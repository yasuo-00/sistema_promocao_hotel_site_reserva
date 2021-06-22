window.addEventListener('load', renderProfile);

//renderiza os campos no perfil do usuario
function renderProfile() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    console.log(user.type);
    //se usuario for um hotel
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
            document.getElementById('profileData').innerHTML=`
                        <div class="profileProps">
                            <p class="profilePropName">Nome:</p>
                            <input id="name" class="profilePropValue" value="${data.data.hotel.name}" readonly>
                        </div>
                        <div class="profileProps">
                            <p class="profilePropName">CNPJ:</p>
                            <p class="profilePropValue">${data.data.hotel.cnpj}</p>
                        </div>
                        <div class="profileProps">
                            <p class="profilePropName">Email:</p>
                            <input id="email" class="profilePropValue" value="${data.data.hotel.email}" pattern="[a-z]+([a-z]|.)*@[a-z]+\.([a-z]|.)*" title="Formato de email incorreto" readonly>
                        </div>
                        <div class="profileProps">
                            <p class="profilePropName">Cidade:</p>
                            <input id="city" class="profilePropValue" value="${data.data.hotel.city}" readonly>
                        </div>
                        <div class="profileProps">
                            <p class="profilePropName">Descrição:</p>
                            <input id="description" class="profilePropValue" value="Descrição hotel" readonly>
                        </div>
            `
        });
    } else if (user.type === 'booking_site') { //se usuario for um site de reservas
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
            document.getElementById('profileData').innerHTML=`
                        <div class="profileProps">
                            <p class="profilePropName">URL</p>
                            <input id="url" class="profilePropValue" value="${data.data.bookingSite.url}" readonly>
                        </div>
                        <div class="profileProps">
                            <p class="profilePropName">Email:</p>
                            <input id="email" class="profilePropValue" value="${data.data.bookingSite.email}" pattern="[a-z]+([a-z]|.)*@[a-z]+\.([a-z]|.)*" title="Formato de email incorreto" readonly>
                        </div>
            `
        });

    } else if (user.type === 'admin') { //se usuario for um admin
        document.getElementById('profileData').innerHTML=`
                        <div class="profileProps">
                            <p class="profilePropName">Email:</p>
                            <input id="email" class="profilePropValue" value="${user.email}" pattern="[a-z]+([a-z]|.)*@[a-z]+\.([a-z]|.)*" title="Formato de email incorreto" readonly>
                        </div>
        `
    } else {
        alert('Um erro ocorreu, favor recarregar a página');
    }
}