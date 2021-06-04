window.addEventListener('load', bookingSiteSelect);

function bookingSiteSelect(){
    const url = 'http://localhost:3333/bookingSite/listAll';
    const options = {
        method: 'GET',
        headers:{
            'Content-Type':'application/json'
        }
    }
    fetch(url, options)
    .then(res => res.json().then(jsonData => ({ status: res.status, data: jsonData })))
    .then(data => {
        if (data.status == 200) {
            document.getElementById('bookingSiteSelect').innerHTML = `
                        <label for="bookingSite">Site de Reservas:</label>
                        <select name="bookingSite" id="bookingSite">
                        ${data.data.bookingSiteList.map(function (bookingSite) {
                            return `
                            <option value="${bookingSite.id_user}">${bookingSite.name}</option>
                            `
                            })
                        }
                        </select>
                        `;
        }
    });
}